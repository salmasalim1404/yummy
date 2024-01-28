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
var allAreas = [];

(async () => {
    let response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    allAreas = await response.data.meals;
    console.log(allAreas);
    displayAllAreas();
})();

function displayAllAreas  (){
    var cartoona = '';
    for(var i = 0 ; i < allAreas.length ; i++){
      cartoona+=`  <div class="col-md-3 text-white text-center">
      <i class="fa-solid fa-house-laptop fa-4x"></i>
    <h3>${allAreas[i].strArea}</h3>
   </div>
  </div>
</div> `
    }
    document.querySelector('.rowData').innerHTML = cartoona;
}