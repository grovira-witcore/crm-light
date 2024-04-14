import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TreeGrid from '../../components/TreeGrid.js';
import ActionsBar from '../../components/ActionsBar.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const TeamsMonitorRight2 = ReactRouterDOM.withRouter(function ({ team }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [items, setItems] = React.useState([]);

  const history = ReactRouterDOM.useHistory();

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    refreshMe();
  }, [team]);

  const refreshMe = async function () {
    const items = [];
    let recordsROOT = null;
    try {
      const argsROOT = {};
      if (team.teamId !== null && team.teamId !== undefined) {
        argsROOT.teamTeamId = team.teamId;
      }
      recordsROOT = await ApiService.getUsers(argsROOT);
    }
    catch (error) {
      setError(error);
      return;
    }
    items.push(...recordsROOT.map((recordROOT, indexROOT) => ({
      levelKey: 'ROOT',
      key: recordROOT.userId,
      data: [
        protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ recordROOT.firstName, recordROOT.lastName ]),
        recordROOT.avatar,
        protect(function () { return ''; }, [  ]),
        protect(function () { return '' }, [  ]),
        protect(function () { return ''; }, [  ]),
        protect(function () { return '' }, [  ]),
      ],
      record: recordROOT
    })));
    let recordsg4aVxemZ = null;
    try {
      const argsg4aVxemZ = {};
      if (team.teamId !== null && team.teamId !== undefined) {
        argsg4aVxemZ.parentteamTeamId = team.teamId;
      }
      recordsg4aVxemZ = await ApiService.getLeadsV2(argsg4aVxemZ);
    }
    catch (error) {
      setError(error);
      return;
    }
    items.push(...recordsg4aVxemZ.map((recordg4aVxemZ, indexg4aVxemZ) => ({
      levelKey: 'g4aVxemZ',
      key: recordg4aVxemZ.leadId,
      parentLevelKey: 'ROOT',
      parentKey: recordg4aVxemZ.userId,
      data: [
        recordg4aVxemZ.name,
        recordg4aVxemZ.avatar,
        recordg4aVxemZ.industryName,
        recordg4aVxemZ.size,
        recordg4aVxemZ.probability,
        recordg4aVxemZ.status,
        null,
      ],
      record: recordg4aVxemZ
    })));
    setItems(items);
  }

  const handleClickItemg4aVxemZ = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    history.push('/lead/' + item.record.leadId);
  }

  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <div className="flex-grow-1" />
          <ActionsBar
            actions={[
            ]}
          />
        </div>
        <TreeGrid
          levels={[
            {
              key: 'ROOT',
              contextualActions: [
              ],
              fields: [
                { label: words.username, type: 'string' },
                { type: 'imageUrl', dockAs: 'avatar' },
                { label: words.industry, type: 'string' },
                { label: words.size, type: 'string' },
                { label: words.probability, type: 'string' },
                { label: words.status, type: 'string' },
              ],
              expanded: true,
            },
            {
              key: 'g4aVxemZ',
              parentKey: 'ROOT',
              label: words.leads,
              contextualActions: [
              ],
              fields: [
                { type: 'string' },
                { type: 'imageUrl', dockAs: 'avatar' },
                { type: 'string' },
                { type: 'string', translate: true },
                { type: 'percentage', variant: 'ProgressBar', color: function (value) { return value === 1 ? 'green' : 'blue'; } },
                { type: 'string', translate: true, variant: 'FramedText', color: function (value) { return value === 'new' ? 'blue' : (value === 'inProgress' ? 'yellow' : (value === 'lost' ? 'red' : (value === 'won' ? 'green' : 'black'))); } },
                {  },
              ],
              onClickItem: ((SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) && (SecurityService.hasRole('administrator') || SecurityService.hasRole('seller')) ? handleClickItemg4aVxemZ : null),
            },
          ]}
          items={items}
        />
      </div>
    </div>
  );
})

export default TeamsMonitorRight2;
