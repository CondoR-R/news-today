import * as React from 'react';
import {useReducer} from 'react';
import {Header} from "@/layout";
import {Outlet} from "react-router/internal/react-server-client";
import {
  ContextDispatch,
  ContextState,
  initialState,
  reducer
} from "@/state/reducer.ts";


export const Layout: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextDispatch.Provider value={dispatch}>
      <ContextState.Provider value={state}>
        <Header />
        <main>
          <Outlet />
        </main>
      </ContextState.Provider>
    </ContextDispatch.Provider>

  );
};