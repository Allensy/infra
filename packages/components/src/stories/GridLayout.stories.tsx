import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GridLayout } from '../GridLayout/GridLayout';

export default {
    title: "Example/GridLayout",
    component: GridLayout
} as Meta;

export const Template: Story = () => <GridLayout></GridLayout>;

const Basic = Template.bind({});



