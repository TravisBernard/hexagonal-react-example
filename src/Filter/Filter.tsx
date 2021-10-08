import React, {ChangeEvent, useContext} from 'react'
import styled from "styled-components";
import { PrivateAppContext, ContextType } from "../App/AppContext";

const FilterTitle = styled.h2``
const FilterClearBtn = styled.button`
   font-size:.5em;
   text-decoration: underline;
   background: none;
   border: none;
   color: blue;
   padding-left: 1rem;
`
const FilterOptList = styled.ul`
   padding-left: 0;
`
const FilterOpt = styled.li`
   list-style: none;
   margin-left: 0;
`
const FilterOptLabel = styled.label``
const FilterOptTickbox = styled.input``

export interface FilterProps {
   title: string
   fieldName: string
   options: {
      name: string,
      value: string
   }[]
}

export const Filter: React.FC<FilterProps> = ({title, fieldName, options}) => {

   const {selections, setFilter, clearFilter} = useContext(PrivateAppContext)

   const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
      setFilter({[fieldName]: e.target.value})
   }

   const onClear = () => {
      clearFilter(fieldName);
   }

   function isSelected(selections: ContextType['selections'], fieldName: FilterProps['fieldName'], value: FilterProps['options'][0]['value']) {
      return (fieldName in selections) && selections[fieldName] === value;
   }

   return <>
      <FilterTitle>{title}<FilterClearBtn onClick={onClear}>Clear</FilterClearBtn></FilterTitle>
      <FilterOptList>{options.map((opt) => {
         const {name, value} = opt;
         return <FilterOpt key={value}>
            <FilterOptLabel><FilterOptTickbox type={"radio"} name={fieldName} value={value} checked={isSelected(selections, fieldName, value)} onChange={onSelect}/>{name}</FilterOptLabel>
         </FilterOpt>
      })}</FilterOptList>
   </>
}