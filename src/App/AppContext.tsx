import React, {createContext, useReducer} from 'react';


interface SelectionType {
   [key: string]: string | null
}

interface ProviderProps {
   defaults?: SelectionType
}

export interface ContextType {
   selections: SelectionType,
   setSelection: (a: SelectionType) => void
}

export const PrivateAppContext = createContext({
   selections: {},
   setSelection: () => {
      console.warn('PrivateContextProvider not included in DOM')
   }
} as ContextType);

function selectionsReducer(selections: SelectionType, change: SelectionType) {
   return {...selections, ...change}
}

export const PrivateContextProvider: React.FC<ProviderProps> = ({defaults = {}, children}) => {
   const [selections, setSelection] = useReducer(selectionsReducer, defaults);

   return <PrivateAppContext.Provider value={{selections, setSelection}}>
      {children}
   </PrivateAppContext.Provider>
}