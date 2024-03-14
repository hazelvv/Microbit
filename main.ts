basic.forever(function () {
    if (input.compassHeading() <= 45 && 315 < input.compassHeading()) {
        basic.showString("N")
    } else if (45 < input.compassHeading() && input.compassHeading() < 135) {
        basic.showString("\bE")
    } else if (135 < input.compassHeading() && input.compassHeading() < 235) {
        basic.showString("S")
    } else if (235 < input.compassHeading() && input.compassHeading() < 315) {
        basic.showString("W")
    }
})
