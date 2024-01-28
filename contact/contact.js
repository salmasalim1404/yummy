$('.icon-l').click(function(){
  $('.slider').css('left' , '0');
  $('.openslider').css('left' , '200px');
  $(".icon-l").removeClass("d-block");
  $(".icon-x").addClass('d-block');
  // $('.icon-l').addClass('d-none');
  // $('icon-x').removeClass('d-none')
  $("#links").slideDown(1000);
})
$('.icon-x').click(function(){
  $('.slider').css('left' , '-270px');
  $('.openslider').css('left' , '0');
  $(".icon-l").addClass("d-block");
  // $(".icon-x").addClass("d-none");
  // $('.icon-x').addClass('d-none');
  // $('icon-l').removeClass('d-none')
})
$(document).ready(function () {
  $('.loading').fadeOut(1500 , function(){
      $('body').css('overflow' , 'auto');
    
  });
  
})
function validateForm() {
  var name = document.getElementById('name')
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rePassword = document.getElementById("rePassword").value;
  var phone = document.getElementById("phone").value;
  var age = document.getElementById("age").value;


  var nameRegex = /^[a-zA-Z\s]+$/;
if (nameRegex.test(name)) {
    return true; 
  } else {
    alert("Please enter a valid name");
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

 
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }


  if (password !== rePassword) {
    alert("Passwords do not match.");
    return false;
  }

 
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  
  if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age.");
    return false;
  }

  
  return true;
}
  