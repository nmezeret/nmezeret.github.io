p = document.getElementById('music')

function get_articles(query){
	$.ajax({
	    url: "http://data.test.bbc.co.uk/bbcrd-juicer/articles?q="+query+"&sources[]=1&recent_first=yes&apikey=YB0MY3VMHyllzPqEf5alVj5bUvGpvDVi",

	    success: function(response) {
	    	console.log(response);
	    	arts = response.hits
	    	len = arts.length
	    	$("#articles").empty();
	    	$("#articles").append("<h3>Latest News for Music</h3>");
	    	$("#articles").append("<table id='artable'></table>");	    	
	    	for(i=0;i<len;i++) {
	    		arts = response.hits[i]
	    		if (response.hits[i].title) {
	    			$("#artable").append("<tr class='art'><td class='image'><img src='"+arts.image+"'></td>"+"<td><a href='"+arts.url+"'><p>"+arts.title+"</td><td class='votes'></td></tr>");
	        	};
	    	};
	    	
	    },
	    error: function(xhr, error, status) {
	        console.log(xhr);
	        console.log(error);
	        console.log(status);
	    }
	});
};

var userLatitude = 0
var userLongitude = 0

function get_events(){
	$.ajax({
	    url: "https://api.songkick.com/api/3.0/events.json?location=geo:"+userLatitude+","+userLongitude+"&min_date=2015-06-05&max_date=2020-10-01&apikey=2a6kEhBoSR7QKkOw&jsoncallback=?",
	    dataType: "jsonp",

	    success: function(response) {
	        console.log(response);
	    	len = response.resultsPage.results.event.length
	    	$("#events").empty();
	    	$("#events").append("<h3>Events Near You</h3>");
	    	$("#events").append("<table id='evtable'></table>")	    	
	    	for(i=0;i<len;i++) {
	    		evs = response.resultsPage.results.event[i]
	    		if (evs.displayName) {
	    			$("#evtable").append("<tr><td><p class='ev'>"+evs.performance[0].displayName+"</p><p class='ven'>"+evs.venue.displayName+"</p></td></tr>");
	        	};
	    	};
	    	elements = document.getElementsByClassName('ev');
	    	for (i=0;i<elements.length;i++) {
				elements[i].addEventListener("click", function(){
	    	    	get_articles(String(this.innerHTML)+" band");
	    	    	this.style.color='red';
	    		});
	    	}
	    },
	    error: function(xhr, error, status) {
	        console.log(xhr);
	        console.log(error);
	        console.log(status);
	    }
	});
};

function getUserLocation() {

  function success(position) {
    userLatitude  = position.coords.latitude;
    userLongitude = position.coords.longitude;
    console.log(userLatitude);
    get_events();
  };
navigator.geolocation.getCurrentPosition(success);
};



document.getElementById("music").addEventListener("click", function(){
    get_articles(String(this.innerHTML) + " band cardiff");
    if (navigator.geolocation) {
        getUserLocation();
    };
});
document.getElementById("film").addEventListener("click", function(){
    get_articles(String(this.innerHTML)+ " movie cardiff");
});
document.getElementById("culture").addEventListener("click", function(){
    get_articles(String(this.innerHTML)+ " cardiff");
});
document.getElementById("sport").addEventListener("click", function(){
    get_articles(String(this.innerHTML) + " cardiff");
});


