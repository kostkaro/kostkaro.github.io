$(document).ready(function(){


Snap.load('fox.svg', function (phone) {
    // Note that we traverse and change attr before SVG is even added to the page (improving performance)
    phone.selectAll("path[fill='#ff0000']").attr({fill: "#00ff00"});
    var g = phone.select("g");
    paper.append(g);    //Now we add the SVG element to the page
});

});