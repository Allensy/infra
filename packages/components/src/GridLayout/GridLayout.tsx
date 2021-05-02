import React, { useEffect, useState } from 'react';
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import styled, { css, ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import './GridLayout.css';


const ResponsiveGridLayout = WidthProvider(RGL);

// interface Item extends Layout {
//     title: string,
//     value: number
// }

const GridLayout = () => {
    const [layout, setLayout] = useState<Layout[]>([{ i: 'add', x: 0, y: 0, w: 2, h: 2, minH: 2, maxH: 4, minW: 2, maxW: 4 }]);

    const addItem = (item: Layout) => () => {
        if (item.i === 'add') {
            const newItem: Layout = {
                i: uuidv4(),
                x: (layout.length * 2) % (12),
                y: Infinity,
                w: 2,
                h: 2
            };
            setLayout(layout.concat(newItem));
            // GridLayoutStore.addItem('new', 223);
        } else {
            // GridLayoutStore.removeItem(item.i)
        }
    }

    console.log(layout)
    return (
        <ResponsiveGridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            onResize={() => { console.log('now') }}
            onDragStart={(e, b, t) => console.log(e, b, t)}
            width={1200}>
            {layout.map(item =>
                <div data-grid={item} key={item.i} onClick={addItem(item)}>
                    <GridItem>{item.i}
                    </GridItem>
                </div>
            )}
        </ResponsiveGridLayout>
    )
};

type GridItemProps = {
    title?: string,
    children?: JSX.Element | string | number,
    value?: number
}

const GridItem = ({ title, children, value }: GridItemProps) => {

    const GridItemContainer = styled.div`
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;

    return (
        <GridItemContainer>
            {children}
        </GridItemContainer>
    )
}




export {
    GridLayout,
    GridItem
};