import { API_ENDPOINT } from '../../connection/server';

const postMember = async (api, member) => {
  const res = await fetch(API_ENDPOINT + api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member),
  });
  const data = res.json();
  return data;
};
export { postMember };
