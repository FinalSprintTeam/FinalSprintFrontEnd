import { API_ENDPOINT } from "../../connection/server";

const removeMemberFromTournament = async (memberId, tournamentId) => {
  const res = await fetch(
    API_ENDPOINT +
      `/api/tournament/removeMember?memberId=${memberId}&tournamentId=${tournamentId}`,
    {
      method: "POST",
    }
  );
  const data = res.json();
  return data;
};

export { removeMemberFromTournament };
