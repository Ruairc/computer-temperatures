let GPU_Temp = 0
let CPU_Temp = 0
let RAM_Temp = 0
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
function ORANGE () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
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
