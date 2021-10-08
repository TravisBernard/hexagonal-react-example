import React from 'react'
import styled from "styled-components";

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

interface Props {
   title: string
   fieldName: string
   options: [{
      name: string,
      value: string
   }]
   defaultOption?: string
}

export const Filter: React.FC<Props> = ({title, fieldName, options, defaultOption}) => {
   return <>
      <FilterTitle>{title}</FilterTitle>
      <FilterOptList>{options.map((opt) => {
         const {name, value} = opt;
         return <FilterOpt key={value}>
            <FilterOptLabel><FilterOptTickbox type={"radio"} name={fieldName} value={value}/>{name}</FilterOptLabel>
         </FilterOpt>
      })}</FilterOptList>
   </>
}