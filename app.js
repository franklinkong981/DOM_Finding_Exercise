//Problem 1:
let section = document.getElementById("container");
//Problem 2:
section = document.querySelector("#container");
//Problem 3:
const secondListItems = document.querySelectorAll(".second");
//Problem 4:
const thirdOrderedListItem = document.querySelector("ol .third");
//Problem 5:
section.innerText = "Hello!";
//Problem 6:
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
//Problem 7:
footerDiv.classList.remove("main");
//Problem 8:
const newLi = document.createElement("li");
//Problem 9:
newLi.innerText = "four";
//Problem 10:
const ul = document.querySelector("ul");
ul.append(newLi);
//Problem 11:
const ol = document.querySelector("ol");
for (let li of ol.children){
    li.style.backgroundColor = "green";
}
//Problem 12:
footerDiv.remove();