$(document).ready(function() {
    var API_URL = "https://fd25hjufdwhtrnbmnuglrsvigq0ayuef.lambda-url.eu-west-1.on.aws/"
    $.getJSON(API_URL, function(data) {
      // Update div with ID "data-container"
      $("#sample-data").html(data['ctRoot'][0]['description']);
    });
  });