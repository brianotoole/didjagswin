/* Get Data from NFL LiveUpdate */
//var apiUrl = "{{ site.baseurl }}/js/data-sample.json";
var apiUrl = "http://www.nfl.com/liveupdate/scorestrip/ss.json";
$.getJSON(apiUrl, function(data) {
  $.each(data.gms, function(index, obj) {
    //console.log(obj);
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
      $(".result").html("Wow. They actually won.");
    } else if (isHome == true && winnerHome == false) {
      $(".result").html("Nope.");
    } else if (isHome == false && winnerHome == true) {
      $(".result").html("Nope.");
    } else if (isHome == false && winnerHome == false) {
      $(".result").html("Yes. They won on the road. Impressive.");
    } else {
      //
    }
  })
});
/* End */

