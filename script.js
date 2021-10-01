var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".input-search");
var buttonEl = document.querySelector(".search-btn");
var selectEl = document.querySelector(".options");

//drop down has options that can be selected

//user types in "input" and hits "search" -- search loads options from api

//fetch data from external api
//give parameters
//selector for the input of the search
//json to display fetched data


function searchRequest(event) {
    event.preventDefault();

    var apiURL = "https://www.loc.gov/search/?q=" +  inputEl.value + "&fo=json&format=" + selectEl.value
    // console.log(apiURL);

    fetch(apiURL).then(function(response) {
        if (response.ok){
            response.json().then(function(data) {
                console.log(data);
            })
        }
    });
}


buttonEl.addEventListener("click", searchRequest);