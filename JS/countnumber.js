let countNum = document.querySelectorAll(".num");
let interval = 1000;

countNum.forEach((countNum) => {
  let startValue = 0;
  let endValue = parseInt(countNum.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    countNum.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
