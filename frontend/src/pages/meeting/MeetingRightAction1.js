import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import ComboBox from '../../components/ComboBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const MeetingRightAction1 = ReactRouterDOM.withRouter(function ({ meeting, data, updateData, validated }) {
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
            <ComboBox
              label={words.teamMember}
              value={data.userId}
              onChange={(value) => updateData('userId', value)}
              validated={validated}
              dataSource={dataSourceUserId}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default MeetingRightAction1;
