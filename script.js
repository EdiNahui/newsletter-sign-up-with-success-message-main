var button = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var doc = document.getElementsByTagName("main");
button.addEventListener('click', (event) => {
    event.preventDefault();
    var input = document.getElementsByTagName("input")[0];
    if (!input.checkValidity()) {
        input.style = "border: 1px solid tomato; background: #f5d3d0;"
        document.getElementById('invalidLabel').style = "display:block";
    }
    else if (input.checkValidity()) {
        document.getElementById("text").style = "display:none";

        document.getElementById("successmessage").style = "display:flex";
        document.getElementsByTagName("main")[0].style = "grid-template-columns: 100%; grid-template-areas: 'success'; width:min-content; grid-template-rows: 100%;";
        document.getElementById("confMail").innerHTML = input.value;
    }

})
button2.addEventListener('click', () => {

    document.getElementById("text").style = "display:flex;";

    document.getElementById("successmessage").style = "display:none";
        document.getElementsByTagName("main")[0].style = doc;
    


})

