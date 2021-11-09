const items = document.querySelectorAll('.slide div[id^="card');
const itemCount = items.length;
const btnPrev = document.getElementById("btn_prev");
const btnNext = document.getElementById("btn_next");
let count = 0;

btnNext.addEventListener("click", sliderNext);
btnPrev.addEventListener("click", sliderPrev);

function sliderNext() {
  items[count].style.display = "none";

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].style.display = "flex";
  console.log(count);
}

function sliderPrev() {
  items[count].style.display = "none";

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].style.display = "flex";
  console.log(count);
}

console.log(items);
