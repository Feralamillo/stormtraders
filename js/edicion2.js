$(function () {
    $('#edicion2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Rentabilidad a lo largo de LCBU II'
        },
        xAxis: {
            categories: ['MURCIA', 'WOLF OF UC3M', 'UAB IG 2', 'UAB IG', 'CANTABRIA']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Positiva',
            data: [0, 0, 0, 0, 17.18]
        },
        {
            name: 'Negativa',
            data: [-34.99, -28.12, -22.06, -18.35, 0]
        }]
    });
});
