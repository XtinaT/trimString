'use strict';
var ss = prompt('Введите вашу строку');
function trimString(s) {
  if ((s.charAt(0)!=' ')&&(s.charAt(s.length-1)!=' ')) {
    console.log('Строка не нуждается в обрезке');
  } else {
    var x = 0;
    var y = s.length - 1;
    while ((s.charAt(x) == ' ')) {
      x++;
    }
    if (x == s.length) {
      s = '';
      console.log('Вся строка состояла из пробелов');
    } else {
      while ((s.charAt(y) == ' ')) {
        console.log('Цикл для пробелов в конце строки');
        y--;
      }
      console.log('Строка будет обрезана');
      s = s.slice(x, ++y);
    } 
  }return (s)
}
alert('*' + trimString(ss) + '*');











/*var s=prompt('Введите вашу строку');
function trimString(s) {
  if ((s.charAt(0)==' ')||(s.charAt(s.length-1)==' '))  {
    while (s.charAt(0)==' ') {
      s=s.slice(1,(s.length));
    }
    while (s.charAt(s.length-1)==' ') {
      s=s.slice(0,(s.length-1));
    }
  }return(s);
} 
alert('*'+trimString(s)+'*');*/