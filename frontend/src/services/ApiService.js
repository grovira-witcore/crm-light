import SecurityService from './SecurityService.js';

async function getCountries(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/countries${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountries"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountCountries(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-countries${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountCountries"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postCountry(country) {
  const response = await fetch(`/api/country`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(country)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postCountry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountry(countryId) {
  const response = await fetch(`/api/country/${countryId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putCountry(countryId, updatedCountryData) {
  const response = await fetch(`/api/country/${countryId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedCountryData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putCountry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteCountry(countryId) {
  const response = await fetch(`/api/country/${countryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteCountry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getLeads(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/leads${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeads"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountLeads(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-leads${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountLeads"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getIndustries(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/industries${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getIndustries"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getUsers(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/users${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getUsers"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postLead(data) {
  const response = await fetch(`/api/lead`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postLead"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getMeetings(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/meetings${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetings"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountMeetings(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-meetings${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountMeetings"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getMeeting(meetingId) {
  const response = await fetch(`/api/meeting/${meetingId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeeting"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putMeeting(meetingId, updatedMeetingData) {
  const response = await fetch(`/api/meeting/${meetingId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedMeetingData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putMeeting"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getTasks(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/tasks${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getTasks"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountTasks(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-tasks${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountTasks"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getTask(taskId) {
  const response = await fetch(`/api/task/${taskId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getTask"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putTask(taskId, updatedTaskData) {
  const response = await fetch(`/api/task/${taskId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedTaskData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putTask"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getAggregateLeads(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/aggregate-leads${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getAggregateLeads"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getAggregateLeadsV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/aggregate-leads/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getAggregateLeadsV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountUsers(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-users${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountUsers"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountIndustries(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-industries${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountIndustries"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postIndustry(industry) {
  const response = await fetch(`/api/industry`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(industry)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postIndustry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getIndustry(industryId) {
  const response = await fetch(`/api/industry/${industryId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getIndustry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putIndustry(industryId, updatedIndustryData) {
  const response = await fetch(`/api/industry/${industryId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedIndustryData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putIndustry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteIndustry(industryId) {
  const response = await fetch(`/api/industry/${industryId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteIndustry"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getLead(leadId) {
  const response = await fetch(`/api/lead/${leadId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLead"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putLead(leadId, updatedLeadData) {
  const response = await fetch(`/api/lead/${leadId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedLeadData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putLead"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getInteractions(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/interactions${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getInteractions"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountInteractions(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-interactions${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountInteractions"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postLeadInteraction(leadId, data) {
  const response = await fetch(`/api/lead/${leadId}/interaction`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postLeadInteraction"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getLeadContacts(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/lead-contacts${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeadContacts"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getNotes(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/notes${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getNotes"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountNotes(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-notes${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountNotes"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postLeadNote(leadId, data) {
  const response = await fetch(`/api/lead/${leadId}/note`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postLeadNote"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getMeetingsV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/meetings/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetingsV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountMeetingsV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-meetings/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountMeetingsV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postMeeting(meeting) {
  const response = await fetch(`/api/meeting`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(meeting)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postMeeting"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getTasksV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/tasks/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getTasksV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountTasksV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-tasks/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountTasksV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postTask(task) {
  const response = await fetch(`/api/task`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(task)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postTask"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountLeadContacts(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-lead-contacts${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountLeadContacts"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postLeadContact(leadContact) {
  const response = await fetch(`/api/lead-contact`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(leadContact)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getLeadContact(leadContactId) {
  const response = await fetch(`/api/lead-contact/${leadContactId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putLeadContact(leadContactId, updatedLeadContactData) {
  const response = await fetch(`/api/lead-contact/${leadContactId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedLeadContactData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteLeadContact(leadContactId) {
  const response = await fetch(`/api/lead-contact/${leadContactId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getPositions(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/positions${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getPositions"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getLeadAddresses(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/lead-addresses${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeadAddresses"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountLeadAddresses(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-lead-addresses${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountLeadAddresses"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postLeadAddress(leadAddress) {
  const response = await fetch(`/api/lead-address`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(leadAddress)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postLeadAddress"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getLeadAddress(leadAddressId) {
  const response = await fetch(`/api/lead-address/${leadAddressId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeadAddress"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putLeadAddress(leadAddressId, updatedLeadAddressData) {
  const response = await fetch(`/api/lead-address/${leadAddressId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedLeadAddressData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putLeadAddress"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteLeadAddress(leadAddressId) {
  const response = await fetch(`/api/lead-address/${leadAddressId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteLeadAddress"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getMeetingLeadContacts(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/meeting-lead-contacts${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetingLeadContacts"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountMeetingLeadContacts(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-meeting-lead-contacts${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountMeetingLeadContacts"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postMeetingLeadContact(meetingLeadContact) {
  const response = await fetch(`/api/meeting-lead-contact`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(meetingLeadContact)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postMeetingLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getMeetingLeadContact(meetingLeadContactId) {
  const response = await fetch(`/api/meeting-lead-contact/${meetingLeadContactId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetingLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function deleteMeetingLeadContact(meetingLeadContactId) {
  const response = await fetch(`/api/meeting-lead-contact/${meetingLeadContactId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteMeetingLeadContact"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getMeetingUsers(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/meeting-users${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetingUsers"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountMeetingUsers(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-meeting-users${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountMeetingUsers"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postMeetingUser(meetingUser) {
  const response = await fetch(`/api/meeting-user`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(meetingUser)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postMeetingUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getMeetingUser(meetingUserId) {
  const response = await fetch(`/api/meeting-user/${meetingUserId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getMeetingUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function deleteMeetingUser(meetingUserId) {
  const response = await fetch(`/api/meeting-user/${meetingUserId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteMeetingUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getCountPositions(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-positions${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountPositions"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postPosition(position) {
  const response = await fetch(`/api/position`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(position)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postPosition"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getPosition(positionId) {
  const response = await fetch(`/api/position/${positionId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getPosition"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putPosition(positionId, updatedPositionData) {
  const response = await fetch(`/api/position/${positionId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedPositionData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putPosition"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deletePosition(positionId) {
  const response = await fetch(`/api/position/${positionId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deletePosition"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getUser(userId) {
  const response = await fetch(`/api/user/${userId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getTeams(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/teams${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getTeams"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountTeams(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-teams${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountTeams"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postTeam(team) {
  const response = await fetch(`/api/team`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(team)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postTeam"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getTeam(teamId) {
  const response = await fetch(`/api/team/${teamId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getTeam"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putTeam(teamId, updatedTeamData) {
  const response = await fetch(`/api/team/${teamId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedTeamData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putTeam"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteTeam(teamId) {
  const response = await fetch(`/api/team/${teamId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteTeam"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getAggregateLeadsV3(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/aggregate-leads/v3${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getAggregateLeadsV3"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getLeadsV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/leads/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getLeadsV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getUserRoles(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/user-roles${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getUserRoles"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getCountUserRoles(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/count-user-roles${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getCountUserRoles"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postUserRole(userRole) {
  const response = await fetch(`/api/user-role`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(userRole)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postUserRole"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function getUserRole(userRoleId) {
  const response = await fetch(`/api/user-role/${userRoleId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getUserRole"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function deleteUserRole(userRoleId) {
  const response = await fetch(`/api/user-role/${userRoleId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteUserRole"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function getUsersV2(args) {
  let queryString = '';
  if (args) {
    queryString = '?' + new URLSearchParams(args).toString();
  }
  const response = await fetch(`/api/users/v2${queryString}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "getUsersV2"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function postUser(user) {
  const response = await fetch(`/api/user`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    const error = new Error('Error executing "postUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return await response.json();
}

async function putUser(userId, updatedUserData) {
  const response = await fetch(`/api/user/${userId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    },
    body: JSON.stringify(updatedUserData)
  });
  if (!response.ok) {
    const error = new Error('Error executing "putUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

async function deleteUser(userId) {
  const response = await fetch(`/api/user/${userId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SecurityService.getToken()}`,
    }
  });
  if (!response.ok) {
    const error = new Error('Error executing "deleteUser"');
    try {
      error.additionalData = await response.json();
    }
    catch (err) {
    }
    throw error;
  }
  return null;
}

const ApiService = {
  getCountries,
  getCountCountries,
  postCountry,
  getCountry,
  putCountry,
  deleteCountry,
  getLeads,
  getCountLeads,
  getIndustries,
  getUsers,
  postLead,
  getMeetings,
  getCountMeetings,
  getMeeting,
  putMeeting,
  getTasks,
  getCountTasks,
  getTask,
  putTask,
  getAggregateLeads,
  getAggregateLeadsV2,
  getCountUsers,
  getCountIndustries,
  postIndustry,
  getIndustry,
  putIndustry,
  deleteIndustry,
  getLead,
  putLead,
  getInteractions,
  getCountInteractions,
  postLeadInteraction,
  getLeadContacts,
  getNotes,
  getCountNotes,
  postLeadNote,
  getMeetingsV2,
  getCountMeetingsV2,
  postMeeting,
  getTasksV2,
  getCountTasksV2,
  postTask,
  getCountLeadContacts,
  postLeadContact,
  getLeadContact,
  putLeadContact,
  deleteLeadContact,
  getPositions,
  getLeadAddresses,
  getCountLeadAddresses,
  postLeadAddress,
  getLeadAddress,
  putLeadAddress,
  deleteLeadAddress,
  getMeetingLeadContacts,
  getCountMeetingLeadContacts,
  postMeetingLeadContact,
  getMeetingLeadContact,
  deleteMeetingLeadContact,
  getMeetingUsers,
  getCountMeetingUsers,
  postMeetingUser,
  getMeetingUser,
  deleteMeetingUser,
  getCountPositions,
  postPosition,
  getPosition,
  putPosition,
  deletePosition,
  getUser,
  getTeams,
  getCountTeams,
  postTeam,
  getTeam,
  putTeam,
  deleteTeam,
  getAggregateLeadsV3,
  getLeadsV2,
  getUserRoles,
  getCountUserRoles,
  postUserRole,
  getUserRole,
  deleteUserRole,
  getUsersV2,
  postUser,
  putUser,
  deleteUser,
}

export default ApiService;
