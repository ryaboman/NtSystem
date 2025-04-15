$(document).ready(function(){
	
	//Автозаполнение темы вкладка выборка ИИ
	$('#device_0').autocomplete('/notifications/autocompleteDevice/', {
		delay:300,
		minChars:3,
		matchSubset:1,
		autoFill:false,
		maxItemsToShow:-1
		}
	);

	
	add_row.onclick = function(event) {
		new DynamicTable( window, 
            document.getElementById("tbDevices"),
            {1:"val1", 2:"device_"} );
			
	};
	
	
	
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
				inElement.className = "d-butts";
				 
				button = DOC.createElement("BUTTON");                   
				button.onclick = this.delRow;
											 
				butText = DOC.createTextNode("X");
				button.appendChild(butText);    
				// Добавляем её в DOM:      
				inElement.appendChild(button); 
				inElement.classList='btDelete';		
				
				return inElement;
			};
			// Метод "Добавить строку"
			 
			// Метод "Удалить строку"
			// Удаляем строку, на  кнопку, которой нажали:
			this.delRow = function(ev) {
				// Страховка: не даёт удалить строку, если она осталась
				// последней. Цифра 1 здесь потому, что мы считаем так же
				// строку с заголовками TH. Итого получается, что 1 строка
				// с заголовками и 1 строка - с содержимым.
				if(tableRows.length > 1) {
					htmlTable.deleteRow(this.parentNode.parentNode.parentNode.rowIndex);
				} else {
					return false;   
				} 

				
			};          
			 
			// Фактически, ниже это инициализация таблицы:
			// Содержимое ячеек помещается внутрь текстовых
			// полей, а в последнюю ячейку кажой строки, помещаются
			// нопки "удалить" и "добавить" Функция является
			// "вызываемой немедленно"
			return (function() {
				

				htmlTable.insertRow(RLength).classList='inputDevice';
						
				//htmlTable.rows[RLength].id = "inputSubject";
				
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
				
				var countInput = RLength;
				
				//Необходима чтобы не было повторных input-от в таблицы при удалении и вновь добавлении строк
				while( ($('#'+config[2]+countInput).length > 0) && (countInput != 0)){
				
					countInput = countInput - 1;
				
				}
				
				
				
				inElement.name  = config[2]+countInput; 
								
				var idDevice = config[2] + countInput;
				
				inElement.id=idDevice;
				
				inElement.classList='device';
				
				inElement.setAttribute("placeholder", "Введите изделие");
				inElement.setAttribute("required", "");
				
				// Добавляем в DOM, то что получили в переменную:
				htmlTable.rows[RLength].cells[1].appendChild(inElement);  

				htmlTable.rows[RLength].cells[1].classList = 'auto_field';				
				
				//inElement
				//
				// Обнуляем переменную, т.к. 
				// она используется и в других методах.
				inElement = null;
				// Во избежании ненужных действий, при нажатии на кнопку
				// возвращаем false:
				
				
				//Автозаполнение темы вкладка выборка ИИ
				$('#' + idDevice).autocomplete('/notifications/autocompleteDevice/', {
					delay:300,
					minChars:3,
					matchSubset:1,
					autoFill:false,
					maxItemsToShow:-1
					}
				);
			
			}());
		 
		}// end function DynamicTable
	   
	}

});
