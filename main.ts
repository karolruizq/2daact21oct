radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (receivedNumber == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else if (receivedNumber == 10) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        . . . . .
        `)
    radio.setGroup(4)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    radio.setGroup(10)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    radio.setGroup(6)
    basic.clearScreen()
})
radio.setGroup(1)
