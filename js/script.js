"use strict";

const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((quotes) =>
    btn.addEventListener("click", () => {
      const random = Math.floor(Math.random() * quotes.length);
      quote.textContent = quotes[random].text;
      author.textContent = `-${quotes[random].author}`;
      changeColor();
    })
  )
  .catch((error) => {
    console.error("Error:", error);
  });

function changeColor() {
  const colors = [
    "#eeee90",
    "#90eebf",
    "#FDDF9E",
    "#9B59B6",
    "#ffd2a5",
    "#9090ee",
    "#beacc6",
    "#a6f1a6",
    "#EAD7C3",
    "#ECC1D1",
    "#C8D3B8",
    "#C3EFD9",
    "#008080",
    "#bfee90",
    "#ee90ee",
    "#d2a5ff",
    "#EFC3EF",
    "#CCFFCC",
    "#A6C4E0",
    "#bcf5bc",
    "#D99197",
    "#C3EFC3",
    "#40E0D0",
    "#a5d2ff",
    "#D9B4E2",
    "#3CB371",
    "#B4D5AC",
    "#bf90ee",
    "#90ee90",
    "#C3D0EF",
    "#D9C3EF",
    "#00CED1",
    "#B4D7A2",
    "#E8DFD5",
    "#A4BCC0",
    "#F7E1EA",
    "#CCB2B3",
    "#FA87B1",
    "#F8C8DA",
    "#79BD8F",
    "#ffdfbf",
    "#F3A7C6",
    "#59CF8D",
    "#EFC3D9",
  ];

  $("body, .quotes, #btn").css(
    "background-color",
    colors[Math.floor(Math.random() * colors.length)]
  );
}

// loader
function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}

$(window).on("load", () => {
  setTimeout(removeLoader, 2000);
});

// background music
const song = document.getElementById("song");
song.play();
