/*Вам дана заготовка и результат, который вы 
должны получить. Ваша задача — написать код, 
который будет преобразовывать XML в JS-объект 
и выводить его в консоль.
HTML:
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
JS:{
	list: [
	  { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
	  { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
	]
 }*/

//Этап 1. Подготовка данных
//Создание экземпляра класса DOMParser. Он позволит нам парсить XML (считывать).
const parser = new DOMParser();
//console.log('parser', parser);

//Используя шаблонную строку JS cоздадим XML, который мы будем парсить
const xmlString = `
<list>
	<student>
		<name lang="en">
			<first>Ivan</first>
			<second>Ivanov</second>
		</name>
		<age>35</age>
		<prof>teacher</prof>
	</student>
	<student>
		<name lang="ru">
			<first>Петр</first>
			<second>Петров</second>
		</name>
		<age>58</age>
		<prof>driver</prof>
	</student>
</list>
`;
//console.log('XMLString', XMLString);

//Этап 2. Получение данных
//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");

const studentNode_1 = listNode.firstElementChild;
const nameNode_1 = studentNode_1.querySelector("name");
const firstNode_1 = nameNode_1.querySelector("first");
const secondNode_1 = nameNode_1.querySelector("second");
const ageNode_1 = studentNode_1.querySelector("age");
const profNode_1 = studentNode_1.querySelector("prof");

const studentNode_2 = listNode.lastElementChild;
const nameNode_2 = studentNode_2.querySelector("name");
const firstNode_2 = nameNode_2.querySelector("first");
const secondNode_2 = nameNode_2.querySelector("second");
const ageNode_2 = studentNode_2.querySelector("age");
const profNode_2 = studentNode_2.querySelector("prof");

//Получение данных из атрибутов
const langAttr_1 = nameNode_1.getAttribute("lang");
const langAttr_2 = nameNode_2.getAttribute("lang");

//Этап 3. Запись данных в результирующий объект.
let name_1 = `${secondNode_1.textContent} ${firstNode_1.textContent}`;
const list_1 = {
  name: name_1,
  age: Number(ageNode_1.textContent),
  prof: profNode_1.textContent,
  lang: langAttr_1
};

let name_2 = `${secondNode_2.textContent} ${firstNode_2.textContent}`;
const list_2 = {
  name: name_2,
  age: Number(ageNode_2.textContent),
  prof: profNode_2.textContent,
  lang: langAttr_2
};
const list = [list_1, list_2];

console.log("list:", list_1, list_2);
console.log("list:", list);
