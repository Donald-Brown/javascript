const GM = 398600.4418, earthRadius = 6367.4447;

const orbitalPeriod = arr => arr.map(object => ({ name: object.name,
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + object.avgAlt, 3) / GM))
}));

  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));