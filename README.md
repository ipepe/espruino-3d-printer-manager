# ESPruinto
Espruino powered 3D Printer Manager. Mainly focued on streaming gcode from connected SDCard and accepting files through Octroprint API

## Wanted Features
 * https://github.com/probonopd/WirelessPrinting/issues/132
 * https://github.com/probonopd/WirelessPrinting/issues/5
 * https://github.com/probonopd/WirelessPrinting/issues/109
 * https://github.com/probonopd/WirelessPrinting/issues/110
 * https://github.com/probonopd/WirelessPrinting/issues/111

## Inspirations:
 * https://github.com/redweblabs/Node.js-3D-Printer-Software
 * https://github.com/chriswoodle/marlinjs
 * https://github.com/nneves/R2C2_WebInterface
 * https://www.espruino.com/Reference#l_Wifi_connected
 * https://github.com/probonopd/WirelessPrinting
 * https://github.com/luc-github/ESP3D
 * https://github.com/luc-github/ESP3D-WEBUI

## Tools
 * https://gulpjs.com/
 * https://github.com/camswords/gulp-espruino
 * https://github.com/gulp-community/gulp-coffee
 
## How to

### 1. Flashing Espruino on Wemos D1 Mini (PRO)

`python esptool.py --port /dev/tty.usbserial-1410 --baud 115200 write_flash  --flash_freq 80m --flash_mode dio --flash_size 4MB-c1  0x0000 espruino/espruino_2v01_esp8266_4mb_combined_4096.bin` 
 
### 2. Uploading `My3DPrinterManager` code to microcontroller
`TODO: https://www.espruino.com/Saving`

## License
MIT License

Copyright (c) 2019 Patryk Ptasiński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
