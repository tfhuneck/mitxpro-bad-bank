import './index.css';
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './bank.png'
import Nav from './components/Nav';
import UserPanel from './components/UserPanel';
import Home from './components/Home';
import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Login from './components/Login';
import Register from './components/Register';
import UserData from './components/Userdata';
import firebaseApp from './firebase.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

export const LoginContext   = createContext();
export const UserContext    = createContext();

function App() {
  const serverUrl                 = `${process.env.REACT_APP_production_url}`
  const auth                      = getAuth(firebaseApp);
  const [loggedIn, setLoggedIn]   = useState(false);
  const [ uid, setUid  ]          = useState();
  const [ user, setUser ]         = useState();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUid(user.uid);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      // User is signed out
    }
  });

  useEffect(()=>{
    if(loggedIn === true){
      const getUser = async () => {
        await axios.post(serverUrl + '/user',{
           'userid': uid
        })
          .then((res) => {
           const userData = res.data
            setUser(userData);
            // console.log(userData);
          })
          .catch(err => console.log(err));
        }
      getUser();
    }
  }, [onAuthStateChanged, loggedIn, uid])

  return(
    <>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}> 
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-sm-2 fixed-top one'>
                  <Nav/>   
                </div>
              </div>
              <div className="fixed-top">
                  <UserPanel/>
              </div>
              <Routes>
                <Route path='/' index element={<Home/>}/>
                <Route path='/balance' index element={<Balance/>}/>
                <Route path='/deposit' index element={<Deposit/>}/>
                <Route path='/withdraw' index element={<Withdraw/>}/>
                <Route path='/userdata' index element={<UserData/>}/>
                <Route path='/login' index element={<Login/>}/>
                <Route path='/register' index element={<Register/>}/>
              </Routes>
            </div>
          </BrowserRouter>
        </UserContext.Provider>
      </LoginContext.Provider>
    </>
  )
}

export default App;
