import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
var CodeEditor = function (_a) {
    var value = _a.value;
    useEffect(function () {
        // monaco.editor.setTheme("vs-dark");
        return function () {
        };
    });
    var editorHandler = function (value, e) {
        console.log(value, e);
    };
    return (React.createElement("div", { className: "CodeEditor" },
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
//# sourceMappingURL=Editor.js.map