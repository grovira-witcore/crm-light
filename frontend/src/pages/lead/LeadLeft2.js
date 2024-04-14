import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Tabs from '../../components/Tabs.js';
import IconMeeting from '../../components/icons/IconMeeting.js';
import IconTask from '../../components/icons/IconTask.js';
import LeadLeft2Tab1 from './LeadLeft2Tab1.js';
import LeadLeft2Tab2 from './LeadLeft2Tab2.js';
import { getWords } from '../../utils/get-words.js';

const LeadLeft2 = ReactRouterDOM.withRouter(function ({ lead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  return (
    <div>
      <Tabs
        tabs={[
          { icon: IconMeeting, label: words.meetings, component: LeadLeft2Tab1, arguments: { lead: lead }, hidden: !(lead) },
          { icon: IconTask, label: words.tasks, component: LeadLeft2Tab2, arguments: { lead: lead }, hidden: !(lead) },
        ]}
      />
    </div>
  );
})

export default LeadLeft2;
