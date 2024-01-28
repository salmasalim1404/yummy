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
let searchInput = document.querySelector('#search');





async function getData(searchTerm){
  let response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  let data =  await response.json();
 let final = data.meals
  getAllMeals();

}


function getAllMeals() {
    let cartoona = '';
    for (var i = 0; i < allMeals.length; i++) {
        cartoona += `<div class="col-md-3">
        <figure class="position-relative overflow-hidden">
          <img src="${allMeals[i].strMealThumb} " class="w-100" alt="" />
          <figcaption class="w-100 caption bg-white position-absolute">
            <h3>'${allMeals[i].strMeal}'</h3>
          </figcaption>
        </figure>
      </div>`
    }
    document.querySelector(".rowww").innerHTML = cartoona;

}

// searchInput.addEventListener('keyup' , function(){
    
//     getData(searchInput.value)
// })
