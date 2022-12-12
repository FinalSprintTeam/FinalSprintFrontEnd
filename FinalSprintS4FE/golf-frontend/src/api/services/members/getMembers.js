import { API_ENDPOINT } from "../../connection/server";

const getMembers = async () => {
  const res = await fetch(API_ENDPOINT + "/api/member/all");
  const data = await res.json();

  return data;
};

export { getMembers };
