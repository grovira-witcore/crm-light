import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import ComboBox from '../../components/ComboBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';

const LeadTopAction1 = ReactRouterDOM.withRouter(function ({ lead, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourceIndustryId, setDataSourceIndustryId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourceIndustryId();
  }, []);

  const fetchDataSourceIndustryId = async function () {
    let records = null;
    try {
      records = await ApiService.getIndustries(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourceIndustryId(
      records.map((record) => [record.industryId, record.name])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.name}
              value={data.name}
              onChange={(value) => updateData('name', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.industry}
              value={data.industryId}
              onChange={(value) => updateData('industryId', value)}
              validated={validated}
              dataSource={dataSourceIndustryId}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.size}
              value={data.size}
              onChange={(value) => updateData('size', value)}
              validated={validated}
              dataSource={[['small', words.small], ['medium', words.medium], ['large', words.large], ['corporative', words.corporative]]}
              required
            />
          </div>
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.linkedin}
              value={data.linkedin}
              onChange={(value) => updateData('linkedin', value)}
              validated={validated}
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadTopAction1;
