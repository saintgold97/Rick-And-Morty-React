import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Characters } from "../components/Characters/Characters";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { SingleCharacter } from "../components/SingleCharacter/SingleCharacter";
import { Episodes } from "../components/Episodes/Episodes";
import { MyNav } from "../components/Navbar/Navbar";
import { SingleEpisode } from "../components/SingleEpisode/SingleEpisode";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <MyNav />
          <h1 className="p-3">The Rick and Morty</h1>
        </header>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="characters">
              <Route index element={<Characters />}></Route>
              <Route path=":id" element={<SingleCharacter />}></Route>
            </Route>
            <Route path="episode">
              <Route index element={<Episodes />}></Route>
              <Route path=":id" element={<SingleEpisode />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
