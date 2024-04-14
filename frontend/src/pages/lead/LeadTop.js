import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext.js';
import Field from '../../components/Field.js';
import FieldComposition from '../../components/FieldComposition.js';
import ActionsBar from '../../components/ActionsBar.js';
import Brief from '../../components/Brief.js';
import Title from '../../components/Title.js';
import Button from '../../components/Button.js';
import IconEdit from '../../components/icons/IconEdit.js';
import LeadTopAction1 from './LeadTopAction1.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { protect } from '../../utils/protect.js';
import { getWords } from '../../utils/get-words.js';
import { isValid } from '../../utils/is-valid.js';

const LeadTop = ReactRouterDOM.withRouter(function ({ lead }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [action, setAction] = React.useState(null);
  const [actionData, setActionData] = React.useState(null);
  const [actionValidated, setActionValidated] = React.useState(null);
  const bodyRefAction0 = React.useRef(null);

  const handleAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    setAction({ index: 0 });
    const data = {};
    data.name = lead.name;
    data.industryId = lead.industryId;
    data.size = lead.size;
    data.linkedin = lead.linkedin;
    setActionData(data);
    setActionValidated(false);
  }
  const submitAction0 = async function (e) {
    if (e.ctrlKey) {
      return;
    }
    if (isValid(bodyRefAction0.current)) {
      try {
        await ApiService.putLead(lead.leadId, actionData);
      }
      catch (error) {
        setError(error);
        return;
      }
      setAction(null);
      setActionData(null);
      setActionValidated(null);
      window.location.reload();
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
  

const fields = [
  { label: words.name, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'string', dockAs: 'secondary' },
  { type: 'imageUrl', dockAs: 'avatar' },
  { label: words.industry, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { label: words.size, type: 'string', translate: true, responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { label: words.responsible, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'imageUrl', dockAs: 'avatar' },
  { label: words.probability, type: 'percentage', variant: 'ProgressBar', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'percentage', dockAs: 'secondary' },
  { label: words.status, type: 'string', translate: true, variant: 'FramedText', color: function (value) { return value === 'new' ? 'blue' : (value === 'inProgress' ? 'yellow' : (value === 'lost' ? 'red' : (value === 'won' ? 'green' : 'black'))); }, responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { label: words.lastInteraction, type: 'datetime', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
];
const data = [
  lead.name,
  lead.linkedin,
  lead.avatar,
  lead.industryName,
  lead.size,
  protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ lead.userFirstName, lead.userLastName ]),
  lead.userAvatar,
  lead.probability,
  lead.probability,
  lead.status,
  lead.lastInteractionDatetime,
];

  return (
    <div>
      <div>
        <div className="d-flex align-items-center pb-1 border-bottom">
          <div>
            <FieldComposition
              fields={fields}
              data={data}
              startIndex={0}
              variant="title"
              avatarColor="blue"
            />
          </div>
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
              { icon: IconEdit, label: words.edit, color: 'blue', onClick: handleAction0, hidden: !((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('seller'))) },
            ]}
          />
        </div>
        <Brief
          fields={fields}
          data={data}
          skipFirst={true}
        />
      </div>
      {action && action.index === 0 ?
        <ReactBootstrap.Modal
          show={true}
          onHide={() => cancelAction({})}
          scrollable={true}
          centered={true}
         
        >
          <ReactBootstrap.Modal.Header className="pt-2 pb-1 ps-2 pe-3" closeButton={true}>
            <Title level={1} icon={IconEdit} color="blue" label={words.editLead} />
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body ref={bodyRefAction0} className="p-0">
            <div className="p-2">
              {actionData && <LeadTopAction1 lead={lead} data={actionData} updateData={updateActionData} validated={actionValidated} />}
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

export default LeadTop;
