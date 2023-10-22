import { createContext, useContext, useReducer } from "react";

const notiReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "REMOVE":
      return null;
  }
};

const notiContext = createContext();

export const NotiContextProvider = (props) => {
  const [noti, notiDispatch] = useReducer(notiReducer, null);

  return (
    <notiContext.Provider value={[noti, notiDispatch]}>
      {props.children}
    </notiContext.Provider>
  );
};

export default notiContext;
