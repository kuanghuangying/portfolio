$("#lightrail").hover(
  function() {
    $("#showLight").animate({opacity: 1});
  },
  function() {
    $("#showLight").animate({opacity:0});
  }
);

$("#scraper").hover(
  function(){
    $("#showTwitter").animate({opacity:1});
  },
  function(){
    $("#showTwitter").animate({opacity:0});
  }
);
$("#datacomp").hover(
  function(){
    $("#showComp").animate({opacity:1});
  },
  function(){
    $("#showComp").animate({opacity:0});
  }
);
$("#statcomp").hover(
  function(){
    $("#showStat").animate({opacity:1});
  },
  function(){
    $("#showStat").animate({opacity:0});
  }
);

$(".title").animate({opacity: 1},3000);


//bar
var data = [
  [{"skill":"Python","quantity":80},
    {"skill":"Excel","quantity":40}],
  [{"skill":"Java","quantity":100},
    {"skill":"Git","quantity":65}],
  [{"skill":"Python","quantity":100},
    {"skill":"NumPy","quantity":40},
    {"skill":"Matplotlib","quantity":60}],
  [{"skill":"Tablaue","quantity":100},
    {"skill":"Python","quantity":70}]
  ]
var barGraphList = ["#showTwitter","#showLight", "#showComp","#showStat"];

for (i = 0; i<barGraphList.length;i++){
  var svg = d3.select(barGraphList[i]).select(".barGraph").append("svg")
            .attr("height","60%")
            .attr("width","60%");

  svg.selectAll("rect")
      .data(data[i])
      .enter().append("rect")
      .attr("class", "bar")
      .attr("height","15%")
      .attr("width",function(d,i){return(d.quantity + "%")})
      .attr("x", "100")
      .attr("y",function(d, i) {return (i * 20) + "%"});
  svg.selectAll(".text")
      .data(data[i])
      .enter().append("text")
      .attr("class", "label")
      .attr("x", "0")
      .attr("y",function(d, i) {return (i * 20) + "%"})
      .attr("dy", ".75em")
      .text(function(d) { return d.skill; });
};
