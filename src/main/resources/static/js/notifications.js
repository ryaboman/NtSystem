$(document).ready(function(){
	
	//Процедура запрещения отправки формы добавления ИИ (#AddNt) по нажатию ENTER
	$('#AddNt').keydown(function(event){
		if(event.keyCode == 13){
			event.preventDefault();
			return false;
		}
	});
	
	//Процедура запрещения отправки формы добавления ИИ (#AddNt) по нажатию ENTER
	$('#SelectNtf').keydown(function(event){
		if(event.keyCode == 13){
			event.preventDefault();
			return false;
		}
	});
	
	//Автозаполнение изделия
	$('#autocompleteDevice').autocomplete('/devices', {
		delay:300,
		minChars:3,
		matchSubset:1,
		autoFill:false,
		maxItemsToShow:-1
		}
	);
	
	//Автозаполнение темы
	$('#autocompleteSubject').autocomplete('/notifications/autocompleteSubject/', {
		delay:300,
		minChars:3,
		matchSubset:1,
		autoFill:false,
		maxItemsToShow:-1
		}		
	);
	
	//Автозаполнение изделия вкладка выборка ИИ
	$('#QrDevice').autocomplete('/notifications/autocompleteDevice/', {
		delay:300,
		minChars:3,
		matchSubset:1,
		autoFill:false,
		maxItemsToShow:-1
		}
	);
	
	
	//Автозаполнение темы вкладка выборка ИИ
	$('#QrSubject').autocomplete('/notifications/autocompleteSubject/', {
		delay:300,
		minChars:3,
		matchSubset:1,
		autoFill:false,
		maxItemsToShow:-1
		}
	);

	
	
	btCancel.onclick = function(event) {
		$('#autocompleteDevice').val('');
		document.getElementById('FormAddDevice').style.display='none';
	}
	
	btCancelSubject.onclick = function(event) {
		$('#autocompleteSubject').val('');
		document.getElementById('FormAddSubject').style.display='none';
	}
	
	//Отправка формы добавления изделия в БД
	$("#FormAddDevice").submit(function(event) { //устанавливаем событие отправки для формы с id=form
			event.preventDefault();
			var formDevice = {}
			formDevice["name"] = document.getElementById('AddNameDevice').value;
			formDevice["mark"] = document.getElementById('AddMarkDevice').value;
			formDevice["_csrf"] = document.querySelector('meta[name=\'_csrf\']').content;
			var form = document.getElementById('FormAddDevice');
			var device = $('#FormAddDevice').serialize(); //собераем все данные из формы
            $.ajax({
				type: "POST", //Метод отправки
				data: formDevice, //
				url: "/devices", //путь до php файла отправителя
				success: function(data) {
					document.getElementById('FormAddDevice').style.display='none';

					$('#autocompleteDevice').val('[ ' + formDevice["mark"] + ' ] ' + formDevice["name"]);

					$('#AddNameDevice').val('');
					$('#AddMarkDevice').val('');

				}
			});
    });
	
	
	//Отправка формы добавления темы в БД
	$("#FormAddSubject").submit(function(event) { //устанавливаем событие отправки для формы с id=form
			event.preventDefault();
			
			var subjectName = document.getElementById('AddNameSubject').value;
			var subjectMark = document.getElementById('AddMarkSubject').value;
			var subjectManager = document.getElementById('AddManagerSubject').value;
			
			//var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
				type: "POST", //Метод отправки
				url: "/notifications/addSubject", //путь до php файла отправителя
				data: {subjectName: subjectName, subjectMark: subjectMark, subjectManager: subjectManager},
				success: function(data) {					
					alert(data);
					document.getElementById('FormAddSubject').style.display='none';					
					
					$('#autocompleteSubject').val('[ ' + subjectMark + ' ] ' + subjectName);
					
					$('#AddNameSubject').val('');
					$('#AddMarkSubject').val('');
					$('#AddManagerSubject').val('');					
				}
			});			
    });
	
	vV.onclick = function(event) {
		var elm = document.getElementById('cmm')
		if(elm.checked)
		{
			var value = this.value;
			$('.slt').val(value);
		}
		CheckFieldFormAddNtf();
	}
	
	/*
	btn_add_ntf.onclick = function(event) {
		
		//Если все поля верно заполнены, то
		let form = document.getElementById('AddNt');
		
		form.submit();
	}
	*/
	
	a_butt_edit.onclick = function(event) {
		document.getElementById('balance').style.display='inline';
		document.getElementById('balance').style.display='flex';
	};
	
	corr_doc.onclick = function(event) {
		document.getElementById('balance').style.display='none';
		renameFieldTablHTML("corrDoc", "dynamic", 2, 1);
		renameFieldTablHTML("slt", "dynamic", 2, 2);
		
	};
	
	add_row.onclick = function(event) {
		//alert($(document).height());
		var currentHeight = document.getElementById("windowCorrDoc").offsetHeight;
		//если высота элемента +80 меньше высоты экрана, то увеличиваем высоту элемента
		//if(currentHeight < ($(document).height()/2))
			//document.getElementById("windowCorrDoc").style.height = currentHeight + 80 + "px";
		new DynamicTable( window, 
            document.getElementById("dynamic"),
            {1:"val1", 2:"corrDoc", 3:"val3"} );

		//$('#windowCorrDoc').height=500px;	
		CheckFieldSltLog();
			
	};
	
	cmm.onclick = function(event) {
		if(cmm.checked)
			$('.slt').val('0')
	};

	InpMarkNt.onchange = function(event) {
		var value = document.getElementById('InpMarkNt').value;		
		//var ron = /^([a-z0-9])(\w|[.]|-|_)+([a-z0-9])@([a-z0-9])([a-z0-9.-]*)([a-z0-9])([.]{1})([a-z]{2,4})$/i;	
		var ron = /^([а-яА-Яa-zA-Z0-9]+)(\.)([а-яА-Яa-zA-Z0-9]+)(\w|-|_|\(|\)|\.)+([а-яА-Яa-zA-Z0-9]+)$/i;		
		var bl = ron.test(value);
		//bl &=
		
		if(bl){
			document.getElementById('message_markNt').style.display='none';
			CheckFieldFormAddNtf();
		}
		else{
			document.getElementById('message_markNt').style.display='inline';
			CheckFieldFormAddNtf()
		}
		
	};
	
	InpViewDevice.onchange = function(event){
		CheckFieldFormAddNtf();
	}
	
	
	autocompleteDevice.onchange = function(event) {
		timeout = setTimeout(CheckFieldFormAddNtf, 300);		
	};
	
	autocompleteSubject.onchange = function(event) {
		timeout = setTimeout(CheckFieldFormAddNtf, 300);		
	};
	
});

function CheckFieldInpViewDevice(){
	var value = document.getElementById('InpViewDevice').value;
	
	if(value <= 0 ){
		//нужно вывести сообщение, что поле не верно заполнено
		
		document.getElementById('message_viewDevice').style.display='inline';
		
		return false;
	}
	else{
		//иначе скрыть сообщение
		document.getElementById('message_viewDevice').style.display='none';
		return true;
	}
}

function CheckInpMarkNt(){
	var value = document.getElementById('InpMarkNt').value;		
	//var ron = /^([a-z0-9])(\w|[.]|-|_)+([a-z0-9])@([a-z0-9])([a-z0-9.-]*)([a-z0-9])([.]{1})([a-z]{2,4})$/i;	
	var ron = /^([а-яА-Яa-zA-Z0-9]+)(\.)([а-яА-Яa-zA-Z0-9]+)(\w|-|_|\(|\)|\.)+([а-яА-Яa-zA-Z0-9]+)$/i;		
	var bl = ron.test(value);
	//bl &=
		
	if(bl){
		document.getElementById('message_markNt').style.display='none';
			
		return true;
	}
	else{
		document.getElementById('message_markNt').style.display='inline';
		
		return false;
	}
}

function getValuFieldTablHTML(nameElement, cell){
	
	var htmlTable = document.getElementById(nameElement);
	
	// Ссылка на массив строк таблицы:
	tableRows = htmlTable.rows;
	
	// Кол-во строк таблицы:
	var RLength   = tableRows.length;
	
	// Кол-во ячеек в таблице:
	var CLength   = tableRows[0].cells.length;
	
	let elements = [];
	
	for(var indexRow = 1, index = 0; indexRow < RLength; indexRow++, index++){
		
		
		var cells = htmlTable.rows[indexRow].cells;

		
		elements[index] = cells[cell].childNodes[0];
		
	}
	
	return elements;

}

//Функция проверяет верно ли заполнены поля формы указания о заделе
function CheckFieldSltLog(){
	
	var status = true;
	
	let elements = getValuFieldTablHTML("dynamic", 2);
	
	for(var indexElement = 0; indexElement < elements.length; indexElement++){
		
		var element = elements[indexElement];

		if(element.value <= 0 ) {
			element.style.border = "1px solid red";
			status = false;
		}
		else{
			element.style.border = "1px solid #23b319";
		}
	}
	
	if(status){
		document.getElementById('message_logs').style.display='none';
		return true;		
	}
	else{
		document.getElementById('message_logs').style.display='inline';
		return false;
	}
	
}

function CheckFieldDevice(){
	var device = document.getElementById('autocompleteDevice');
	var id_in_DB = device.getAttribute("id_in_DB");

	if(id_in_DB == "-1"){
		document.getElementById('message_autocompleteDevice').style.display='inline';
		return false;		
	}
	else{
		document.getElementById('message_autocompleteDevice').style.display='none';
		return true;
	}
	
}

function CheckFieldSubject(){
	var device = document.getElementById('autocompleteSubject');
	var id_in_DB = device.getAttribute("id_in_DB");

	if(id_in_DB == "-1"){	
		document.getElementById('message_autocompleteSubject').style.display='inline';
		return false;		
	}
	else{
		document.getElementById('message_autocompleteSubject').style.display='none';
		return true;
	}
	
}


//Функция проверяет верно ли заполнены поля формы добавления ИИ
function CheckFieldFormAddNtf(){
	
	var status = true;
	
	status &= CheckInpMarkNt();
	status &= CheckFieldInpViewDevice();	
	status &= CheckFieldSltLog();
	status &= CheckFieldDevice();
	status &= CheckFieldSubject();
	
	
	
	if(status){
		changeButton('submit');
	}
	else{
		changeButton('button');
	}
}


function changeButton(type){
	var but = document.getElementById('btn_add_ntf');
	
	if(type == 'submit'){
		but.setAttribute('type', 'submit');
		but.style.background = '#23b319';
		but.style.cursor = 'pointer'; 
	}
	else{
		but.setAttribute('type', 'button');
		but.style.background = '#919891';
		but.style.cursor = 'default'; 
	}
}

//Функция показывает форму добавления изделия в БД
function showFormAdderDevice(){
	document.getElementById('FormAddDevice').style.display='inline';
	document.getElementById('FormAddDevice').style.display='flex';
} 

//Функция показывает форму добавления изделия в БД
function showFormAdderSubject(){
	document.getElementById('FormAddSubject').style.display='inline';
	document.getElementById('FormAddSubject').style.display='flex';
}

function showForm(intputName){

	switch (intputName){
	
		case "deviceMarkName":
			showFormAdderDevice();
			break;
		
		case "subjectMarkName":
			showFormAdderSubject()
			break;
		
		default:
			break;
	
	}
	
}

if(typeof window.DynamicTable !== 'function') {
 
    function DynamicTable(GLOB, htmlTable, config) {    
        // Так как эта функция является конструктором,
        // подразумевается, что ключевое слово this - будет
        // указывать на экземнпляр созданного объекта. Т.е. 
        // вызывать её нужно с оператором "new".
        // Проверка ниже является страховкой: 
        // если эта функция была вызвана без оператора "new",
        // то здесь эта досадная ситуация исправляется:
        if ( !(this instanceof DynamicTable) ) {
            return new DynamicTable(GLOB, htmlTable, config);   
        }
        // Зависимость:
        var DOC       = GLOB.document,
            // Ссылка на массив строк таблицы:
            tableRows = htmlTable.rows,
            // Кол-во строк таблицы:
            RLength   = tableRows.length,
            // Кол-во ячеек в таблице:
            CLength   = tableRows[0].cells.length,
            // Контейнер для работы в циклах ниже:
            inElement = null,
            // Контейнер кнопки
            button    = null,
            // Контейнер текстового узла кнопки
            butText   = null,
            // В одном из методов ниже, потребуется
            // сохранить контекст:
            self      = this,
            // Счётчики итераций:
            i,j;    
                 
        // Метод "Вставить кнопки". 
        // Создаёт/добавляет две кнопки "удалить" и "добавить"
        // завёрнутые в элемент "P". Используются DOM - методы создания 
        // и добавления элементов.
        this.insertButtons = function() {
            // Создаём первую кнопку:
            inElement = DOC.createElement("div");
            inElement.className = "btDelete";
             
            button = DOC.createElement("BUTTON");                   
            button.onclick = this.delRow;
                                         
            butText = DOC.createTextNode("X");
            button.appendChild(butText);    
            // Добавляем её в DOM:      
            inElement.appendChild(button); 
			inElement.classList='btDelete';		
			
            return inElement;
        };
		
		//<div id="message_logs" class="error">Недопустимый задел</div>
		this.insertMessageError = function() {
            // Создаём первую кнопку:
            inElement = DOC.createElement("div");
            inElement.className = "error";
			inElement.id = "message_logs";
            
			divText = DOC.createTextNode("Недопустимый задел");
			inElement.appendChild(divText);	
            return inElement;
        };
		
        // Метод "Добавить строку"
         
        // Метод "Удалить строку"
        // Удаляем строку, на  кнопку, которой нажали:
        this.delRow = function(ev) {
            // Страховка: не даёт удалить строку, если она осталась
            // последней. Цифра 2 здесь потому, что мы считаем так же
            // строку с заголовками TH. Итого получается, что 1 строка
            // с заголовками и 1 строка - с содержимым.
            if(tableRows.length > 2) {
                htmlTable.deleteRow(this.parentNode.parentNode.parentNode.rowIndex);
            } else {
                return false;   
            } 

			/*
		
			var currentHeight = document.getElementById("windowCorrDoc").offsetHeight;
			if((currentHeight-80) >= 300)
				document.getElementById("windowCorrDoc").style.height = currentHeight - 80 + "px";
			
			*/
			
        };          
         
        // Фактически, ниже это инициализация таблицы:
        // Содержимое ячеек помещается внутрь текстовых
        // полей, а в последнюю ячейку кажой строки, помещаются
        // нопки "удалить" и "добавить" Функция является
        // "вызываемой немедленно"
        return (function() {
            // Мы имеем дело с двумерным массивом: 
            // table.rows[...].cells[...]
            // Поэетому сдесь вложенный цикл.
            // Внешний цикл "шагает" по строкам...
            /*for( i = 1; i < RLength; i += 1 ) {  
                // Внутренний цикл "шагает" по ячейкам: 
                for( j = 0; j < CLength; j += 1 ) { 
                    // Если ячейка последняя...
                    if( j + 1 == CLength ) {
                        // Помещаем в переменную кнопки:
                        inElement = self.insertButtons();                                       
                    } else {                    
                        // Иначе создаем текстовый элемент,
                        inElement = DOC.createElement("INPUT");
                        // Помещаем в него данные ячейки,
                        inElement.value = tableRows[i].cells[j].firstChild.data;
                        // Присваиваем имя - массив,
                        inElement.name  = config[j+1]+"[]";
                        // Удаляем, уже не нужный экземпляр данных непосредственно
                        // из самой ячейки, потому что теперь данные у нас внутри
                        // текстового поля:
                        tableRows[i].cells[j].firstChild.data = "";
                    }   
                    // Вставляем в ячейку содержимое переменной - это
                    // либо текстовое поле, либо кнопки: 
                    tableRows[i].cells[j].appendChild(inElement);
                    // Обнуляем переменную, т.к. 
                    // она используется и в других методах.
                    inElement = null;
                }       
            }*/
			//this.addRow();
			// Помещаем в переменную кнопки:

			htmlTable.insertRow(RLength).classList='sectiontableentry1';
					
			htmlTable.rows[RLength].id = "rowsTabl";
			
			//вставляем КНОПКИ        
            htmlTable.rows[RLength].insertCell(0);                
            // Если ячейка последняя...
			// Получаем в переменную кнопки, используя метод, описанный выше:
            inElement = self.insertButtons();               

            // Добавляем в DOM, то что получили в переменную:
            htmlTable.rows[RLength].cells[0].appendChild(inElement);
			
			
			
			//вставляем поле для ввода INPUT        
            htmlTable.rows[RLength].insertCell(1);                
            
            // Иначе получаем в переменную текстовое поле:      
            inElement = DOC.createElement("input");

            inElement.name  = config[2]+(RLength-1); 
			
			inElement.setAttribute("autocomplete", "off");
                			
			inElement.classList='field';
			
            // Добавляем в DOM, то что получили в переменную:
            htmlTable.rows[RLength].cells[1].appendChild(inElement);                                     
			
			
			
			//вставляем поле для ввода SELECT        
            htmlTable.rows[RLength].insertCell(2);                
			
			inElement = DOC.createElement("div");; 
			
			// Иначе получаем в переменную текстовое поле:      
            inElement = DOC.createElement("select");
            // ... и задаём ему имя, типа name[] - которое
            // впоследствии станет массивом.
            //inElement.name  = config[2]+"[]";

			//Создаем новый объект Option и заносим его в коллекцию options
			inElement.options[0] = new Option("--", "0");
			inElement.options[1] = new Option("Не отражается", "1");
			inElement.options[2] = new Option("Задела нет", "2");
			
			inElement.options[3] = new Option("Изменение в заделе учтено", "3");
			inElement.options[4] = new Option("Использовать", "4");
			inElement.options[5] = new Option("Использовать на ... компл.", "5");
			inElement.options[6] = new Option("Доработать (доукомплектовать)", "6");
			inElement.options[7] = new Option("Не использовать", "7");
			
			
			//если общий задел, то считываем его и устанавливаем 
			//добавляемому элементу select
			var elm = document.getElementById('cmm')
			if(elm.checked)
				inElement.value = document.getElementById('vV').value;
			else
				inElement.value = '0';
				
			inElement.id = "vVv";
			inElement.name = "slt"+(RLength-1);
			inElement.className='slt';
			inElement.onclick = vV.onclick;

			
            // Добавляем в DOM, то что получили в переменную:
            htmlTable.rows[RLength].cells[2].appendChild(inElement);				

			//cmm.onclick(event);

            // Обнуляем переменную, т.к. 
            // она используется и в других методах.
            inElement = null;
            // Во избежании ненужных действий, при нажатии на кнопку
            // возвращаем false:
			
			//<div id="message_logs" class="error">Недопустимый задел</div>
			
			
       	
	   
        }());
     
    }// end function DynamicTable
   
}