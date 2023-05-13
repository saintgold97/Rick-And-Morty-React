import { useState, useEffect } from "react";
import axios from "axios";
import { Character, Info } from "../models/character";
export const url = "https://rickandmortyapi.com/api/character?";

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

  useEffect(() => {
    let finalUrl = url;
    if (page) {
      finalUrl += "page=" + page + "&";
    }
    if (name) {
      finalUrl += "name=" + name + "&";
    }
    if (status) {
      finalUrl += "status=" + status + "&";
    } 
    if (gender) {
      finalUrl += "gender=" + gender;
    }
    console.log(finalUrl);
    setLoading(true);
    setTimeout(() => {
      axios
        .get(finalUrl)
        .then((response: any) => {
          const results: Character[] = response.data.results;
          setUsers(results);
          setTotalPages(response.data.info.pages);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, [page, name, status, gender]);
  return [users, isLoading, totalPages];
};
