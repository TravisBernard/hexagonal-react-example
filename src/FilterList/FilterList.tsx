import React, {useContext} from 'react';
import styled from 'styled-components';
import {Filter, Props as filterProp} from "../Filter";
import { PrivateAppContext } from "../App/AppContext";

const FilterListContainer = styled.div``;
const FilterListClearBtn = styled.button`
   font-size:1rem;
   text-decoration: underline;
   background: none;
   border: none;
   color: blue;
   padding: 0;
`

export interface Props {
   filters: filterProp[]
}

export const FilterList: React.FC<Props> = ({filters}) => {
   const { clearAllFilters } = useContext(PrivateAppContext);

   const onClear = () => {
      clearAllFilters();
   }

   return <FilterListContainer>
      <FilterListClearBtn onClick={onClear}>Clear All</FilterListClearBtn>
      {filters.map(f => <Filter {...f} />)}
   </FilterListContainer>
}