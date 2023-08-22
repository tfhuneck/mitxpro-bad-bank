import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Card from "./DashElement";
import Button from 'react-bootstrap/Button';
import { LoginContext } from '../App';
import { UserContext } from '../App';
import axios from "axios";
import uniqid from 'uniqid';
const serverUrl = 'http://localhost:8080'

function Balance(){
    const [loggedIn, setLoggedIn]       = useContext(LoginContext);
    const user                          = useContext(UserContext);
    var currentBalance                  = 0;
    var transactionData                 = null;

    if(user){
        currentBalance = user.transactions.length !== 0 ? user.transactions[user.transactions.length -1].balance : 0;
        transactionData = user.transactions;
    }

    if(loggedIn && user) {
        return (
            <>
                <div className="user-dash">
                    <div className="row">
                        <div className="col">
                            <h1>Balance</h1>
                            <Card
                                class=""
                                bgcolor="warning"
                                txtcolor="secondary"
                                header="Account Balance"
                                title={(
                                    <>
                                        <h3>Your current Balance is</h3>
                                        <br />
                                        <h3>$ {currentBalance}.00</h3>
                                    </>
                                )}
                                // text="This is your current Account Balance"
                                body={(
                                    <>  
                                        <br />
                                        <h4>Transaction history</h4>
                                        <br />
                                        <table className='table table-dark table-striped table-hover'>
                                            <thead>
                                                <tr>
                                                    <th>Transaction id</th>
                                                    <th>Timestamp</th>
                                                    <th>Transaction Amount</th>
                                                    <th>Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    transactionData.map((data, key) => {
                                                        return (
                                                            <>
                                                                <tr key={key}>
                                                                    <td>{data.transactionid}</td>
                                                                    <td>{data.timestamp}</td>
                                                                    <td>{data.transactionamount}</td>
                                                                    <td>{data.balance}</td>
                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
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
  
  export default Balance;