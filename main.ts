input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("C")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "D") {
        basic.showString("D")
    }
    if (receivedString == "E") {
        basic.showString("E")
    }
    if (receivedString == "F") {
        basic.showString("F")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(1)
basic.forever(function () {
	
})
