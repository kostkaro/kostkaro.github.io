$(window).ready(function(){

	var x,y,x1,y1,a,b,a1,b1;
	var draw = SVG('drawing').size(1000,1000);
	var menubar = false;	

	x 	= 	224;
	y 	= 	506;

	x1	=	130;
	y1	=	367;

	x2	=	162;
	y2	=	239;

	x3	=	252;
	y3	=	417;

	x4	=	217;
	y4	=	276;

	x5	=	200;
	y5	=	131;

	x6	=	304;
	y6	=	303; 

	x7	=	304;
	y7	=	175;

	x8	=	304;
	y8	=	569;

	x9	=	304;
	y9	=	436;

	x10	=	391;
	y10	=	276;

	x11	=	407;
	y11	=	131;

	x12	=	478;
	y12	=	367;

	x13	=	445;
	y13	=	239;

	x14	=	383;
	y14	=	506;

	x15	=	356;
	y15	=	417;

	x16	=	320;
	y16	=	542;

	x17	=	320;
	y17	=	444;


	var polyon = draw.polygon( x + ',' + y + ' ' + x8 + ',' + y8 + ' ' + x9 + ',' + y9 + ' ' + x3 + ',' + y3 ).fill('#7DD3FF');
	var polyon1 = draw.polygon( x + ',' + y + ' ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3 ).fill('#51AEFF');
	var polyon2 = draw.polygon( x4 + ',' + y4 + ' ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x5 + ',' + y5 ).fill('#7DD3FF');
	var polyon3 = draw.polygon( x4 + ',' + y4 + ' ' + x6 + ',' + y6 + ' ' + x7 + ',' + y7 + ' ' + x5 + ',' + y5 ).fill('#51AEFF');
	var polyon4 = draw.polygon( x10 + ',' + y10 + ' ' + x6 + ',' + y6 + ' ' + x7 + ',' + y7 + ' ' + x11 + ',' + y11 ).fill('#7DD3FF');
	var polyon5 = draw.polygon( x12 + ',' + y12 + ' ' + x10 + ',' + y10 + ' ' + x11 + ',' + y11 + ' ' + x13 + ',' + y13 ).fill('#51AEFF');
	var polyon6 = draw.polygon( x14 + ',' + y14 + ' ' + x12 + ',' + y12 + ' ' + x13 + ',' + y13 + ' ' + x15 + ',' + y15 ).fill('#7DD3FF');
	var polyon7 = draw.polygon( x14 + ',' + y14 + ' ' + x16 + ',' + y16 + ' ' + x17 + ',' + y17 + ' ' + x15 + ',' + y15 ).fill('#51AEFF');
	
		setInterval(function(){
			if (!menubar) {
				var rx = Math.floor((Math.random() * 10) + 1);
				var ry = Math.floor((Math.random() * 10) + 1);

				var rx1 = Math.floor((Math.random() * 5) + 1);
				var ry1 = Math.floor((Math.random() * 10) + 1);

				var rx2 = Math.floor((Math.random() * 15) + 1);
				var ry2 = Math.floor((Math.random() * 10) + 1);

				var rx3 = Math.floor((Math.random() * 10) + 1);
				var ry3 = Math.floor((Math.random() * 10) + 1);

				var rx4 = Math.floor((Math.random() * 10) + 1);
				var ry4 = Math.floor((Math.random() * 10) + 1);

				var rx5 = Math.floor((Math.random() * 10) + 1);
				var ry5 = Math.floor((Math.random() * 10) + 1);

				var rx6 = Math.floor((Math.random() * 10) + 1);
				var ry6 = Math.floor((Math.random() * 10) + 1);

				var rx7 = Math.floor((Math.random() * 10) + 1);
				var ry7 = Math.floor((Math.random() * 10) + 1);

				var rx8 = Math.floor((Math.random() * 10) + 1);
				var ry8 = Math.floor((Math.random() * 10) + 1);

				var rx9 = Math.floor((Math.random() * 10) + 1);
				var ry9 = Math.floor((Math.random() * 10) + 1);

				var rx10 = Math.floor((Math.random() * 10) + 1);
				var ry10 = Math.floor((Math.random() * 10) + 1);

				var rx11 = Math.floor((Math.random() * 10) + 1);
				var ry11 = Math.floor((Math.random() * 10) + 1);

				var rx12 = Math.floor((Math.random() * 10) + 1);
				var ry12 = Math.floor((Math.random() * 10) + 1);

				var rx13 = Math.floor((Math.random() * 10) + 1);
				var ry13 = Math.floor((Math.random() * 10) + 1);

				var rx14 = Math.floor((Math.random() * 10) + 1);
				var ry14 = Math.floor((Math.random() * 10) + 1);

				var rx15 = Math.floor((Math.random() * 10) + 1);
				var ry15 = Math.floor((Math.random() * 10) + 1);

				var rx16 = Math.floor((Math.random() * 10) + 1);
				var ry16 = Math.floor((Math.random() * 10) + 1);

				var rx17 = Math.floor((Math.random() * 10) + 1);
				var ry17 = Math.floor((Math.random() * 10) + 1);

				polyon.animate(4000).plot([[x + rx,y +ry], [x8 +rx8,y8 +ry8], [x9 +rx9,y9 +ry9], [x3 +rx3,y3 +ry3]]);	
				polyon1.animate(4000).plot([[x + rx,y +ry], [x1 +rx1,y1 +ry1], [x2 +rx2,y2 +ry2], [x3 +rx3, y3 +ry3]]);	
				polyon2.animate(4000).plot([[x4 + rx4,y4 +ry4], [x1 +rx1,y1 +ry1], [x2 +rx2,y2 +ry2], [x5 +rx5, y5 +ry5]]);
				polyon3.animate(4000).plot([[x4 + rx4,y4 +ry4], [x6 +rx6,y6 +ry6], [x7 +rx7,y7 +ry7], [x5 +rx5, y5 +ry5]]);	
				polyon4.animate(4000).plot([[x10 + rx10,y10 +ry10], [x6 +rx6,y6 +ry6], [x7 +rx7,y7 +ry7], [x11 +rx11, y11 +ry11]]);	
				polyon5.animate(4000).plot([[x12 + rx12,y12 +ry12], [x10 +rx10,y10 +ry10], [x11 +rx11,y11 +ry11], [x13 +rx13, y13 +ry13]]);
				polyon6.animate(4000).plot([[x14 + rx14,y14 +ry14], [x12 +rx12,y12 +ry12], [x13 +rx13,y13 +ry13], [x15 +rx15, y15 +ry15]]);	
				polyon7.animate(4000).plot([[x14 + rx14,y14 +ry14], [x16 +rx16,y16 +ry16], [x17 +rx17,y17 +ry17], [x15 +rx15, y15 +ry15]]);	
			};
		},4050);


	

	$('#drawing').click(function(){
		menubar = true;

		x 	=	0;
		y 	=	50;

		x1 	=	0;
		y1 	=	0;

		x5 	=	0;
		y5 	= 	50;

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

		x15 =	0;
		y15 =	0;

		x16	=	400;
		y16	=	50;

		x17	=	400;
		y17	=	0;


		polyon.animate(2000).plot([[x,y], [x5,y5], [x15,y15], [x1,y1]]).fill('#7DD3FF');
		polyon1.animate(2000).plot([[x,y], [x2,y2], [x3,y3], [x1,y1]]).fill('#7DD3FF');
		polyon2.animate(2000).plot([[x4,y4], [x2,y2], [x3,y3], [x6,y6]]).fill('#7DD3FF');
		polyon3.animate(2000).plot([[x4,y4], [x7,y7], [x8,y8], [x6,y6]]).fill('#7DD3FF');
		polyon4.animate(2000).plot([[x9,y9], [x7,y7], [x8,y8], [x10,y10]]).fill('#7DD3FF');
		polyon5.animate(2000).plot([[x11,y11], [x9,y9], [x10,y10], [x12,y12]]).fill('#7DD3FF');
		polyon6.animate(2000).plot([[x13,y13], [x11,y11], [x12,y12], [x14,y14]]).fill('#7DD3FF');
		polyon7.animate(2000).plot([[x13,y13], [x16,y16], [x17,y17], [x14,y14]]).fill('#7DD3FF');
	//	$('body').css('background-color','black');
	}).delay(2000);



});