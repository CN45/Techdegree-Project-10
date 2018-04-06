
$(document).ready(function () {
  $(function() {
var randomuserAPI = 'https://randomuser.me/api/?results=12';


  function displayPhotos(data) {
       var photoHTML = '<ul>';
       $.each( data.results, function (i, photo) {
         photoHTML += '<li class="pic">';
         photoHTML += '<a href="' + photo.picture.large + ' " class="image">';
         photoHTML += '<img src="' + photo.picture.large + '"></a></li>';
         photoHTML += '<li class="pic">';
         photoHTML += '<p class="caps">' + photo.name.first  + " "+ photo.name.last + '</li>';
         photoHTML += '<p>' + photo.email + '</li>';
         photoHTML += '<p class="location">' + photo.location.city + '</li>';
       });
        photoHTML += '</ul>';
       $('#photos').append(photoHTML);
       $('#photos').append(photoHTML);

     }

     $.getJSON(randomuserAPI, displayPhotos);
   });
 });
