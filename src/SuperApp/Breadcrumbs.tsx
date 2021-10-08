import React from 'react';
import styled from 'styled-components'
import { useApp } from '../App'

const BreadcrumbList = styled.ul`
   margin: 0;
   padding: 0;
`;
const Breadcrumb = styled.li`
   display: inline;
   list-style: none;
   margin: 0;
   margin-right: 1em;
   padding: .5em;
   color: white;
   background-color: #1188FF;
   border-radius: 8px;
`;
const RemoveButton = styled.button`
   background: none;
   border: none;
   color: inherit;
   font-size: inherit;
`;

interface Props {
   filters: any
}

const filterActiveFilters = (selections) => (filter) => {
   return filter.fieldName in selections
}

const mapToNameValue = (selections) => (filter) => {
   const title = filter.title;
   const fieldName = filter.fieldName;
   const selectedOption = filter.options.filter(opt => opt.value === selections[filter.fieldName]);
   const value = selectedOption[0].name
   return {title, fieldName, value}
}

export const Breadcrumbs: React.FC<Props> = ({filters}) => {
   const {getSelections, clearFilter} = useApp();
   const selections = getSelections();

   let activeFilters = filters.filter(filterActiveFilters(selections));
   const breadcrumbs = activeFilters.map(mapToNameValue(selections))

   const onRemove = (filter) => () => clearFilter(filter);

   return <BreadcrumbList>
      {breadcrumbs.map(b => <Breadcrumb key={b.title + b.value}>{b.title}: {b.value} <RemoveButton onClick={onRemove(b.fieldName)}>X</RemoveButton></Breadcrumb>)}
   </BreadcrumbList>
}