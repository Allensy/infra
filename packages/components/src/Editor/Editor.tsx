import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';
import styled, { css, ThemeProvider } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;


export type EditorProps = {
    value?: string,
    dark?: boolean
}

const CodeEditor = ({ value, dark = false }: EditorProps) => {

    useEffect(() => {
        let theme = 'vs';
        if (dark) {
            theme = 'vs-dark';
        }
            monaco.editor.setTheme(theme);
        return () => {};
    }, [dark]);

    const editorHandler = (value: string, e: object) => {
        console.log(value, e);
    }

    return (
        <Container>
            <MonacoEditor
                onChange={editorHandler}
                value={value}
                options={{ automaticLayout: true }} />
        </Container>
    )
}

const TextEditor = ({ value = '' }: EditorProps) => {
    const [currentValue, setValue] = useState(value);

    useEffect(() => {
        // console.log('called');
        // setValue(value);
        // return () => {
        //     console.log(currentValue,'return')
        // }
    })
    const editorHandler = ({ target: { value } }: any) => {
        setValue(value);
    }
    return (
        <textarea
            onChange={editorHandler}
            className="TextEditor"
            autoFocus
            value={currentValue}
            cols={30}
            rows={10}>
        </textarea>
    )
}

export { CodeEditor, TextEditor };