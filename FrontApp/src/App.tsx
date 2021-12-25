import React from 'react';
import AuthPage from './pages/AuthPage';
import RegPage from './pages/RegPage';
import './assets/scss/main.scss';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './pages/MainPage/Profile';
import Friends from './pages/MainPage/Friends';
import Messages from './pages/MainPage/Messages';
import Settings from './pages/MainPage/Settings';
import OpenChat from './components/OpenChat';
import { useSelector } from 'react-redux';
import { RootReducerType } from './redux/reducers';


const App: React.FC = () => {

  const isAuth = !!(useSelector((state: RootReducerType) => state.auth.token))

  if (isAuth)
    return (
      <Router>
        <Routes>
          <Route path='/main' element={<MainPage/>}>
            <Route index element={<Navigate to='chats'/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='friends' element={<Friends/>}/>
            <Route path='chats' element={<Messages/>}/>
            <Route path='chats/:id' element={<OpenChat/>}/>
            <Route path='settings' element={<Settings/>}/>
            <Route path='*' element={<Navigate to='chats'/>}/>
          </Route>
          
          <Route path="*" element={<Navigate to='/main/chats'/>}/>
        </Routes>
      </Router>
    )
  else
    return (
      <Router>
        <Routes>
          <Route path='auth' element={<AuthPage/>}/>
          <Route path='reg' element={<RegPage/>}/>
          <Route index element={<Navigate to='auth'/>}/>
          <Route path="*" element={<Navigate to='auth'/>}/>
        </Routes>
      </Router>
    )
}

export default App
