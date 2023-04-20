radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > K) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber < K) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("E F D A G E D C ", 133)
    }
    if (receivedNumber == K) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    K = randint(1, 6)
    basic.showNumber(K)
    radio.sendNumber(K)
})
let K = 0
radio.setGroup(101)
