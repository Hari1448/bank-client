// import userContext from "./context.js";
// import {useContext,useState} from "react";
// import {Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function Cashback()
// {
//     let users=useContext(userContext);
//     let [Balance,setBalance]=useState(users.users[0].amount)
//     let [cashback,setCashback]=useState(0)
//     function handleSubmit(e)
//     {
//         e.preventDefault();
//         let cash=Number(cashback)
//         setBalance(Balance-cash)
//         }
//     users.users[0].amount=Balance
//     if (isNaN(cash) || cash <= 0) {
//          alert("Please enter a valid amount.");
//      if (cash > Balance) {
//      alert("Insufficient balance! Please enter a smaller amount.");
//      }
//      else
//      {
//     alert(`Withdrawal successful!}`);
//     }
// }
//     return(<>
//     <h1>Cashback:</h1>
//     <form onSubmit={handleSubmit}>
//     <input type="number"onChange={(e)=>setCashback(e.target.value)}></input>
//     <Button variant="success" type="submit">Withdraw</Button>
//     </form>
//     <h2>Balance:{Balance}</h2>
//     </>)
// }


import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cashback() {
    const users = useContext(userContext);
    let n=users.users.length;
    const [balance, setBalance] = useState(users.users[n-1].amount);
    const [cashback, setCashback] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const amount = Number(cashback);
       console.log(amount)
        // Validation checks
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        if (amount > balance) {
            alert("Insufficient balance! Please enter a smaller amount.");
            return;
        }

        // Deduct cashback and update user balance
        const newBalance = balance - amount;
        setBalance(newBalance);
        users.users[n-1].amount = newBalance;

        alert(`Withdrawal successful! Remaining balance: ₹${newBalance}`);
        setCashback(''); // Clear the input after submission
    }

    return (
        <>
            <h1>Cashback:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={cashback}
                    onChange={(e) => setCashback(e.target.value)}
                    placeholder="Enter cashback amount"
                    required
                />
                <Button variant="success" type="submit" className="ms-2">
                    Withdraw
                </Button>
            </form>
            <h2>Balance: ₹{balance}</h2>
        </>
    );
}
