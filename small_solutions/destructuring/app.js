const avgTEMPERATURES = {
    today: 77.5,
    tomorrow: 80
}

function getTommorrowTemp(avgTEMPERATURES){
    const { tomorrow: tempOfTomorrow} = avgTEMPERATURES;

    return tempOfTomorrow;
}

console.log(getTommorrowTemp(avgTEMPERATURES));

const LOCAL_FORECAST = {
    today: { min: 77.5, max: 78 },
    tomorrow: { min: 80, max: 85 }
}

function getTommorrowMax(LOCAL_FORECAST){
    const { tomorrow: { max: tomorrowMax}} = LOCAL_FORECAST;

    return tomorrowMax;
}

console.log(getTommorrowMax(LOCAL_FORECAST));