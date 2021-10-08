import React from 'react';
import { Meta } from '@storybook/react';
import { Filter } from './Filter';
import { PrivateContextProvider } from "../App/AppContext";

export default {
   title: "Filter",
   component: Filter,
} as Meta

const Template = (args) => <PrivateContextProvider><Filter {...args} /></PrivateContextProvider>;

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