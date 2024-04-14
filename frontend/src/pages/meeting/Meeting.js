import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.js';
import MeetingTop from './MeetingTop.js';
import MeetingLeft from './MeetingLeft.js';
import MeetingRight from './MeetingRight.js';
import ApiService from '../../services/ApiService.js';

const Meeting = ReactRouterDOM.withRouter(function ({ match }) {
  const { setError } = useAppContext();

  const [meeting, setMeeting] = React.useState(null);

  React.useEffect(() => {
    fetchMeeting();
  }, []);

  const fetchMeeting = async function () {
    try {
      setMeeting(await ApiService.getMeeting(match.params.meetingId));
    }
    catch (error) {
      setError(error);
      return;
    }
  }

  if (meeting === null || meeting === undefined) {
    return (
      <div />
    );
  }

  return (
    <div className="p-1">
      {meeting ? (
        <div className="p-1">
          <div className="border bg-light">
            <div className="p-2 fs-6">
              <MeetingTop meeting={meeting} />
            </div>
          </div>
        </div>
      ) : null}
      <div className="d-flex flex-wrap">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          {meeting ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <MeetingLeft meeting={meeting} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          {meeting ? (
            <div className="p-1">
              <div className="border bg-light">
                <div className="p-2 fs-6">
                  <MeetingRight meeting={meeting} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
})

export default Meeting;
