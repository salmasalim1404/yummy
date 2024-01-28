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




var allMeals = [];

(async () => {
    var response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    allMeals = await response.data.meals;
    console.log(allMeals);
    getAllMeals()

})();
function getAllMeals() {
    let cartoona = '';
    for (var i = 0; i < allMeals.length; i++) {
        cartoona += `<div class="col-md-3 onclick=""">
        <figure class="position-relative overflow-hidden">
          <img src="${allMeals[i].strMealThumb} " class="w-100" alt="" />
          <figcaption class="w-100 caption bg-white position-absolute">
            <h3>'${allMeals[i].strMeal}'</h3>
          </figcaption>
        </figure>
      </div>`
    }
    document.querySelector(".data").innerHTML = cartoona;

}










// var x = [];
// var http = new XMLHttpRequest();
// http.open('Get' , 'https://forkify-api.herokuapp.com/api/search?q=pasta')
// http.send();
// http.addEventListener('readystatechange' , function(){
//     if (http.readyState == 4) {
//         x = JSON.parse(http.response).recipes
//         console.log(x);
//         display();
//     }
// })

// function display() {
//    let cartona = ``;
//    for (let i = 0; i < x.length; i++) {
//     cartona += ` <div class="col-md-4 p-3">
//     <a href="${x[i].source_url}">
//     <div class="item">
//       <img src="${x[i].image_url}" alt="">
//       <div class="img-layer">
//       <div class="tab-layer text-center">
//         <h6>Category</h6>
//         <h4>Project Title</h4>
//        </div>
//     </div>
//     </div>
//     </a>
//   </div>`
    
//    }
//    document.querySelector('.row-1').innerHTML= cartona;
// }