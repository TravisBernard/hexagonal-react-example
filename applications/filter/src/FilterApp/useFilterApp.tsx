import React, {useContext} from 'react'
import {FilterAppPrivateContext} from "./FilterAppContext";

export function useFilterApp() {
   const {selections, clearFilter} = useContext(FilterAppPrivateContext);

   return {
      selections,
      clearFilter
   }
}