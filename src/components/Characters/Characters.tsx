import React, { useState, createContext } from "react";
import "./Characters.css";
import "bootstrap/dist/css/bootstrap.css";
import { Cards } from "../Card/Card";
import { useCharacters } from "../../Hooks/useCharacters";
import { CardLoaderContainer } from "../CardLoader/CardLoader";
import { SearchBar } from "../SearchBar/SearchBar";
import { Pages } from "../Pages/Pages";
import { FilterSelect } from "../FilterSelect/FilterSelect";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const FontContext = createContext(16);
export const BackgroundContext = createContext("#213513");

export const Characters = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [users, isLoading, totalPages] = useCharacters({
    page,
    name: text,
    status: status,
    gender: gender,
  });
  const [font, setFont] = useState(16);
  const [theme, setTheme] = useState("green");

  return (
    <div className="characters">
      <div className="container filter-character">
        <div className="search-for">
          <span>Search for Name</span>
          <SearchBar onSearch={setText} />
        </div>
        <FilterSelect onChangeStatus={setStatus} onChangeGender={setGender} />
      </div>
      <Pages
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
      <BackgroundContext.Provider value={theme}>
        <FontContext.Provider value={font}>
          <div className="mb-2">
            <Button
              variant="outline-secondary"
              className="me-2"
              onClick={() => setFont(font === 24 ? 16 : 24)}
            >
              Change FontSize
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => setTheme(theme === "dark" ? "green" : "dark")}
            >
              Change Background color
            </Button>
          </div>
          <div className="container item-character">
            <div className="row">
              {isLoading && <CardLoaderContainer count={20} />}
              {!isLoading &&
                users.map((item, index) => {
                  return (
                    <div
                      className="col-sm-4 col-md-3 col-lg-3"
                      key={`${index}-${item.id}`}
                    >
                      <Link
                        className="text-decoration-none"
                        to={`/character/${item.id}`}
                      >
                        <Cards
                          name={item.name}
                          status={item.status}
                          species={item.species}
                          gender={item.gender}
                          image={item.image}
                          origin={item.origin}
                        />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </FontContext.Provider>
      </BackgroundContext.Provider>
    </div>
  );
};
