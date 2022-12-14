//https://restcountries.com/v3.1/
//https:restcountries.com/v3.1/name/{name}

let userInput;
const searchButton = document.getElementById('search_btn');

const getCountryData= function(){
  userInput=document.getElementById('search_box').value;
  fetch(`https:restcountries.com/v3.1/name/${userInput}`)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData[0]);
    
    let currency=Object.values(responseData[0].currencies);
    let language=Object.values(responseData[0].languages);
    
    
    
    const markup = `
    <div class="box">
    <div class="box_1">
        <img src="${responseData[0].flags.png}" alt="" class="box_img">
        <h1 class="box_country">${userInput}</h1>
    </div>
    <div class="box_2">
        <ul class="box_info">
            <li class="box_info-currency"><span>Language : </span>${language[0]}</li>
            <li class="box_info-capital"><span>Capital City : </span>${responseData[0].capital}</li>
            <li class="box_info-population"><span>Currency : </span>${currency[0].name}</li> 
        </u1>
    </div>
    </div>`;

    document.querySelector('.result').insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => alert(error));
};

searchButton.addEventListener('click', getCountryData);
