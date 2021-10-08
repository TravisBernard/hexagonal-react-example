import React from 'react'
import styled from "styled-components";

const FilterTitle = styled.h2``
const FilterOptList = styled.ul``
const FilterOpt = styled.li``
const FilterOptLabel = styled.label``
const FilterOptTickbox = styled.input``

interface Props {
   title: string
   options: [{
      name: string,
      value: string
   }]
   defaultOption?: string
}

export const Filter: React.FC<Props> = ({title, options, defaultOption}) => {
   return <>
      <FilterTitle>{title}</FilterTitle>
      <FilterOptList>{options.map((opt) => {
         return <FilterOpt>{opt.name}</FilterOpt>
      })}</FilterOptList>
   </>
}