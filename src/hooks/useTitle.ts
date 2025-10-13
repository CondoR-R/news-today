import {useEffect} from "react";

export const useTitle = (title: 'Home' | '') => {
  useEffect(() => {
    document.title = `News.today | ${title}`;
  }, [title]);
}