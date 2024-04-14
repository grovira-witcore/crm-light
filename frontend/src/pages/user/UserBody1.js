import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Field from '../../components/Field.js';
import FieldComposition from '../../components/FieldComposition.js';
import ActionsBar from '../../components/ActionsBar.js';
import Brief from '../../components/Brief.js';
import IconUser from '../../components/icons/IconUser.js';
import { protect } from '../../utils/protect.js';
import { getWords } from '../../utils/get-words.js';

const UserBody1 = ReactRouterDOM.withRouter(function ({ user }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);


const fields = [
  { icon: IconUser, label: words.username, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { type: 'imageUrl', dockAs: 'avatar' },
  { type: 'string', dockAs: 'secondary' },
  { label: words.email, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { label: words.team, type: 'string', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
  { label: words.enabled, type: 'boolean', responsiveBreakpoints: 'col-lg-2 col-md-4 col-sm-6 col-12' },
];
const data = [
  protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ user.firstName, user.lastName ]),
  user.avatar,
  user.username,
  user.email,
  user.teamName,
  user.enabled,
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

export default UserBody1;
