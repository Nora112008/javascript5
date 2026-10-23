/*

How to access any element .
How to change the content of HTML elements .
How to change the style (CSS) of HTML elements .
How to access attributes .
HTML DOM navigator .
How to create, add, delete elements .
How to access classes .
HTML DOM events .
Animations .
How to access distance of elements .

*/

// myH2 = document.createElement("h2"),
// myTest = document.querySelector("#Test"),
// myChild2 = myTest.querySelector(".child2"),

let myButtons = document.querySelectorAll("button"),
myInput = document.querySelector("input"),
myForm = document.querySelector("form"),
myParent = document.querySelector(".parent"),
myChild = document.querySelector(".child"),
myGrandChild = document.querySelector(".grandchild");

/*
myForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(this);
    console.log("ok");

})*/


myParent.addEventListener("click", function(e){
    console.log("Parent");
});

myChild.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("Child");
});

myGrandChild.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("Grandchild");
});





/*function myFun1(){
    console.log("ok1");
}

function myFun2(){
    console.log("ok2");
    myButtons[0].removeEventListener("click", myFun1);
}*/

/*myButtons[0].addEventListener("click", function(){
        console.log(this);
    });
*/

/*myButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
});*/


// myButtons[0].onclick = myFun1;
// myButtons[0].onclick = myFun2;


// myTest.addEventListener("mousemove",myFun1);
// myButtons[0].addEventListener("click",myFun2);




/*function addActive(){
    myTest.classList.add("active");
}

function removeActive(){
    myTest.classList.remove("active");
}

function toggleActive(){
    myTest.classList.toggle("active")
}

myButtons[0].onclick = addActive;
myButtons[1].onclick = removeActive;
myButtons[2].onclick = toggleActive;
*/


// console.log(myTest);


// console.log(myTest.className.includes("active"));


// myH2.textContent = "Hello from JS";

// myH2.id = "H2";


// myTest.remove();
// myTest.insertBefore(myH2, myChild2);


// console.log(myH2);