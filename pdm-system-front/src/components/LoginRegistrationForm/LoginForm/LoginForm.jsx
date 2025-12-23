import React from 'react';

const LoginForm = () => { return(
    <div id="login" className="animate form">
        <form  method="" name="LogForm" action="" id="LogForm">
            <h1>Вход</h1> 
            <div id="fieldUsername"> 
                <label for="username" className="uname" data-icon="u" > Ваш логин </label>
                <input className="reset" id="username" name="username" required="required" type="text" placeholder="Пример: username"/>
            </div>
            <div id="fieldPSWD"> 
                <label for="password" className="youpasswd" data-icon="p"> Ваш пароль </label>
                <input className="reset" id="password" name="password" required="required" type="password" placeholder="Пример: X8df!90EO" /> 
            </div>
            <p className="login button"> 
                <input id="log_in" type="submit" value="Вход" /> 
            </p>
            
            <p>
                <a href="/">На главную</a>
            </p>
            
            <p>
                <a href="/recovery">Забыли пароль или логин?</a>
            </p>
            
            <p className="change_link">
                Вы еще не с нами?
                <a href="#toregister" className="to_register">Присоединиться</a>
            </p>
        </form>
    </div>
)}

export default LoginForm;