import React from 'react';
import styled from 'styled-components';
import {Filter, Props as filterProp} from "../Filter";

const FilterListContainer = styled.div``;

export interface Props {
   filters: filterProp[]
}

export const FilterList: React.FC<Props> = ({filters}) => {

   return <FilterListContainer>
      {filters.map(f => <Filter {...f} />)}
   </FilterListContainer>
}