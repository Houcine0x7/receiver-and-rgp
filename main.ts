radio.onReceivedNumber(function (onReceivedNumber) {
    if (onReceivedNumber == neopixel.colors(NeoPixelColors.Orange)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Yellow)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Blue)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Indigo)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Violet)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Purple)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (onReceivedNumber == neopixel.colors(NeoPixelColors.Black)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
radio.setGroup(1)
