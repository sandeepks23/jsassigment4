function populate(countries){
    // console.log("success");
    html_data="";
    for(country of countries){
        html_data+=`<tr><td>${country.name}</td><td>${country.borders}</td><td>${country.capital}</td><td>${country.currencies[0].name}</td><td><img src="${country.flag}" alt=""></td><td>${country.population}</td><td>${country.region}</td></tr>`
        document.querySelector("#result").innerHTML=html_data;
    }
    
}

function getDetails(){
    var request=new XMLHttpRequest();
    request.open("get","https://restcountries.eu/rest/v2/all");
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState==4){
            if(request.status>199 & request.status<300){
                var countries=JSON.parse(request.responseText);
                
                populate(countries)
            }
        }
    }

}

