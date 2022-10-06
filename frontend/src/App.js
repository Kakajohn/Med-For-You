import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import FrontPage from './components/FrontPage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Messenger from './components/Messenger';
import ProtectRoute from './components/ProtectRoute';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/med4u/login' element={<Login />} />
          <Route path='/med4u/register' element={<Register />} /> */}
          <Route
            path='/'
            element={
              // <ProtectRoute>
                <FrontPage />
              // </ProtectRoute>
            }
          />
          <Route
            path='/med4u/chat'
            element={
              // <ProtectRoute>
                <Messenger />
              // </ProtectRoute>
            }
          />
          <Route
            path='/med4u/articles'
            element={
              // <ProtectRoute>
                <Articles />
              // </ProtectRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
