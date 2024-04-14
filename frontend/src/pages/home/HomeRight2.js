import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import Grid from '../../components/Grid.js';
import Title from '../../components/Title.js';
import PagingBar from '../../components/PagingBar.js';
import IconTeam from '../../components/icons/IconTeam.js';
import ApiService from '../../services/ApiService.js';
import SecurityService from '../../services/SecurityService.js';
import { getWords } from '../../utils/get-words.js';
import { protect } from '../../utils/protect.js';

const HomeRight2 = ReactRouterDOM.withRouter(function ({  }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [count, setCount] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const pageSize = 10;
  const [items, setItems] = React.useState([]);

  const history = ReactRouterDOM.useHistory();

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    setPageNumber(1);
    loadCount();
  }, []);

  const loadCount = async function () {
    try {
      setCount(await ApiService.getCountUsers(null));
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
      records = await ApiService.getUsers(args);
    }
    catch (error) {
      setError(error);
      return;
    }
    setItems(records.map((record, index) => ({
      key: record.userId,
      data: [
        protect(function ([firstName, lastName]) { return `${firstName} ${lastName}` }, [ record.firstName, record.lastName ]),
        record.username,
        record.avatar,
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
    history.push('/team-member/' + item.record.userId);
  }

  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <Title level={1} icon={IconTeam} color="orange" label={words.myTeam} />
          <div className="flex-grow-1" />
        </div>
        <Grid
          contextualActions={[
          ]}
          fields={[
            { label: words.member, type: 'string' },
            { type: 'string', dockAs: 'secondary' },
            { type: 'imageUrl', dockAs: 'avatar' },
            { label: words.lastInteraction, type: 'datetime' },
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
    </div>
  );
})

export default HomeRight2;
