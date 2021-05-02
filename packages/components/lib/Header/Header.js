import { __makeTemplateObject } from "tslib";
import * as React from "react";
import styled, { ThemeProvider } from 'styled-components';
var defaultTheme = {
    mainBackground: "palevioletred",
    mainFontColor: "#343",
};
var darkTheme = {
    mainBackground: "#333",
    mainFontColor: "palevioletred",
};
export var Header = function (_a) {
    var title = _a.title, _b = _a.dark, dark = _b === void 0 ? false : _b, _c = _a.fontSize, fontSize = _c === void 0 ? '14px' : _c;
    var StyledHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    padding: 20px 0;\n    background-color: ", ";\n    color: ", ";\n    transition: 0.2s background-color ease-in-out;\n    display: flex;\n    justify-content: center;\n    font-size: ", ";\n    "], ["\n    width: 100%;\n    padding: 20px 0;\n    background-color: ", ";\n    color: ", ";\n    transition: 0.2s background-color ease-in-out;\n    display: flex;\n    justify-content: center;\n    font-size: ", ";\n    "])), function (props) { return props.theme.mainBackground; }, function (props) { return props.theme.mainFontColor; }, function (props) { return props.fontSize; });
    return (React.createElement(ThemeProvider, { theme: dark ? darkTheme : defaultTheme },
        React.createElement(StyledHeader, { fontSize: fontSize },
            " ",
            title)));
};
var templateObject_1;
//# sourceMappingURL=Header.js.map