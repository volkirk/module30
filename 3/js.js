if ('timecookie' in localStorage) {
    alert(localStorage.name + ', дороу бандит. тебя не было с '+ localStorage.timecookie);
    console.log('yes');
}
else {var name = prompt('Здравствуйте, пожалуйста введите ваше имя');
    localStorage.setItem('name', name);
    var date= new Date();
    localStorage.setItem('timecookie', date);
}

// localStorage.clear();
