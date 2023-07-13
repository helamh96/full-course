const htmlValue =
  `<div class="triangle top fill"></div>
  <div class="triangle left fill"></div>
  <div class="triangle right fill"></div>
  <div class="triangle middle"></div>`;

const addDivs = () => {
  const emptyDivs = [...document.querySelectorAll(".fill:empty")];
  emptyDivs.forEach((div) => {
    div.innerHTML = htmlValue;
  });
};

const howDeep = (x) => (f) => {
  if (x > 0 && x<10) {
    f();
    howDeep(x - 1)(f);
  }
};

function apply() {
  const depth = parseInt(document.getElementById("deep").value);
  if (!isNaN(depth)) {
    howDeep(depth)(() => addDivs());
  }
}
