import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import LeadTop from './LeadTop.js';
import LeadLeft1 from './LeadLeft1.js';
import LeadLeft2 from './LeadLeft2.js';
import LeadRight from './LeadRight.js';
import ApiService from '../../services/ApiService.js';

const Lead = ReactRouterDOM.withRouter(function ({ match }) {
  const { setError } = useAppContext();

  const [lead, setLead] = React.useState(null);

  React.useEffect(() => {
    fetchLead();
  }, []);

  const fetchLead = async function () {
    try {
      setLead(await ApiService.getLead(match.params.leadId));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  if (lead === null || lead === undefined) {
    return (
      <div />
    );
  }

  return (
    <div className="p-1">
      {lead ? (
        <div className="p-1">
          <div className="border bg-light">
            <div className="p-2 fs-6">
              <LeadTop lead={lead} />
            </div>
          </div>
        </div>
      ) : null}
      <div className="d-flex flex-wrap">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          {lead ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <LeadLeft1 lead={lead} />
                </div>
              </div>
            </div>
          ) : null}
          {lead ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <LeadLeft2 lead={lead} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          {lead ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <LeadRight lead={lead} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
})

export default Lead;
