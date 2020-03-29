import React from "react";

const GlobalContext = React.createContext();
GlobalContext.displayName = "Global Context";

const GlobalProvider = GlobalContext.Provider;
const GlobalConsumer = GlobalContext.Consumer;

export { GlobalContext, GlobalProvider, GlobalConsumer };
