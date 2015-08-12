$(function () {
    $('#edicion1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Rentabilidad a lo largo de LCBU'
        },
        xAxis: {
            categories: ['CEU', 'UPM', 'USAL', 'DEUSTO', 'UC3M']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Positiva',
            data: [0, 0, 2.02, 7.64, 11.16]
        },
        {
            name: 'Negativa',
            data: [-38.58, -4.75, 0, 0, 0]
        }]
    });
});
