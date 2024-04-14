import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TextBox from '../../components/TextBox.js';
import ComboBox from '../../components/ComboBox.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';

const LeadRightTab2Action1 = ReactRouterDOM.withRouter(function ({ lead, data, updateData, validated }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [dataSourceCountryId, setDataSourceCountryId] = React.useState([]);

  React.useEffect(() => {
    fetchDataSourceCountryId();
  }, []);

  const fetchDataSourceCountryId = async function () {
    let records = null;
    try {
      records = await ApiService.getCountries(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    setDataSourceCountryId(
      records.map((record) => [record.countryId, record.name])
    );
  }
  
  return (
    <div>
      <div>
        <div className="d-flex flex-wrap">
          <div className="pt-2 col-lg-12 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.street}
              value={data.street}
              onChange={(value) => updateData('street', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.city}
              value={data.city}
              onChange={(value) => updateData('city', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.state}
              value={data.state}
              onChange={(value) => updateData('state', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <TextBox
              label={words.zipCode}
              value={data.zipCode}
              onChange={(value) => updateData('zipCode', value)}
              validated={validated}
              required
            />
          </div>
          <div className="pt-2 col-lg-6 col-md-12 col-sm-12 col-12">
            <ComboBox
              label={words.country}
              value={data.countryId}
              onChange={(value) => updateData('countryId', value)}
              validated={validated}
              dataSource={dataSourceCountryId}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
})

export default LeadRightTab2Action1;
