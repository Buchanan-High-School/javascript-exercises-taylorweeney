function task1() {
  let myArray = ["hah", "nah", "duh"];
  // This will run when you click the button.
  let target = document.querySelector("#task-1-target")
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let target = document.querySelectorAll("#color-list li")
  console.log(target)

}

function task2B() {
  
  let target = document.querySelector("#tsak2")
  // Write your code in here
  let newEl = document.createElement("ul")
  newEl.innerText("yuh")
  target.appendChild(newEl)
}

function task3() {
  // Write your code in here
}
