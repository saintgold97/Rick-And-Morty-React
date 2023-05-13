import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "../components/Card/Card";
import { useCharacters } from "../Hooks/useCharacters";
import { CardLoaderContainer } from "../components/CardLoader/CardLoader";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Pages } from "../components/Pages/Pages";
import { FilterSelect } from "../components/FilterSelect/FilterSelect";

const App = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [users, isLoading, totalPages] = useCharacters({ page, name: text, status: status, gender: gender});

  return (
    <div className="App">
      <header>
        <a href="/">
          <h1>Rick and Morty</h1>
        </a>
        <SearchBar onSearch={setText} />
        <FilterSelect onChangeStatus={setStatus} onChangeGender={setGender} />
        <Pages currentPage={page} onPageChange={setPage} totalPages={totalPages}/>
      </header>
      <div className="container">
        <div className="row">
          {isLoading && <CardLoaderContainer count={20} />}
          {!isLoading &&
            users.map((item, index) => {
              return (
                <div className="col" key={`${index}-${item.id}`}>
                  <Card
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    gender={item.gender}
                    image={item.image}
                    origin={item.origin}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
