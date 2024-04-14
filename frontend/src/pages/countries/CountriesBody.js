import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import Title from '../../components/Title.js';
import ActionsBar from '../../components/ActionsBar.js';
import PagingBar from '../../components/PagingBar.js';
import Button from '../../components/Button.js';
import IconCountry from '../../components/icons/IconCountry.js';
import IconAdd from '../../components/icons/IconAdd.js';
import IconEdit from '../../components/icons/IconEdit.js';
import IconDelete from '../../components/icons/IconDelete.js';
import CountriesBodyAction1 from './CountriesBodyAction1.js';
import CountriesBodyContextualAction1 from './CountriesBodyContextualAction1.js';
import CountriesBodyContextualAction2 from './CountriesBodyContextualAction2.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';
import { isValid } from '../../utils/is-valid.js';

const CountriesBody = ReactRouterDOM.withRouter(function ({  }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [count, setCount] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const pageSize = 10;
  const [items, setItems] = React.useState([]);
  const [action, setAction] = React.useState(null);
  const [actionData, setActionData] = React.useState(null);
  const [actionValidated, setActionValidated] = React.useState(null);
  const bodyRefAction0 = React.useRef(null);
  const [contextualAction, setContextualAction] = React.useState(null);
  const [contextualActionData, setContextualActionData] = React.useState(null);
  const [contextualActionValidated, setContextualActionValidated] = React.useState(null);
  const bodyRefContextualAction0 = React.useRef(null);
  const bodyRefContextualAction1 = React.useRef(null);

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, []);

  const loadCount = async function () {
    try {
      setCount(await ApiService.getCountCountries(null));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  React.useEffect(() => {
    loadRecords();
  }, [pageNumber]);

  const loadRecords = async function () {
    let records = null;
    try {
      const args = {};
      args.offset = (pageNumber - 1) * pageSize;
      args.limit = pageSize;
      records = await ApiService.getCountries(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.countryId,
      data: [
        record.name,
      ],
      record: record
    })));
  }

  const refreshMe = async function () {
    await loadCount();
    await loadRecords();
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
        await ApiService.postCountry(actionData);
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
  
  const handleContextualAction0 = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    let country = null;
    try {
      country = await ApiService.getCountry(item.record.countryId);
    }
    catch (error) {
      setError(error);
      return;
    }
    setContextualAction({ index: 0, country: country });
    const data = {};
    data.name = country.name;
    setContextualActionData(data);
    setContextualActionValidated(false);
  }
  const submitContextualAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefContextualAction0.current)) {
      try {
        await ApiService.putCountry(contextualAction.country.countryId, contextualActionData);
      }
      catch (error) {
        setError(error);
        return;
      }
      setContextualAction(null);
      setContextualActionData(null);
      setContextualActionValidated(null);
      refreshMe();
    }
    else {
      setContextualActionValidated(true);
    }
  }
  const handleContextualAction1 = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    let country = null;
    try {
      country = await ApiService.getCountry(item.record.countryId);
    }
    catch (error) {
      setError(error);
      return;
    }
    setContextualAction({ index: 1, country: country });
  }
  const submitContextualAction1 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefContextualAction1.current)) {
      try {
        await ApiService.deleteCountry(contextualAction.country.countryId);
      }
      catch (error) {
        setError(error);
        return;
      }
      setContextualAction(null);
      setContextualActionData(null);
      setContextualActionValidated(null);
      refreshMe();
    }
    else {
      setContextualActionValidated(true);
    }
  }
  const updateContextualActionData = function (field, value) {
    setContextualActionData({ ...contextualActionData, [field]: value });
  }
  const cancelContextualAction = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    setContextualAction(null);
    setContextualActionData(null);
    setContextualActionValidated(null);
  }
  
  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <Title level={1} icon={IconCountry} color="blue" label={words.countries} />
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
              { icon: IconAdd, label: words.add, color: 'blue', onClick: handleAction0 },
            ]}
          />
        </div>
        <Grid
          contextualActions={[
            { icon: IconEdit, label: words.edit, color: 'blue', onClick: handleContextualAction0 },
            { icon: IconDelete, label: words.delete, color: 'red', onClick: handleContextualAction1 },
          ]}
          fields={[
            { icon: IconCountry, label: words.name, type: 'string' },
          ]}
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
            <Title level={1} icon={IconAdd} color="blue" label={words.addCountry} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefAction0} className="p-0">
            <div className="p-2">
              {actionData && <CountriesBodyAction1 data={actionData} updateData={updateActionData} validated={actionValidated} />}
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
      {contextualAction && contextualAction.index === 0 ?
        <ReactBootstrap.Modal
          show={true}
          onHide={() => cancelContextualAction({})}
          scrollable={true}
          centered={true}
         
        >
          <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
            <Title level={1} icon={IconEdit} color="blue" label={words.editCountry} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefContextualAction0} className="p-0">
            <div className="p-2">
              {contextualActionData && <CountriesBodyContextualAction1 country={contextualAction ? contextualAction.country : null} data={contextualActionData} updateData={updateContextualActionData} validated={contextualActionValidated} />}
            </div>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer className="p-2">
            <div>
              <Button label={words.ok} color="blue" onClick={submitContextualAction0} />
            </div>
            <div>
              <Button label={words.cancel} color="blue" onClick={cancelContextualAction} />
            </div>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal> :
        null
      }
      {contextualAction && contextualAction.index === 1 ?
        <ReactBootstrap.Modal
          show={true}
          onHide={() => cancelContextualAction({})}
          scrollable={true}
          centered={true}
         
        >
          <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
            <Title level={1} icon={IconDelete} color="red" label={words.deleteCountry} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefContextualAction1} className="p-0">
            <div className="p-2">
              <CountriesBodyContextualAction2 country={contextualAction ? contextualAction.country : null} />
            </div>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer className="p-2">
            <div>
              <Button label={words.delete} color="red" onClick={submitContextualAction1} />
            </div>
            <div>
              <Button label={words.cancel} color="blue" onClick={cancelContextualAction} />
            </div>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal> :
        null
      }
    </div>
  );
})

export default CountriesBody;
