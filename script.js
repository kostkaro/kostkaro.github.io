

$(document).ready(function(){

	var s = Snap(1800, 1600);
	/*Snap.load('fox.svg', function (fox) {
	    // Note that we traverse and change attr before SVG is even added to the page (improving performance)
	    fox.selectAll("polygon[fill='#48ADE2']").attr({fill: "#00ff00"});
	    var g = fox.select("g");
	    s.append(g);    //Now we add the SVG element to the page
	});*/

	var poly1 = [224,506,130,367,162,239,252,417];
	var poly2 = [217,276 130,367 162,239 200,131];
	var poly3 = [217,276 304,303 304,175 200,131];
	var poly4 = [224,506 304,569 304,436 252,417];
	var poly5 = [383,506 478,367 445,239 356,417];
	var poly6 = [391,276 478,367 445,239 407,131];
	var poly7 = [391,276 304,303 304,175 407,131];
	var poly8 = [383,506 320,542 320,444 356,417];

	var new1 = [197,537 80,383 112,255 224,448];
	var new1 = [205,312 80,383 112,255 188,166];
	var new1 = [205,312 294,265 294,137 188,166];
	var new1 = [197,537 288,584 288,451 224,448];
	var new1 = [408,557 510,417 478,289 380,467];
	var new1 = [363,260 510,417 478,289 380,115];
	var new1 = [363,260 294,265 294,137 380,115];
	var new1 = [408,557 320,516 329,405 380,467];

	var polygon1 = s.polygon(poly1);
	polygon1.attr({
		id:"polygon1",
		fill:"#48ADE2"
	});
	var polygon2 = s.polygon(poly2);
	polygon2.attr({
		id:"polygon2",
		fill:"#73CBF3"
	});
	var polygon3 = s.polygon(poly3);
	polygon3.attr({
		id:"polygon3",
		fill:"#48ADE2"
	});
	var polygon4 = s.polygon(poly4);
	polygon4.attr({
		id:"polygon4",
		fill:"#73CBF3"
	});
	var polygon5 = s.polygon(poly5);
	polygon5.attr({
		id:"polygon5",
		fill:"#48ADE2"
	});
	var polygon6 = s.polygon(poly6);
	polygon6.attr({
		id:"polygon6",
		fill:"#73CBF3"
	});
	var polygon7 = s.polygon(poly7);
	polygon7.attr({
		id:"polygon7",
		fill:"#73CBF3"
	});
	var polygon8 = s.polygon(poly8);
	polygon8.attr({
		id:"polygon8",
		fill:"#48ADE2"
	});


	polygon1.animate({"points":new1},5000,mina.linear);
	polygon2.animate({"points":new2},5000,mina.linear);
	polygon3.animate({"points":new3},5000,mina.linear);
	polygon4.animate({"points":new4},5000,mina.linear);
	polygon5.animate({"points":new5},5000,mina.linear);
	polygon6.animate({"points":new6},5000,mina.linear);
	polygon7.animate({"points":new7},5000,mina.linear);
	polygon8.animate({"points":new8},5000,mina.linear);

});