import React, {useContext} from 'react'
import {PrivateAppContext} from "./AppContext";

export function useApp() {
   const {selections, clearFilter} = useContext(PrivateAppContext);

   const getSelections = () => selections

   return {
      getSelections,
      clearFilter
   }
}