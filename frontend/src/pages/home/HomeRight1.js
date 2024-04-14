import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Tabs from '../../components/Tabs.js';
import IconIndustry from '../../components/icons/IconIndustry.js';
import IconSize from '../../components/icons/IconSize.js';
import HomeRight1Tab1 from './HomeRight1Tab1.js';
import HomeRight1Tab2 from './HomeRight1Tab2.js';
import { getWords } from '../../utils/get-words.js';

const HomeRight1 = ReactRouterDOM.withRouter(function ({ filtersValuesLead, setFiltersValuesLead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  return (
    <div>
      <Tabs
        tabs={[
          { icon: IconIndustry, label: words.byIndustry, component: HomeRight1Tab1, arguments: { filtersValuesLead: filtersValuesLead, setFiltersValuesLead: setFiltersValuesLead } },
          { icon: IconSize, label: words.bySize, component: HomeRight1Tab2, arguments: { filtersValuesLead: filtersValuesLead, setFiltersValuesLead: setFiltersValuesLead } },
        ]}
      />
    </div>
  );
})

export default HomeRight1;
