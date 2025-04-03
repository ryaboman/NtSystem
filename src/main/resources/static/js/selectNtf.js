$(document).ready(function(){

	//Отправка формы 
	$("#SelectNtf").submit(function(event) { //устанавливаем событие отправки для формы с id=form
			event.preventDefault();
			
			//собераем все данные из формы
			var form_data = serializeSelectForm();
			
			showWaiting();
			
            $.ajax({
				
				//Метод отправки
				type: "POST",
				
				//путь до php файла отправителя
				url: "/notifications/selectNotifications/",
				
				//Данные для отправки
				data: form_data,
				
				success: function(data) {					
					hideWaiting();
					parseData(data);
					window.scroll(0, document.body.scrollHeight);
					
					//Реализовать переход к концу страницы
				},
				error: function(data){
					hideWaiting();
					alert("Ошибка при обработке запроса!");
				}
			});		
				
			//hideWaiting();
    });

});

function serializeSelectForm(){

	var markNtf = document.getElementById('QMarkNt').value;
	var device = document.getElementById('QrDevice').value;
	var viewDevice = document.getElementById('QrInpViewDevice').value;
	var managerSubject = document.getElementById('QrManagerSubject').value;
	var subject = document.getElementById('QrSubject').value;
	var corrDoc = document.getElementById('QrCorrDoc').value;
	var developer = document.getElementById('QrDeveloper').value;
	var dep = document.getElementById('QrDepart').value;
	var dateFrom = document.getElementById('dateFrom').value;
	var dateTo = document.getElementById('dateTo').value;
	var reason = document.getElementById('QrInpReasonNtf').value;
	var detailed_reason = document.getElementById('Qr_detailed_reason').value;
	var commentary = document.getElementById('QrCommentary').value;
	var log = document.getElementById('QrLog').value;

	//showDevice_0();
	
	return {
			markNt: markNtf, 
			deviceMarkName: device,
			viewDevice: viewDevice,
			managerTopic: managerSubject,
			subjectMarkName: subject,
			//корректируемый документ
			corrDoc0: corrDoc,
			developer: developer,
			depart: dep,
			date: dateFrom,
			dateTo: dateTo,
			reason: reason,
			detailed_reason: detailed_reason,
			summary: commentary,
			log: log			
	};
	
	
}

function parseData(data) {

	var htmlTable = document.getElementById("tblNotifications");
	
	//alert(25);
	
	HideTblNtf();
	
	deleteElementsTable( htmlTable );	
	
	let ntf = JSON.parse(data, function(key, value){
		if(key == 'date') {
			return new Date(value);
		}
		return value;
	});

	if(ntf.length > 0){
		ntfs = ntf;
		createTblNtf(ntf);
		showTblNtf();
	}
};

var ntfs = null;

function showDevice_0(){
	if(ntfs != null)
		alert(ntfs[0].device);
}

//Функция показывает индикатор "ожидания"
function showWaiting(){
	document.getElementById('waiting').style.display='inline';
	document.getElementById('waiting').style.display='flex';
} 

function hideWaiting(){
	document.getElementById('waiting').style.display='none';
};

//Функция делает видимой таблицу извещений
function showTblNtf() {
	document.getElementById('tblNtf').style.display='inline';
	document.getElementById('tblNtf').style.display='flex';
};

function HideTblNtf() {
	document.getElementById('tblNtf').style.display='none';
};



function deleteElementsTable(htmlTable){
	
	var tableRows = htmlTable.rows;
	
	while(tableRows.length > 1){
		htmlTable.deleteRow(1);
	}

}

//Функция создает таблицу извещений
function createTblNtf(ntf) {
		  
        var countNtf = ntf.length;
		
		
		
		var htmlTable = document.getElementById("tblNotifications");
		
        var DOC = window.document;
            
     
         
		 for(let numberNtf = 0; numberNtf < countNtf; numberNtf++){
		 
			// Ссылка на массив строк таблицы:
            var tableRows = htmlTable.rows;
            
			// Кол-во строк таблицы:
            var RLength   = tableRows.length;
            
			// Контейнер для работы в циклах ниже:
            var inElement = null;

			htmlTable.insertRow(RLength).classList='rowsTablNtf';
					
			//htmlTable.rows[RLength].id = "rowsTabl";
			
			
			
			//вставляем №        
            htmlTable.rows[RLength].insertCell(0); 

			htmlTable.rows[RLength].cells[0].setAttribute("headers", "count");			

			// Добавляем в DOM, то что получили в переменную:
			htmlTable.rows[RLength].cells[0].innerHTML = numberNtf + 1;
            
			
			
			//вставляем MARK NTF        
            htmlTable.rows[RLength].insertCell(1);                
     
            inElement = DOC.createElement("a");
			
			inElement.setAttribute("href", ntf[numberNtf].href);
			
			//inElement.setAttribute("id_json_object", 10);
			
			inElement.setAttribute("target", "_blank");
			
			inElement.innerHTML = ntf[numberNtf].markNtf; 
                			
            // Добавляем в DOM, то что получили в переменную:
            htmlTable.rows[RLength].cells[1].appendChild(inElement);                                     
			
			
			
			//вставляем Device       
            htmlTable.rows[RLength].insertCell(2);                		
			
			htmlTable.rows[RLength].cells[0].setAttribute("headers", "device");	
			
			// Добавляем в DOM, то что получили в переменную:
            htmlTable.rows[RLength].cells[2].innerHTML = ntf[numberNtf].device;
			
			
			
			//вставляем Device       
            htmlTable.rows[RLength].insertCell(3);                	
			
			htmlTable.rows[RLength].cells[0].setAttribute("headers", "date");	
			
			// Добавляем в DOM, то что получили в переменную:
			var day = ('0' + ntf[numberNtf].date.getDate()).slice(-2);
			var month = ('0' + (ntf[numberNtf].date.getMonth()+1)).slice(-2);
			var year = ntf[numberNtf].date.getFullYear();
			var fullDate = day + '.' + month + '.' + year;
			
            htmlTable.rows[RLength].cells[3].innerHTML = fullDate; 	
			
			
			
			
			
			
            // Обнуляем переменную, т.к. 
            // она используется и в других методах.
            inElement = null;
       	
	   
        }
   
};





