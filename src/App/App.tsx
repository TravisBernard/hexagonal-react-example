import React from 'react'
import styled from 'styled-components';
import { SelectionsProvider } from "./AppContext";
import {FilterList, Props as FilterListProps} from "../FilterList";

const AppWrapper = styled.div``;
const AppTitle = styled.h1``;

export interface Props extends FilterListProps {
   title: string
   defaults?: {
      [key: string]: string | null
   }
}

export const App: React.FC<Props> = ({title, defaults, filters}) => {
   return <AppWrapper>
      <SelectionsProvider defaults={defaults}>
         <AppTitle>{title}</AppTitle>
         <FilterList filters={filters}/>
      </SelectionsProvider>
   </AppWrapper>
}