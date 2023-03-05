import { Route, Routes } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RatingPage from './pages/RatingPage';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import MainMenu from './pages/MainMenu';
import Header from './components/Header';
import Eror404 from './pages/ErrorPages/404';
import Forum from './pages/Forum';
import ForumTheme from './pages/Forum/ForumTheme';
import AboutUs from './pages/AboutUs';
import ChangePassword from './pages/Profile/ChangePassword';
import ChangeAvatar from './pages/Profile/ChangeAvatar';
import GamePage from './pages/GamePage';
import ChangeProfile from './pages/Profile/ChangeProfile';

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegisterPage />} />
        <Route path='/rating' element={<RatingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/change-password' element={<ChangePassword />} />
        <Route path='/profile/change-avatar' element={<ChangeAvatar />} />
        <Route path='/menu' element={<MainMenu />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/forum/:id' element={<ForumTheme />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='profile/edit' element={<ChangeProfile />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/*' element={<Eror404 />} />
      </Routes>
      <ToastContainer
        theme='dark'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
};

export default Layout;
