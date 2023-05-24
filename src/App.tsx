import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Task1 from './task/task1/Task1';
import Task2 from './task/task2/Task2';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/task1">Task 1</Link>
          </li>
          <li>
            <Link to="/task2">Task 2</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/task1' element={<Task1 />} />
          <Route path='/task2' element={<Task2 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
