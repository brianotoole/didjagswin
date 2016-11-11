/* Get Data from NFL LiveUpdate */
//var apiUrl = "/js/sample-data.json";
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
    var isCurrentWeek = (scoreHome == scoreAway);
    // Set home or away team
    if (homeTeam == teamName) {
      var isHome = true;
      var opposingTeamName = obj.vnn;
    } else if (awayTeam == teamName) {
      var isHome = false;
      var opposingTeamName = obj.hnn;
    } else {}
    // Check scores & assign results
    if (isHome == true && isCurrentWeek == true || isHome == false && isCurrentWeek == true) {
      $(htmlResult).html("We'll find out this week against the " + opposingTeamName + ".");
    } else if (isHome == true && winnerHome == true) {
      $(htmlResult).html("Wow. Yes, they actually won against the " + opposingTeamName + ".");
    } else if (isHome == true && winnerHome == false) {
      $(htmlResult).html("Not this time. Lost to the " + opposingTeamName + ".");
    } else if (isHome == false && winnerHome == true) {
      $(htmlResult).html("Nope. Lost to the " + opposingTeamName + ".");
    } else if (isHome == false && winnerHome == false) {
      $(htmlResult).html("Yes. They won on the road against the " + opposingTeamName + ".");
    } else {
      //
    }
  })
});
/* End */

/* Share button popup */
(function(){
  
  var shareButtons = document.querySelectorAll(".share-btn");

  if (shareButtons) {
      [].forEach.call(shareButtons, function(button) {
      button.addEventListener("click", function(event) {
 				var width = 650,
            height = 450;

        event.preventDefault();

        window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+width+',height='+height+',top='+(screen.height/2-height/2)+',left='+(screen.width/2-width/2));
      });
    });
  }

})();
/* End */