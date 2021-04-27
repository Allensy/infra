import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CodeEditor, TextEditor, EditorProps } from '../Editor/Editor';

export default {
    title: "Example/Editor",
    component: CodeEditor
} as Meta;

const Template: Story<EditorProps> = (args) => <CodeEditor {...args} />

export const Basic = Template.bind({});
Basic.args = {
    value: "Hello world"
}