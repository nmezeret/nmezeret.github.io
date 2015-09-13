/*SECTION 1: HOME PAGE*/


/*The first few lines handle the introduction to the website, making the large photograph disappear
and making the small albums covers appear, together with the pig and some text*/
var mq = window.matchMedia( "(min-width: 768px)" );

if (mq.matches) {
    $(document).ready(function() {
    	$("html").one("click", function() {
    		$(".homePage").fadeOut(1200);
            $("<img id='pig' src='photos/pigL.png' alt='Algie the Pig'>").insertAfter($(".homePage")).off();
            $("<p class='instructions'>USE THE AROW KEYS TO NAVIGATE ALGIE THE PIG<br>TOWARDS AN ALBUM, BOOKS OR TOUR \
                DATES.<br><br>YOU CAN ALTERNATIVELY CLICK ON EACH \
                <br>COVER TO ACCESS THE INFORMATION.</p>").insertAfter($(".homePage")).off();
            $("#pig, .instructions, #piper1, #saucer2, #more3, #umma4, #atom5, #meddle6, \
                #clouds7, #dark8, #wish9, #animals10, #wall11, #final12, #lapse13, #bell14, \
                #river15, #books, #tour_dates").delay(1500).fadeIn(1200);

    	});
    });

    /*The 'overlap' variable contains a function which is there to check if the pig is overlapping 
    with div2, ie any div that is run through the function*/
        var overlap1 = function overlap(div2) {
            var x1 = $('#pig').offset().left;
            var y1 = $('#pig').offset().top;
            var h1 = $('#pig').outerHeight(true);
            var w1 = $('#pig').outerWidth(true);
            var b1 = y1 + h1;
            var r1 = x1 + w1;
            var x2 = $(div2).offset().left;
            var y2 = $(div2).offset().top;
            var h2 = $(div2).outerHeight(true);
            var w2 = $(div2).outerWidth(true);
            var b2 = y2 + h2;
            var r2 = x2 + w2;

            if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
                return false;
            }
            else {
                return true  
            };
        };

        var centrePig = function() {
            $('#pig').css('display','none')
            $("<img id='pig' src='photos/pigL.png'>").insertAfter($(".homePage")).off();
            $('#pig').css('display','inline')     
        }




    /*Through the use of switch cases, this bit allows the user to move the pig about the screen.
    When the user presses the up key, the programme runs the overlap function with every div located
    on the top row. If the pig is on any of them when the key is pressed, the programme will open
    the corresponding HTML file. The same thing happens when the down arrow is pressed with divs on 
    the bottom, the left with divs on the left and the right with divs on the right.*/
    $(document).ready(function() {
        $(document).keydown(function(key) {
            switch(parseInt(key.which,10)) {
                // Left Arrow
                case 37:
                    $('#pig').animate({left: "-=75px"}, 'fast');
                    $('#pig').attr("src","photos/pigL.png");
                    $('.instructions').fadeOut('slow');
                    if((overlap1('#books'))===true){
                        centrePig();
                        var win = window.open('books.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#tour_dates'))===true){
                        centrePig();
                        var win = window.open('tour_dates.html', '_blank');
                        win.focus();
                    }
                    break;
                // Up Arrow
                case 38:
                    $('#pig').animate({top: "-=40px"}, 'fast');
                    $('#pig').attr("src","photos/pigU.png");
                    $('.instructions').fadeOut('slow');
                    if((overlap1('#piper1'))===true){
                        centrePig();
                        var win = window.open('piper.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#saucer2'))===true){
                        centrePig();
                        var win = window.open('saucer.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#more3'))===true){
                        centrePig();
                        var win = window.open('more.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#umma4'))===true){
                        centrePig();
                        var win = window.open('umma.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#atom5'))===true){
                        centrePig();
                        var win = window.open('atom.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#meddle6'))===true){
                        centrePig();
                        var win = window.open('meddle.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#clouds7'))===true){
                        centrePig();
                        var win = window.open('clouds.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#books'))===true){
                        centrePig();
                        var win = window.open('books.html', '_blank');
                        win.focus();
                    };  
                    if((overlap1('#tour_dates'))===true){
                        centrePig();
                        var win = window.open('tour_dates.html', '_blank');
                        win.focus();
                    }; 
                    break;
                // Right Arrow Pressed
                case 39:
                    $('#pig').animate({left: "+=75px"}, 'fast');
                    $('#pig').attr("src","photos/pigR.png");
                    $('.instructions').fadeOut('slow');
                    if((overlap1('#books'))===true){
                        centrePig();
                        var win = window.open('books.html', '_blank');
                        win.focus();
                    }; 
                    if((overlap1('#tour_dates'))===true){
                        centrePig();
                        var win = window.open('tour_dates.html', '_blank');
                        win.focus();
                    };
                    break;
                    
                // Down Arrow Pressed
                case 40:
                    $('#pig').animate({top: "+=40px"}, 'fast');
                    $('#pig').attr("src","photos/pigD.png");
                    $('.instructions').fadeOut('slow');
                
                    if((overlap1('#dark8'))===true){
                        centrePig();
                        var win = window.open('dark.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#wish9'))===true){
                        centrePig();
                        var win = window.open('wish.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#animals10'))===true){
                        centrePig();
                        var win = window.open('animals.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#wall11'))===true){
                        centrePig();
                        var win = window.open('wall.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#final12'))===true){
                        centrePig();
                        var win = window.open('final.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#lapse13'))===true){
                        centrePig();
                        var win = window.open('lapse.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#bell14'))===true){
                        centrePig();
                        var win = window.open('bell.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#river15'))===true){
                        centrePig();
                        var win = window.open('river.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#books'))===true){
                        centrePig();
                        var win = window.open('books.html', '_blank');
                        win.focus();
                    };
                    if((overlap1('#tour_dates'))===true){
                        centrePig();
                        var win = window.open('tour_dates.html', '_blank');
                        win.focus();
                    };
                    break;
            }
        });
    });
}

/*END OF SECTION 1*/

/*SECTION 2: JS FOR EACH ALBUM.HTML*/
$(document).ready(function(){
/*These first few lines allow the user to click a photo to close the page. 
Since the background changes to white when on smaller devices, this also changes the source of the button image to the black version.*/
    $('#closeButton').click(function(){
        window.close();
    });

    var mq = window.matchMedia( "(max-width: 768px)" );

    if (mq.matches) {
        $('#closeButton').attr('src', 'photos/closeButtonBlack.png');
    }

/*This first ajax request uses the #lastfmName hidden on the HTML page to know which information to retrieve.
It then sticks the track information in a table. */
    var lastfmName = $("#lastfmName").text();

    $.ajax({
        url: "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2b690559400976aa3e79badb869023a7&artist=Pink+Floyd&format=json",
        data: {
            album: lastfmName,
        },

        success: function(response){
            console.log(response);      
            
            /*This function converts the duration, given in seconds, into a MM:SS format*/
             convertDuration = function(duration) {
                var minutes = parseInt(duration / 60);
                var seconds = parseInt(duration - minutes*60);
                if (seconds.toString().length===1) {
                    return minutes + ":0" + seconds;
                    }
                else {
                    return minutes + ":" + seconds;
                    };
                };

                /*Some albums have been digitally remastered, and there have a 24 character string after
                each song title ((YYYY Digital Remaster)) which I have decided to slice out. 
                This IF condition keeps the albums that haven't been remastered from suffering the slice on their 
                song titles.*/
                if (lastfmName==="More" || lastfmName==="The Piper at the Gates of Dawn"
                    || lastfmName==="The Endless River" || lastfmName==="The Division Bell") {
                    for(var i = 0; i < response.album.tracks.track.length; i++) {
                        $('.trackListing').append('<tr><td>' + (i+1) +'</td><td>'+response.album.tracks.track[i].name+'</td><td>'+
                        convertDuration(response.album.tracks.track[i].duration)+'</td></tr>');
                    };

                }
                else {
                    for(var i = 0; i < response.album.tracks.track.length; i++) {
                        $('.trackListing').append('<tr><td>' + (i+1) +'</td><td>'+response.album.tracks.track[i].name.slice(0,-24)+'</td><td>'+
                        convertDuration(response.album.tracks.track[i].duration)+'</td></tr>');
                    };
                };    
        }, 

        error: function(xhr, status, error){
            console.log(status);
            console.log(error);
        }
    });
/*The ajax request to wikipedia grabs the Wikipedia page ID hidden in the HTML to request the opening
extract for the relevant page, and adds a link to the full Wikipedia page.*/
    var wikiID = $("#wikiID").text();

     $.ajax({
            url:'https://en.wikipedia.org/w/api.php?&exlimit=max&exintro',
            data: {
            format: "json", 
            action: "query",
            prop: "extracts",
            pageids: wikiID,
            },

            dataType: 'jsonp',
            success: function(response){
                console.log(response);

                if($('body').hasClass('black')){
                    $('.scroll').append(response.query.pages[wikiID].extract);
                    $('.scroll').append("<a class='black' href='http://en.wikipedia.org/wiki?curid=" + wikiID + 
                    "' target='_blank'>View full Wikipedia page</a>");
                }

                else {
                    $('.scroll').append(response.query.pages[wikiID].extract);
                    $('.scroll').append("<a href='http://en.wikipedia.org/wiki?curid=" + wikiID + 
                    "' target='_blank'>View full Wikipedia page</a>");
                }
            }, 

            error: function(xhr, status, error){
                console.log(status);
                console.log(error);
            }
        });
});

/*END OF SECTION 2*/


/*SECTION 3: JS FOR BOOKS.HTML*/
$(document).ready(function(){
/*This first few lines set up the close button for the page*/
    $('#closeButton').click(function(){
        window.close();
    });
/*This defines the function that gets the book information from Google Books*/  
    var getBooks = function(query){
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?&maxResults=30&start-index=31",
            data: {
                q: query

            },
            dataType: 'jsonp',

            success: function(response){
                console.log(response);
                $(".books").html('<tr><th></th><th></th><th></th><th></th></tr>');
                /*I decided to handle the response by pairs, as I wanted two books on each row of the table*/
                for (var i = 0; i < response.items.length; i=i+2) {
                    var item = response.items[i];
                    var item2 = response.items[i+1];
                   
                /*This adds a new row to the books table, in the following structure: Book 1 Info -- Book 1 Thumbnail -- Book 2 Info -- Book 2 Thumbnail*/             
                    $(".books").append("<tr class='row'><td class='bookTitles'><p><a class='titles' href='"
                        +item.volumeInfo.canonicalVolumeLink+"' target='_blank'>" + item.volumeInfo.title + 
                        "</a></p><p class='author"+i+"''>"+item.volumeInfo.authors['0']+"</td><td><img class='thumbnail' src='"
                        +item.volumeInfo.imageLinks.thumbnail+"'></td><td class='bookTitles'><p><a class='titles' href='"
                        +item2.volumeInfo.canonicalVolumeLink+"' target='_blank'>" + item2.volumeInfo.title + 
                        "</a></p><p class='author"+(i+1)+"''>"+item2.volumeInfo.authors['0']+"</td><td><img class='thumbnail' src='"
                        +item2.volumeInfo.imageLinks.thumbnail+"'></td></tr>");
                    /*$("body").append("<div class='descriptions' id='description'"+i+"'>"+item.volumeInfo.description+"</div>");
                    $("body").append("<div class='descriptions' id='description'"+(i+1)+"'>"+item2.volumeInfo.description+"</div>"); */      
                }

                /*Some books have a subtitle, others don't. 
                This for loop checks if each book does, and slots it in between the title and the author if it does*/
                for (var i = 0; i < response.items.length; i++) {
                    var subtitle = response.items[i].volumeInfo.subtitle

                    if (typeof subtitle === 'undefined') {}

                    else{
                        $("<p>"+subtitle+"</p>").insertBefore($(".author"+i))
                    }
                }       
            },

            error: function(xhr, status, error){
                console.log(status);
                console.log(error);
            }
        })      
    };

    /*The page loads information on books about Pink Floyd by default, by the user can change this with the input box.
    Submitting anything in the input box will run whatever the user has input through the getBooks() function.*/
    getBooks('pink floyd');

    $('#search_form').submit(function(event) {
        event.preventDefault();
        var query = $('#query').val();
        getBooks(query);
    });

});

/*END OF SECTION 3*/

/*SECTION 4: JS FOR TOUR_DATES.HTML*/
$(document).ready(function() {

    /*This gets the user location, to be used later on*/
    function getUserLocation() {

      function success(position) {
        userLatitude  = position.coords.latitude;
        userLongitude = position.coords.longitude;
        console.log(userLatitude);
      };
    navigator.geolocation.getCurrentPosition(success);
    };

    if (navigator.geolocation) {
        console.log("broogs");
        getUserLocation();
    };


    var count = 0


    /*This bit of code sets up the Leaflet map inside of the 'map' div*/
    map = L.map('map').setView([36.8, 0], 2);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/nmezeret.ka5d117i/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);


    /*This is the function which interacts with the Songkick to get concert dates for each artist inside the list*/
    var getConcerts = function(artist_id){

        $.ajax({
            url: "https://api.songkick.com/api/3.0/artists/"+artist_id+"/calendar.json?apikey=2a6kEhBoSR7QKkOw&jsoncallback=?",
            dataType: "jsonp",

            success: function(response) {
                console.log(response);
                var concert = response.resultsPage.results.event;
                $('#artists').empty()
                
                /*IF function to check if the artist has any concerts lined up, and respond appropriately if he does not*/
                if (typeof concert === 'undefined') {
                    $('#concerts').html('<tr><td>Sorry, this artist is not currently touring</td></tr>')
                }
                else {
                    count = count + 1;
                    $('#concerts').append('<tr><th>LOCATION</p></th><th>DATE & TIME</th></tr>');
                    var markers = []

                    /*This defines a function to get the date in a more readable format*/
                    convertDate = function(date) {
                        var day = date.slice(8);

                        if (date.slice(5,7) === "01") {
                            var month = "January"
                        };
                        if (date.slice(5,7) === "02") {
                            var month = "February"
                        };
                        if (date.slice(5,7) === "03") {
                            var month = "March"
                        };
                        if (date.slice(5,7) === "04") {
                            var month = "April"
                        };
                        if (date.slice(5,7) === "05") {
                            var month = "May"
                        };
                        if (date.slice(5,7) === "06") {
                            var month = "June"
                        };
                        if (date.slice(5,7) === "07") {
                            var month = "July"
                        };
                        if (date.slice(5,7) === "08") {
                            var month = "August"
                        };
                        if (date.slice(5,7) === "09") {
                            var month = "September"
                        };
                        if (date.slice(5,7) === "10") {
                            var month = "October"
                        };
                        if (date.slice(5,7) === "11") {
                            var month = "November"
                        };
                        if (date.slice(5,7) === "12") {
                            var month = "December"
                        };

                        var year = date.slice(0,4);

                        return day + " " + month + " " + year

                    }

                    for (i = 0; i < concert.length; i++){
                        var concertVenue = concert[i].venue.displayName; 
                        var concertLocation = concert[i].location.city;
                        var concertDate = convertDate(concert[i].start.date);
                        var concertLink = concert[i].uri;
                        
                        /*This IF function calls on the Google Geocoding API if the geographical coordinates of the concert location
                        are not included in the response. This happens very rarely according to the Songkick documentation, but in case it does,
                        this will run the venue location through the geocoding API and return its coordinates.*/
                        if (typeof concert[i].location.lat === "undefined") {
                            $.ajax({
                                url:'http://maps.googleapis.com/maps/api/geocode/json?address='+concert_location+'&sensor=false',
                                success:function(response){
                                    console.log(response);
                                    var lat = response.results[0].geometry.location.lat
                                    var lng = response.results[0].geometry.location.lng
                                },

                                error: function(xhr, error, status){
                                    console.log(xhr);
                                    console.log(error);
                                    console.log(status);
                                }      
                            });
                        }
                        /*This bit places the relevant markers on the map thanks to the latitude and longitude*/
                        else{
                            var lat = concert[i].location.lat
                            var lng = concert[i].location.lng

                            markers.push(L.marker([lat, lng], {title: concertLocation+"\n"+concertDate}));
                            marker_layer = L.layerGroup(markers).addTo(map);

                            /*The time of each concert, when specified in the response is expressed in the following format: HH:MM:SS.
                            This isn't very efficient which is why I have decided to slice off the last three characters. However,
                            when the time isn't specified in the response, the slice cannot happen and the whole loop is broken. This IF condition
                            checks if the time is specified and reacts accordingly.*/

                            if (jQuery.isEmptyObject(concert[i].start.time)){
                                $('#concerts').append("<tr><td><a href='"+concertLink+"' target='_blank'>"+concertVenue+"</a><br>"+concertLocation+"</td><td>"+concertDate+"</tr>");
                            }
                            else{
                                var concertTime = concert[i].start.time.slice(0,-3);
                                $('#concerts').append("<tr><td><a href='"+concertLink+"' target='_blank'>"+concertVenue+'</a><br>'+concertLocation+"</td><td>"+concertDate+'<br>'+concertTime+"</td></tr>");
                            }
                            /*This calculates the distance between the user's location and the concert location (using the haversine formula), 
                            in order to indicate the best options for the user.*/ 
                            
                            if (typeof userLatitude !== "undefined") {
                                var R = 6371; // radius of the earth in km
                                var concertLat = lat * Math.PI / 180; // * Math.Pi / 180 converts the degrees to radians
                                var userLat = userLatitude * Math.PI / 180;
                                var latDiff = (userLatitude-lat) * Math.PI / 180;
                                var lonDiff = (userLongitude-lng) * Math.PI / 180;
                                var a = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
                                        Math.cos(concertLat) * Math.cos(userLat) *
                                        Math.sin(lonDiff/2) * Math.sin(lonDiff/2);
                                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                                var d = R * c;

                                if (d<100) {
                                    $('#closeConcerts').html("Based on your location, the following concert(s) may interest you:");
                                    $('#closeShows').append("<li><a href='" + concertLink + "' target='_blank'>"+concertVenue+" - "+concertLocation+"</a><br>"+concertDate+"</li>");
                                }
                            }
                        }
                    }   
                }
            },
            error: function(xhr, error, status) {
                console.log(xhr);
                console.log(error);
                console.log(status);
            }
        })
    }

    /*In case the user would like to look up an artist who is not featured in the list, he will not be provided with a list of concerts,
    but with a list of links to the Songkick website, all pertaining to his search. This is due to the fact than an artist ID is required
    to retrieve concert dates from the Songkick API*/
    var searchArtist = function(query) {
        $.ajax({
            url:"https://api.songkick.com/api/3.0/search/artists.json?query="+query+"&apikey=2a6kEhBoSR7QKkOw&jsoncallback=?",
            dataType: 'jsonp',
        
        success: function(response) {
            console.log(response);
            $('#concerts').empty()
            $('#artists').empty()
            var artist = response.resultsPage.results.artist
            for (i=0; i<artist.length; i++) {
                $('#artists').append("<li><a href='"+artist[i].uri+"' target='_blank'>"+artist[i].displayName+"</a></li>")
            }
        },

        error: function(xhr, error, status) {
            console.log(xhr);
            console.log(error);
            console.log(status);
        }
        })
    }


    /*This is the associative array which specifies the artist ID for each artist in the datalist*/
    var artist_array = {"Brit Floyd":"3705716", "The Australian Pink Floyd Show":"3555331", 
    "Think Floyd":"271615", "The Pink Floyd Experience":"269131", "The Pink Floyd Project":"2671201",
    "The Floyd Effect":"3011831", "Echoes Performing Pink Floyd":"2718311", 
    "The Machine Performs Pink Floyd":"2958651", "Roger Waters":"278888", "David Gilmour":"20890"}


    /*This function is activated when the user submits something in the search field. If the user has already performed a search,
    the map is cleared of all markers.*/
    $('#bandSelection').submit(function(event) {
        event.preventDefault();
        $('#concerts, #closeConcerts, #closeShows, #artists').empty();
        if(count>0) {
            map.removeLayer(marker_layer);
        } 
        
        var artist_id = artist_array[$('#pickBand').val()];
        var artist_name = $('#pickBand').val()
        /*This IF condition checks if the query submitted matches any artist in the array in order to decide whether to launch
        the getConcerts or searchArtist function*/
        if (typeof artist_id === "undefined") {
            searchArtist(artist_name);
        }
        else {
            getConcerts(artist_id);
        }
    });
})

/*END OF SECTION 4*/



