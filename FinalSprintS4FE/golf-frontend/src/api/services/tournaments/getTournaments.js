import { API_ENDPOINT } from "../../connection/server";

const getTournaments = async () => {
  const res = await fetch(API_ENDPOINT + "/api/tournament/all");
  const data = await res.json();

  return data;
};

export { getTournaments };
