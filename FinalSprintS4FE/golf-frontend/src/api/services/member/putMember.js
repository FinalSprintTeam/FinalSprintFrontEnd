import { API_ENDPOINT } from '../../connection/server';

const putMember = async (api, member) => {
  const res = await fetch(API_ENDPOINT + api, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member),
  });
};

export { putMember };
