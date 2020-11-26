input.onButtonPressed(Button.A, function () {
    basic.showString("CPU=")
    basic.showNumber(CPU_Temp)
})
function RED () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function GREEN () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("RAM=")
    basic.showNumber(RAM_Temp)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("GPU=")
    basic.showNumber(GPU_Temp)
})
function ORANGE () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let GPU_Temp = 0
let RAM_Temp = 0
let CPU_Temp = 0
radio.setGroup(78)
basic.forever(function () {
    GPU_Temp = input.temperature()
    if (GPU_Temp < 50) {
        GREEN()
    }
    if (GPU_Temp >= 50) {
        ORANGE()
    }
    if (GPU_Temp > 70) {
        RED()
    }
})
basic.forever(function () {
    CPU_Temp = input.temperature()
    if (CPU_Temp < 50) {
        GREEN()
    }
    if (CPU_Temp >= 50) {
        ORANGE()
    }
    if (CPU_Temp > 70) {
        RED()
    }
})
basic.forever(function () {
    RAM_Temp = input.temperature()
    if (RAM_Temp < 50) {
        GREEN()
    }
    if (RAM_Temp >= 50) {
        ORANGE()
    }
    if (RAM_Temp > 70) {
        RED()
    }
})
basic.forever(function () {
    RAM_Temp = input.temperature()
    radio.sendNumber(RAM_Temp)
})
basic.forever(function () {
    GPU_Temp = input.temperature()
    radio.sendNumber(GPU_Temp)
})
basic.forever(function () {
    CPU_Temp = input.temperature()
    radio.sendNumber(CPU_Temp)
})
