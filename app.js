"use strict";

let input = "";

function getRepo() {
  fetch(`https://api.github.com/users/${input}/repos`)
    .then(response => response.json())
    .then(responseJson => displayRipo(responseJson))
    .catch(error => alert(error));
}

function displayRipo(responseJson) {
  $(".repo").empty();
  for (let i = 0; i < responseJson.length; i++) {
    $(".repo").append(`<h1 class="name">${responseJson[i].name}</h1>
  <a class="link" href="${responseJson[i].url}">${responseJson[i].url}</a>`);
  }
  watchForm();
}

function watchForm() {
  input = $("#user").val();
  $(".submit").click(event => {
    console.log(input);
    event.preventDefault();
    console.log(input);
    getRepo();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
