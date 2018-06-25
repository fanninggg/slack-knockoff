// const BASE_URL = 'https://wagon-chat.herokuapp.com';

// export const FETCH_MESSAGES = 'FETCH_MESSAGES';
// export const CREATE_MESSAGE = 'CREATE_MESSAGE';
// export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

// export function fetchMessages(channel) {
//   const url = `${BASE_URL}/${channel}/messages`;
//   const promise = fetch(url).then(result => result.json());

//   return {
//     type: FETCH_MESSAGES,
//     payload: promise // Will be resolved by redux-promise
//   };
// }

// export function createMessage(channel, user, message) {
//   const body = { user, message };
//   const url = `${BASE_URL}/${channel}/messages`;
//   const promise = fetch(url, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   }).then(r => r.json());

//   return {
//     type: CREATE_MESSAGE,
//     payload: promise
//   };
// }

const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}
