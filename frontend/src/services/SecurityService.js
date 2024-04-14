import devMode from './DevSecurityService.js';
import prodMode from './ProdSecurityService.js';

const SecurityService = {}

if (process.env.NODE_ENV === 'production') {
  SecurityService.init = prodMode.init;
  SecurityService.logout = prodMode.logout;
  SecurityService.getToken = prodMode.getToken;
  SecurityService.hasRole = prodMode.hasRole;
  SecurityService.updateToken = prodMode.updateToken;
  SecurityService.getUserData = prodMode.getUserData;
}
else {
  SecurityService.init = devMode.init;
  SecurityService.logout = devMode.logout;
  SecurityService.getToken = devMode.getToken;
  SecurityService.hasRole = devMode.hasRole;
  SecurityService.updateToken = devMode.updateToken;
  SecurityService.getUserData = devMode.getUserData;
}

export default SecurityService;
