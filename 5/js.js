

var inputB=document.querySelector('#input');
var but = document.querySelector('#but');
but.addEventListener('click', async ()=> start());



console.log(input+ " = " + link);
 function start (){
    input= inputB.value;
    link= "https://jsonplaceholder.typicode.com/users/"+`${input}`+"/todos";
    //document.location.href = link;
    linkToGo();
    console.log("input = "+input);
    console.log("link = "+link);
}
async function linkToGo() {
    await fetch(link).then((response) => {
    return response.json();})
    .then((json)=> {
    console.log(json);
    perform(json);})   
}

function perform(json) {
    if (json.length==0){
        alert('no id like that');
    }
    var ul = document.getElementsByTagName("ul");
    for (var i=0; i<json.length;i++){
        var li = document.createElement('li');
        ul[0].append(li);
        li.textContent=`user id=${json[i].userId} id=${json[i].id}\n tittle=${json[i].id}\n complited=${json[i].completed}\n`;
        if (json[i].completed==false){
            li.style.textDecoration = ('line-through');
        }
    }
}

