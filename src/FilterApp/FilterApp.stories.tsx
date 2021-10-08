import React from 'react';
import {Meta} from '@storybook/react';
import {FilterApp} from './FilterApp';
import {FilterAppDataProvider} from "./FilterAppContext";

export default {
   title: "App",
   component: FilterApp,
} as Meta

const Template = ({title, filters, defaults}) => (
   <FilterAppDataProvider defaults={defaults}>
      <FilterApp title={title} filters={filters}/>
   </FilterAppDataProvider>
);

// @ts-ignore
export const BasicRender = Template.bind();
BasicRender.args = {
   title: 'Filter Products By:',
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