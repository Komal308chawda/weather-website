var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
const api_key = "21b017653fc4ea5e06ff6aba6aff0082"
function convertion(val) 
{
    return(val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='  +inputvalue.value+  '&appid='+apik)
    .then(res=> res.json())
    .then(data=>
    {
        var nameval=data ['name']
        var description=data['weather'] ['0']['description']
        var temparature=data['main']['temp']
        var windspeed=data['wind']['speed']



         city.innerHTML=Weatherof=<span>${nameval}</span>
        temp.innerHTML=temparature =<span>${convertion(temparature)}C</span>
        description.innerHTML=Skyconditions= <span>${(description)}</span>
        wind.innerHTML=Windspeed=<span>${windspeed}</span> 

    })
    .catch(err => alert('Incorrect city name'));
   
    
})
