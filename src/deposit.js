import userContext from "./context.js";
import {useContext,useState} from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Deposit()
{
    let users=useContext(userContext);
    let n=users.users.length;
    let [Balance,setBalance]=useState(users.users[n-1].amount)
    let [deposit,setDeposit]=useState(0)
    function handleSubmit(e)
    {
        e.preventDefault();
        let dep=Number(deposit)
        setBalance(Balance+dep)
        console.log(dep)
    }
    users.users[n-1].amount=Balance
    return(<>
    <h1>Deposit:</h1>
    <form onSubmit={handleSubmit}>
    <input type="number"onChange={(e)=>setDeposit(e.target.value)}></input>
    <Button variant="success" type="submit">Debit</Button>
    </form>
    <h2>Balance:{Balance}</h2>
    </>)
}

