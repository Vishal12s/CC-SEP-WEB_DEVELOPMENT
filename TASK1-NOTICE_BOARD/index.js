


const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  // paragraph.style.backgroundColor = "#dddbdb";
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  // paragraph.style.backgroundColor = "#ffe44d";
} )
const paragraph2 = document.getElementById("edit2");
const edit_button2 = document.getElementById("edit-button2");
const end_button2 = document.getElementById("end-editing2");

edit_button2.addEventListener("click", function() {
  paragraph2.contentEditable = true;
  // paragraph2.style.backgroundColor = "#dddbdb";
} );

end_button2.addEventListener("click", function() {
  paragraph2.contentEditable = false;
  // paragraph2.style.backgroundColor = "#ffe44d";
} )
const paragraph3 = document.getElementById("edit3");
const edit_button3 = document.getElementById("edit-button3");
const end_button3 = document.getElementById("end-editing3");

edit_button3.addEventListener("click", function() {
  paragraph3.contentEditable = true;
  // paragraph3.style.backgroundColor = "#dddbdb";
} );

end_button3.addEventListener("click", function() {
  paragraph3.contentEditable = false;
  // paragraph3.style.backgroundColor = "#ffe44d";
} )
const paragraph4 = document.getElementById("edit4");
const edit_button4 = document.getElementById("edit-button4");
const end_button4 = document.getElementById("end-editing4");

edit_button4.addEventListener("click", function() {
  paragraph4.contentEditable = true;
  // paragraph4.style.backgroundColor = "#dddbdb";
} );

end_button4.addEventListener("click", function() {
  paragraph4.contentEditable = false;
  // paragraph4.style.backgroundColor = "#ffe44d";
} )
const paragraph5 = document.getElementById("edit5");
const edit_button5 = document.getElementById("edit-button5");
const end_button5 = document.getElementById("end-editing5");

edit_button5.addEventListener("click", function() {
  paragraph5.contentEditable = true;
  // paragraph5.style.backgroundColor = "#dddbdb";
} );

end_button5.addEventListener("click", function() {
  paragraph5.contentEditable = false;
  // paragraph5.style.backgroundColor = "#ffe44d";
} )
const paragraph6 = document.getElementById("edit6");
const edit_button6 = document.getElementById("edit-button6");
const end_button6 = document.getElementById("end-editing6");

edit_button6.addEventListener("click", function() {
  paragraph6.contentEditable = true;
  // paragraph6.style.backgroundColor = "#000";
} );

end_button6.addEventListener("click", function() {
  paragraph6.contentEditable = false;
  // paragraph6.style.backgroundColor = "#ffe44d";
} )
const mail = "test@gmail.com";
const password = "test"
const formMail = document.getElementById("email");
const formPass = document.getElementById("password");

$( "#login-btn" ).click(function() {
  $(".test").hide();
  $(".login").removeClass("hidden");
  $("body").addClass("bg-gray-900");
});
  

 
  $("#signin-btn").click(function() {
    if (formMail.value == mail && formPass.value == password){
      $(".test").show();
      $(".login").addClass("hidden");
      $("#login-btn").text("logout");
      $("#edit-btn").removeClass("hidden");
      $(".btn-cls").removeClass("hidden");
    }
    else if(formMail.value== "" && formPass.value == ""){
      alert("Enter Mail Id and Password")

    }

    else{
      alert("your password or email is incorrect")
    }
    

});