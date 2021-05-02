import React, { useEffect, useState } from 'react';
// import { observer } from 'mobx-react';
// import { useStores } from '../../hooks/use-stores';
import RGL, { WidthProvider } from "react-grid-layout";
import './StocksLayout.scss';
// import StockItem from '../../models/StockItem';
var ResponsiveGridLayout = WidthProvider(RGL);
var GridLayout = function () {
    var _a = useState([]), layout = _a[0], setLayout = _a[1];
    useEffect(function () {
        layout.push({ i: 'add', x: 0, y: 0, w: 2, h: 2, minH: 2, maxH: 2, minW: 2, maxW: 2, title: "ADD", value: 127.21 });
    }, []);
    var addItem = function (item) { return function () {
        if (item.i === 'add') {
            // GridLayoutStore.addItem('new', 223);
        }
        else {
            // GridLayoutStore.removeItem(item.i)
        }
    }; };
    console.log(layout);
    return (React.createElement(ResponsiveGridLayout, { className: "layout", layout: layout, cols: 12, rowHeight: 30, onResize: function () { console.log('now'); }, onDragStart: function (e, b, t) { return console.log(e, b, t); }, width: 1200 }, layout.map(function (item) {
        return React.createElement("div", { "data-grid": item, key: item.i, onClick: addItem(item) },
            React.createElement(GridItem, { value: item.value, title: item.title }, item.i));
    })));
};
var GridItem = function (_a) {
    var title = _a.title, children = _a.children, value = _a.value;
    return (React.createElement("div", { className: "GridItem", style: { border: '1px solid red' } },
        React.createElement("div", { className: "GridItem_header" })));
};
export { GridLayout, GridItem };
//# sourceMappingURL=GridLayout.js.map