function durationBetweenDates(startDate, endDate, unit) {
    const timeDiff = Math.abs(new Date(startDate)-new Date(endDate));
    let result; 

   switch (unit) {
      case 'days':
        result = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        break;
      case 'hours':
        result = Math.floor(timeDiff / (1000 * 60 * 60));
        break;
      case 'minutes':
        result = Math.floor(timeDiff / (1000 * 60));
        break;
      case 'seconds':
        result = Math.floor(timeDiff / 1000);
        break;
      default:
        result = 'Invalid unit';
        break;
 }
 return result.toString() + " " + unit;
 }

 //module.exports = TimeCalc


 console.log (durationBetweenDates ('31 Jan 2022', '04 Feb 2021', 'days')); 

 