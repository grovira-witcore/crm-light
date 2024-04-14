import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import Title from '../../components/Title.js';
import PagingBar from '../../components/PagingBar.js';
import IconTeam from '../../components/icons/IconTeam.js';
import ApiService from '../../services/ApiService.js';
import { getWords } from '../../utils/get-words.js';

const TeamsMonitorLeft1 = ReactRouterDOM.withRouter(function ({ team, setTeam }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [count, setCount] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const pageSize = 10;
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, []);

  const loadCount = async function () {
    try {
      setCount(await ApiService.getCountTeams(null));
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
      records = await ApiService.getTeams(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.teamId,
      data: [
        record.name,
      ],
      record: record
    })));
    if (records.length > 0) {
      setTeam(records[0]);
    }
  }

  const refreshMe = async function () {
    await loadCount();
    await loadRecords();
  }

  const handleClickItem = async function (e, item) {
    if (e.ctrlKey) {
      return;
    }
    setTeam(item.record);
  }

  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <Title level={1} icon={IconTeam} color="green" label={words.teams} />
          <div className="flex-grow-1" />
        </div>
        <Grid
          contextualActions={[
          ]}
          fields={[
            { icon: IconTeam, label: words.name, type: 'string' },
          ]}
          onClickItem={handleClickItem}
          selectedKey={team ? team.teamId : null}
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
    </div>
  );
})

export default TeamsMonitorLeft1;
