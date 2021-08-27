function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function promises(){
  new Promise((resolve, reject) => {
    num=getRandomInRange(1,100);
    if (num%2==0) {
      resolve("Успешное выполнение promise");
      console.log('vse zaebis, chislo = '+num);

    } else {
      reject("Неуспешное выполнение promise");
      console.log('NE zaebis, chislo = '+num);
    }
  });
}
setTimeout(promises,3000);