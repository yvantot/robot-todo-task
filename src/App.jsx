import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Counter from './pages/Counter';
import ColorPicker from './pages/ColorPicker';
import FavoriteFood from './pages/FavoriteList';
import TodoList from './pages/TodoList';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <header className=''>
        <nav className='flex justify-between w-1/2 mx-auto text-slate-800 font-quicksand font-bold shadow-xl p-5 m-4 rounded-full'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/color-picker">Color Picker</NavLink>
          <NavLink to="/favorite-food">Favorite Lists</NavLink>
          <NavLink to="/todolist">Todolist</NavLink>
        </nav>
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="counter" element={<Counter></Counter>}></Route>
            <Route path="color-picker" element={<ColorPicker></ColorPicker>}></Route>
            <Route path="favorite-food" element={<FavoriteFood></FavoriteFood>}></Route>
            <Route path="todolist" element={<TodoList></TodoList>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
