import { __assign } from "tslib";
import React from 'react';
import { Header } from '../Header/Header';
export default {
    title: 'Example/Header',
    component: Header,
};
var Template = function (args) { return React.createElement(Header, __assign({}, args)); };
export var LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};
export var LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map