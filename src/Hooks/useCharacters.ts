import { useState, useEffect } from "react";
import axios from "axios";
import { Response, Character, Info } from "../models/character";
import { useSearchParams } from "react-router-dom";
export const urlCharacters = "https://rickandmortyapi.com/api/character";

export const useCharacters = (props: {
  page?: number;
  name?: string;
  status?: string;
  gender?: string;
}): [Character[], boolean, number] => {
  const [users, setUsers] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<Info["pages"]>(0);
  const { page, name, status, gender } = props;
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
      name: name,
      status: status,
      gender: gender,
    });

    setParams(urlParams);
    setLoading(true);
    setTimeout(() => {
      axios
        .get<Response>(`${urlCharacters}?${urlParams}`)
        .then((response: any) => {
          setUsers(response.data.results);
          setTotalPages(response.data.info.pages);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [page, name, status, gender, setParams]);
  return [users, isLoading, totalPages];
};
