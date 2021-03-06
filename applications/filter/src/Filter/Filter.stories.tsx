import React from 'react';
import { Meta } from '@storybook/react';
import { Filter } from './Filter';
import { FilterAppDataProvider } from "../FilterApp/FilterAppContext";

export default {
   title: "Filter",
   component: Filter,
} as Meta

const Template = (args) => <FilterAppDataProvider><Filter {...args} /></FilterAppDataProvider>;

// @ts-ignore
export const BasicRender = Template.bind();
BasicRender.args = {
   title: "Colour",
   fieldName: "color",
   options: [{
      name: "Red",
      value: "red"
   },{
      name: "Blue",
      value: "blue"
   },{
      name: "Green",
      value: "green"
   }]
}