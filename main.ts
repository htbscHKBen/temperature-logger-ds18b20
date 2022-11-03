basic.forever(function () {
    basic.showString(DS18B20.TemperatureString(DS18B20.pin.pin0).substr(0, 4))
    serial.writeValue("temperature", Math.round(DS18B20.TemperatureNumber(DS18B20.pin.pin0)))
    basic.pause(5000)
})
