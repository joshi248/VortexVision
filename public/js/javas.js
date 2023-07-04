
console.log("dekh kya raha h  be");



var form = document.querySelector('form');
var input =document.querySelector('input');
var para1 = document.querySelector('#para1');
var para2 = document.querySelector('#para2');
// para2.textContent = '';
var loading= 'Loading...';


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    para1.textContent = loading;
para2.textContent='';
    console.log(input.value);
    fetch('/weather?address='+input.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error);
            para1.textContent= data.error;
            // para2.textcontent='';
        }

        else
        {console.log(data.place);
        console.log(data.forecast)
            // para1.textContent= data.forecast;
            para1.textContent= data.place;
            para2.textContent= data.forecast;
            // para1.textcontent='';
         }
    })
})

})


