// aside

let aside = document.getElementById("aside");
let barBtn = document.getElementById("barBtn");
function openAside() {
  aside.style.cssText = "transform: translateX(-10%)";
  barBtn.style.cssText = "visibility: hidden";
}
function closeAside() {
  aside.style.cssText = "transform: translateX(-110%)";
  barBtn.style.cssText = "visibility: hidden";
  setTimeout(() => {
    barBtn.style.cssText = "visibility: visible";
  }, 500);
}

// Expence & Income
let bMon = document.getElementById("bMon");
let bTue = document.getElementById("bTue");
let bWed = document.getElementById("bWed");
let bThu = document.getElementById("bThu");
let bFri = document.getElementById("bFri");
let bSat = document.getElementById("bSat");
let bSun = document.getElementById("bSun");
let bWeek = [bMon, bTue, bWed, bThu, bFri, bSat, bSun];

let rMon = document.getElementById("rMon");
let rTue = document.getElementById("rTue");
let rWed = document.getElementById("rWed");
let rThu = document.getElementById("rThu");
let rFri = document.getElementById("rFri");
let rSat = document.getElementById("rSat");
let rSun = document.getElementById("rSun");
let rWeek = [rMon, rTue, rWed, rThu, rFri, rSat, rSun];

function percent(total, ...information) {
  let i = 0;
  if (information != null && total != null) {
    bWeek.forEach((e) => {
      e.style.height = `${(information[i] * 100) / total}%`;
      i++;
    });
    i = 7;
    rWeek.forEach((e) => {
      e.style.height = `${(information[i] * 100) / total}%`;
      i++;
    });
  } else {
    bWeek.forEach((e) => {
      e.style.height = `${Math.random() * 100}%`;
    });
    rWeek.forEach((e) => {
      e.style.height = `${Math.random() * 100}%`;
    });
  }
}

// percent(10, 1,2,3,4,5,6,7,7,6,5,4,3,2,1);
// percent(10, 5,2,3,4,5,1,7,7,6,5);
// percent(10);
percent();
