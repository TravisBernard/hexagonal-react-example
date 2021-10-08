import React, {createContext, useReducer} from 'react';

export const PrivateAppContext = createContext({});

interface Selection {
   [key: string]: string | null
}

interface ProviderProps {
   defaults: Selection
}

function selectionsReducer(selections: Selection, change: Selection) {
   return { ...selections, ...change}
}

export const SelectionsProvider: React.FC<ProviderProps> = ({defaults, children}) => {
   const [selections, setSelections] = useReducer(selectionsReducer, defaults);

   return <PrivateAppContext.Provider value={{selections, setSelections}}>
      {children}
   </PrivateAppContext.Provider>
}