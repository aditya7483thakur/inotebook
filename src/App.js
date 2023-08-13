import './App.css';
import {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert alert={alert}></Alert>
            <div className="container">
            <Routes>
              <Route exact path='/' element={<Home  showAlert={showAlert}/>}></Route>
              <Route exact path='/about' element={<About />} ></Route>
              <Route exact path='/login' element={<Login showAlert={showAlert}/>} ></Route>
              <Route exact path='/signup' element={<SignUp showAlert={showAlert}/>} ></Route>
            </Routes>
            </div>
          </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
