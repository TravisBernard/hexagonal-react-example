import React from 'react';
import { Meta } from '@storybook/react';
import { App } from './App';

export default {
   title: "App",
   component: App,
} as Meta

const Template = (args) => <App {...args} />;

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
         },{
            name: "Blue",
            value: "blue"
         },{
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
         },{
            name: "Medium",
            value: "medium"
         },{
            name: "Large",
            value: "large"
         }]
      },
   ],
   defaults: {
      color: 'blue'
   }
}