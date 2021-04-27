import { __assign } from "tslib";
import React from 'react';
import { CodeEditor } from '../Editor/Editor';
export default {
    title: 'Example/Editor',
    component: CodeEditor
};
var Template = function (args) { return React.createElement(CodeEditor, __assign({}, args)); };
var Basic = Template.bind({});
Basic.args = {
    value: "Hello world"
};
//# sourceMappingURL=Editor.stories.js.map