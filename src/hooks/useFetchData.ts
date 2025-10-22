import {useEffect} from "react";
import {useContextDispatch} from "@/hooks/useContextDispatch.ts";
import {APIKey} from "@/API/api-key.ts";
import {useContextState} from "@/hooks/useContextState.ts";
import {pageSize} from "@/API/pageSize.ts";

export const useFetchData = () => {
  const dispatch = useContextDispatch();
  const state = useContextState();

  useEffect(() => {
    if (!dispatch) return;
    
    const fetchUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      APIKey
    }&category=${
      state.activeCategory}&q=${state.search}&pageSize=${pageSize}&page=${state.page}`;

    try {
      dispatch({type: 'SET_IS_LOADING', payload: true});

      (async () => {
        const res = await fetch(fetchUrl);

        if (!res.status) {
          dispatch({type: "SET_ERROR", payload: res.statusText});
        }

        const data = await res.json();

        dispatch({type: "SET_DATA", payload: data});
      })()
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({type: "SET_ERROR", payload: error.message});
      } else {
        dispatch({type: "SET_ERROR", payload: "Неизвестная ошибка"});
      }
    } finally {
      dispatch({type: "SET_IS_LOADING", payload: false});
    }
  }, [state.activeCategory, state.search, state.page]);
}




