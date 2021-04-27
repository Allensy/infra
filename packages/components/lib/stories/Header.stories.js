import { __assign } from "tslib";
import React from 'react';
import { Header } from '../Header/Header';
export default {
    title: 'Example/Header',
    component: Header,
};
var Template = function (args) { return React.createElement(Header, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    title: "This is my title!",
    fontSize: "18px"
};
//# sourceMappingURL=Header.stories.js.map