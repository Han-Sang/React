import React, { Fragment } from 'react';
import {One} from './components/One'
import {Two} from './components/Two'

// function App() {
//   return (
//     <Fragment>
//       <p>hello world 1</p>
//       <p>hello world 2</p>
//     </Fragment>
//   );
// }

// function App() {
//   return (
//     <React.Fragment>
//       <p>hello world 1</p>
//       <p>hello world 2</p>
//     </React.Fragment>
//   );
// }

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <One />
      <Two />

    </>
  );
}

export default App;