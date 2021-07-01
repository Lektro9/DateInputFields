import _ from 'lodash';




function renderDate() {
    let date = new Date();
    let currentDate = date.toISOString().substring(0,10);
    dateOutput.value = currentDate;
    return element;
}

const myMainLoop = () => {
    //const dateOutput = document.getElementById('mydate');
    const dateInputFields = document.getElementById("dateinputfields");
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const myOutput = document.getElementById("myoutput");
    const dateError = document.getElementById("dateError");

    
    const printFocus = () => {
        let active = document.activeElement === day || document.activeElement === month || document.activeElement === year;
        console.log(active)
    }
    
    setInterval(printFocus, 300)

    let myDate = "";
    let inputDay = "";
    let inputMonth = "";
    let inputYear = "";

    const dayInputHandler = (event) => {
        inputDay = event.target.value;
        if (parseInt(inputDay) > 31 || parseInt(inputDay) < 1) {
            dateError.innerHTML = "Datum ist nicht gültig.";
        } else {
            dateError.innerHTML = "";
            myDate = _.join([inputDay, inputMonth, inputYear], '-');
            myOutput.innerHTML = myDate
        }
    }

    const monthInputHandler = (event) => {
        inputMonth = event.target.value;
        if (parseInt(inputMonth) > 12 || parseInt(inputMonth) < 1) {
            dateError.innerHTML = "Datum ist nicht gültig.";
        } else {
            dateError.innerHTML = "";
            myDate = _.join([inputDay, inputMonth, inputYear], '-');
            myOutput.innerHTML = myDate
        }
        
    }

    const yearInputHandler = (event) => {
        inputYear = event.target.value;
        if (parseInt(inputYear) > 9999 || parseInt(inputYear) < 1900) {
            dateError.innerHTML = "Datum ist nicht gültig.";
        } else {
            dateError.innerHTML = "";
            myDate = _.join([inputDay, inputMonth, inputYear], '-');
            myOutput.innerHTML = myDate
        }
        
    }

    day.addEventListener('input', dayInputHandler);
    month.addEventListener('input', monthInputHandler);
    year.addEventListener('input', yearInputHandler);

    //renderDate();
}

myMainLoop();
