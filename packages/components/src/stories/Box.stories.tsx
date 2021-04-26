import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '../Box/Box';

export default {
    title: 'Example/Box',
    component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    text: ""
};