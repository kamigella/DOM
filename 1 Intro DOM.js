document.title= "Modifying the Dom"
document.body.style.backgroundColor = "#FF69B4";
//document.body.style.backgroundColor = "rgb(76, 23, 100)";

/*const collection = document.body.children;
for (let i = 0; i < collection.length; i++){
    console.log(document.body.children)
}*/

let bodychildren = document.body.children;
for (let element of bodychildren) {
    console.log(element)
}
