$(window).ready(function(){

	var x,y,x1,y1,a,b,a1,b1;
	var draw = SVG('drawing');
	
	x 	= 	51.081;
	y 	= 	31.206;

	x1	=	34.948;
	y1	=	5.473;

	x2	=	21.152;
	y2	=	106.814;

	x3	=	13.302;
	y3	=	69.32;

	x4	=	91.815;
	y4	=	47.359;

	x5	=	16.85;
	y5	=	86.494;

	x6	=	52.209;
	y6	=	32.851; 

	x7	=	128.341;
	y7	=	138.297;

	x8	=	95.915;
	y8	=	161.705;

	x9	=	171.333;
	y9	=	45.334;

	x10	=	147.113;
	y10	=	6.626;

	x11	=	47.333
	y11	=	132.667

	x12	=	21.152;
	y12	=	106.814;

	x13	=	130.649;
	y13	=	138.678;

	x14	=	159.333;
	y14	=	106.667;

	x15	=	9;
	y15	=	49;

	x16	=	16.85;
	y16	=	86.494;

	var polygon = draw.polygon( x + ',' + y + ' ' + x5 + ',' + y5 + ' ' + x15 + ',' + y15 + ' ' + x1 + ',' + y1 ).fill('#51AEFF');
	var polyon1 = draw.polygon( x + ',' + y + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 + ' ' + x1 + ',' + y1 ).fill('#7DD3FF');
	var polyon2 = draw.polygon( x4 + ',' + y4 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 + ' ' + x6 + ',' + y6 ).fill('#51AEFF');
	var polyon3 = draw.polygon( x4 + ',' + y4 + ' ' + x7 + ',' + y7 + ' ' + x8 + ',' + y8 + ' ' + x6 + ',' + y6 ).fill('#7DD3FF');
	var polyon4 = draw.polygon( x9 + ',' + y9 + ' ' + x7 + ',' + y7 + ' ' + x8 + ',' + y8 + ' ' + x10 + ',' + y10 ).fill('#51AEFF');
	var polyon5 = draw.polygon( x9 + ',' + y9 + ' ' + x11 + ',' + y11 + ' ' + x12 + ',' + y12 + ' ' + x10 + ',' + y10 ).fill('#7DD3FF');
	var polyon6 = draw.polygon( x13 + ',' + y13 + ' ' + x11 + ',' + y11 + ' ' + x12 + ',' + y12 + ' ' + x14 + ',' + y14 ).fill('#51AEFF');
	//var polyon7 = draw.polygon( x13 + ',' + y13 + ' ' + x5 + ',' + y5 + ' ' + x15 + ',' + y15 + ' ' + x14 + ',' + y14 ).fill('#7DD3FF');



	$('#drawing').click(function(){
	//	y1 = y1+1;
	//	y = y+1;

	

		x 	=	50;
		y 	=	50;

		x1 	=	50;
		y1 	=	0;

		x5 	=	0;
		y5 	= 	50;

		x15 =	0;
		y15 =	0;

		x3 	=	100;
		y3 	=	0;

		x2 	=	100;
		y2 	=	50;

		x6 	=	150;
		y6 	=	0;

		x4 	= 	150;
		y4 	=	50;

		x7 	=	200;
		y7 	=	50;

		x8 	=	200;
		y8 	=	0;

		x9 	=	250;
		y9 	=	50;

		x10 =	250;
		y10	=	0;

		x11	=	300;
		y11	=	50;

		x12	=	300;
		y12	=	0;

		x13	=	350;
		y13	=	50;

		x14	=	350;
		y14	=	0;

		//x15	=	400;
		//y15	=	50;

		//x16	=	400;
		//y16	=	0;

		polygon.animate(2000).plot([[x,y], [x5,y5], [x15,y15], [x1,y1]]);
		polyon1.animate(2000).plot([[x,y], [x2,y2], [x3,y3], [x1,y1]]);
		polyon2.animate(2000).plot([[x4,y4], [x2,y2], [x3,y3], [x6,y6]]);
		polyon3.animate(2000).plot([[x4,y4], [x7,y7], [x8,y8], [x6,y6]]);
		polyon4.animate(2000).plot([[x9,y9], [x7,y7], [x8,y8], [x10,y10]]);
		polyon5.animate(2000).plot([[x9,y9], [x11,y11], [x12,y12], [x10,y10]]);
		polyon6.animate(2000).plot([[x13,y13], [x11,y11], [x12,y12], [x14,y14]]);
		//polyon7.animate(4000).plot([[x13,y13], [x16,y16], [x15,y15], [x14,y14]]);
	//	$('body').css('background-color','black');
	});



});