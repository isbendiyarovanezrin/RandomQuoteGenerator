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
  let randomColor = "#" + ((Math.random() * 16777215) | 0).toString(16);
  $("body, .quotes, #btn").css("background-color", randomColor);
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
