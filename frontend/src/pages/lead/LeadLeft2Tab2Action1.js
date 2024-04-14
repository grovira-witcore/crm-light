import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import DateBox from '../../components/DateBox.js';
import ComboBox from '../../components/ComboBox.js';
import TextBox from '../../components/TextBox.js';
import TextArea from '../../components/TextArea.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const LeadLeft2Tab2Action1 = ReactRouterDOM.withRouter(function ({ lead, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourceUserId, setDataSourceUserId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourceUserId();
  }, []);

  const fetchDataSourceUserId = async function () {
    let records = null;
    try {
      records = await ApiService.getUsers(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourceUserId(
      records.map((record) => [record.userId, protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.firstName, record.lastName ])])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <DateBox
              label={words.startDate}
              value={data.startDate}
              onChange={(value) => updateData('startDate', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <DateBox
              label={words.dueDate}
              value={data.dueDate}
              onChange={(value) => updateData('dueDate', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.responsible}
              value={data.userId}
              onChange={(value) => updateData('userId', value)}
              validated={validated}
              dataSource={dataSourceUserId}
              required
            />
          </div>
        </div>
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
            />
          </div>
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

export default LeadLeft2Tab2Action1;
