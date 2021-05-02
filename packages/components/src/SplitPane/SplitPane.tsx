// import { observer } from 'mobx-react-lite';
// import React from 'react';
// import SplitPane from 'react-split-pane';
// import { useStores } from '../../hooks/use-stores';
// import { BottomExplorer, Explorer } from '../Explorer/Explorer';
// import './MainView.scss';

// const MainView = observer(() => {
//     const { user, socketStore } = useStores();
//     return (
//         <SplitPane
//             split="vertical">
//             <Explorer
//                 minSize="50"
//                 initialSize="0.3" />
//             {/* <SplitPane split="horizontal"> */}
//             <div>{socketStore.selectedUser.userId}</div>
//             {/* <BottomExplorer initialSize="0.4" /> */}
//             {/* </SplitPane> */}
//         </SplitPane>
//     )
// })


// export {
//     MainView
// };