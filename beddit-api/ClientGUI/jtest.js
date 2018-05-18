<script type="text/javascript">
    var myAjaxChart;
    var mydata = []; // Javascript Array Declaration
$(document).ready(function () { 

$("#seedselect").change(function() { // On change event of HTML Select Control
    mydata = [];
    requestData($(this).val()); // Parameterised Function calling for Ajax and Highchart Initiation
});

function requestData(data) {
$.ajax({
    url: 'http://localhost:1212/getseeddata/'+data, // Node.js Server REST Call
    type: "GET",
    dataType: "json",
    success: function(seed) {
        var jsonobj = seed;
        var obj = jQuery.parseJSON(jsonobj);
        for(i=0;i<obj.length;i++)
        {
            mydata.push(parseInt(obj[i].price)); // Filling of Array after Ajax Call
        }
        // Initialising the Highchart Object within the success callback
        //Chart
        var options ={
            chart: {
            renderTo: 'container', // Initialising the DIV with Highchart Object
            type: 'line',
            marginRight: 130,
            marginBottom: 25,
         },
         // Other Highchart Properties
         title: {
           text: 'Price Data',
           x: -20 //center
         },
         xAxis: {
         },
         yAxis: {
              title: {
              text: 'Price (Rs)'
         },
         plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
        }]
     },
     tooltip: {
             valueSuffix: 'Rs'
     },
     legend: {
           layout: 'vertical',
           align: 'right',
           verticalAlign: 'top',
           x: -10,
           y: 100,
           borderWidth: 0
      }
      ,
      series: [{
           name: 'Price',
           data: mydata  // Here the previously populated javascript array will be initialised in data parameter
      }],
     };
     var chardata = new Highcharts.Chart(options);
   },
   cache: false
  });
 }
});