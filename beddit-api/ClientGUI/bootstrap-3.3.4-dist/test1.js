$(function () {
    $('#container').highcharts({
        title: {
            text: 'Sleep Curve',
            x: -20 //center
        },
        xAxis: {
            categories: ['1.00am', '2.00am', '3.00am', '4.00am', '5.00am', '6.00am',
                '7.00am', '8.00am', '9.00am', '10.00am', '11.00am', '12.00pm']
        },
        yAxis: {
            title: {
                
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'BPM',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Sleep',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});