var arrNames = [];

for (var i = 0; i<5; i++) {
     arrNames[i] = prompt('Введите имя для массива');
}
	
var userName = prompt('Введите имя пользователя');
var res = 'Неверное имя пользователя';

for (i = 0; i < arrNames.length; i++) {
if (arrNames[i] == userName) {
res = userName + ', Вы успешно вошли';
break;} 
}
alert (res);
          



       
 


        
