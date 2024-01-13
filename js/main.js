let result = [
  {
    num: "600",
    name: "محمد احمد ",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "601",
    name: "محمد احمد 1",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "602",
    name: "محمد احمد 2",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "603",
    name: "محمد احمد 3",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "604",
    name: "محمد احمد 4",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "605",
    name: "محمد احمد 5",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "606",
    name: "محمد احمد 6",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "607",
    name: "محمد احمد 7",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "608",
    name: "محمد احمد 8",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "609",
    name: "محمد احمد 9",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "610",
    name: "محمد احمد 10",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "611",
    name: "محمد احمد 11",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "612",
    name: "محمد احمد 12",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "613",
    name: "محمد احمد 13",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "614",
    name: "محمد احمد 14",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "615",
    name: "محمد احمد 15",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "616",
    name: "محمد احمد 16",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "617",
    name: "محمد احمد 17",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "618",
    name: "محمد احمد 18",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "619",
    name: "محمد احمد 19",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
  {
    num: "620",
    name: "محمد احمد 20",
    arabic: "60",
    english: "70",
    math: "80",
    sience: "90",
    studies: "100",
    total: "400",
  },
];

let txt = document.querySelector("form input");
let btn = document.querySelector("form button");
let resultTxt = document.querySelector(".result");

btn.onclick = function (e) {
  e.preventDefault();
  console.log(`${txt.value}`);
  result.forEach(function (el) {
    if (el.num == `${txt.value}`) {
      console.log(el);
      resultTxt.textContent = "";
      let h21 = document.createElement("h2");
      h21.appendChild(document.createTextNode("اسم الطالب"));
      let h31 = document.createElement("h3");
      h31.appendChild(document.createTextNode(`${el.name}`));
      // =================
      let h22 = document.createElement("h2");
      h22.appendChild(document.createTextNode("اللغة العربية "));
      let h32 = document.createElement("h3");
      h32.appendChild(document.createTextNode(`${el.arabic}`));
      // =================
      let h23 = document.createElement("h2");
      h23.appendChild(document.createTextNode("اللغة الانجليزية "));
      let h33 = document.createElement("h3");
      h33.appendChild(document.createTextNode(`${el.english}`));
      // =================
      let h24 = document.createElement("h2");
      h24.appendChild(document.createTextNode("الرياضيات  "));
      let h34 = document.createElement("h3");
      h34.appendChild(document.createTextNode(`${el.math}`));
      // =================
      let h25 = document.createElement("h2");
      h25.appendChild(document.createTextNode("العلوم"));
      let h35 = document.createElement("h3");
      h35.appendChild(document.createTextNode(`${el.sience}`));
      // =================
      let h26 = document.createElement("h2");
      h26.appendChild(document.createTextNode("الدراسات"));
      let h36 = document.createElement("h3");
      h36.appendChild(document.createTextNode(`${el.studies}`));
      // =================
      let h27 = document.createElement("h2");
      h27.appendChild(document.createTextNode("المجموع"));
      let h37 = document.createElement("h3");
      h37.appendChild(document.createTextNode(`${el.total}`));
      // =================
      resultTxt.appendChild(h21);
      resultTxt.appendChild(h31);
      resultTxt.appendChild(h22);
      resultTxt.appendChild(h32);
      resultTxt.appendChild(h23);
      resultTxt.appendChild(h33);
      resultTxt.appendChild(h24);
      resultTxt.appendChild(h34);
      resultTxt.appendChild(h25);
      resultTxt.appendChild(h35);
      resultTxt.appendChild(h26);
      resultTxt.appendChild(h36);
      resultTxt.appendChild(h27);
      resultTxt.appendChild(h37);
      resultTxt.appendChild(document.createTextNode("01100516176"));
    }
  });
};
