import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import ActionsBar from '../../components/ActionsBar.js';
import PagingBar from '../../components/PagingBar.js';
import Title from '../../components/Title.js';
import Button from '../../components/Button.js';
import IconAdd from '../../components/icons/IconAdd.js';
import IconNote from '../../components/icons/IconNote.js';
import IconExecute from '../../components/icons/IconExecute.js';
import LeadLeft1Tab2Action1 from './LeadLeft1Tab2Action1.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';
import { isValid } from '../../utils/is-valid.js';

const LeadLeft1Tab2 = ReactRouterDOM.withRouter(function ({ lead }) {
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

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, [lead]);

  const loadCount = async function () {
    try {
      const args = {};
      if (lead.leadId !== null && lead.leadId !== undefined) {
        args.leadLeadId = lead.leadId;
      }
      setCount(await ApiService.getCountNotes(args));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  React.useEffect(() => {
    loadRecords();
  }, [pageNumber, lead]);

  const loadRecords = async function () {
    let records = null;
    try {
      const args = {};
      if (lead.leadId !== null && lead.leadId !== undefined) {
        args.leadLeadId = lead.leadId;
      }
      args.offset = (pageNumber - 1) * pageSize;
      args.limit = pageSize;
      records = await ApiService.getNotes(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.noteId,
      data: [
        record.datetime,
        protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.userFirstName, record.userLastName ]),
        record.userAvatar,
        record.subject,
        record.remarks,
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
        await ApiService.postLeadNote(lead.leadId, actionData);
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
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
              { icon: IconAdd, label: words.addNote, color: 'blue', onClick: handleAction0, hidden: !((SecurityService.hasRole('seller'))) },
            ]}
          />
        </div>
        <Grid
          contextualActions={[
          ]}
          fields={[
            { icon: IconNote, label: words.datetime, type: 'datetime' },
            { label: words.teamMember, type: 'string' },
            { type: 'imageUrl', dockAs: 'avatar' },
            { label: words.detail, type: 'string' },
            { type: 'string', dockAs: 'secondary' },
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
            <Title level={1} icon={IconExecute} color="blue" label={words.createNote} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefAction0} className="p-0">
            <div className="p-2">
              {actionData && <LeadLeft1Tab2Action1 data={actionData} updateData={updateActionData} validated={actionValidated} />}
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

export default LeadLeft1Tab2;
