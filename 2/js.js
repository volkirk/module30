const uri = 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440';
const xmr = new XMLHttpRequest();
function Request(year) {
    xmr.open('GET', uri);
    xmr.send()
    // res= JSON.parse(xmr.response);
}
xmr.onload = () => {
    const result = JSON.parse(xmr.response);
    console.log(result);
    display(yearButton, result);

};
var resDisp;
function display(yearButton,result) {
    switch (yearButton.value) {
        case "2017":
            console.log(result[0]);
            resDisp=result[0].sales;
            break;
        case "2018":
            console.log(result[1]);
            resDisp=result[1].sales;
        case "2019":
            console.log(result[2]);
            resDisp=result[1].sales;
        default:
            console.log('pick smth');            
    }
    // console.log(result[year:yearButton.value]);
}

// const button = document.querySelector(".btn");
const button = document.querySelector("#btn");
console.log(button);
const yearButton = document.querySelector("#select");
console.log('year button ='+ yearButton);
button.addEventListener('click', () => {
    var select = yearButton.value;
    console.log(select);
    // display(yearButton);
    Request(select);
});

const graphBut= document.querySelector('#graph');
graphBut.addEventListener('click', ()=>{
    document.location.href = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${yearButton.value} год',data:[${resDisp["q1"]},${resDisp["q2"]},${resDisp["q3"]},${resDisp["q4"]}]}]}}`;
    console.log('result display= '+resDisp);
})