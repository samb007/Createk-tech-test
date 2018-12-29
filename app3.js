
function timeSplit (time){
    let hourMinute = time.split(":");
    return hourMinute;
}

function timeDifference (time1, time2){
    let timeArray1 = timeSplit(time1);
    let timeArray2 = timeSplit(time2);

    let timeTotal1 = (parseInt(timeArray1[0]) * 60) + parseInt(timeArray1[1]);
    let timeTotal2 = (parseInt(timeArray2[0]) * 60) + parseInt(timeArray2[1]);

    let amPm1 = timeArray1[1].split(" ")
    let amPm2 = timeArray2[1].split(" ")
    if (amPm1[1] == "pm" ){
        timeTotal1 += 720
    }
    else if (amPm2[1] == "pm"){
        timeTotal2 += 720
    }

    let difference = Math.abs(timeTotal1 - timeTotal2);
    
    console.log(difference);
    console.log(timeTotal1);
    console.log(timeTotal2);
    return difference
}
timeDifference("11:45 pm","01:20 pm");