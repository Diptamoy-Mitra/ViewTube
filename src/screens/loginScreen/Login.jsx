import React,{useEffect} from 'react'
import "./_login.scss";

import Logo from "../../images/youtube-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../redux/actions/auth.action.js';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect(() => {
        
        if(accessToken !== null)
            history.push('/');
        


    },[accessToken,history]);


    return (
        // <div className="login">
        //     <div className="login_container">
        //         <img src={Logo} alt="" />
        //         <button
        //             onClick={handleLogin}
        //         >
        //             Login with Google
        //         </button>
        //         <p>
        //             YouTube-Clone Web-app made by Anandha Krishnan.Need to Sign-in using Google because it uses Google Data API to render contents.
        //         </p>
        //     </div>
        // </div>
        <div className="login">
        <div className="login__container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfkbkSfuPLHW9YxIGJ46pG4BpMseMsJY8Vw&usqp=CAU" alt="" />
          <button onClick={handleLogin}>Login With google</button>
          <p>This project is made by Diptamoy </p>
        </div>
       </div>
    )
}

export default Login
