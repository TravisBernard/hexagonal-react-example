import React from 'react';
import styled from 'styled-components';
import { FilterApp, FilterAppDataProvider } from 'filter-application'
import { Breadcrumbs } from './Breadcrumbs'

const Wrapper = styled.div``;
const AppTitle = styled.h1`
   font-size: 4rem;
`;

export const SuperApp: React.FC<{}> = () => {
   const filterDetails = {
      filters: [
         {
            title: "Colour",
            fieldName: "color",
            options: [{
               name: "Red",
               value: "red"
            }, {
               name: "Blue",
               value: "blue"
            }, {
               name: "Green",
               value: "green"
            }]
         },
         {
            title: "Size",
            fieldName: "size",
            options: [{
               name: "Small",
               value: "small"
            }, {
               name: "Medium",
               value: "medium"
            }, {
               name: "Large",
               value: "large"
            }]
         },
      ],
      defaults: {
         color: 'blue'
      }
   }

   return <Wrapper>
      <AppTitle>My Cool New-Age Platform</AppTitle>
      <FilterAppDataProvider defaults={filterDetails.defaults}>
         <Breadcrumbs filters={filterDetails.filters} />
         <FilterApp title={"Filter Products By:"} filters={filterDetails.filters}/>
      </FilterAppDataProvider>
   </Wrapper>
}