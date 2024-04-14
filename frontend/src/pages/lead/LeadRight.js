import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Tabs from '../../components/Tabs.js';
import IconLeadContact from '../../components/icons/IconLeadContact.js';
import IconLeadAddress from '../../components/icons/IconLeadAddress.js';
import LeadRightTab1 from './LeadRightTab1.js';
import LeadRightTab2 from './LeadRightTab2.js';
import { getWords } from '../../utils/get-words.js';

const LeadRight = ReactRouterDOM.withRouter(function ({ lead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  return (
    <div>
      <Tabs
        tabs={[
          { icon: IconLeadContact, label: words.contacts, component: LeadRightTab1, arguments: { lead: lead }, hidden: !(lead) },
          { icon: IconLeadAddress, label: words.addresses, component: LeadRightTab2, arguments: { lead: lead }, hidden: !(lead) },
        ]}
      />
    </div>
  );
})

export default LeadRight;
