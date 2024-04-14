import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from './context/AppContext.js';
import Header from './components/Header.js';
import Title from './components/Title.js';
import Button from './components/Button.js';
import ErrorBox from './components/ErrorBox.js';
import IconLogo from './components/icons/IconLogo.js';
import IconError from './components/icons/IconError.js';
import IconCountry from './components/icons/IconCountry.js';
import IconIndustry from './components/icons/IconIndustry.js';
import IconPosition from './components/icons/IconPosition.js';
import IconTeam from './components/icons/IconTeam.js';
import IconUser from './components/icons/IconUser.js';
import IconTeamsMonitor from './components/icons/IconTeamsMonitor.js';
import NotFound from './pages/not-found/NotFound.js';
import Countries from './pages/countries/Countries.js';
import Home from './pages/home/Home.js';
import Industries from './pages/industries/Industries.js';
import Lead from './pages/lead/Lead.js';
import Meeting from './pages/meeting/Meeting.js';
import Positions from './pages/positions/Positions.js';
import TeamMember from './pages/team-member/TeamMember.js';
import Teams from './pages/teams/Teams.js';
import TeamsMonitor from './pages/teams-monitor/TeamsMonitor.js';
import User from './pages/user/User.js';
import Users from './pages/users/Users.js';
import SecurityService from './services/SecurityService.js';
import { getWords } from './utils/get-words.js';

const App = ReactRouterDOM.withRouter(function () {
  const { i18n, error, setError } = useAppContext();

  const words = getWords(i18n.code);

  const header = (
    <Header
      icon={IconLogo}
      label={words.crm}
      languages={[
        {
          code: 'En',
          name: words.english,
          dateFormat: 'mm/dd/yyyy',
          moneySymbol: '$'
        },
        {
          code: 'Sp',
          name: words.spanish,
          dateFormat: 'dd/mm/yyyy',
          moneySymbol: '$'
        }
      ]}
      menu={[
        {
          label: words.catalogs,
          options: [
            { icon: IconCountry, label: words.countries, path: "/countries", hidden: !((SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator'))) },
            { icon: IconIndustry, label: words.industries, path: "/industries", hidden: !((SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator'))) },
            { icon: IconPosition, label: words.positions, path: "/positions", hidden: !((SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator'))) },
          ]
        },
        {
          label: words.security,
          options: [
            { icon: IconTeam, label: words.teams, path: "/teams", hidden: !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator'))) },
            { icon: IconUser, label: words.users, path: "/users", hidden: !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator'))) },
          ]
        },
        {
          label: words.dashboards,
          options: [
            { icon: IconTeamsMonitor, label: words.teamsMonitor, path: "/teams-monitor", hidden: !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller'))) },
          ]
        },
      ]}
    />
  );

  if (error === null || error === undefined || (error instanceof Response && (error.status === 400 || error.status === 409)) || (!(error instanceof Response))) {
    return (
      <div>
        {header}
        <ReactRouterDOM.Switch>
          {(SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/countries">
              <Countries />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? (
            <ReactRouterDOM.Route exact path="/">
              <Home />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/industries">
              <Industries />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? (
            <ReactRouterDOM.Route exact path="/lead/:leadId">
              <Lead />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? (
            <ReactRouterDOM.Route exact path="/meeting/:meetingId">
              <Meeting />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/positions">
              <Positions />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? (
            <ReactRouterDOM.Route exact path="/team-member/:userId">
              <TeamMember />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/teams">
              <Teams />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? (
            <ReactRouterDOM.Route exact path="/teams-monitor">
              <TeamsMonitor />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/user/:userId">
              <User />
            </ReactRouterDOM.Route>
          ) : null}
          {(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator')) ? (
            <ReactRouterDOM.Route exact path="/users">
              <Users />
            </ReactRouterDOM.Route>
          ) : null}
          <ReactRouterDOM.Route>
            <NotFound />
          </ReactRouterDOM.Route>
        </ReactRouterDOM.Switch>
        {error ?
          <ReactBootstrap.Modal
            show={true}
            onHide={() => setError(null)}
            scrollable={true}
            centered={true}
          >
            <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
              <Title level={1} icon={IconError} color="red" label={words.error} />
            </ReactBootstrap.Modal.Header>
            <ReactBootstrap.Modal.Body className="p-0">
              <ErrorBox />
            </ReactBootstrap.Modal.Body>
            <ReactBootstrap.Modal.Footer className="p-2">
              <Button label={words.close} color="blue" onClick={(e) => setError(null)} />
            </ReactBootstrap.Modal.Footer>
          </ReactBootstrap.Modal> :
          null
        }
      </div>
    );
  }
  else {
    return (
      <div>
        {header}
        <ErrorBox fullscreen={true} />
      </div>
    );
  }
})

export default App;
