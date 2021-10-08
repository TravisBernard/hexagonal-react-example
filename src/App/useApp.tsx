import React, {useContext} from 'react'
import {PrivateAppContext} from "./AppContext";

export function useApp(intializer: AppProps) {
   const {selections} = useContext(PrivateAppContext);

   const getSelections = () => selections

   return {
      getSelections
   }
}