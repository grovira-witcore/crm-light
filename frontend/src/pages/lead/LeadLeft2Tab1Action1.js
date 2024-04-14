import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import DatetimeBox from '../../components/DatetimeBox.js';
import TextBox from '../../components/TextBox.js';
import TextArea from '../../components/TextArea.js';
import ComboBox from '../../components/ComboBox.js';
import { getWords } from '../../utils/get-words.js';

const LeadLeft2Tab1Action1 = ReactRouterDOM.withRouter(function ({ lead, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  React.useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <DatetimeBox
              label={words.datetime}
              value={data.datetime}
              onChange={(value) => updateData('datetime', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.subject}
              value={data.subject}
              onChange={(value) => updateData('subject', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextArea
              label={words.remarks}
              value={data.remarks}
              onChange={(value) => updateData('remarks', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.status}
              value={data.status}
              onChange={(value) => updateData('status', value)}
              validated={validated}
              dataSource={[['pending', words.pending], ['completed', words.completed], ['cancelled', words.cancelled]]}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadLeft2Tab1Action1;
