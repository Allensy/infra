import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CodeEditor, TextEditor, EditorProps } from '../Editor/Editor';

export default {
    title: "Example/Editor",
    component: CodeEditor
} as Meta;

const Template: Story<EditorProps> = (args) => <CodeEditor {...args} />

export const Basic = Template.bind({});
export const Dark = Template.bind({});

Dark.args = {
    dark: true,
    value: "Hello dark :)"
}
Basic.args = {
    value: "Hello world"
}

