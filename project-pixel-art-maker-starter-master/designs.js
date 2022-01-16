
//Name variables

let table=document.getElementById("pixelCanvas");
let color=document.getElementById("colorPicker");
let submit=document.getElementById("sizePicker");
//add an event listener to the button and the prevent default method
submit.addEventListener("click", function (e){
    pixelCanvas.innerHTML="";
    e.preventDefault();   
    makeGrid();
    });
    //add color to the cell with an 
 pixelCanvas.addEventListener ("click", function(e){
     if(e.target.nodeName==="TD"){
         e.target.style.backgroundColor=colorPicker.value;
     }
     
     
 })  

let heightNumber=document.getElementById("inputHeight");
let widthNumber=document.getElementById("inputWidth"); 
// When size is submitted by the user, call makeGrid()


function makeGrid(){
    for (let i=0; i < heightNumber.value; i++){
        let row = pixelCanvas.insertRow(0);
        for (let j = 0; j <widthNumber.value; j++){
            row.insertCell(0);
            
              
        }    
    }
}





       
    
 
// Your code goes here!

