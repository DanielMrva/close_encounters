const exampleDate = "Oct 21st, 2020";

const getISODate = (targetDate) =>{

    const deconstructedDate = exampleDate.split(' ');

    const year = deconstructedDate[2]

    const monthName = deconstructedDate[0]

    const dayTh = deconstructedDate[1]

    const numberMonth = (monthName) => {
        let numberMonth = ''

        switch(monthName) {
            case "Jan":
                numberMonth = "01"
                break;
            case "Feb":
                numberMonth = "02"
                break;
            case "Mar":
                numberMonth = "03"
                break;
            case "Apr":
                numberMonth = "04"
                break;
            case "May":
                numberMonth = "05"
                break;
            case "Jun":
                numberMonth = "06"
                break;
            case "Jul":
                numberMonth = "07"
                break;
            case "Aug":
                numberMonth = "08"
                break;
                case "Sep":
                numberMonth = "09"
                break;
            case "Oct":
                numberMonth = "10"
                break;
            case "Nov":
                numberMonth = "11"
                break;
            case "Dec":
                numberMonth = "12"
                break;    
            default:
                numberMonth = "01";
        }
        return numberMonth

    }

    const numeralDay = (dayTh) => {
        let number = ""
        let numberDay = ""
        if (dayTh.length < 4) {
            number = dayTh.slice(0)
            numberDay = `0${number}`
        } else {
            numberDay = dayTh.slice(0, 1)
        }
        return numberDay
    };
    const isoDate = `${year}-${numberMonth(monthName)}-${numeralDay(dayTh)}`

    return (Date.parse(isoDate)/86400000);
}

// console.log((Date.now())/86400000);
// console.log('-----------------')
// console.log(getISODate(exampleDate));
// console.log(typeof(getISODate(exampleDate)))
export default getISODate;