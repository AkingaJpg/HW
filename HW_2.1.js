function durationBetweenDates(startDate = 0, endDate = 0, unit = "days") {

    const timeDiff = Math.abs(new Date(startDate)-new Date(endDate))/1000;
    let result; 

   switch (unit) {
      case 'days':
        result = Math.floor(timeDiff / (60 * 60 * 24));
        break;
      case 'hours':
        result = Math.floor(timeDiff / (60 * 60));
        break;
      case 'minutes':
        result = Math.floor(timeDiff / (60));
        break;
      case 'seconds':
        result = Math.floor(timeDiff);
        break;
      default:
        result = 'Invalid unit';
        break;
 }
 return result.toString() + " " + unit;
 }

 //module.exports = TimeCalc


 //console.log (durationBetweenDates ('23 Jan 2022', '25 Jan 2022', 'days')); 
console.log (durationBetweenDates());
 
