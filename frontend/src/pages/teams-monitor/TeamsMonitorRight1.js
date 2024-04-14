import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Field from '../../components/Field.js';
import FieldComposition from '../../components/FieldComposition.js';
import ActionsBar from '../../components/ActionsBar.js';
import Brief from '../../components/Brief.js';
import IconTeam from '../../components/icons/IconTeam.js';
import { protect } from '../../utils/protect.js';
import { getWords } from '../../utils/get-words.js';

const TeamsMonitorRight1 = ReactRouterDOM.withRouter(function ({ team }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


const fields = [
  { icon: IconTeam, label: words.name, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
];
const data = [
  team.name,
];

  return (
    <div>
      <div>
        <div className="d-flex align-items-center">
          <div>
            <FieldComposition
              fields={fields}
              data={data}
              startIndex={0}
              variant="title"
              avatarColor="green"
            />
          </div>
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
            ]}
          />
        </div>
        <Brief
          fields={fields}
          data={data}
          skipFirst={true}
        />
      </div>
    </div>
  );
})

export default TeamsMonitorRight1;
