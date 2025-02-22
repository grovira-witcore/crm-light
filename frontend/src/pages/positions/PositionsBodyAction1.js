import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import { getWords } from '../../utils/get-words.js';

const PositionsBodyAction1 = ReactRouterDOM.withRouter(function ({ data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  React.useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.name}
              value={data.name}
              onChange={(value) => updateData('name', value)}
              validated={validated}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default PositionsBodyAction1;
