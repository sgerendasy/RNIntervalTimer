import React from 'react';

export const SecondsToString = (seconds) => {
    return seconds + 'seconds';
};

export const CalculateTotalIntervalSetTime = (intervals) => {
    var total = 0;
    intervals.forEach((interval) => {
        console.log(interval);
        total += parseInt(interval.length);
    });
    console.log('total: ' + total);
    var minutes = Math.floor(total / 60);
    var seconds = Math.floor(total % 60);
    return minutes + ':' + seconds + ' minutes';
}
