import React from 'react';
import {Meta} from '@storybook/react';
import {SuperApp} from './SuperApp'

export default {
   title: "SuperApp",
   component: SuperApp,
} as Meta

const Template = () => (<SuperApp />);

// @ts-ignore
export const BasicRender = Template.bind();
BasicRender.args = {}