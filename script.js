$(document).ready(function(){

	var s = Snap(800, 600);

	Snap.load('fox.svg', function (fox) {
	    fox.selectAll("path[fill='#48ADE2']").attr({fill: "#274B5B"});
	    var g = fox.select("g");
	    s.append(g);  
	});

});