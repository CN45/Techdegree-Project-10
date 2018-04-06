
$(document).ready(function () {
  $(function() {
var randomuserAPI = 'https://randomuser.me/api/?results=12';


  function displayPhotos(data) {
       var photoHTML = '<ul>';
      // var userInfo = '<ul class="user">';
       $.each( data.results, function (i, photo) {
         photoHTML += '<li class="pic">';
         photoHTML += '<a href="' + photo.picture.large + ' " class="image">';
         photoHTML += '<img src="' + photo.picture.large + '"></a></li>';
         photoHTML += '<li class="userInfo2">';
         photoHTML += '<p class="caps">' + photo.name.first  + " "+ photo.name.last + '</li>';

         photoHTML += '<p>' + photo.email + '</li>';
         photoHTML += '<p class="location">' + photo.location.city + '</li>';
       });
       photoHTML += '</ul>';
      // userInfo += '</ul>';
       $('#photos').append(photoHTML);
       $('#photos').append(photoHTML);
     }
     $.getJSON(randomuserAPI, displayPhotos);
   });
 });


/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://randomuser.me/api/?=&inc=name,picture,phone,email,login,location,dob,cell&nat=us',
  "headers": {}
}



$(document).ready(function () {
      var url ='https://randomuser.me/api/?=&inc=name,picture,phone,email,login,location,dob,cell&nat=us';
      $.getJSON(url, function(data) {
var photoHTML = ('.images');
      $.each( data.results, function (i, photo) {
        photoHTML += '<img src="' + photo.picture.large+ '" "'+photo+'">';


      });

      $('.images').append(photoHTML);
});

  //  $.getJSON('https://randomuser.me/api/', displayPhotos);
   });
/*



/*
   //step 1 and 2,
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if(xhr.readyState === 4) {
       var employees =JSON.parse(xhr.responseText);
       var statusHTML = '<ul class="bulleted">';
       for (var i=0; i < results.picture.large.length; i ++) {


       document.getElementById('.images').append(statusHTML);
     }
   }
 }

   //open request step 3
   xhr.open('GET', 'https://randomuser.me/api/');


/*
$(function () {
var $pictures = $('#pictures');

$.ajax({
  type: 'GET',
  url: 'https://randomuser.me/api/',
  success: function(results) {
    $.each(results, function (i, picture) {
      $pictures.append('<img src="' + picture.picture + '">');
    });
  }
});
});
*/



/*
$(document).ready( function () {

  var url='https://randomuser.me/api/';
  $.getJSON(url, function (response) {
    var image = '<li class="pic">';
    $.each(response.results.picture, function(index, jpg) {

    });
    image += '</li>';
    $(image).appendTo($("li"));
  });
});
*/
