
import store from './redux/store.js';
import * as React from 'react';
import Login from './Login';
function App() {

  console.log(store)
  return (
      <Login store={store}/>
     );
            }
export default App;