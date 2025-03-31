// Code your solution in this file!
const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (scuberDrivers) => {
    return scuberDrivers.slice(0, 2);
};

const returnLastTwoDrivers = () => { 
    return scuberDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=(multiplier)=>{
    return (fare) => {
        return fare * multiplier;
        };
};
     
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (scuberDrivers,selectDriver) => { 
    return selectDriver(scuberDrivers);
};

