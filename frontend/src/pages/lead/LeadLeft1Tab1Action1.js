import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import ComboBox from '../../components/ComboBox.js';
import TextBox from '../../components/TextBox.js';
import TextArea from '../../components/TextArea.js';
import PercentageBox from '../../components/PercentageBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const LeadLeft1Tab1Action1 = ReactRouterDOM.withRouter(function ({ lead, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourceLeadContactId, setDataSourceLeadContactId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourceLeadContactId();
  }, []);

  const fetchDataSourceLeadContactId = async function () {
    let records = null;
    try {
      const args = {};
      if (lead.leadId !== null && lead.leadId !== undefined) {
        args.leadLeadId = lead.leadId;
      }
      records = await ApiService.getLeadContacts(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourceLeadContactId(
      records.map((record) => [record.leadContactId, protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.firstName, record.lastName ])])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.contact}
              value={data.leadContactId}
              onChange={(value) => updateData('leadContactId', value)}
              validated={validated}
              dataSource={dataSourceLeadContactId}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.type}
              value={data.type}
              onChange={(value) => updateData('type', value)}
              validated={validated}
              dataSource={[['email', words.email], ['phoneCall', words.phoneCall], ['textMessage', words.textMessage], ['meeting', words.meeting]]}
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
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <PercentageBox
              label={words.newProbability}
              value={data.newProbability}
              onChange={(value) => updateData('newProbability', value)}
              validated={validated}
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadLeft1Tab1Action1;
