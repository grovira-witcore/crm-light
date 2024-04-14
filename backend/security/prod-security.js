const Jwt = require('jsonwebtoken');
const Axios = require('axios');

const KC_URL = process.env.KC_URL || 'http://keycloak:8080/auth';
const KC_REALM = process.env.KC_REALM || 'master';
const KC_CLIENT_ID = process.env.KC_CLIENT_ID || 'witcore';
const KC_ADMIN = process.env.KC_ADMIN || 'admin';
const KC_ADMIN_PASSWORD = process.env.KC_ADMIN_PASSWORD || 'admin';
const KC_WEB_ORIGINS = process.env.KC_WEB_ORIGINS || 'http://localhost:3000';

const wait = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getAdminAccessToken = async function (tries) {
  let tryNumber = 1;
  let lastErr = null;
  while (tryNumber <= tries) {
    try {
      const response = await Axios.post(
        `${KC_URL}/realms/${KC_REALM}/protocol/openid-connect/token`,
        new URLSearchParams({
          grant_type: 'password',
          client_id: 'admin-cli',
          username: KC_ADMIN,
          password: KC_ADMIN_PASSWORD
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      const accessToken = response.data.access_token;
      return accessToken;
    }
    catch (err) {
      lastErr = err;
    }
    console.log('Failure trying to connect Keycloak (Attempt ' + tryNumber + ' of ' + tries + ')');
    await wait(10000);
    tryNumber++;
  }
  throw lastErr;
}
const getKcClient = async function (accessToken) {
  try {
    const kcClientsResponse = await Axios.get(
      `${KC_URL}/admin/realms/${KC_REALM}/clients`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    return kcClientsResponse.data.find(kcClient => kcClient.clientId === KC_CLIENT_ID);
  }
  catch (err) {
    if (err.response && err.response.status === 404) {
      return null;
    }
    throw err;
  }
}
const createKcClient = async function (accessToken) {
  await Axios.post(
    `${KC_URL}/admin/realms/${KC_REALM}/clients`,
    {
      clientId: KC_CLIENT_ID,
      redirectUris: KC_WEB_ORIGINS.split(',').map(webOrigin => webOrigin + '/*'),
      webOrigins: KC_WEB_ORIGINS.split(','),
      publicClient: true,
      standardFlowEnabled: true
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    }
  );
}
const getKcRoles = async function (accessToken, kcClientId) {
  try {
    const kcRolesResponse = await Axios.get(
      `${KC_URL}/admin/realms/${KC_REALM}/clients/${kcClientId}/roles`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    );
    return kcRolesResponse.data;
  }
  catch (err) {
    if (err.response && err.response.status === 404) {
      return [];
    }
    throw err;
  }
}
const createKcRole = async function (accessToken, { kcClientId, name }) {
  await Axios.post(
    `${KC_URL}/admin/realms/${KC_REALM}/clients/${kcClientId}/roles`,
    {
      name: name
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
}
const getKcUsers = async function (accessToken) {
  try {
    const kcUsersResponse = await Axios.get(
      `${KC_URL}/admin/realms/${KC_REALM}/users`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    );
    return kcUsersResponse.data;
  }
  catch (err) {
    if (err.response && err.response.status === 404) {
      return [];
    }
    throw err;
  }
}
const getKcUserByUsername = async function (accessToken, username) {
  try {
    const kcUsersResponse = await Axios.get(
      `${KC_URL}/admin/realms/${KC_REALM}/users`,
      {
        params: {
          username: username
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    );
    if (kcUsersResponse.data.length === 1) {
      return kcUsersResponse.data[0];
    }
    return kcUsersResponse.data;
  }
  catch (err) {
    if (err.response && err.response.status === 404) {
      return null;
    }
    throw err;
  }
}
const createKcUser = async function (accessToken, { username, firstName, lastName, email, enabled }) {
  await Axios.post(
    `${KC_URL}/admin/realms/${KC_REALM}/users`,
    {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      enabled: enabled,
      credentials: [
        {
          type: 'password',
          value: '123456'
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    }
  );
}
const updateKcUser = async function (accessToken, kcUserId, { firstName, lastName, email, enabled }) {
  await Axios.put(
    `${KC_URL}/admin/realms/${KC_REALM}/users/${kcUserId}`,
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      enabled: enabled
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    }
  );
}
const deleteKcUser = async function (accessToken, kcUserId) {
  await Axios.delete(
    `${KC_URL}/admin/realms/${KC_REALM}/users/${kcUserId}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    }
  );
}
const getKcUserRoles = async function (accessToken, kcClientId, kcUserId) {
  try {
    const kcUserRolesResponse = await Axios.get(
      `${KC_URL}/admin/realms/${KC_REALM}/users/${kcUserId}/role-mappings/clients/${kcClientId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    );
    return kcUserRolesResponse.data;
  }
  catch (err) {
    if (err.response && err.response.status === 404) {
      return [];
    }
    throw err;
  }
}
const createKcUserRole = async function (accessToken, { kcClientId, kcUserId, kcRoleId, name }) {
  await Axios.post(
    `${KC_URL}/admin/realms/${KC_REALM}/users/${kcUserId}/role-mappings/clients/${kcClientId}`,
    [
      {
        id: kcRoleId,
        name: name
      }
    ],
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
}
const deleteKcUserRole = async function (accessToken, { kcClientId, kcUserId, kcRoleId, name }) {
  await Axios.delete(
    `${KC_URL}/admin/realms/${KC_REALM}/users/${kcUserId}/role-mappings/clients/${kcClientId}`,
    [
      {
        id: kcRoleId,
        name: name
      }
    ],
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  );
}

const getAccessToken = function (headers) {
  if (headers && headers.authorization) {
    const authParts = headers.authorization.split(' ');
    if (authParts.length === 2) {
      return authParts[1];
    }
  }
  return null;
}

module.exports = {
  init: async function (knex, express, roles) {
    // Load Data
    const users = await knex
      .select(
        'user_id as userId',
        'username as username',
        'first_name as firstName',
        'last_name as lastName',
        'email as email',
        'enabled as enabled'
      )
      .from('users');
    const usersRoles = await knex
      .select(
        'user_id as userId',
        'role as role'
      )
      .from('users_roles');
    // Get AccessToken
    let accessToken = null;
    try {
      accessToken = await getAdminAccessToken(5);
    }
    catch (err) {
      console.error('Error trying to connect Keycloak: ' + err.message);
      process.exit(1);
    }
    // Sync Client
    let kcClient = null;
    try {
      kcClient = await getKcClient(accessToken);
    }
    catch (err) {
      console.error('Error verifying Client "' + KC_CLIENT_ID + '" from Keycloak: ' + err.message);
      process.exit(1);
    }
    if (kcClient === null || kcClient === undefined) {
      try {
        await createKcClient(accessToken);
      }
      catch (err) {
        console.error('Error trying to create Client "' + KC_CLIENT_ID + '" in Keycloak: ' + err.message);
        process.exit(1);
      }
      console.log('Client "' + KC_CLIENT_ID + '" created in Keycloak.');
      try {
        kcClient = await getKcClient(accessToken);
      }
      catch (err) {
        console.error('Error verifying Client "' + KC_CLIENT_ID + '" from Keycloak: ' + err.message);
        process.exit(1);
      }
    }
    // Sync Roles
    let kcRoles = null;
    try {
      kcRoles = await getKcRoles(accessToken, kcClient.id);
    }
    catch (err) {
      console.error('Error getting Roles from Keycloak: ' + err.message);
      process.exit(1);
    }
    let reloadRoles = false;
    for (const roleName of roles) {
      const kcRole = kcRoles.find(kcRoleX => kcRoleX.name === roleName);
      if (kcRole === null || kcRole === undefined) {
        try {
          await createKcRole(accessToken, { kcClientId: kcClient.id, name: roleName });
        }
        catch (err) {
          console.error('Error trying to create Role "' + roleName + '" in Keycloak: ' + err.message);
          process.exit(1);
        }
        console.log('Role "' + roleName + '" created in Keycloak.');
        reloadRoles = true;
      }
    }
    if (reloadRoles) {
      try {
        kcRoles = await getKcRoles(accessToken, kcClient.id);
      }
      catch (err) {
        console.error('Error getting Roles from Keycloak: ' + err.message);
        process.exit(1);
      }
    }
    // Sync Users
    let kcUsers = null;
    try {
      kcUsers = await getKcUsers(accessToken);
    }
    catch (err) {
      console.error('Error getting Users from Keycloak: ' + err.message);
      process.exit(1);
    }
    let reloadUsers = false;
    for (const user of users) {
      const kcUser = kcUsers.find(kcUserX => kcUserX.username === user.username);
      if (kcUser === null || kcUser === undefined) {
        try {
          await createKcUser(accessToken, user);
        }
        catch (err) {
          console.error('Error trying to create User "' + user.username + '" in Keycloak: ' + err.message);
          process.exit(1);
        }
        console.log('User "' + user.username + '" created in Keycloak.');
        reloadUsers = true;
      }
      else {
        if (user.firstName !== kcUser.firstName || user.lastName !== kcUser.lastName || user.email !== kcUser.email || user.enabled !== kcUser.enabled) {
          try {
            await updateKcUser(accessToken, kcUser.id, user);
          }
          catch (err) {
            console.error('Error trying to update User "' + user.username + '" in Keycloak: ' + err.message);
            process.exit(1);
          }
          console.log('User "' + user.username + '" updated in Keycloak.');
          reloadUsers = true;
        }
      }
    }
    for (const kcUser of kcUsers) {
      const user = users.find(userX => userX.username === kcUser.username);
      if (user === null || user === undefined) {
        try {
          await deleteKcUser(accessToken, kcUser.id);
        }
        catch (err) {
          console.error('Error trying to delete User "' + user.username + '" in Keycloak: ' + err.message);
          process.exit(1);
        }
        console.log('User "' + user.username + '" deleted in Keycloak.');
        reloadUsers = true;
      }
    }
    if (reloadUsers) {
      try {
        kcUsers = await getKcUsers(accessToken);
      }
      catch (err) {
        console.error('Error getting Users from Keycloak: ' + err.message);
        process.exit(1);
      }
    }
    // Sync UsersRoles
    for (const user of users) {
      const rolesNames = usersRoles
        .filter(userRole => userRole.userId === user.userId)
        .map(userRole => userRole.role);
      const kcUser = kcUsers.find(kcUserX => kcUserX.username === user.username);
      let kcRolesNames = null;
      try {
        kcRolesNames = (await getKcUserRoles(accessToken, kcClient.id, kcUser.id))
          .map(kcUserRole => kcUserRole.name);
      }
      catch (err) {
        console.error('Error getting Roles of User "' + user.username + '" from Keycloak: ' + err.message);
        process.exit(1);
      }
      for (const roleName of rolesNames) {
        if (kcRolesNames.indexOf(roleName) === -1) {
          const kcRole = kcRoles.find(kcRoleX => kcRoleX.name === roleName);
          try {
            await createKcUserRole(accessToken, { kcClientId: kcClient.id, kcUserId: kcUser.id, kcRoleId: kcRole.id, name: roleName });
          }
          catch (err) {
            console.error('Error trying to assign Role "' + roleName + '" to User "' + user.username + '" in Keycloak: ' + err.message);
            process.exit(1);
          }
          console.log('Role "' + roleName + '" assigned to User "' + user.username + '" in Keycloak.');
        }
      }
      for (const kcRoleName of kcRolesNames) {
        if (rolesNames.indexOf(kcRoleName) === -1) {
          const kcRole = kcRoles.find(kcRoleX => kcRoleX.name === kcRoleName);
          try {
            await deleteKcUserRole(accessToken, { kcClientId: kcClient.id, kcUserId: kcUser.id, kcRoleId: kcRole.id, name: kcRoleName });
          }
          catch (err) {
            console.error('Error trying to unassign Role "' + kcRoleName + '" of User "' + user.username + '" in Keycloak: ' + err.message);
            process.exit(1);
          }
          console.log('Role "' + kcRoleName + '" unassigned of User "' + user.username + '" in Keycloak.');
        }
      }
    }
    // Set Middleware
    express.use(function (req, res, next) {
      const accessToken = getAccessToken(req.headers);
      if (accessToken) {
        const payload = Jwt.decode(accessToken);
        if (payload) {
          req.username = payload.preferred_username;
          if (payload && payload.resource_access && payload.resource_access[KC_CLIENT_ID] && payload.resource_access[KC_CLIENT_ID].roles) {
            req.roles = payload.resource_access[KC_CLIENT_ID].roles;
          }
          else {
            req.roles = [];
          }
          next();
        }
        else {
          res
            .status(401)
            .send({
              code: 401,
              message: 'Unauthorized',
              description: 'You do not have access to the requested resource.'
            });
        }
      }
      else {
        res
          .status(401)
          .send({
            message: 'Unauthorized',
            description: 'You do not have access to the requested resource.'
          });
      }
    });
  },
  syncUser: async function (knex, username) {
    // Load Data
    const users = await knex
      .select(
        'user_id as userId',
        'username as username',
        'first_name as firstName',
        'last_name as lastName',
        'email as email',
        'enabled as enabled'
      )
      .from('users')
      .where('username', '=', username);
    let user = null;
    if (users.length === 1) {
      user = users[0];
    }
    const usersRoles = await knex
      .select(
        'user_id as userId',
        'role as role'
      )
      .where('user_id', '=', user.userId);
    // Get AccessToken
    const accessToken = await getAdminAccessToken(5);
    // Sync User
    let kcUser = await getKcUserByUsername(accessToken, username);
    if (user) {
      if (kcUser === null || kcUser === undefined) {
        await createKcUser(accessToken, user);
        kcUser = await getKcUserByUsername(accessToken, username);
      }
      else {
        if (user.firstName !== kcUser.firstName || user.lastName !== kcUser.lastName || user.email !== kcUser.email || user.enabled !== kcUser.enabled) {
          await updateKcUser(accessToken, kcUser.id, user);
          kcUser = await getKcUserByUsername(accessToken, username);
        }
      }
    }
    else {
      if (kcUser) {
        await deleteKcUser(accessToken, kcUser.id);
        kcUser = null;
      }
    }
    // Sync UserRoles
    if (kcUser) {
      const kcClient = await getKcClient(accessToken);
      const kcRoles = await getKcRoles(accessToken, kcClient.id);
      const rolesNames = usersRoles.map(userRole => userRole.role);
      const kcRolesNames = (await getKcUserRoles(accessToken, kcClient.id, kcUser.id))
        .map(kcUserRole => kcUserRole.name);
      for (const roleName of rolesNames) {
        if (kcRolesNames.indexOf(roleName) === -1) {
          const kcRole = kcRoles.find(kcRoleX => kcRoleX.name === roleName);
          await createKcUserRole(accessToken, { kcClientId: kcClient.id, kcUserId: kcUser.id, kcRoleId: kcRole.id, name: roleName });
        }
      }
      for (const kcRoleName of kcRolesNames) {
        if (rolesNames.indexOf(kcRoleName) === -1) {
          const kcRole = kcRoles.find(kcRoleX => kcRoleX.name === kcRoleName);
          await deleteKcUserRole(accessToken, { kcClientId: kcClient.id, kcUserId: kcUser.id, kcRoleId: kcRole.id, name: kcRoleName });
        }
      }
    }
  },
  getRoles: async function (req) {
    return req.roles;
  }
}
