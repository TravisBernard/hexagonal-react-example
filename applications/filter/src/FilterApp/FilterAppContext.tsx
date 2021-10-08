import React, {createContext, useReducer, useState} from 'react';


interface SelectionType {
   [key: string]: string | null
}

interface PrivateProviderProps {
   defaults?: SelectionType
}

export interface ContextType {
   selections: SelectionType,
   setFilter: (a: SelectionType) => void
   clearFilter: (a: string) => void
   clearAllFilters: () => void
}

function warnMissingProvider() {
   console.warn('FilterAppDataProvider not included in DOM')
};

export const FilterAppPrivateContext = createContext({
   selections: {},
   setFilter: warnMissingProvider,
   clearFilter: warnMissingProvider,
   clearAllFilters: warnMissingProvider,
} as ContextType);

function selectionsReducer(selections: SelectionType, change: SelectionType) {
   return {...selections, ...change}
}

export const FilterAppDataProvider: React.FC<PrivateProviderProps> = ({defaults = {}, children}) => {
   const [selections, setSelections] = useState(defaults)
   const [oldSel, oldSetSel] = useReducer(selectionsReducer, defaults);

   const dataLayer = {
      selections,
      setFilter: (change: SelectionType) => setSelections(selectionsReducer(selections, change)),
      clearFilter:  (key: string) => {
         const { [key]: _, ...rest } = selections;
         setSelections({...rest})
      },
      clearAllFilters: () => {
         setSelections({})
      }
   }

   return <FilterAppPrivateContext.Provider value={dataLayer}>
      {children}
   </FilterAppPrivateContext.Provider>
}