input.onButtonPressed(Button.A, function () {
    radio.sendString("hola este mensaje se enviara en 10 segundo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
