import { __assign } from "tslib";
import React from 'react';
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
export default {
    title: 'Example/Page',
    component: Page,
};
var Template = function (args) { return React.createElement(Page, __assign({}, args)); };
export var LoggedIn = Template.bind({});
LoggedIn.args = __assign({}, HeaderStories.LoggedIn.args);
export var LoggedOut = Template.bind({});
LoggedOut.args = __assign({}, HeaderStories.LoggedOut.args);
//# sourceMappingURL=Page.stories.js.map