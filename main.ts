input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(":(")
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
