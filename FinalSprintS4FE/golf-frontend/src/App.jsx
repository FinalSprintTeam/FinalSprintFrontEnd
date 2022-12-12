import "./App.css";
import Footer from "./Components/Main/Footer";
import NavBar from "./Components/Main/Nav";
import Member from "./Components/Member/Member";
import Tournament from "./Components/Tournament/Tournament";
import Main from "./Components/Main/Main";
import NotFound from "./Components/Main/notFound";
import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getMembers } from "./api/services/members/getMembers";
import { getData } from "./api/services/getData";

function App() {
  const [members, setMembers] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    getMemberData();
    getTournamentData();
  }, []);

  // Data Fetching
  const getMemberData = async () => {
    const memberData = await getData("/api/member/all");
    setMembers(memberData);
  };

  const getTournamentData = async() =>{
    const tournamentData = await getData("/api/tournament/all");
    setTournaments(tournamentData);
  };

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/members" element={<Member />} />
          <Route path="/tournaments" element={<Tournament />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
