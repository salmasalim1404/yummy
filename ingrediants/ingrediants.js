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
var allIngredients = [];

(async () => {
    let response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    allIngredients = await response.data.meals.slice(0,20);
    console.log(allIngredients);
    displayAllIngredients();
})();

function displayAllIngredients  (){
    var cartoona = '';
    for(var i = 0 ; i < allIngredients.length ; i++){
      cartoona+=`   <div class= " col-md-3 text-center ">
      <figure>
        <i class=" fa-solid fa-drumstick-bite fa-4x"></i>
        <figcaption class= "overflow-hidden">
          <h3 class="text-white">${allIngredients[i].strIngredient}</h3>
          <p class=" ingredient-para text-center"
            >${allIngredients[i].strDescription.split(" ").slice(0,15).join(
            )}
          </p>
        </figcaption>
      </figure>
    </div> `
    }
    document.querySelector('.rowData').innerHTML = cartoona;
}