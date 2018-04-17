$(document).ready(function() {

  /*var modal = document.querySelector(".modal");
     var container = document.querySelector(".container");
     var closeButton = document.querySelector(".close-button");

     function toggleModal() {
         modal.classList.toggle("show-modal");
     }

     function windowOnClick(event) {
         if (event.target === modal) {
             toggleModal();
         }
     }

    container.addEventListener("click", toggleModal);
     closeButton.addEventListener("click", toggleModal);
     window.addEventListener("click", windowOnClick);

*/
  let members;



  $(function() {
var randomuserAPI = 'https://randomuser.me/api/?results=12';
var modalAPI = 'https://randomuser.me/api/';

    function displayPhotos(data) {
      members = data.results;

      var selectedMembersIndex = [];
      var photoHTML = '<ul id="box">';
var modalHTML = '<ul class="modal-content">';
      $.each(data.results, function(i, photo) {

        photoHTML += '<div class="surround">';
        photoHTML += '<li class="line">';
        photoHTML += '<a href="' + photo.picture.large + ' " class="image">';
        photoHTML += '<img src="' + photo.picture.large + '"></a></li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p class="caps">' + photo.name.first + " " + photo.name.last + '</li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p>' + photo.email + '</li>';
        photoHTML += '<li class="pic">';
        photoHTML += '<p class="location">' + photo.location.city + '</li>';
        photoHTML += '</div>';

        modalHTML += '<div class"mod">';
        modalHTML += '<li class="modalLine">';
        modalHTML += '<a href="' + photo.picture.large + ' " class="picModal">';
        modalHTML += '<img class="picModal" src="' + photo.picture.large + '"></a></li>';
        modalHTML += '<li class="picModal">';

        modalHTML += '<p class="center">' + photo.name.first + " " + photo.name.last + '</li>';
        modalHTML += '<li class="picModal">';
        modalHTML += '<p>' + photo.email + '</li>';
        modalHTML += '<p class="center">' + photo.location.city + '</li>';
        modalHTML += '<p class="center">' + photo.phone + '</li>';
        modalHTML += '<p class="center">' + photo.location.street + '</li>';
        modalHTML += '<p class="center">' + photo.location.city + '</li>';
        modalHTML += '<p class="center">' + photo.location.state + '</li>';
        modalHTML += '<p class="center">' + photo.location.postcode + '</li>';

        modalHTML += '<p class="center">' + '<p>Birthday</p>' + photo.dob + '</li>';




        modalHTML += '</div>';

      });



 photoHTML += '</ul>';
      $('#photos').append(photoHTML);


      $('.pic').on('click','li', function(){
          $('.modal-content').append(modalHTML);


});
}



    $.getJSON(randomuserAPI, displayPhotos);

    $(function() {
      var modalAPI = 'https://randomuser.me/api/';


      function displayPhotos(data) {
        var modalHTML = '<ul class="modal-content">';

        $.each(data.results, function(i, photo) {

          modalHTML += '<div class"mod">';
          modalHTML += '<li class="modalLine">';
          modalHTML += '<a href="' + photo.picture.large + ' " class="picModal">';
          modalHTML += '<img class="picModal" src="' + photo.picture.large + '"></a></li>';
          modalHTML += '<li class="picModal">';

          modalHTML += '<p class="center">' + photo.name.first + " " + photo.name.last + '</li>';
          modalHTML += '<li class="picModal">';
          modalHTML += '<p>' + photo.email + '</li>';
          modalHTML += '<p class="center">' + photo.location.city + '</li>';
          modalHTML += '<p class="center">' + photo.phone + '</li>';
          modalHTML += '<p class="center">' + photo.location.street + '</li>';
          modalHTML += '<p class="center">' + photo.location.city + '</li>';
          modalHTML += '<p class="center">' + photo.location.state + '</li>';
          modalHTML += '<p class="center">' + photo.location.postcode + '</li>';

          modalHTML += '<p class="center">' + '<p>Birthday</p>' + photo.dob + '</li>';




          modalHTML += '</div>';

        });


        modalHTML += '</ul>';
        $('.modal-content').append(modalHTML);


      }

      $.getJSON(modalAPI, displayPhotos);
    });



  });
});
