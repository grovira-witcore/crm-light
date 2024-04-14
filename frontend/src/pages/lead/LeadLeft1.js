import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Tabs from '../../components/Tabs.js';
import IconInteraction from '../../components/icons/IconInteraction.js';
import IconNote from '../../components/icons/IconNote.js';
import LeadLeft1Tab1 from './LeadLeft1Tab1.js';
import LeadLeft1Tab2 from './LeadLeft1Tab2.js';
import { getWords } from '../../utils/get-words.js';

const LeadLeft1 = ReactRouterDOM.withRouter(function ({ lead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  return (
    <div>
      <Tabs
        tabs={[
          { icon: IconInteraction, label: words.interactions, component: LeadLeft1Tab1, arguments: { lead: lead }, hidden: !(lead) },
          { icon: IconNote, label: words.notes, component: LeadLeft1Tab2, arguments: { lead: lead }, hidden: !(lead) },
        ]}
      />
    </div>
  );
})

export default LeadLeft1;
