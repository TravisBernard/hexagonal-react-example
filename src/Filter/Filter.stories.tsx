import React from 'react';
import { Meta } from '@storybook/react';
import { Filter } from './Filter';
import { FilterAppDataProvider } from "../App/AppContext";

export default {
   title: "Filter",
   component: Filter,
} as Meta

const Template = (args) => <FilterAppDataProvider><Filter {...args} /></FilterAppDataProvider>;

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