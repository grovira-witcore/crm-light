import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import HomeLeft1 from './HomeLeft1.js';
import HomeLeft2 from './HomeLeft2.js';
import HomeRight1 from './HomeRight1.js';
import HomeRight2 from './HomeRight2.js';

const Home = ReactRouterDOM.withRouter(function () {
  const { setError } = useAppContext();

  const [filtersValuesLead, setFiltersValuesLead] = React.useState([null, null, ['new', 'inProgress'], null]);

  return (
    <div className="p-1">
      <div className="d-flex flex-wrap">
        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <HomeLeft1 filtersValuesLead={filtersValuesLead} setFiltersValuesLead={setFiltersValuesLead} />
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <HomeLeft2 />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <HomeRight1 filtersValuesLead={filtersValuesLead} setFiltersValuesLead={setFiltersValuesLead} />
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="border bg-light">
              <div className="p-2 fs-6">
                <HomeRight2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Home;
