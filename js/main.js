/* Get Data from NFL LiveUpdate */
//var apiUrl = "{{ site.baseurl }}/js/data-sample.json";
var apiUrl = "http://www.nfl.com/liveupdate/scorestrip/ss.json";
$.getJSON(apiUrl, function(data) {
  $.each(data.gms, function(index, obj) {
    //console.log(obj);
    var htmlResult = $(".js-result");
    var teamName = "Jaguars";
    var homeTeam = obj.hnn;
    var awayTeam = obj.vnn;
    var scoreHome = obj.hs;
    var scoreAway = obj.vs;
    var winnerHome = (scoreHome > scoreAway);
    // Set home or away team
    if (homeTeam == teamName) {
      var isHome = true;
    } else if (awayTeam == teamName) {
      var isHome = false;
    } else {}
    // Check scores & assign results
    if (isHome == true && winnerHome == true) {
      $(htmlResult).html("Wow. They actually won.");
    } else if (isHome == true && winnerHome == false) {
      $(htmlResult).html("No sir.");
    } else if (isHome == false && winnerHome == true) {
      $(htmlResult).html("Nope.");
    } else if (isHome == false && winnerHome == false) {
      $(htmlResult).html("Yes. They won on the road. Impressive.");
    } else {
      //
    }
  })
});
/* End */

