function renameFieldTablHTML( prefix, nameElement, row, cell ){
	
	var htmlTable = document.getElementById(nameElement);
	
	// Ссылка на массив строк таблицы:
	tableRows = htmlTable.rows;
	
	// Кол-во строк таблицы:
	var RLength   = tableRows.length;
	
	// Кол-во ячеек в таблице:
	var CLength   = tableRows[0].cells.length;
	
	//Имя первой строки фиксировано и не может изменяться пользователем, поэтому начинаем со второй (countRow = row)
	for(var indexRow = row, index = 1; indexRow < RLength; indexRow++, index++){
		
		//переменная index - это номер для переменования строки
		
		var cells = htmlTable.rows[indexRow].cells;
		/*
		for(var indexCell = cell; indexCell < CLength; indexCell++){
			
			var field = cells[indexCell].childNodes[0];
			
			field.name = prefix + indexRow;
			field.id = prefix + indexRow;
			
		}*/
		
		var field = cells[cell].childNodes[0];
			
		field.name = prefix + index;
		//field.id = prefix + indexRow;
	}

};

/*
//Оригинальная версия функции renameFieldTablHTML
function renameFieldTablHTML( prefix, nameElement ){
	
	var htmlTable = document.getElementById(nameElement);
	
	// Ссылка на массив строк таблицы:
	tableRows = htmlTable.rows;
	
	// Кол-во строк таблицы:
	var RLength   = tableRows.length;
	
	// Кол-во ячеек в таблице:
	var CLength   = tableRows[0].cells.length;
	
	//Имя первой строки фиксировано и не может изменяться пользователем, поэтому начинаем со второй (countRow = 1)
	for(var indexRow = 1; indexRow < RLength; indexRow++){
		
		var cells = htmlTable.rows[indexRow].cells;
		
		for(var indexCell = 1; indexCell < CLength; indexCell++){
			
			var field = cells[indexCell].childNodes[0];
			
			field.name = prefix + indexRow;
			field.id = prefix + indexRow;
			
		}
	}

}
*/





