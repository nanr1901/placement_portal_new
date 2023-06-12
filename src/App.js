import './App.css';
import Home from './routes/Home/Home';
import StudentProfile from './routes/StudentProfile/StudentProfile';
import SignUp from './routes/SignUp/SignUp';
import StudentSignIn from './routes/SignIn/StudentSignIn/StudentSignIn';
import RecSignIn from './routes/SignIn/StudentSignIn/RecSignIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-main'>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StudentProfile" element={<StudentProfile/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/StudentSignIn" element={<StudentSignIn/>}/>
          <Route path="/RecSignIn" element={<RecSignIn/>}/>
          {/* <Route path="/mim" element={<MimicScreen />} /> */}
          
        </Routes>
      
    </div>
  );
}

export default App;