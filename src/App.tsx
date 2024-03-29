import Message from './message'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import ListGroup from './components/listgroup';
import { useEffect, useState } from 'react';
import './App.css'
import TodoList from './components/todolistgroup';
import warning from './components/warning';
import Warning from './components/warning';
import CreateForm from './components/createform';
import UpdateForm from './components/updateform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListGroup></ListGroup>}></Route>
        <Route path="/todo">
          <Route index element={<Warning></Warning>}></Route>
          <Route path=":id" element={<TodoList></TodoList>}></Route>
        </Route>
        <Route path="/update">
          <Route index element={<Warning></Warning>}></Route>
          <Route path=":id" element={<UpdateForm></UpdateForm>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;