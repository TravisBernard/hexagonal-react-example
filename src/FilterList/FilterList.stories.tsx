import React from 'react';
import { Meta } from '@storybook/react';
import { FilterList } from './FilterList';

export default {
   title: "FilterList",
   component: FilterList,
} as Meta

const Template = (args) => <FilterList {...args} />;

export const BasicRender = Template.bind();
BasicRender.args = {
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
   ]
}