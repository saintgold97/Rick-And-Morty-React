import React, { useState } from "react";
import { useEpisodes } from "../../Hooks/useEpisodes";
import "bootstrap/dist/css/bootstrap.css";
import "./Episode.css";
import { Link } from "react-router-dom";
import { Pages } from "../Pages/Pages";
import { SearchBar } from "../SearchBar/SearchBar";

export const Episodes = () => {
  const [page, setPage] = useState(1);
  const [textEpisode, setEpisode] = useState("");
  const [textName, setTextName] = useState("");
  const [episodes, totalPages] = useEpisodes({
    page,
    episode: textEpisode,
    name: textName,
  });
  return (
    <div className="episodes">
      <h2>Episodes</h2>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex">
        <div className="search-for">
          <span>Search For Name</span>
          <SearchBar onSearch={setTextName} />
        </div>
        <div className="search-for ps-3">
          <span>Search For Episode</span>
          <SearchBar onSearch={setEpisode} />
        </div>
        </div>
        <Pages
          currentPage={page}
          onPageChange={setPage}
          totalPages={totalPages}
        />
      </div>
      <div className="container ms-5">
        <div className="row">
          {episodes.map((item, index) => {
            return (
              <div className="episode-item" key={`${index}-${item.id}`}>
                <Link
                  className="text-decoration-none"
                  to={`/episodes/${item.id}`}
                >
                  <span>{item.episode}</span>
                  <h3>{item.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
