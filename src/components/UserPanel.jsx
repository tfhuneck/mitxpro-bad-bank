import { NavLink, Link, useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase.js';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../App';
import { UserContext } from '../App';
import { getAuth, signOut } from "firebase/auth";

function UserPanel() {
    const auth                      = getAuth(firebaseApp);
    const [loggedIn, setLoggedIn]   = useContext(LoginContext);
    const user                      = useContext(UserContext);
    const navigate                  = useNavigate();
    

    const handleSignout = async () => {
            signOut(auth).then(() => {
                console.log('Log-out successful');
                alert('Log-out successful');
                navigate('/');
            // Log-out successful.
            }).catch((error) => {
            // An error happened.
        });
    }
    if(loggedIn && user) {
        const username  = user.name
        const email     = user.email
        return (
            <>
                <div className='card usr container-fluid'>
                    <div className='row d-flex '>
                        <div className='col d-flex justify-content-center'>
                           
                        </div>
                    </div>
                    <div className='row d-flex '>
                        <div className='col d-flex justify-content-center'>
                            <br />
                            {username}
                            <br />
                            {email}
                        </div>
                    </div>
                    <div className='card-body d-flex flex-column justify-content-evenly'>
                        <div className='row justify-content-center'>
                            <Link className='user-nav-link' to='/userdata'>
                                <div className='col'>
                                    <svg 
                                        className='user-nav-icn'
                                        stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        version="1.1" 
                                        x="0px" 
                                        y="0px" 
                                        viewBox="0 0 54.691 68.36375000000001" 
                                    >
                                        <path
                                            fill="currentColor" 
                                            d="M-4318.56-68.404c-43.25,0-78.438,35.186-78.438,78.435c0,43.252,35.188,78.439,78.438,78.439s78.436-35.188,78.436-78.439   C-4240.124-33.218-4275.31-68.404-4318.56-68.404z M-4318.867-35.187c13.682,0,24.771,11.092,24.771,24.771   c0,13.681-11.092,24.771-24.771,24.771c-13.683,0-24.771-11.092-24.771-24.771C-4343.639-24.095-4332.55-35.187-4318.867-35.187z    M-4274.686,65.074c-12.042,9.627-27.292,15.396-43.874,15.396c-16.562,0-31.797-5.75-43.834-15.354   c1.116-19.851,14.187-39.903,30.178-39.903h27.332c16.024,0,29.128,19.324,30.197,39.206c0.001,0.002,0.001,0.004,0.001,0.006   C-4274.686,64.427-4274.686,64.786-4274.686,65.074z"
                                        />
                                        <circle 
                                            fill="currentColor" 
                                            cx="27.443" 
                                            cy="21.101" 
                                            r="7.807"
                                        />
                                        <path 
                                            fill="currentColor"
                                            d="M27.345,2.659c-13.612,0-24.687,11.074-24.687,24.686c0,13.613,11.074,24.688,24.687,24.688   s24.687-11.074,24.687-24.688C52.032,13.733,40.958,2.659,27.345,2.659z M40.915,44.937c-0.269-6.156-4.318-12.13-9.278-12.13   h-8.387c-5,0-9.074,6.071-9.283,12.279c-5.373-4.062-8.853-10.502-8.853-17.742c0-12.258,9.974-22.23,22.231-22.23   c12.259,0,22.231,9.973,22.231,22.23C49.577,34.498,46.178,40.867,40.915,44.937z"
                                        />
                                    </svg>
                                </div>
                                <div className='col nav-txt'>
                                    Profile
                                </div>
                            </Link>
                        </div>
                        <div className='row justify-content-center'>
                            <Link className='user-nav-link' onClick={handleSignout} >
                                <div className='col'>
                                    <svg 
                                            className='user-nav-icn'
                                            xmlns="http://www.w3.org/2000/svg" 
                                            version="1.1" 
                                            x="0px" 
                                            y="0px" 
                                            viewBox="0 0 100 125" 
                                        >
                                            <path 
                                                fill='currentColor'
                                                d="M25,86h29c2.8,0,5-2.2,5-5s-2.2-5-5-5H25c-2.2,0-4-1.8-4-4V28c0-2.2,1.8-4,4-4h29c2.8,0,5-2.2,5-5s-2.2-5-5-5H25   c-7.7,0-14,6.3-14,14v44C11,79.7,17.3,86,25,86z"
                                            />
                                            <path 
                                                fill='currentColor'
                                                d="M75,31c-2-2-5.1-2-7.1,0c-2,2-2,5.1,0,7.1l7,7H38c-2.8,0-5,2.2-5,5s2.2,5,5,5h35.9l-6,6c-2,2-2,5.1,0,7.1   c1,1,2.3,1.5,3.5,1.5S74.1,69,75,68l15-15c2-2,2-5.1,0-7.1L75,31z"
                                            />
                                    </svg>
                                </div>
                                <div className='col nav-txt'>
                                    Logout
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }else {
        return (
            <>
                <div className='card usr container-fluid'>
                    <div className='row d-flex '>
                        <div className='col d-flex justify-content-center'>
                           
                        </div>
                    </div>
                    <div className='row d-flex '>
                        <div className='col d-flex justify-content-center'>
                            <br />
                            
                        </div>
                    </div>
                    <div className='card-body d-flex flex-column justify-content-evenly'>
                        <div className='row justify-content-center'>
                            <Link className='user-nav-link' to='/login'>
                                <div className='col'>
                                    <svg 
                                        className='user-nav-icn'
                                        xmlns="http://www.w3.org/2000/svg"  
                                        x="0px" 
                                        y="0px" 
                                        viewBox="0 0 100 125" 
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M86,11.5H34.9c-2.5,0-4.4,2-4.4,4.5v17.3c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5V20.5h42v59h-42V66.7   c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5V84c0,2.5,1.9,4.5,4.4,4.5H86c2.5,0,4.5-2,4.5-4.5V16C90.5,13.5,88.5,11.5,86,11.5z"
                                        />
                                        <path 
                                            fill="currentColor" 
                                            d="M48.2,62.5c-0.8,0.9-1.3,2-1.3,3.2s0.5,2.3,1.3,3.2c0.8,0.8,2,1.3,3.2,1.3c1.2,0,2.3-0.5,3.2-1.3L70.2,53   c1.7-1.7,1.7-4.6,0-6.3L54.6,30.9c-0.8-0.9-2-1.3-3.2-1.3c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c-0.9,0.8-1.3,2-1.3,3.2   s0.5,2.3,1.3,3.2l8.1,8.2L14,45.5c-2.5,0-4.5,2-4.5,4.5c0,2.5,2,4.5,4.5,4.5l42.2-0.1L48.2,62.5z"
                                        />
                                    </svg>
                                </div>
                                <div className='col nav-txt'>
                                   Login
                                </div>
                            </Link>
                        </div>
                        <div className='row justify-content-center'>
                            <Link className='user-nav-link' onClick={handleSignout} >
                                <div className='col'>
                                </div>
                                <div className='col nav-txt'>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
    
            </>
        )
    }
}

export default UserPanel;