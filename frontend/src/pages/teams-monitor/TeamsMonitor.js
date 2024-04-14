import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TeamsMonitorLeft1 from './TeamsMonitorLeft1.js';
import TeamsMonitorLeft2 from './TeamsMonitorLeft2.js';
import TeamsMonitorRight1 from './TeamsMonitorRight1.js';
import TeamsMonitorRight2 from './TeamsMonitorRight2.js';

const TeamsMonitor = ReactRouterDOM.withRouter(function () {
  const { setError } = useAppContext();

  const [team, setTeam] = React.useState(null);

  return (
    <div className="p-1">
      <div className="d-flex flex-wrap">
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <TeamsMonitorLeft1 team={team} setTeam={setTeam} />
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <TeamsMonitorLeft2 />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          {team ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <TeamsMonitorRight1 team={team} />
                </div>
              </div>
            </div>
          ) : null}
          {team ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <TeamsMonitorRight2 team={team} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
})

export default TeamsMonitor;
