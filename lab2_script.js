document.querySelector("header").style.background = "green";
document.querySelector("header").style.textAlign = "center";

document.querySelector("nav").style.border = "2px solid red";

document.querySelector("section").style.backgroundColor = "#F7C8DC";
document.querySelector("section").style.textAlign = "center";
document.querySelector("section").style.padding = "40px";

document.querySelector("table").style.backgroundColor = "skyblue";

document.querySelector("footer").style.backgroundColor = "pink";
document.querySelector("footer").style.textAlign = "center";
document.querySelector("footer").style.fontSize = "20px";

document.querySelector("caption").style.backgroundColor = "Blue";
document.querySelector("caption").style.color = "white";

document.querySelector("table").style.textAlign = "center";
document.querySelector("table").style.margin = "auto";

document.querySelector("hr").style.width = "400px";
document.querySelector("hr").style.height = "3px";
document.querySelector("hr").style.backgroundColor = "pink";

elem = document.querySelectorAll("cite");
for (let c = 0; c < elem.length; c++) {
  elem[c].style.color = "hotpink";
}

let th_el = document.querySelectorAll("th");
for (let m = 0; m < th_el.length; m++) {
  th_el[m].style.backgroundColor = "blue";
  th_el[m].style.color = "white";
}

let li_elem = document.querySelectorAll("li");
for (let i = 0; i < li_elem.length; i++) {
  li_elem[i].style.display = "inline";
  li_elem[i].style.padding = "150px";
  li_elem[i].style.color = "blue";
}

let pp = document.querySelectorAll("p");
for (let j = 0; j < pp.length; j++) {
  pp[j].style.border = "2px solid red";
  pp[j].style.backgroundColor = "pink";
}

let div_elem = document.querySelectorAll("div");
for (let k = 0; k < div_elem.length; k++) {
  div_elem[k].style.backgroundColor = "pink";
  div_elem[k].style.textAlign = "center";
}

let span_elem = document.querySelectorAll("span");
for (let l = 0; l < span_elem.length; l++) {
  span_elem[l].style.fontSize = "large";
}

let h_elem = document.querySelectorAll("h4");
for (let p = 0; p < h_elem.length; p++) {
  h_elem[p].style.textAlign = "center";
  h_elem[p].style.color = "white";
}

let tr_el = document.querySelectorAll("tr");
for (let n = 0; n < tr_el.length; n++) {
  tr_el[n].style.padding = "10px";
}

let td_el = document.querySelectorAll("td");
for (let t = 0; t < td_el.length; t++) {
  td_el[t].style.backgroundColor = "lightblue";
  td_el[t].style.color = "darkblue";
}
