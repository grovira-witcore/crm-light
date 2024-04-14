import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Paragraph from '../../components/Paragraph.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const MeetingLeftContextualAction1 = ReactRouterDOM.withRouter(function ({ meetingLeadContact }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  return (
    <div>
      <div>
        <div className="py-4 px-2 fs-5">
          <Paragraph
            template={words.confirmDeleteMeetingLeadContact}
            alignment="justify-content-center"
            fields={[
              { type: 'string', style: function (value) { return 'fw-bold'; } },
            ]}
            data={[
              protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ meetingLeadContact.leadContactFirstName, meetingLeadContact.leadContactLastName ]),
            ]}
          />
        </div>
      </div>
    </div>
  );
})

export default MeetingLeftContextualAction1;
