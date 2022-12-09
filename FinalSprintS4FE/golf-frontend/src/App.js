import "./App.css";
import Footer from "./Components/Main/Footer";
import NavBar from "./Components/Main/Nav";
import Member from "./Components/Member/Member";
import Tournament from "./Components/Tournament/Tournament";
import Main from "./Components/Main/Main";
import NotFound from "./Components/Main/notFound";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
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
