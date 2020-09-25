/*Add function in your JavaScript file to alert the text "Clicked!", 
and have your button call this function when it is clicked.*/
function buttonClick() {
    alert("Clicked!");
}

/*Write a JavaScript function that gets invoked by clicking this button 
that gets the text from the textbox and sets the color of the first div.*/
var color = document.getElementById("colorChange1").value;
function changeColor1() {
    document.getElementById("div1").style.backgroundColor = color;
}

/*Use JQuery to change background color of div2, getting user entered color
and clicking button*/
$("div").on( "click", "button", function( event ) {
    $(event.delegateTarget ).css( "background-color", "orange");
  });