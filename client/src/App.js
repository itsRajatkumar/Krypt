import './App.css';
import Landing from './components/Landing/Landing';
import Header from './components/Headers/Header';
import HeaderLog from './components/Headers/HeaderLog';
import Profile from './components/Profile/Profile';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            <Landing />
            </>
          }/>
          <Route path="/profile" element={
              <>
                <HeaderLog bg="blue" />
                <Profile />
              </>
          }/>
          <Route path="/login" element={
              <>
                <Header/>
               
              </>
          }/>
          <Route path="/signup" element={
              <>
                <Header/>
                
              </>
          }/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
