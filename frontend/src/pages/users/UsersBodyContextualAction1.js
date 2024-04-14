import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import ComboBox from '../../components/ComboBox.js';
import CheckBox from '../../components/CheckBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';

const UsersBodyContextualAction1 = ReactRouterDOM.withRouter(function ({ user, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourceTeamId, setDataSourceTeamId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourceTeamId();
  }, []);

  const fetchDataSourceTeamId = async function () {
    let records = null;
    try {
      records = await ApiService.getTeams(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourceTeamId(
      records.map((record) => [record.teamId, record.name])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.username}
              value={data.username}
              onChange={(value) => updateData('username', value)}
              validated={validated}
              required
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.firstName}
              value={data.firstName}
              onChange={(value) => updateData('firstName', value)}
              validated={validated}
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.lastName}
              value={data.lastName}
              onChange={(value) => updateData('lastName', value)}
              validated={validated}
            />
          </div>
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.email}
              value={data.email}
              onChange={(value) => updateData('email', value)}
              validated={validated}
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.team}
              value={data.teamId}
              onChange={(value) => updateData('teamId', value)}
              validated={validated}
              dataSource={dataSourceTeamId}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <CheckBox
              label={words.enabled}
              value={data.enabled}
              onChange={(value) => updateData('enabled', value)}
              validated={validated}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default UsersBodyContextualAction1;
