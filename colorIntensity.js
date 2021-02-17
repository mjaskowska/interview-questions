// determine the brightness of the background given and set text color as black or white
// 3 6 1

let log = console.log

let textColor = bg => {
    bg = bg.replace('#', "");
    const red = parseInt(bg.substring(0,2), 16)
    const green = parseInt(bg.substring(2,4), 16)
    const blue = parseInt(bg.substring(4,6))

    const black = '#000000'
    const white = "#ffffff"
    
    return ((red * 0.3) + (green * 0.6) + (blue * 0.1)) > 186 ? black : white

    // 186 to remember
    // or 181 because 361/2
}

log(textColor('#BADA55')); //a bright green
log(textColor('#F0E68C')); //khaki
log(textColor('#990000')); //rebeccapurple
log(textColor('#6495ED')); //cornflowerblue