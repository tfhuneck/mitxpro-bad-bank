import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Card from "./DashElement";
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../App';
import { UserContext } from '../App';
import axios from "axios";
import uniqid from 'uniqid';
const serverUrl = 'http://localhost:8080'


function Deposit(){
    const [loggedIn, setLoggedIn]       = useContext(LoginContext);
    const user                          = useContext(UserContext);
    const [depo, SetDepo]               = useState('');
    const [isValid, setValid]           = useState(false);
    var currentBalance                  = 0

    const validate = () => {
        return depo.length;
      };
  
    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
      }, [depo]);
    
    if(user){
        currentBalance = user.transactions.length !== 0 ? user.transactions[user.transactions.length -1].balance : 0;
    }
    
    const handleDeposit = async () => {
        var amount = document.getElementById('deposit').value;
        var userid = user.userid;
        let newId   = uniqid();
        var date    = new Date();
        var year    = date.getFullYear();
        var month   = date.getMonth();
        var day     = date.getDate();
        var hour    = date.getHours();
        var min     = date.getMinutes();
        var sec     = date.getSeconds();
        var newTimestamp = year + '.' + month + '.' + day + ' - ' + hour + 'h:' + min + 'm:' + sec + 's';
        await axios.post(serverUrl + '/deposit', {
            'userid': userid,
            'transactionid': newId,
            'timestamp': newTimestamp,
            'transactionamount': amount
        })
    }

    if(loggedIn && user) {

        return (
          <>
             <div className="user-dash">
                <div className="row">
                    <div className="col">
                        <h1>Deposits</h1>
                        <Card
                            bgcolor="secondary"
                            header="Deposit"
                            title="Deposit Money to your Account"
                            text= {( <> <br /><h3>Balance: $ {currentBalance}.00 </h3><br/> </>)}
                            body={(
                                <>
                                    <h3>Deposit Amount</h3> 
                                    <br/>
                                    <div className='container-fluid'>
                                        <div className='row d-flex '>
                                            <div className='col d-flex justify-content-center'>
                                                <form>
                                                    <input 
                                                        type="number" 
                                                        className="form-control depo" 
                                                        id="deposit" 
                                                        placeholder="Enter Deposit Amount"
                                                        onChange={(e) => SetDepo(e.target.value)}
                                                    />
                                                    <br/>
                                                    <Button 
                                                        className='info-btn' 
                                                        variant="danger" 
                                                        type="submit" 
                                                        id="deposit-submit" 
                                                        disabled={!isValid} 
                                                        onClick={handleDeposit} 
                                                    >
                                                        Deposit
                                                    </Button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            </div>
          </>
        )
      } 
}

export default Deposit;