import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import PagingBar from '../../components/PagingBar.js';
import Title from '../../components/Title.js';
import Button from '../../components/Button.js';
import IconEdit from '../../components/icons/IconEdit.js';
import IconPosition from '../../components/icons/IconPosition.js';
import HomeLeft2Tab2ContextualAction1 from './HomeLeft2Tab2ContextualAction1.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';
import { isValid } from '../../utils/is-valid.js';

const HomeLeft2Tab2 = ReactRouterDOM.withRouter(function ({  }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [count, setCount] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const pageSize = 10;
  const [items, setItems] = React.useState([]);
  const [contextualAction, setContextualAction] = React.useState(null);
  const [contextualActionData, setContextualActionData] = React.useState(null);
  const [contextualActionValidated, setContextualActionValidated] = React.useState(null);
  const bodyRefContextualAction0 = React.useRef(null);

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, []);

  const loadCount = async function () {
    try {
      setCount(await ApiService.getCountTasks(null));
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
      records = await ApiService.getTasks(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.taskId,
      data: [
        record.startDate,
        record.dueDate,
        protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.userFirstName, record.userLastName ]),
        record.userAvatar,
        record.leadName,
        record.leadAvatar,
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

  const handleContextualAction0 = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    let task = null;
    try {
      task = await ApiService.getTask(item.record.taskId);
    }
    catch (error) {
      setError(error);
      return;
    }
    setContextualAction({ index: 0, task: task });
    const data = {};
    data.status = task.status;
    setContextualActionData(data);
    setContextualActionValidated(false);
  }
  const submitContextualAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefContextualAction0.current)) {
      try {
        await ApiService.putTask(contextualAction.task.taskId, contextualActionData);
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
        <Grid
          contextualActions={[
            { icon: IconEdit, label: words.changeStatus, color: 'blue', onClick: handleContextualAction0, hidden: function (item) { return !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('seller'))) } },
          ]}
          fields={[
            { icon: IconPosition, label: words.startDate, type: 'date' },
            { label: words.dueDate, type: 'date' },
            { label: words.responsible, type: 'string' },
            { type: 'imageUrl', dockAs: 'avatar' },
            { label: words.lead, type: 'string' },
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
      {contextualAction && contextualAction.index === 0 ?
        <ReactBootstrap.Modal
          show={true}
          onHide={() => cancelContextualAction({})}
          scrollable={true}
          centered={true}
         
        >
          <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
            <Title level={1} icon={IconEdit} color="blue" label={words.editTask} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefContextualAction0} className="p-0">
            <div className="p-2">
              {contextualActionData && <HomeLeft2Tab2ContextualAction1 task={contextualAction ? contextualAction.task : null} data={contextualActionData} updateData={updateContextualActionData} validated={contextualActionValidated} />}
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

export default HomeLeft2Tab2;
