import React from 'react';
import Title from '../components/Title.js';
import Button from '../components/Button.js';
import IconLogo from '../components/icons/IconLogo.js';
import { getWords } from '../utils/get-words.js';

let _sessions = null;

const loadSessions = async function () {
  const response = await fetch(`/api/sessions`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok) {
    // TODO
  }
  _sessions = await response.json();
}

const getCurrentSession = function () {
  let currentUsername = localStorage.getItem('username');
  if (currentUsername === null || currentUsername === undefined) {
    localStorage.setItem('username', 'admin');
    currentUsername = 'admin';
  }
  return _sessions.find(session => session.username === currentUsername);
}

const init = function (root, defaultI18n, cb) {
  loadSessions()
    .then(function () {
      const currentSession = getCurrentSession();
      if (currentSession) {
        root.render(cb());
      }
      else {
        const words = getWords(defaultI18n.code);
        root.render(
          <div>
            <div className="p-2 header text-white d-flex align-items-center">
              <div><IconLogo size="xl" /></div>
              <div className="ps-2 fw-bold lead">{words.crm}</div>
            </div>
            <div className="container p-2">
              <div class="d-flex justify-content-center flex-wrap">
                {_sessions.map(session => (
                  <div index={session.username} className="p-2">
                    <div className="border bg-light" style={{ width: 300 }}>
                      <div className="p-3">
                        <div className="d-flex align-items-center">
                          <div className="pe-2">
                            <div className="image-lg mx-auto bg-gray-lighter">
                              {session.avatar ?
                                <img src={session.avatar} alt="Image" className="img-fluid rounded-circle" /> :
                                <div />
                              }
                            </div>
                          </div>
                          <div className="fs-5 fw-bold">
                            {session.firstName + ' ' + session.lastName}
                            <div className="fs-6 text-muted fw-light">
                              {session.username}
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 pb-1 d-flex justify-content-center">
                          <Button label={words.login} color="green" onClick={function (e) { localStorage.setItem('username', session.username); window.location.reload(); }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    });
}

const logout = function () {
  localStorage.setItem('username', '-');
  window.location.reload();
  window.location.href = '/';
}

const getToken = function () {
  const currentSession = getCurrentSession();
  if (currentSession) {
    return currentSession.accessToken;
  }
  else {
    return null;
  }
}

const hasRole = function (role) {
  const currentSession = getCurrentSession();
  if (currentSession) {
    return currentSession.roles.includes(role);
  }
  else {
    return false;
  }
}

const updateToken = function () {
}

const getUserData = function () {
  const currentSession = getCurrentSession();
  if (currentSession) {
    return {
      firstName: currentSession.firstName,
      lastName: currentSession.lastName,
      email: currentSession.email,
      avatar: currentSession.avatar
    }
  }
  else {
    return null;
  }
}

const SecurityService = {
  init,
  logout,
  getToken,
  hasRole,
  updateToken,
  getUserData
}

export default SecurityService;
