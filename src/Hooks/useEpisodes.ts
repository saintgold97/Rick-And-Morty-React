import { useState, useEffect } from "react";
import axios from "axios";
import { Episode, Info, Result } from "../models/episodes";
import { useSearchParams } from "react-router-dom";
export const urlEpisode = "https://rickandmortyapi.com/api/episode";

export const useEpisodes = (props: {
  page?: number;
  episode?: string;
  name?:string
}): [Episode["results"], number] => {
  const [episodes, setEpisodes] = useState<Episode["results"]>([]);
  //const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<Info["pages"]>(0);
  const { page, episode, name } = props;
  const [, setParams] = useSearchParams();

  const objectToQueryParams = (obj: any) => {
    const params = new URLSearchParams();
    for (let key in obj) {
      if (obj[key]) {
        params.append(key, obj[key]);
      }
    }
    return params.toString();
  };

  useEffect(() => {
    const urlParams = objectToQueryParams({
      page: String(page),
      episode: episode,
      name: name
    });
    //console.log(urlParams)

    setParams(urlParams);
  /*   setLoading(true); */
    setTimeout(() => {
      axios
        .get<Result>(`${urlEpisode}?${urlParams}`)
        .then((response: any) => {
          setEpisodes(response.data.results);
          setTotalPages(response.data.info.pages);
        })
        .catch((err) => {
          console.log(err);
        })
      /*   .finally(() => {
          setLoading(false);
        }); */
    }, 1000);
  }, [page, episode, name, setParams]);
  return [episodes, totalPages];
};
