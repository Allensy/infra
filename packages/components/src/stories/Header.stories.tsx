import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '../Header/Header';

export default {
    title: 'Example/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: "This is my title!",
    fontSize: "18px"
};
