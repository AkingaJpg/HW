function TimeCalc(startDate, endDate, unit) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDiff = Math.abs(start-end);
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

 module.exports = TimeCalc


 // console.log (TimeCalc ('31 Jan 2022', '04 Feb 2021', 'days')); 