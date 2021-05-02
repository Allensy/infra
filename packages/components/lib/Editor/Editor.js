import { __makeTemplateObject } from "tslib";
import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import styled from 'styled-components';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    // display: grid;\n    min-height: 200px;\n"], ["\n    width: 100%;\n    height: 100%;\n    // display: grid;\n    min-height: 200px;\n"])));
var CodeEditor = function (_a) {
    var value = _a.value, _b = _a.dark, dark = _b === void 0 ? false : _b;
    useEffect(function () {
        var theme = 'vs';
        if (dark) {
            theme = 'vs-dark';
        }
        monaco.editor.setTheme(theme);
        return function () { };
    }, [dark]);
    var editorHandler = function (value, e) {
        console.log(value, e);
    };
    return (React.createElement(Container, null,
        React.createElement(MonacoEditor, { onChange: editorHandler, value: value, options: { automaticLayout: true } })));
};
var TextEditor = function (_a) {
    var _b = _a.value, value = _b === void 0 ? '' : _b;
    var _c = useState(value), currentValue = _c[0], setValue = _c[1];
    useEffect(function () {
        // console.log('called');
        // setValue(value);
        // return () => {
        //     console.log(currentValue,'return')
        // }
    });
    var editorHandler = function (_a) {
        var value = _a.target.value;
        setValue(value);
    };
    return (React.createElement("textarea", { onChange: editorHandler, className: "TextEditor", autoFocus: true, value: currentValue, cols: 30, rows: 10 }));
};
export { CodeEditor, TextEditor };
var templateObject_1;
//# sourceMappingURL=Editor.js.map