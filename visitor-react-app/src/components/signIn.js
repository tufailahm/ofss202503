import { useState } from "react";

function SignIn() {

    const [count, setCount] = useState(10);
    const [message, setMessage] = useState('Honesty is the best policy');

    const changeCounter = () => {
        setCount(count + 1);
    }

    const changeMessage = () => {
        setMessage("Thanks for attending the session")
    }

    return (<div>
        <h2>SignIn Attempt : {count} </h2>
        <button onClick={changeCounter}>SignIn</button>
        <button onClick={() => setCount(count + 1)}>
            SignIn Button 2
        </button>
        <br />
        {message}
        <button onClick={changeMessage}>Change Message</button>


    </div>);

}

export default SignIn;