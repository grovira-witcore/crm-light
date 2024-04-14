import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import TeamMemberBody from './TeamMemberBody.js';
import ApiService from '../../services/ApiService.js';

const TeamMember = ReactRouterDOM.withRouter(function ({ match }) {
  const { setError } = useAppContext();

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async function () {
    try {
      setUser(await ApiService.getUser(match.params.userId));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  if (user === null || user === undefined) {
    return (
      <div />
    );
  }

  return (
    <div className="p-1">
      {user ? (
        <div className="p-1">
          <div className="border bg-light">
            <div className="p-2 fs-6">
              <TeamMemberBody user={user} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
})

export default TeamMember;
