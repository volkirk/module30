const example = `
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
Dom = new DOMParser;
xmlDOM=Dom.parseFromString(example, "text/xml");

const first = xmlDOM.querySelectorAll("first")
const age = xmlDOM.querySelectorAll("age")
const prof = xmlDOM.querySelectorAll('prof')
list=[
  obj1={
    name: first[0].textContent,
    age: age[0].textContent,
    prof: prof[0].textContent
  },
  obj2={
    name: first[1].textContent,
    age: age[1].textContent,
    prof: prof[1].textContent
  }
]

obj ={
  name: first.textContent,
  age: age.textContent,
  prof: prof.textContent
}
console.log(list);

//2
var jsonobj ={
  name:"Anton",
  age:36,
  skills:["Javascript","HTML","CSS"],
  salary:80000
}
const data = JSON.stringify(jsonobj);
console.log(data);

