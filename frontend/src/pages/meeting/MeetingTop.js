import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Field from '../../components/Field.js';
import FieldComposition from '../../components/FieldComposition.js';
import ActionsBar from '../../components/ActionsBar.js';
import Brief from '../../components/Brief.js';
import IconMeeting from '../../components/icons/IconMeeting.js';
import { protect } from '../../utils/protect.js';
import { getWords } from '../../utils/get-words.js';

const MeetingTop = ReactRouterDOM.withRouter(function ({ meeting }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


const fields = [
  { icon: IconMeeting, label: words.lead, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'datetime', dockAs: 'secondary' },
  { label: words.lead, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'imageUrl', dockAs: 'avatar' },
  { label: words.status, type: 'string', translate: true, variant: 'FramedText', color: function (value) { return value === 'pending' ? 'yellow' : (value === 'cancelled' ? 'red' : (value === 'completed' ? 'green' : 'black')); }, responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
];
const data = [
  meeting.subject,
  meeting.datetime,
  meeting.leadName,
  meeting.leadAvatar,
  meeting.status,
];

  return (
    <div>
      <div>
        <div className="d-flex align-items-center pb-1 border-bottom">
          <div>
            <FieldComposition
              fields={fields}
              data={data}
              startIndex={0}
              variant="title"
              avatarColor="blue"
            />
          </div>
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
            ]}
          />
        </div>
        <Brief
          fields={fields}
          data={data}
          skipFirst={true}
        />
      </div>
    </div>
  );
})

export default MeetingTop;
