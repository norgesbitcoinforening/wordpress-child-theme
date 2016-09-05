var $ = jQuery; 
$.ajax({
  url: "https://api.bitcoinaverage.com/ticker/NOK/",
  beforeSend: function( xhr ) {
   xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  }
}).done(function( data ) {
	  var m = JSON.parse(data);
 	  m["24h_avg"] = m["24h_avg"].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
	  $("#average-price").append("<a href='https://bitcoinaverage.com#NOK' taget='_Blank'><h1>Kr: "+m["24h_avg"]+",-<h1></a>");
});