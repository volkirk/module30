var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var but = document.querySelector('#but');
var butClear = document.querySelector('#butClear');

function clear() {
    // var ul = document.getElementsByTagName("ul");
    imglist = document.querySelectorAll('img');
    for (y = 0; y < imglist.length; y++) {
        img = document.querySelector('img');
        img.remove();
    }
}
function start() {
    done = check();
    console.log(done);

    if (done == true) {
        request();
    }

}
function check(done) {
    if (input1.value > 10 || input1.value < 1) {
        if (input2.value > 10 || input2.value < 1) { alert('Номер страницы и лимит вне диапазона от 1 до 10'); }
        else alert('Номер страницы вне диапазона от 1 до 10');
    }
    else if (input2.value > 10 || input2.value < 1) {
        alert('Лимит вне диапазона от 1 до 10');
    }
    else {
        console.log('zaebis');
        return done = true;
    }

}
function perform(json) {

    if (json.length == 0) {
        alert('nothing');
    }

    for (var i = 0; i < json.length; i++) {
        var li = document.createElement('img');
        ul[0].append(li);
        li.setAttribute('src', json[i].download_url);
        li.setAttribute('name', 'img')

    }
}
async function request() {
    link = `https://picsum.photos/v2/list?page=${input1.value}&limit=${input2.value}`;
    await fetch(link).then((response) => {
        return response.json();
    })
        .then((json) => {
            console.log(json);
            perform(json);
            record(json);
        })
}
function record(json) {
    jsonStr = JSON.stringify(json);
    localStorage.setItem('data', jsonStr);
    console.log('data = ');
    console.log(jsonStr);

}
var ul = document.getElementsByTagName("ul");
but.addEventListener('click', start);
butClear.addEventListener('click', clear);
window.onload = function () {
    jsonParsed = JSON.parse(localStorage.data);
    console.log(jsonParsed);
    perform(jsonParsed);

}




