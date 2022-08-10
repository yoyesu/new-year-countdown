const clockContainer = document.querySelector(".clock-container");
// const yearListContainer = document.getElementById("years");
// const yearsArray = ["2023", "2024", "2025"];
// let option;
// let textOption;

// function setArrayList() {
//   yearsArray.forEach((e) => {
//     option = document.createElement("option");
//     textOption = option.setAttribute("value", e);
//     yearListContainer.appendChild(option);
//   });
// }

function clockSetter() {
  const currentDate = new Date().getTime();
  const newYearDate = new Date("Jan 1, 2023 00:00:00").getTime();
  const timeLeft = newYearDate - currentDate;
  function addZeros(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const nyDays = Math.floor(timeLeft / 1000 / 60 / 60 / 24); //since date returns miliseconds, "1000" is there to convert to seconds
  const nyHours = addZeros(Math.floor((timeLeft / 1000 / 60 / 60) % 24));
  const nyMinutes = addZeros(Math.floor((timeLeft / 1000 / 60) % 60));
  const nySeconds = addZeros(Math.floor((timeLeft / 1000) % 60));

  clockContainer.textContent = `${nyDays} D ${nyHours}:${nyMinutes}:${nySeconds}`;

  setTimeout(clockSetter, 1000);
}

// setArrayList();
clockSetter();
