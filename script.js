

$(document).ready(function(){

	var s = Snap(1800, 1600);
	/*Snap.load('fox.svg', function (fox) {
	    // Note that we traverse and change attr before SVG is even added to the page (improving performance)
	    fox.selectAll("polygon[fill='#48ADE2']").attr({fill: "#00ff00"});
	    var g = fox.select("g");
	    s.append(g);    //Now we add the SVG element to the page
	});*/

	var poly1 = [224,506,130,367,162,239,252,417];
	var poly2 = [217,276,130,367,162,239,200,131];
	var poly3 = [217,276,304,303,304,175,200,131];
	var poly4 = [224,506,304,569,304,436,252,417];
	var poly5 = [383,506,478,367,445,239,356,417];
	var poly6 = [391,276,478,367,445,239,407,131];
	var poly7 = [391,276,304,303,304,175,407,131];
	var poly8 = [383,506,320,542,320,444,356,417];

	var new1 = [197,537,80,383,112,255,224,448];
	var new2 = [205,312,80,383,112,255,188,166];
	var new3 = [205,312,294,265,294,137,188,166];
	var new4 = [197,537,288,584,288,451,224,448];
	var new5 = [408,557,510,417,478,289,380,467];
	var new6 = [363,260,510,417,478,289,380,115];
	var new7 = [363,260,294,265,294,137,380,115];
	var new8 = [408,557,320,516,329,405,380,467];

	var newnew1 = [197,537,126,369,99,261,224,448];
	var newnew2 = [198.5,261.5,126.5,369.5,99.5,261.5,189.5,162.5];
	var newnew3 = [198.5,261.5,306.5,261.5,279.5,180.5,189.5,162.5];
	var newnew4 = [197,537,288,584,288,451,224,448];
	var newnew5 = [396.5,513.5,495.5,432.5,459.5,297.5,378.5,459.5];
	var newnew6 = [351.5,243.5,495.5,432.5,459.5,297.5,360.5,126.5];
	var newnew7 = [351.5,243.5,306.5,261.5,279.5,180.5,360.5,126.5];
	var newnew8 = [396.5,513.5,324.5,531.5,324.5,405.5,378.5,459.5];

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
		fill:"#73CBF3"
	});
	var polygon6 = s.polygon(poly6);
	polygon6.attr({
		id:"polygon6",
		fill:"#48ADE2"
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
	var anim1 = function(){
		polygon1.animate({"points":new1},10000,mina.linear);
		polygon2.animate({"points":new2},10000,mina.linear);
		polygon3.animate({"points":new3},10000,mina.linear);
		polygon4.animate({"points":new4},10000,mina.linear);
		polygon5.animate({"points":new5},10000,mina.linear);
		polygon6.animate({"points":new6},10000,mina.linear);
		polygon7.animate({"points":new7},10000,mina.linear);
		polygon8.animate({"points":new8},10000,mina.linear,anim2);
	};
	var anim2 = function(){
		polygon1.animate({"points":newnew1},10000,mina.linear);
		polygon2.animate({"points":newnew2},10000,mina.linear);
		polygon3.animate({"points":newnew3},10000,mina.linear);
		polygon4.animate({"points":newnew4},10000,mina.linear);
		polygon5.animate({"points":newnew5},10000,mina.linear);
		polygon6.animate({"points":newnew6},10000,mina.linear);
		polygon7.animate({"points":newnew7},10000,mina.linear);
		polygon8.animate({"points":newnew8},10000,mina.linear,anim1);
	};
	anim1();
});