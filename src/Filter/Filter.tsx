import React, {ChangeEvent, useContext} from 'react'
import styled from "styled-components";
import { PrivateAppContext, ContextType } from "../App/AppContext";

const FilterTitle = styled.h2``
const FilterOptList = styled.ul`
   padding-left: 0;
`
const FilterOpt = styled.li`
   list-style: none;
   margin-left: 0;
`
const FilterOptLabel = styled.label``
const FilterOptTickbox = styled.input``

export interface Props {
   title: string
   fieldName: string
   options: [{
      name: string,
      value: string
   }]
}

export const Filter: React.FC<Props> = ({title, fieldName, options}) => {

   const {selections, setSelection} = useContext(PrivateAppContext)

   const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
      setSelection({[fieldName]: e.target.value})
   }

   function isSelected(selections: ContextType['selections'], fieldName: Props['fieldName'], value: Props['options'][0]['value']) {
      return (fieldName in selections) && selections[fieldName] === value;
   }

   return <>
      <FilterTitle>{title}</FilterTitle>
      <FilterOptList>{options.map((opt) => {
         const {name, value} = opt;
         return <FilterOpt key={value}>
            <FilterOptLabel><FilterOptTickbox type={"radio"} name={fieldName} value={value} checked={isSelected(selections, fieldName, value)} onChange={onSelect}/>{name}</FilterOptLabel>
         </FilterOpt>
      })}</FilterOptList>
   </>
}