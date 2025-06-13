input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
    }
    basic.showNumber(6 - randint(0, 5))
})
basic.clearScreen()
basic.showIcon(IconNames.Square)
