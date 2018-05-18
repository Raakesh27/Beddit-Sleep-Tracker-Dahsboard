$(function () {
    $('#container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sleep Score'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Sleep Score: <b>{point.x:f}</b>'
        },
        series: [{
            name: 'Sleep score',
            data: [
                ['SUN', 23],
                ['MON', 34],
                ['TUE', 29],
                ['WED', 86],
                ['THUR', 77],
                ['FRI', 75],
                ['SAT', 34],
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});