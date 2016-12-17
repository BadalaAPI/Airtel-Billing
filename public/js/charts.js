$(document).ready(function(){

$.get('/getPieData',function(data){
var chart = new CanvasJS.Chart("chartContainer2",
{
    title:{
        text: "Teams share"
    },
            animationEnabled: true,
    legend:{
        verticalAlign: "center",
        horizontalAlign: "left",
        fontSize: 20,
        fontFamily: "Helvetica"        
    },
    theme: "theme2",
    data: [
    {        
        type: "pie",       
        indexLabelFontFamily: "Garamond",       
        indexLabelFontSize: 13,
        //indexLabel: "{label} {y}%",
        startAngle:-20,      
        //showInLegend: true,
        //toolTipContent:"{legendText} {y}%",
        dataPoints: data
    }
    ]
});
chart.render();
})
});


var chart = new CanvasJS.Chart("chartContainer3",
{

    title:{
        text: "Past 6 months stats",
        fontSize: 30
    },
                animationEnabled: true,
    axisX:{

        gridColor: "Silver",
        tickColor: "silver",
        valueFormatString: "DD/MMM"

    },                        
                toolTip:{
                  shared:true
                },
    theme: "theme2",
    axisY: {
        gridColor: "Silver",
        tickColor: "silver"
    },
    legend:{
        verticalAlign: "center",
        horizontalAlign: "right"
    },
    data: [
    {        
        type: "line",
        showInLegend: true,
        lineThickness: 2,
        name: "Visits",
        markerType: "square",
        color: "#F08080",
        dataPoints: [
        { x: new Date(2010,0,3), y: 650 },
        { x: new Date(2010,0,5), y: 700 },
        { x: new Date(2010,0,7), y: 710 },
        { x: new Date(2010,0,9), y: 458 },
        { x: new Date(2010,0,11), y: 734 },
        { x: new Date(2010,0,13), y: 963 },
        ]
    },
    {        
        type: "line",
        showInLegend: true,
        name: "Unique Visits",
        color: "#20B2AA",
        lineThickness: 2,

        dataPoints: [
        { x: new Date(2010,0,3), y: 510 },
        { x: new Date(2010,0,5), y: 560 },
        { x: new Date(2010,0,7), y: 540 },
        { x: new Date(2010,0,9), y: 558 },
        { x: new Date(2010,0,11), y: 544 },
        { x: new Date(2010,0,13), y: 693 },
        ]
    }

    
    ],
  legend:{
    cursor:"pointer",
    itemclick:function(e){
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else{
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }
});

chart.render();



