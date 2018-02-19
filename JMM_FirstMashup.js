/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

$(document).ready(function(){
    $("#button1").click(function(){
        $("#QV04").toggle(200);
    });  
});

	
$('#list1').on("click", function() {  
     var value = $(this).data('select');
	 console.log(value);
     app.field("Region Name").selectValues([value], true, true);  
     //$('#QV01 .dropdown button').html(value + ' <span class="caret"></span>');  
  });  
	//open apps -- inserted here --

	var app = qlik.openApp('Sales Discovery.qvf', config);
	
	//callbacks -- inserted here --
	function getRegion(reply, app){var str = "";
	$.each(reply.qListObject.qDataPages[0].qMatrix, function(key, value) {
		str += '<li><a>' + value[0].qText + '</a></li>';
	});
	$('#list1').html(str);
	;}

	
	
	//field selection
 
					

	//get objects -- inserted here --
	app.getObject('CurrentSelections','CurrentSelections');
	app.getObject('QV01','mTjVeM');
	app.getObject('QV02','NXfLpP');
	app.getObject('QV03','jhTmTRy');
	app.getObject('QV04','SqDbku');
	app.getObject('QV05','fPzFZu');
	app.getObject('QV06','YPhqut');
	app.getObject('QV07','RmuRp');
	
	
	//create cubes and lists -- inserted here --
	app.createList({
		"qFrequencyMode": "V",
		"qDef": {
				"qFieldDefs": [
						"Region Name"
				]
		},
		"qExpressions": [],
		"qInitialDataFetch": [
				{
						"qHeight": 20,
						"qWidth": 1
				}
		],
		"qLibraryId": null
	},getRegion);
	
//create functions -- inserted here --	


	
} );

