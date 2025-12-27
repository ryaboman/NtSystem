import React from 'react';
import './css/registration.css';
import './css/registration-demo.css';
import './css/registration-animate-custom.css';

import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const LoginRegistrationForm = () => { return(
        <div className="container">
            <header>
                <h1>Авторизация <span>в PDM-System</span></h1>
            </header>
            <section>				
                <div className="container_demo" >
                    <a className="hiddenanchor" id="toregister"></a>
                    <a className="hiddenanchor" id="tologin"></a>
                    <div id="wrapper">
                        <LoginForm />

                        <RegistrationForm />			
                    </div>
                </div>  
            </section>
        </div>
    )
}

export default LoginRegistrationForm;