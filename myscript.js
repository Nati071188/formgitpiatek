function countDaysToSpring(){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2023, 2, 21);
    const secondDate = new Date();
    
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    
    console.log(diffDays);
    return diffDays;
}


var daysToSpring = countDaysToSpring();


document.getElementById("days").innerHTML = daysToSpring;