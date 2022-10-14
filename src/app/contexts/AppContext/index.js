import { createContext } from "react";

const AppContext = createContext({
  data: {},
  setData: () => {},
});

export default AppContext;
