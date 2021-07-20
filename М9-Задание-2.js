/*Вам дана заготовка и результат, который вы 
должны получить. Ваша задача — написать код, 
который будет преобразовывать  JSON в JS-объект 
и выводить его в консоль.
JSON:
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
JS-объект:
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}*/

//Этап 1. Подготовка данных
//Используя шаблонную строку JS cоздадим JSON, который мы будем парсить
const jsonString = `
{"list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

//Этап 2. Получение данных
const data = JSON.parse(jsonString);

const list = data.list;

//Этап 3. Запись данных в результирующий объект
/*const result1 = {
  name: list.name1,
  age: Number(list.age1),
  prof: list.prof1
};
const result2 = {
  name: list.name2,
  age: Number(list.age2),
  prof: list.prof2
};*/

console.log("list:", list);
