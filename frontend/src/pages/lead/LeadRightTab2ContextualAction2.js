import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Paragraph from '../../components/Paragraph.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const LeadRightTab2ContextualAction2 = ReactRouterDOM.withRouter(function ({ leadAddress }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


  return (
    <div>
      <div>
        <div className="py-4 px-2 fs-5">
          <Paragraph
            template={words.confirmDeleteLeadAddress}
            alignment="justify-content-center"
            fields={[
              { type: 'string', style: function (value) { return 'fw-bold'; } },
            ]}
            data={[
              protect(function ([street, city, state, zipCode, countryName]) { return `${street}, ${city}, ${state} ${zipCode}, ${countryName}` }, [ leadAddress.street, leadAddress.city, leadAddress.state, leadAddress.zipCode, leadAddress.countryName ]),
            ]}
          />
        </div>
      </div>
    </div>
  );
})

export default LeadRightTab2ContextualAction2;
