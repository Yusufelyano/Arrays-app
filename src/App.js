function App() {
   /*
Задача 1
Допиши код так, чтобы в переменной `positive` остались только положительные числа из массива*/


   const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
   const positive = array.filter((item)=>{
      if(item >= 0){
         return item
      }
   })

   /*
Задача 2

Напиши фильтр, который пропустит только те элементы (объекты), у которых свойство error равно false. Выведи полученный результат в консоль. */

   const messages = [
      { message: 'hello', error: true },
      { message: 'javascript', error: false },
      { message: 'intocode', error: true },
      { message: 'react', error: true },
      { message: 'angular', error: false },
      { message: 'es6', error: false },
   ];
const filtered = messages.filter((item)=>{
   if(item.error === false){
      return item
   }
});
  
    console.log(filtered);

    /*
    Задача 3
    Есть следующий массив:

    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];

Используя метод `.map` создай новый массив, где слова короче пяти символов заменены на звездочку. */


   const words = ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
   const NewWords = words.map((item)=>{
      if(item.length <5){
         return item = '*'
      }
      return item

   });
   console.log(NewWords);

   /*
Задача 4

Измени следующие функцию на стрелочные

    function sendMessage(message) {
      /*
      * тут какой-то большой код для отправки сообщения
      
}

function half(number) {
   return number / 2;
}

function showConsole() {
   console.log('intocode');
}

function concatWords(first, second) {
   return first + second;
} */


const sendMessage = (massagee) => {alert()};


const half = (number) => number/2;

const showConsole = () => console.log("intocode");

const concatWords = (first, second) => first * second;

/*
Задача 5

Измени следующие функции из стрелочных в обычные

    const justText = () => 'intocode';

    const logging = text => console.log(text);

    const add = (x,y) => {
      const z = 3;

      return z * x * y;
    }

    const onlyPositive = (number) => {
      if(number < 0) {
        return false;
      } */
   
      function justText() {
         return "intocode";
      };

      function logging(text){
         console.log(text);
      };
      function add(x, y){
         const z = 3;
         return z*x*y;
      }

   function onlyPositive = (number) {
      if(number < 0){
         return false;
      } else{
         return true;
      }
   }
   


      
   

   return ( 
   <div>{}</div>
   );
}

export default App
         

