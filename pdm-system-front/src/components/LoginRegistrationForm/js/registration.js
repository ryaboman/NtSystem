$(document).ready(function(){
	var timeout = null;	
	
	//если поле логин изменилось
	usernamesignup.onchange = function(e){
		//Если последнее проверяемый логин не совподает с текущим, то запускаем проверку
		if(vld_username != usernamesignup.value)
			usernamesignup.onkeydown();
	}
	
	emailsignup.onchange = function(e){
		if(vld_email != emailsignup.value)
			emailsignup.onkeydown();
	}
	
	usernamesignup.onkeydown = function(e) {
		if (timeout) 
			clearTimeout(timeout);
		timeout = setTimeout(function(){checkLogin(usernamesignup.value);}, 500);	
	};
	
	emailsignup.onkeydown = function(e) {
		if (timeout) 
			clearTimeout(timeout);
		timeout = setTimeout(function(){checkMail(emailsignup.value);}, 500);
	};

	//Регистрация
	$("#RegForm").submit(function(event) { //устанавливаем событие отправки для формы с id=form
			event.preventDefault();
			//добавить ожидание
			if(login && email)
			{
				event.preventDefault();
				var form_data = $(this).serialize(); //собераем все данные из формы
				$.ajax({
					type: "POST", //Метод отправки
					url: "registration", //путь до php фаила отправителя
					data: form_data, //собераем все данные из формы
					success: function(response) {					
						//код в этом блоке выполняется при успешной отправке сообщения
						//alert("Регистрация прошла успешно!");
						//очищаем поля
						$('.reset').val('');
						
						location.href = "/guest/login#tologin";
						
						alert("Ура, Вы зарегистрированы! На Вашу электронную почту был отправлен пароль для входа");
						
						//window.location.reload();
					},
					error: function(response) {
						//обработка ошибок при отправке
						alert("Ошибка. Неудалось зарегистрироваться!");
					}
				});
			}
			else
			{
				alert("Некорректные данные!");
			}
				
    });
});
		
var login = false; //Недопустимый, допустимый будет только после проверки
	
var email = false; //Недопустимы, допустимый будет только после проверки

var vld_username = "";

var vld_email = "";
		
function ge(id) {
		return document.getElementById(id);
}

//Функция удаления пробелов из пароля
function deleteSpace(str){
	str = str.replace(/\s/g, '');
	return str;
}

//Функция для определения пустоты строки
//Возвращает ложь, если строка пуста
//или содержиться хоть один пробел
function isEmptyStr(str) {
	//Если строка пуста, возвращаем ложь
	if(str == "") 
		return false;
		
	var count = 0;
	for(var i = 0; i < str.length; ++i)
		//Если встретился хоть один пробел, возвращаем ложь
		if(str.charAt(i) == " ") 
			return false;
			
	return true;
}



//Функция проверки логина через сервер
function checkLogin(fr) {
	if (fr.length >= 3)
	{
		//Проверяем нет ли пробелов в логине
		if(isEmptyStr(fr))
		{
			vld_username = fr; //записывает последний проверяемый логин
			//отправляем запрос на сервер
			requestData(true, fr);				
		}
		else
			alert("Логин не должен быть пустой строкой или содержать пробелы");
	}
}

function requestData(vall, qr) {
	qr = qr.toLowerCase();
	if(vall){
			$.get(makeUrlLogin(qr), function(data) {
			data = parseLogin(data);
		});
	}
	else{
			$.get(makeUrlMail(qr), function(data) {
			data = parseEmail(data);
		});
	}
	
}

function makeUrlLogin(qr) {
	var url = "/guest/checkLogin/?isset_login=" + encodeURI(qr);
	return url;
}

function makeUrlMail(qr) {
	var url = "/guest/checkMail/?isset_mail=" + encodeURI(qr);
	return url;
}

function parseLogin(data) {
	if (!data) 
		return null;
	if(data.search("true") >= 0)
	{
		document.getElementById('messageLogin').style.display='inline';
		login = false;
		return true;				
	}
	else 
	{
		document.getElementById('messageLogin').style.display='none';
		login = true;
		return false;
	}
};

function parseEmail(data) {
	
	if (!data){
		return null;
	}
	
	if(data.search("true") >= 0)
	{
		
		document.getElementById('messageEmail').style.display='inline';
		email = false; //Недопустимый email
		return true;				
	}
	else 
	{
		document.getElementById('messageEmail').style.display='none';
		email = true; //Разрешенный email
		return false;
	}
};


function checkMail(mail) {		
		var ron = /^([a-z0-9])(\w|[.]|-|_)+([a-z0-9])@([a-z0-9])([a-z0-9.-]*)([a-z0-9])([.]{1})([a-z]{2,5})$/i;		
		var bl = ron.test(mail);
		if(bl)
		{
			vld_email = mail; //записывает последний проверяемый email
			requestData(false, mail); //отправляем запрос на сервер
		}
		else
			document.getElementById('messageEmail').style.display='inline';
}

function isValidForm(){
		var elements = ge('reg_form').elements,
			login = ge('login'),
			pass = ge('pass'),
			rePass = ge('re_pass'),
			mail = ge('mail'),
			valid = true;
		//Проверяем поля с type="password" и type="text" на "заполненность"
		for(var i = 0; i < elements.length; ++i) {
			if(elements[i].error) valid = false;
			if((elements[i].type == 'text' || elements[i].type == 'password') && isEmptyStr(elements[i].value)) {
				elements[i].type = 'text';
			}
		}
		/*Выполняем дополнительную проверку полей по параметрам,
			разным для каждого поля
		*/
		checkLogin();	
		checkMail();	
		return valid;

	}