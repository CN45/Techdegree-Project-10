
$(document).ready(function () {

$(function() {


 var results2 = [];

 $.getJSON('https://randomuser.me/api/', function(data) {
     $.each(data.results, function(i, f) {
        var person =  "<li>" + f.name.first + "</li>" +
          f.name.last  + "<li>" + f.email + "</li>" + "<li>" + f.location.city + "</li>"
         $(person).appendTo(".item");

   });

 });

});
});


var settings = {
  "async": true,
  "crossDomain": true,
  "url": 'https://randomuser.me/api/?=&inc=name,picture,phone,email,login,location,dob,cell&nat=us',
  "headers": {}
}



$(document).ready(function () {
      var url ='https://randomuser.me/api/?=&inc=name,picture,phone,email,login,location,dob,cell&nat=us';
      $.getJSON(url, function(data) {
var photoHTML = '.images';
      $.each( data.results, function (i, photo) {
        photoHTML += '<img src="' + photo.picture.large+ '" "'+photo+'">';

    
      });

      $('.images').append(photoHTML);
});

  //  $.getJSON('https://randomuser.me/api/', displayPhotos);
   });

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
