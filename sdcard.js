// DI/CMD/MOSI = 15
// DO/DAT0/MISO = 2
// SCLK/CLK/SCK = 14
// CD/DAT3/CS = 13

// GPIO 14: CLK
// GPIO 15: CMD
// GPIO 2: Data 0
// GPIO 4: Data 1 (also connected to the on-board LED)
// GPIO 12: Data 2
// GPIO 13: Data 3

function testSD(){
    if(typeof ESP8266){
        SPI1.setup({sck: 14, miso: 12, mosi: 13 });
        E.connectSDCard(SPI1, 2);
        console.log(require("fs").readdirSync());
    }else if(typeof ESP32){
        SPI1.setup({sck: 14, miso: 2, mosi: 15 });
        E.connectSDCard(SPI1, 13);
        console.log(require("fs").readdirSync());
    }
}




