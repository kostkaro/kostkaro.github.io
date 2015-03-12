

$(document).ready(function(){

	var s = Snap(1800, 1600);
	/*Snap.load('fox.svg', function (fox) {
	    // Note that we traverse and change attr before SVG is even added to the page (improving performance)
	    fox.selectAll("polygon[fill='#48ADE2']").attr({fill: "#00ff00"});
	    var g = fox.select("g");
	    s.append(g);    //Now we add the SVG element to the page
	});*/

	var polyPoints = [224,506,130,367,162,239,252,417];
	var newPoints = [100,200,150,250,50,50,200,150];
	var polygon1 = s.polygon(polyPoints);
	polygon1.attr({
		id:"polygon",
		fill:"#55555"
	});
	polygon1.animate({"points":newPoints},5000,mina.linear);

});