var age = +prompt ('Введите ваш возраст');


if (age < 18 ) {
alert('Вы слишком юны')
}else if(age >= 18 & age < 60){
alert('Работай')
}else if ( age >= 60){
alert('оТДЫХАЙ')
}

var time = +prompt ('Введите время')

switch(time){
case 0:
alert('Полночь')
case 1:
case 2:
case 3:
alert(time+ ('ночи'))
break;
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
alert(time+ ('дня'))     
break;

case 12:
alert('полдень')
break;

case 13:
alert('час дня') 
break;
case 14:
alert('два часа дня') 
break;
case 15:
alert('три часа дня') 
break;
case 16:
alert('четыре часа дня') 
break;
case 17:
alert('пять часов дня') 
break;
case 18:
alert('шесть часов вечера') 
break;
case 19:
alert('семь часов вечера') 
break;
case 20:
alert('восемь часов вечера') 
break;
case 21:
alert('девять часов вечера') 
break;
case 22:
alert('десять часов вечера') 
break;
case 23:
alert('одиннадцать часов вечера') 

break;}