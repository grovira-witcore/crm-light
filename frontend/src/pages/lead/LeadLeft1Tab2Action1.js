import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import TextArea from '../../components/TextArea.js';
import { getWords } from '../../utils/get-words.js';

const LeadLeft1Tab2Action1 = ReactRouterDOM.withRouter(function ({ data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  React.useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
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
        </div>
      </div>
    </div>
  );
})

export default LeadLeft1Tab2Action1;
