window.onload = function(){
    var textbox1=document.getElementById('textinput');
    const chatarea = document.getElementById("chatarea");
    const cleartext = document.getElementById("cleartext");
    var addtext =""

    textbox1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13 && textbox1.value !="") {
            if (addtext ==="")
                addtext= textbox1.value
            else addtext =addtext+ "\n" + textbox1.value;
            chatarea.value=addtext;
            textbox1.value ="";
  }
  
      })
    cleartext.addEventListener("click",function(event) {
        chatarea.value="";
        addtext =""
    })
}