/// <reference types="react" />
import './StocksLayout.scss';
declare const GridLayout: () => JSX.Element;
declare type GridItemProps = {
    title?: string;
    children?: JSX.Element | string | number;
    value: number;
};
declare const GridItem: ({ title, children, value }: GridItemProps) => JSX.Element;
export { GridLayout, GridItem };
//# sourceMappingURL=GridLayout.d.ts.map