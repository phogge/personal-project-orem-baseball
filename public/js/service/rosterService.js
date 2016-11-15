angular.module("oremBaseballApp")
  .service("rosterService", function($http){

      // all GETS
    this.getRoster = function(){
      return $http({
        method: "GET",
        url: "http://localhost:8000/roster"
      });
    };

    this.getTeam = function(team){
      return $http({
        method: "GET",
        url: "http://localhost:8000/roster/" + team
      });
    };

    this.createRoster = function(roster){
      return $http({
        method: "POST",
        url: "http://localhost:8000/roster",
        data: roster
      });
    };

    this.postRosterItem = function(roster) {
      return $http({
        method: "PUT",
        url: "http://localhost:8000/roster"
      });
    };

    this.deleteRosterItem = function(roster) {
      return $http({
        method: "DELETE",
        url: "http://localhost:8000/roster"
      });
    };
});
