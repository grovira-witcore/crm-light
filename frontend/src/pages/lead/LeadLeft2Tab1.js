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
import IconEdit from '../../components/icons/IconEdit.js';
import IconMeeting from '../../components/icons/IconMeeting.js';
import LeadLeft2Tab1Action1 from './LeadLeft2Tab1Action1.js';
import LeadLeft2Tab1ContextualAction1 from './LeadLeft2Tab1ContextualAction1.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { isValid } from '../../utils/is-valid.js';

const LeadLeft2Tab1 = ReactRouterDOM.withRouter(function ({ lead }) {
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

  const history = ReactRouterDOM.useHistory();

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
      setCount(await ApiService.getCountMeetingsV2(args));
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
      records = await ApiService.getMeetingsV2(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.meetingId,
      data: [
        record.datetime,
        record.subject,
        record.remarks,
        record.status,
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
    history.push('/meeting/' + item.record.meetingId);
  }

  const handleAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    setAction({ index: 0 });
    const data = {};
    data.leadId = lead.leadId;
    data.status = 'pending';
    setActionData(data);
    setActionValidated(false);
  }
  const submitAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefAction0.current)) {
      try {
        await ApiService.postMeeting(actionData);
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
    let meeting = null;
    try {
      meeting = await ApiService.getMeeting(item.record.meetingId);
    }
    catch (error) {
      setError(error);
      return;
    }
    setContextualAction({ index: 0, meeting: meeting });
    const data = {};
    data.status = meeting.status;
    setContextualActionData(data);
    setContextualActionValidated(false);
  }
  const submitContextualAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefContextualAction0.current)) {
      try {
        await ApiService.putMeeting(contextualAction.meeting.meetingId, contextualActionData);
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
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
              { icon: IconAdd, label: words.addMeeting, color: 'blue', onClick: handleAction0, hidden: !((SecurityService.hasRole('seller'))) },
            ]}
          />
        </div>
        <Grid
          contextualActions={[
            { icon: IconEdit, label: words.changeStatus, color: 'blue', onClick: handleContextualAction0, hidden: function (item) { return !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('seller'))) } },
          ]}
          fields={[
            { icon: IconMeeting, label: words.datetime, type: 'datetime' },
            { label: words.detail, type: 'string' },
            { type: 'string', dockAs: 'secondary' },
            { label: words.status, type: 'string', translate: true, color: function (value) { return value === 'pending' ? 'yellow' : (value === 'completed' ? 'green' : (value === 'cancelled' ? 'red' : 'black')); } },
          ]}
          onClickItem={(SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? handleClickItem : null}
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
            <Title level={1} icon={IconAdd} color="blue" label={words.addMeeting} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefAction0} className="p-0">
            <div className="p-2">
              {actionData && <LeadLeft2Tab1Action1 lead={lead} data={actionData} updateData={updateActionData} validated={actionValidated} />}
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
            <Title level={1} icon={IconEdit} color="blue" label={words.changeStatus} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefContextualAction0} className="p-0">
            <div className="p-2">
              {contextualActionData && <LeadLeft2Tab1ContextualAction1 meeting={contextualAction ? contextualAction.meeting : null} data={contextualActionData} updateData={updateContextualActionData} validated={contextualActionValidated} />}
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
    </div>
  );
})

export default LeadLeft2Tab1;
