import Card from "./DashElement";
import Button from 'react-bootstrap/Button'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../App';
import { UserContext } from '../App';

function Home(){
    const [loggedIn, setLoggedIn]   = useContext(LoginContext);
    const user                      = useContext(UserContext);
    
    if(loggedIn && user){
        let username = user.name;
        const currentBalance = user.transactions.length !== 0 ? user.transactions[user.transactions.length -1].balance : 0;
        return (
            <>
                <div className="user-dash">
                    <div className="row">
                        <div className="col">
                            <h1>BadBank Home</h1>
                            <Card
                                class="home"
                                txtcolor="white"
                                header="BadBank Homepage"
                                title="Welcome to the BadBank"
                                // text={(<h5>{username}</h5>)}
                                body={(
                                    <>
                                        <br />
                                        <h5>Hello {username}</h5>
                                        Welcome to your Bad Bank account. 
                                        <br />
                                        You can check your balance, make deposits and withdraws.
                                        <br /><br />
                                        <h3>Your current Balance is $ {currentBalance}.00 </h3>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </>
        );  
    }else{
        return (
            <>
                <div className="user-dash">
                    <div className="row">
                        <div className="col">
                            <h1>BadBank Home</h1>
                            <Card
                                class="home"
                                txtcolor="white"
                                header="BadBank Homepage"
                                title="Welcome to the BadBank"
                                text="We value your privacy as much as you value your money"
                                body={(
                                    <>
                                        <br /><br />
                                        Please login to acces your Bad Bank account
                                        <br /><br />
                                        <Link to='/login'>
                                            <Button className='info-btn' variant="danger">Log In</Button>
                                        </Link>
                                        <br />
                                        If you don't have an account yet register here 
                                        <br /><br />
                                        <Link to='/register'>
                                            <Button className='info-btn' variant="danger">Register</Button>
                                        </Link>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </>
        );  
    }
}
  
export default Home;



