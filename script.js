

$(document).ready(function(){


	Snap.load('fox.svg', function (fox) {
	    // Note that we traverse and change attr before SVG is even added to the page (improving performance)
	    fox.selectAll("path[fill='#48ADE2']").attr({fill: "#00ff00"});
	    var g = fox.select("g");
	    paper.append(g);    //Now we add the SVG element to the page
	});

});