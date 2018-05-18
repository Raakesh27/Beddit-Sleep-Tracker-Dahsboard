$(function () {
    //alert('inside heartRate');
    console.log("inside heartrate");
  /* var heartRate=  $_GET['heartrate'];
    console.log("inside heartrate"+heartRate);
    alert("inside alert of heart");
    return{

       hello:heartRate
    }*/
   var xdata = [];
    var ydata = [];
    requestData();
    function requestData() {
        $.ajax({
            url: 'http://localhost:8080/beddit?firstname=mamidiravali1@gmail.com&password=ravaliraj',
            type: "GET",

            dataType: "json",
            success: function (resp) {
                var jsonobj = resp;
                console.log("data from highcharts beddit"+resp);
              //  var obj = jQuery.parseJSON(jsonobj);
                console.log("data from highcharts"+resp);
                for (i = 0; i < (resp[0].heart_rate_curve).length; i++) {
                   // console.log("data from highcharts"+resp[i].date);
                    console.log("data from highcharts"+ resp[0].heart_rate_curve[i]);
                        //resp[i].time_value_tracks);
                            //.heart_rate_curve.items);
                    xdata.push(resp[0].heart_rate_curve[i]);
                   ydata.push(resp[0].heart_rate_curve[i]);

                }
              
                var options ={
                    chart: {
                        //renderTo: 'container',
                        renderTo: 'header',
                        type: 'line',
                        marginRight: 130,
                        marginBottom: 25,

                    },
                    title: {
                        text: 'Time track',
                      //  x: -20 //center
                    },
                    xAxis: {
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    title: {
                        text: 'Heart Rate'
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
                        name: 'Heart Rate',
                    data: xdata
                    //data: [11,12,13,14]
                }],

                yAxis: {
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                title: {
                    text: 'Time track'
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
                        name: 'Time Track',
                        data: ydata
                        //data: [11,12,13,14]
                    }],
                    }
                var chardata = new Highcharts.Chart(options);
            }
        });
    }
});