var interval;
var intervalDuration = 60000; // Millis


$(document).ready(function() {
    updateWatchFace();
    //window.addEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(mouseEvent) {
    var mouseX = mouseEvent.pageX;
    var mouseY = mouseEvent.pageY;
    var maxX = $(document).width();
    var maxY = $(document).height();
    var ratioX = mouseX / maxX;
    var ratioY = mouseY / maxY;

    var hours = Math.floor(24* ratioX);
    var minutes = Math.floor(60 * ratioY);
    updateWatchFace(hours, minutes);
}


function handlePageReady() {
    // $(".wordQuarter").addClass("letterOn")
    updateWatchFace();
}

/*
oclock for midnight
Midnight oclock for noon
*/

function cleanUpWatchFace() {
    $(".letterOn").removeClass("letterOn");
}

function updateWatchFace(hours, minutes) {
    cleanUpWatchFace();

    $(".wordItIs").addClass("letterOn");
    
    if(hours == null || minutes == null) {
        let date = new Date();
        hours = date.getHours();
        let seconds = date.getSeconds();
        minutes = date.getMinutes() + (seconds / 60);
    }
    
    console.log(hours,minutes);
    //minutes >= 0 && 
    if(minutes < 7.5) {
        if(hours != 0 && hours != 12) {
            $(".wordOclock").addClass("letterOn");
        }
        // O CLOCK
    } else if(minutes >= 7.5 && minutes < 22.5) {
        // QUARTER PAST
        $(".wordQuarter,.wordPast").addClass("letterOn");
    } else if (minutes >= 22.5 && minutes < 37.5) {
        // HALF PAST
        $(".wordHalf,.wordPast").addClass("letterOn");
    } else if(minutes >= 37.5 && minutes < 52.5) {
        // QUARTER TO (+1)
        $(".wordQuarter,.wordTo").addClass("letterOn");
    } else if(minutes >= 52.5) {
        // O CLOCK (+1)
        if(hours != 0 && hours != 12) {
            $(".wordOclock").addClass("letterOn");
        }
        hours = addOneToHours(hours);

    }

    if(hours != 0 && hours != 12) {
        $(".word" + hours%12).addClass("letterOn");
    } else {
        $(".word" + hours).addClass("letterOn");
    }

    switch(hours) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
                $(".wordInThe").addClass("letterOn");
                $(".wordMorning").addClass("letterOn");
                break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            $(".wordInThe").addClass("letterOn");
            $(".wordAfternoon").addClass("letterOn");
            break;
        case 19:
        case 20:
        case 21:
            $(".wordInThe").addClass("letterOn");
            $(".wordEvening").addClass("letterOn");
            break;
        case 22:
        case 23:
            $(".wordInThe").addClass("letterOn");
            $(".wordNight").addClass("letterOn");
    }
}

function addOneToHours(hours) {
    if(hours == 23) {
        hours = 0;
    } else {
        hours ++;
    }
    return hours;
}
