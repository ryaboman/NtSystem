import React from 'react';

const RegistrationForm = () => { return(
    <div id="register" className="animate form">
        <form  method="" name="RegForm" action="" id="RegForm"> 
            <h1>Регистрация</h1> 
            <div id="fieldLogin"> 
                <label for="usernamesignup" className="uname" data-icon="u">Ваш логин</label>
                <input className="reset" id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                <div id="messageLogin">Логин занят или является недопустимым</div>
            </div>
            <div id="fieldEmail">
                <label for="emailsignup" className="youmail" data-icon="e" >Ваш email</label>
                <input className="reset" id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@local.niiis.nnov.ru"/> 
                <div id="messageEmail">Email занят или является недопустимым</div>
            </div>
            
            <p className="signin button"> 
                <input id="btReg" type="submit" value="Регистрация"/> 
            </p>
            
            <p>
                <a href="/">На главную</a>
            </p>
            
            <p>
                <a href="/guest/recovery">Забыли пароль или логин?</a>
            </p>
            
            <p className="change_link">  
                Вы уже зарегистрированы?
                <a href="#tologin" className="to_register"> Тогда войдите </a>
            </p>
        </form>							
    </div>
)}

export default RegistrationForm;