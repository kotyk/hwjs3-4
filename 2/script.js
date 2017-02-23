var arrNames = [];

for (var i = 0; i<5; i++) {
     arrNames[i] = prompt('Введите имя для массива');
}
	
for (i = 0; i < arrNames.length; i++) {
	var userName = prompt('Введите имя пользователя');
	
     if (arrNames[i] == userName) {
        alert (userName + ', Вы успешно вошли');
        break;} 

        else {
        alert ('Неверное имя пользователя')}
 }      
          



     

       
 


        
