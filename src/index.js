import 'bootstrap'
import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    submitViaAjax(formData);
  });
});

// this is a mock ajax call
function submitViaAjax(formData) {
  // DO NOT EDIT BELOW THIS LINE
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}