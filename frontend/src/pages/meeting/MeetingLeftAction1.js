import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import ComboBox from '../../components/ComboBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const MeetingLeftAction1 = ReactRouterDOM.withRouter(function ({ meeting, data, updateData, validated }) {
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
      if (meeting.leadId !== null && meeting.leadId !== undefined) {
        args.meetingLeadId = meeting.leadId;
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
        </div>
      </div>
    </div>
  );
})

export default MeetingLeftAction1;
