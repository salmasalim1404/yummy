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
var allCategories = [];

(async () => {
    let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    allCategories = await response.data.categories;
    console.log(allCategories);
    displayAllCategories();
})();

function displayAllCategories  (){
    var cartoona = '';
    for(var i = 0 ; i < allCategories.length ; i++){
      cartoona+=` <div class="col-md-3 ">
      <figure class="position-relative overflow-hidden rounded-2">
          <img src="${allCategories[i].strCategoryThumb}" class=" w-100" alt="">
          <figcaption class="text-center caption-2 position-absolute w-100">
              <h2>${allCategories[i].strCategory}</h2>
              <p class="fs-5 text-center">${allCategories[i].strCategoryDescription.split(" ").slice(0,20).join()}</p>
          </figcaption>
      </figure>
     </div>`
    }
    document.querySelector('.rowData').innerHTML = cartoona;
}
