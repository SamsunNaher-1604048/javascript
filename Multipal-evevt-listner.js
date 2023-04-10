{/* <button class="button">Click1</button>
<button class="button">Click2</button>
<button class="button">Click3</button> */}

var len = document.querySelectorAll(".button").length;


for (var i = 0; i < len; i++) {
    var heading = document.querySelector("#heading");
  document.querySelectorAll(".button")[i].addEventListener("click", myfinction);

  function myfinction() {
    heading.innerHTML = "button"+ i +"is clicked"
    console.log(i)
  }
}
