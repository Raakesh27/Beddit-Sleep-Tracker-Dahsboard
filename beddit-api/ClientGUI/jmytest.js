<script type="text/javascript">
    var myAjaxChart;
    var mydata = []; // Javascript Array Declaration
$(document).ready(function () { 

    mydata = [];
    requestData($(this).val()); // Parameterised Function calling for Ajax and Highchart Initiation
});

function requestData(data) {
$.ajax({
    url: 'http://localhost:8080/beddit?firstname=mamidiravali1@gmail.com&password=ravaliraj'+data, // Node.js Server REST Call
    type: "GET",
    dataType: "json",
    success: function(resp) {
        var jsonobj = resp;
        var obj = jQuery.parseJSON(jsonobj);
        for(i=0;i<obj[0].heart_rate_curve.length;i++)
        {
            mydata.push(parseInt(obj[0].heart_rate_curve[i])); // Filling of Array after Ajax Call
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
           text: 'Heart Rate',
           x: -20 //center
         },
         xAxis: {
         },
         yAxis: {
              title: {
              text: 'Time'
         },
         plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
        }]
     },
     tooltip: {
             valueSuffix: 'heart rate'
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
           name: 'Time',
           data: mydata  // Here the previously populated javascript array will be initialised in data parameter
      }],
     };
     var chardata = new Highcharts.Chart(options);
   },
   cache: false
  });
 }
});