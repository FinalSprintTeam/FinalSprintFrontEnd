import "./App.css";
import Footer from "./Components/Main/Footer";
import NavBar from "./Components/Main/Nav";
import Member from "./Components/Member/Member";
import Tournament from "./Components/Tournament/Tournament";
import Main from "./Components/Main/Main";
import NotFound from "./Components/Main/notFound";
import { Fragment, useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { getData } from "./api/services/getData";
import TournamentContext from "./Components/Context/tournament-context";
import TournamentRoutes from "./Components/Tournament/TournamentRoutes";
import MemberContext from "./Components/Context/member-context";

function App() {
  const tourCtx = useContext(TournamentContext);
  const memCtx = useContext(MemberContext);

  useEffect(() => {
    memCtx.getMember();
    tourCtx.getTournament();
  }, []);

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/members" element={<Member />} />
          <Route path="/tournaments/*" element={<TournamentRoutes />} />
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
