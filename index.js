var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.7.1.min.js"; // Check https://jquery.com CDN for the latest version
document.getElementsByTagName("head")[0].appendChild(script);

const eachSec = document.querySelectorAll("[class*='sec-'].focus-content");

$(function () {
  $(".dropDownBtn button").mouseenter(function () {
    $("#menuImg").css("display", "none");
    $("#menuImg-hover").css("display", "block");
  });
  $(".dropDownBtn button").mouseleave(function () {
    $("#menuImg").css("display", "block");
    $("#menuImg-hover").css("display", "none");
  });
  $(".dropDownBtn button").click(function () {
    $("#menuImg").hide();
    $("#menuImg-hover").show();
    $(".dropDownContent").toggle();
  });
  $(".solar-title").click(function () {
    $(".solar-planets").toggle();
  });
  // $(".sec-1,.sec-2,.sec-3").click(function () {
  //   $(".hidden-sec").show();

  // });
  $(".sun img ,.sun h2").click(function () {
    $(".sun .planet-moreInfo").toggle();
  });

  $(".Mercury img , .Mercury h2").click(function () {
    $(".Mercury .planet-moreInfo").toggle();
  });
  $(".Venus img , .Venus h2").click(function () {
    $(".Venus .planet-moreInfo").toggle();
  });
  $(".Earth img , .Earth h2").click(function () {
    $(".Earth .planet-moreInfo").toggle();
  });
  $(".Mars img , .Mars h2").click(function () {
    $(".Mars .planet-moreInfo").toggle();
  });
  $(".Jupiter img , .Jupiter h2").click(function () {
    $(".Jupiter .planet-moreInfo").toggle();
  });
  $(".Saturn img , .Saturn h2").click(function () {
    $(".Saturn .planet-moreInfo").toggle();
  });
  $(".Uranus img , .Uranus h2").click(function () {
    $(".Uranus .planet-moreInfo").toggle();
  });
  $(".Neptune img , .Neptune h2").click(function () {
    $(".Neptune .planet-moreInfo").toggle();
  });
  //  ------------------
  // weather app
  $("#weather-exBtn").click(function () {
    $(".weather-info").css("display", "none");
    $(".search").css("display", "flex");
  });
  // $("#weather-input").keypress(function (e) {
  //   let key = e.which;
  //   if (key == 13) {
  //     $(".search").css("display", "none");
  //     $(".weather-info").css("display", "flex");

  //   }
  // });

  // to do list
  $(".toDo-main-div").click(function () {
    $(".to-do-list .div-1").css("display", "none");
    $(".to-do-list .div-2").css("display", "none");
    $(".to-do-list .div-3").css("display", "block");
  });
  $("#toDo-exBtn").click(function () {
    $(".to-do-list .div-3").css("display", "none");
    $(".to-do-list .div-2").css("display", "block");
    $(".to-do-list .div-1").css("display", "flex");
  });
});

// --------------------------------------------
// this func is for clicking on one item and giving it a class
// const focusContent = document.querySelectorAll(".focus-content");

// focusContent.addEventListener("click", () => {
//   focusContent.style.display = "none";
// });
// function focusOn(element) {
//   var curr_sel = document.querySelector('.f.focus-content');
//   if (curr_sel) curr_sel.classList.remove('focus-content');
//   element.classList.add('focus-content');
// }
//--------------------------------------------
// this part is for popup for each section in the solarSystem
// const allSec = document.querySelector("[class*=f]");
// const hiddenPart = document.querySelectorAll("[class*=hidden-sec]");
// allSec.addEventListener("click", () => {
//   for (i = 0; i < hiddenPart.length; i++) {
//     hiddenPart[i].style.display = "block";
//   }
// });

//----------------------------------------

// function fadingFunc() {
//   const body = document.querySelector(".my-name");
//   this.scrollY > 250
//     ? (body.style.display = "block")
//     : (body.style.display = "none");

//   window.addEventListener("scroll", fadingFunc, false);
// }
// fadingFunc();

// function apearing() {

//   const skils = document.querySelector(".skils");
//   this.scrollY > 655
//     ? (skils.style.display = "none") && (skils.style.transition = "1s ease")
//     : (skils.style.display ="block") && (skils.style.transition = "1s ease" );

//   window.addEventListener("scroll", apearing, false);
// }
// apearing();
/*function fadeIn() {
  const myName = document.querySelector(".my-name");
  const solarSystem = document.querySelector(".solar-system-sec");
  const skils = document.querySelector(".skils");
  const whiteDiv = document.querySelector(".white-div");
  const myPrice = document.querySelector(".myPrice");
  const myReputation = document.querySelector(".myReputation");
  const gallery = document.querySelector(".gallery");
  const tools = document.querySelector(".tools-main-sec");
  if (this.scrollY > 100) {
    gallery.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 250) {
    solarSystem.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 450) {
    tools.style.animation = "fadingKey 4s both";
  }
  if (this.scrollY > 950) {
    skils.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 1150) {
    whiteDiv.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 1350) {
    myPrice.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 1900) {
    myReputation.style.animation = "fadingKey 4s both ";
  }
  if (this.scrollY > 2100) {
    myName.style.animation = "fadingKey 4s both ";
  }
  window.addEventListener("scroll", fadeIn, false);
}
fadeIn();*/
// ---------------------------------------------
// function hoverAtOnce() {
//   const sections = document.querySelectorAll("class*=sec-");
//   const hiddenSec = document.querySelectorAll(".hidden-sec");

//   // sections.forEach((element)=>{
//   //   element.addEventListener('click', ()=>{
//   //     element.classList.add("hidden-sec")
//   //   })
//   // })
// }

let index = 1;
showSlide(index);

function plusSlides(n) {
  showSlide((index += n));
}

function showSlide(n) {
  const slide = document.getElementsByClassName("slide");

  if (n > slide.length) {
    index = 1;
  }
  if (n < 1) {
    index = slide.length;
  }
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[index - 1].style.display = "block";
}
// -----------------------
// weather App
const apiKey = "555357faa025a0ab00efb2e50e9558fc";
const weatherBtn = document.querySelector("#weather-btn");
const weatherBox = document.querySelector("#weather-input");
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;

async function checkWeather(city) {
  const response = await fetch(url(city));

  if (response.status == "404") {
    document.querySelector("#invalid-city").style.display = "block";
    document.querySelector("#weather-exBtn").style.display = "none";
    document.querySelector(".weather-info").style.display = "none";
    // document.querySelector(".weather-info").style.display = "none";
    // document.querySelector(".onFocus").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector("#weather-city").innerHTML = data.name;
    document.querySelector("#weather-mainTemp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%";
    document.querySelector(".feels").innerHTML = Math.round(
      data.main.feels_like
    );
    document.querySelector(".sky").innerHTML = data.weather[0].description;

    const changingWeatherImg = document.querySelector("#main-icon");

    if (data.weather[0].main == "Clear") {
      changingWeatherImg.src = "icons8-sun-weather.png";
    } else if (data.weather[0].main == "Mist") {
      changingWeatherImg.src = "icons8-mist-weather.png";
    } else if (data.weather[0].main == "Clouds") {
      changingWeatherImg.src = "icons8-cloud-weather.png";
    } else if (data.weather[0].main == "Rain") {
      changingWeatherImg.src = "icons8-rain-cloud-weather.png";
    } else if (data.weather[0].main == "Snow") {
      changingWeatherImg.src = "icons8-snow-weather.png";
    } else if (data.weather[0].main == "Wind") {
      changingWeatherImg.src = "icons8-wind-weather.png";
    } else {
      changingWeatherImg.src = "icons8-rain-cloud-weather.png";
    }

    document.querySelector("#invalid-city").style.display = "none";
    document.querySelector(".search").style.display = "none";

    document.querySelector(".weather-info").style.display = "flex";
    document.querySelector("#weather-exBtn").style.display = "block";

    // document.querySelector("#weather-exBtn").style.display = "flex";
  }
  weatherBox.value = "";
}
weatherBtn.addEventListener("click", () => {
  checkWeather(weatherBox.value);
});
weatherBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    checkWeather(weatherBox.value);
  }
});
// ----------------------------
// calculator
const calInput = document.querySelector("#cal-input");
const calBtn = document.querySelector("#cal-key");

// ----------------------------
// to Do List
const toDoInput = document.querySelector(".toDo-input");
const toDoUl = document.querySelector(".toDo-ul");

function addTask() {
  if (toDoInput.value == "") {
    alert("You must write something");
  } else {
    const toDoLi = document.createElement("li");
    toDoLi.innerHTML = toDoInput.value;
    toDoUl.appendChild(toDoLi);
    let toDoSpan = document.createElement("span");
    toDoSpan.innerHTML = "\u00d7";
    toDoLi.appendChild(toDoSpan);
  }
  toDoInput.value = "";
}

toDoUl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  return localStorage.setItem("data", toDoUl.innerHTML);
}
function showData() {
  return (toDoUl.innerHTML = localStorage.getItem("data"));
}
toDoInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addTask();
  }
});

showData();
/*************************/
// tic tac toe
const board = document.querySelector(".tic-tac");
const allCell = document.querySelectorAll("[data-sec]");
const dataWinningMessage = document.querySelector("[data-winning-message]");
const reStartBtn = document.querySelector("#restart-btn");
const winMessagediv = document.querySelector("#winning-message");
let circleTurn; //if it is true than is circle's turn if it is false is x's turn

const X_Class = "x";
const O_Class = "circle";
const All_Combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
startGame();
reStartBtn.addEventListener("click", startGame);
function startGame() {
  circleTurn = false;
  allCell.forEach((e) => {
    e.classList.remove(O_Class);
    e.classList.remove(X_Class);
    //becuse we want every event to start over so we have to remove all events
    e.removeEventListener("click", ticTacClick);
    // {once : true} means that only ever fire this event once (for each cell)
    e.addEventListener("click", ticTacClick, { once: true });
  });
  hoverFunc();
  //for starting the game the show class should be removed
  winMessagediv.classList.remove("show");
}

function ticTacClick(e) {
  const currentCalss = circleTurn ? O_Class : X_Class;
  const cell = e.target;
  //markClass should be before ticTacWin because
  markClass(cell, currentCalss);
  if (ticTacWin(currentCalss)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
    hoverFunc();
  }
}
function endGame(draw) {
  if (draw) {
    dataWinningMessage.innerHTML = "Draw!";
  } else {
    dataWinningMessage.innerText = `${circleTurn ? "O" : "X"} wins!! `;
  }
  winMessagediv.classList.add("show");
}
function isDraw() {
  //[... ] because it has to loop through but allCell is not an array
  return [...allCell].every((el) => {
    return el.classList.contains(X_Class) || el.classList.contains(O_Class);
  });
}
function markClass(cell, currentCalss) {
  cell.classList.add(currentCalss);
}
function swapTurn() {
  circleTurn = !circleTurn;
}
function hoverFunc() {
  board.classList.remove(O_Class);
  board.classList.remove(X_Class);
  if (circleTurn) {
    board.classList.add(O_Class);
  } else {
    board.classList.add(X_Class);
  }
}
function ticTacWin(currentCalss) {
  return All_Combinations.some((combinations) => {
    return combinations.every((index) => {
      return allCell[index].classList.contains(currentCalss);
    });
  });
}
