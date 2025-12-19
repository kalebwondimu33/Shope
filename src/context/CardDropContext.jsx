import { createContext, useState } from "react";

export const CardDropContext = createContext({
  open: false,
  setOpen: () => null,
});
export const CardDropProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <CardDropContext.Provider value={value}>
      {children}
    </CardDropContext.Provider>
  );
};
