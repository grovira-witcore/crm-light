import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import ComboBox from '../../components/ComboBox.js';
import { getWords } from '../../utils/get-words.js';

const LeadLeft2Tab2ContextualAction1 = ReactRouterDOM.withRouter(function ({ task, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  React.useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.status}
              value={data.status}
              onChange={(value) => updateData('status', value)}
              validated={validated}
              dataSource={[['pending', words.pending], ['completed', words.completed]]}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadLeft2Tab2ContextualAction1;
