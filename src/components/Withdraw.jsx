import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Card from "./DashElement";
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../App';
import { UserContext } from '../App';
import axios from "axios";
import uniqid from 'uniqid';
const serverUrl = 'http://localhost:8080'


function Withdraw(){
  const [loggedIn, setLoggedIn]       = useContext(LoginContext);
  const user                          = useContext(UserContext);
  const [depo, SetDepo]               = useState('');
  const [isValid, setValid]           = useState(false);
  const [show, setShow]               = useState(false);
  var currentBalance                  = 0;
  var amount                          = 0;  

    const validate = () => {
        return depo.length;
      };
  
    useEffect(() => {
      const isValid = validate();
      setValid(isValid);
      if (depo.length > 0){
        amount = document.getElementById('deposit').value
      };
      if(amount > currentBalance){
        setValid(false);
        setShow(true);
      }else{
        setShow(false);
      }
    }, [depo]);

    if(user){
        currentBalance = user.transactions.length !== 0 ? user.transactions[user.transactions.length -1].balance : 0;
    }
    
    const handleWithdraw = async () => {
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
        await axios.post(serverUrl + '/withdraw', {
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
                  <h1>Withdrawals</h1>
                    <Card
                      bgcolor="secondary"
                      header="Withdraw"
                      title="Withdraw Money from your Account"
                      text= {( <> <br /><h3>Balance: $ {currentBalance}.00</h3><br/> </>)}
                      body={(
                        <>
                          <h3>Withdrawal Amount</h3> 
                          <br/>
                          {show && <span className="overdrawn">
                            You have insufficient funds for the entered Withdrawal Amount
                            <br />
                            Please enter an Amount that does not exceed your Balance.
                          </span>}
                          <br /><br />
                          <div className='container-fluid'>
                            <div className='row d-flex '>
                              <div className='col d-flex justify-content-center'>
                                <form>
                                  <input 
                                    type="number" 
                                    className="form-control depo" 
                                    id="deposit" 
                                    placeholder="Enter Withdrawal Amount"
                                    onChange={(e) => SetDepo(e.target.value)}
                                  />
                                  <br/>
                                  <Button 
                                    className='info-btn' 
                                    variant="danger" 
                                    type="submit" 
                                    id="deposit-submit" 
                                    disabled={!isValid} 
                                    onClick={handleWithdraw} 
                                  >
                                      Withdraw
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

export default Withdraw;