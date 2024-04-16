import './App.css';
 import Login1 from './Components/LoginPage/Login1';
import Homep from './Components/Home/Homepage.js'
import Videoc from './Components/Videocallpages/Videoc.js';
import RoomPage from './Components/Room/index.js';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar.js';
import LoginPopup from './Components/LoginPage/LoginPopup.js';
import DoctorsPage from './Components/Doctors/DoctorsPage.js';
import Doctors from './Components/Doctors/Doctors.js';
import VideoCalling from './Components/Videocallpages/VideoCalling.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
<LoginPopup/> 
 <Routes>
 <Route path='/' element={<Homep/>}/>
<Route path='/Login1' element={<Login1/>}/>
<Route path='/Videoc' element={<Videoc/>}/>
<Route path='/Doctors' element={<Doctors/>}/>
<Route path="/Videoc/Room/:RoomId"   component={RoomPage} element={<RoomPage/>} />

</Routes> 

{/* <DoctorsPage/> */}

     
    </div>
  );
}

export default App;

