﻿var dataSource = [
    { arg: 1, val: '5' },
    { arg: '6', val: 8 },
    { arg: 3.5, val: 'b' },
    { arg: 'r', val: 10 },
    { arg: '8.4', val: '8.5' }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg',
            type: 'spline'
        },
        series: [{ valueField: 'val' }],
        dataPrepareSettings: {
            checkTypeForAllData: true
        }
    });

    $('#checkTypeForAllDataCheckbox').change(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.option({
            dataPrepareSettings: { checkTypeForAllData: this.checked }
        });
    });
});