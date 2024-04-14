import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import CountriesBody from './CountriesBody.js';

const Countries = ReactRouterDOM.withRouter(function () {
  const { setError } = useAppContext();


  return (
    <div className="p-1">
      <div className="p-1">
        <div className="border bg-light">
          <div className="p-2 fs-6">
            <CountriesBody />
          </div>
        </div>
      </div>
    </div>
  );
})

export default Countries;
