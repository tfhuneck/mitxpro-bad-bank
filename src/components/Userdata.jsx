import Card from "./DashElement";
import Button from 'react-bootstrap/Button'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../App';
import { UserContext } from '../App';
  
function UserData(){
    const [loggedIn, setLoggedIn]   = useContext(LoginContext);
    const user                      = useContext(UserContext);

    if(loggedIn && user){
        const transactions = JSON.stringify(user.transactions)
        return (
            <>
                <div className="user-dash">
                    <div className="row">
                        <div className="col">
                            <h1>User Data</h1>
                            <Card
                                    class="home"
                                    txtcolor="white"
                                    header="BadBank User Profile"
                                    title="This is your Userdata "
                                    // text="We value your privacy as much as you value your money"
                                    body={(
                                        <>
                                        <br />
                                           <p>Name: {user.name} </p>
                                           <p>Email: {user.email} </p>
                                           <p>Password: {user.password} </p>
                                           <p>User Id: {user.userid} </p>
                                           <p>Transactions: {transactions} </p>
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
  
  export default UserData;