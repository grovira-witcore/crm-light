import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import ComboBox from '../../components/ComboBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';

const LeadRightTab1ContextualAction1 = ReactRouterDOM.withRouter(function ({ leadContact, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourcePositionId, setDataSourcePositionId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourcePositionId();
  }, []);

  const fetchDataSourcePositionId = async function () {
    let records = null;
    try {
      records = await ApiService.getPositions(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourcePositionId(
      records.map((record) => [record.positionId, record.name])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.firstName}
              value={data.firstName}
              onChange={(value) => updateData('firstName', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.lastName}
              value={data.lastName}
              onChange={(value) => updateData('lastName', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.phoneNumber}
              value={data.phoneNumber}
              onChange={(value) => updateData('phoneNumber', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.email}
              value={data.email}
              onChange={(value) => updateData('email', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.position}
              value={data.positionId}
              onChange={(value) => updateData('positionId', value)}
              validated={validated}
              dataSource={dataSourcePositionId}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadRightTab1ContextualAction1;
