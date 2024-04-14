import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Tabs from '../../components/Tabs.js';
import IconMeeting from '../../components/icons/IconMeeting.js';
import IconTask from '../../components/icons/IconTask.js';
import HomeLeft2Tab1 from './HomeLeft2Tab1.js';
import HomeLeft2Tab2 from './HomeLeft2Tab2.js';
import { getWords } from '../../utils/get-words.js';

const HomeLeft2 = ReactRouterDOM.withRouter(function ({  }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  return (
    <div>
      <Tabs
        tabs={[
          { icon: IconMeeting, label: words.upcomingMeetings, component: HomeLeft2Tab1 },
          { icon: IconTask, label: words.pendingTasks, component: HomeLeft2Tab2 },
        ]}
      />
    </div>
  );
})

export default HomeLeft2;
