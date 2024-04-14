import Keycloak from 'keycloak-js';

const KC_URL = process.env.KC_URL || '/auth';
const KC_REALM = process.env.KC_REALM || 'master';
const KC_CLIENT_ID = process.env.KC_CLIENT_ID || 'witcore';

let _keycloak = null;

const init = function (root, defaultI18n, cb) {
  _keycloak = new Keycloak({
    url: KC_URL,
    realm: KC_REALM,
    clientId: KC_CLIENT_ID
  });
  _keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: true,
    pkceMethod: 'S256'
  })
    .then(function (authenticated) {
      if (authenticated) {
        root.render(cb());
      }
      else {
        _keycloak.login();
      }
    });
}

const logout = function () {
  _keycloak.logout();
}

const getToken = function () {
  return _keycloak.token;
}

const hasRole = function (role) {
  return _keycloak.tokenParsed.resource_access &&
    _keycloak.tokenParsed.resource_access[KC_CLIENT_ID] &&
    _keycloak.tokenParsed.resource_access[KC_CLIENT_ID].roles &&
    _keycloak.tokenParsed.resource_access[KC_CLIENT_ID].roles.indexOf(role) !== -1;
}

const updateToken = function () {
  //_kc.updateToken(5)
  //  .then(successCallback)
  //  .catch(doLogin);
}

const getUserData = function () {
  return {
    firstName: _keycloak.tokenParsed.given_name,
    lastName: _keycloak.tokenParsed.family_name,
    email: _keycloak.tokenParsed.email,
    avatar: _keycloak.tokenParsed.avatar
  }
}

const SecurityService = {
  init,
  logout,
  getToken,
  hasRole,
  updateToken,
  getUserData
}

export default SecurityService;
