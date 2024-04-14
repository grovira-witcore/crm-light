import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import Title from '../../components/Title.js';
import FiltersBar from '../../components/FiltersBar.js';
import ActionsBar from '../../components/ActionsBar.js';
import PagingBar from '../../components/PagingBar.js';
import Button from '../../components/Button.js';
import IconLead from '../../components/icons/IconLead.js';
import IconAdd from '../../components/icons/IconAdd.js';
import HomeLeft1Action1 from './HomeLeft1Action1.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';
import { isValid } from '../../utils/is-valid.js';

const HomeLeft1 = ReactRouterDOM.withRouter(function ({ filtersValuesLead, setFiltersValuesLead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [count, setCount] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const pageSize = 10;
  const [dataSourceIndustryId, setDataSourceIndustryId] = React.useState([]);
  const [dataSourceUserId, setDataSourceUserId] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [action, setAction] = React.useState(null);
  const [actionData, setActionData] = React.useState(null);
  const [actionValidated, setActionValidated] = React.useState(null);
  const bodyRefAction0 = React.useRef(null);

  const history = ReactRouterDOM.useHistory();

  React.useEffect(() => {
    fetchDataSourceIndustryId();
    fetchDataSourceUserId();
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
  
  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, [filtersValuesLead]);

  const loadCount = async function () {
    try {
      const args = {};
      if (filtersValuesLead[0] !== null && filtersValuesLead[0] !== undefined) {
        args.industryIds = filtersValuesLead[0].join(',');
      }
      if (filtersValuesLead[1] !== null && filtersValuesLead[1] !== undefined) {
        args.sizes = filtersValuesLead[1].join(',');
      }
      if (filtersValuesLead[2] !== null && filtersValuesLead[2] !== undefined) {
        args.statuss = filtersValuesLead[2].join(',');
      }
      if (filtersValuesLead[3] !== null && filtersValuesLead[3] !== undefined) {
        args.userIds = filtersValuesLead[3].join(',');
      }
      setCount(await ApiService.getCountLeads(args));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  React.useEffect(() => {
    loadRecords();
  }, [pageNumber, filtersValuesLead]);

  const loadRecords = async function () {
    let records = null;
    try {
      const args = {};
      if (filtersValuesLead[0] !== null && filtersValuesLead[0] !== undefined) {
        args.industryIds = filtersValuesLead[0].join(',');
      }
      if (filtersValuesLead[1] !== null && filtersValuesLead[1] !== undefined) {
        args.sizes = filtersValuesLead[1].join(',');
      }
      if (filtersValuesLead[2] !== null && filtersValuesLead[2] !== undefined) {
        args.statuss = filtersValuesLead[2].join(',');
      }
      if (filtersValuesLead[3] !== null && filtersValuesLead[3] !== undefined) {
        args.userIds = filtersValuesLead[3].join(',');
      }
      args.offset = (pageNumber - 1) * pageSize;
      args.limit = pageSize;
      records = await ApiService.getLeads(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.leadId,
      data: [
        record.name,
        record.avatar,
        record.industryName,
        record.size,
        protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.userFirstName, record.userLastName ]),
        record.userAvatar,
        record.probability,
        record.probability,
        record.status,
        record.lastInteractionDatetime,
      ],
      record: record
    })));
  }

  const refreshMe = async function () {
    await loadCount();
    await loadRecords();
  }

  const handleClickItem = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    history.push('/lead/' + item.record.leadId);
  }

  const handleAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    setAction({ index: 0 });
    const data = {};
    setActionData(data);
    setActionValidated(false);
  }
  const submitAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefAction0.current)) {
      try {
        await ApiService.postLead(actionData);
      }
      catch (error) {
        setError(error);
        return;
      }
      setAction(null);
      setActionData(null);
      setActionValidated(null);
      refreshMe();
    }
    else {
      setActionValidated(true);
    }
  }
  const updateActionData = function (field, value) {
    setActionData({ ...actionData, [field]: value });
  }
  const cancelAction = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    setAction(null);
    setActionData(null);
    setActionValidated(null);
  }
  
  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <Title level={1} icon={IconLead} color="green" label={words.myLeads} />
          <div className="ps-4">
            <FiltersBar
              filters={[
                {
                  label: words.industry,
                  variant: 'Option',
                  dataSource: dataSourceIndustryId
                },
                {
                  label: words.size,
                  variant: 'Option',
                  dataSource: [['small', words.small], ['medium', words.medium], ['large', words.large], ['corporative', words.corporative]]
                },
                {
                  label: words.status,
                  variant: 'Option',
                  dataSource: [['new', words.new], ['inProgress', words.inProgress], ['won', words.won], ['lost', words.lost]]
                },
                {
                  label: words.responsible,
                  variant: 'Option',
                  dataSource: dataSourceUserId
                },
              ]}
              filtersValues={filtersValuesLead}
              setFiltersValues={setFiltersValuesLead}
            />
          </div>
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
              { icon: IconAdd, label: words.createLead, color: 'green', onClick: handleAction0, hidden: !((SecurityService.hasRole('seller'))) },
            ]}
          />
        </div>
        <Grid
          contextualActions={[
          ]}
          fields={[
            { label: words.name, type: 'string' },
            { type: 'imageUrl', dockAs: 'avatar' },
            { label: words.industry, type: 'string' },
            { label: words.size, type: 'string', translate: true },
            { label: words.responsible, type: 'string' },
            { type: 'imageUrl', dockAs: 'avatar' },
            { label: words.probability, type: 'percentage', variant: 'ProgressBar', color: function (value) { return value === 1 ? 'green' : 'blue'; } },
            { type: 'percentage', dockAs: 'secondary' },
            { label: words.status, type: 'string', translate: true, variant: 'FramedText', color: function (value) { return value === 'new' ? 'blue' :  (value ===  'inProgress' ? 'yellow' : (value === 'lost' ? 'red' : (value ===  'won' ? 'green' : 'black'))); } },
            { label: words.lastInteraction, type: 'datetime' },
          ]}
          onClickItem={(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? handleClickItem : null}
          items={items}
        />
        {count !== null && count !== undefined ?
          <PagingBar
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            countOfItems={count}
            countOfPages={Math.ceil(count/pageSize)}
          /> :
          null
        }
      </div>
      {action && action.index === 0 ?
        <ReactBootstrap.Modal
          show={true}
          onHide={() => cancelAction({})}
          scrollable={true}
          centered={true}
         
        >
          <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
            <Title level={1} icon={IconAdd} color="green" label={words.createLead} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefAction0} className="p-0">
            <div className="p-2">
              {actionData && <HomeLeft1Action1 data={actionData} updateData={updateActionData} validated={actionValidated} />}
            </div>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer className="p-2">
            <div>
              <Button label={words.ok} color="blue" onClick={submitAction0} />
            </div>
            <div>
              <Button label={words.cancel} color="blue" onClick={cancelAction} />
            </div>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal> :
        null
      }
    </div>
  );
})

export default HomeLeft1;
