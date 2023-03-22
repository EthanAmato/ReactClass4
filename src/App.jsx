import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ContextExampleParent from './components/ContextExampleParent';
import ReducerCounter from './components/ReducerCounter';

function App() {
  const [count, setCount] = useState(0)

  //useContext() - bypass passing props down a long list of components
  //useReducer() - more dynamic, one-stop-shop for manipulating state


  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path='/about' element={<h1>About Page</h1>} />
          <Route path='/context' element={<ContextExampleParent />} />
          <Route path='/reducer' element={<ReducerCounter/>}/>
    </Route>
    </Routes >
  );
}

export default App
