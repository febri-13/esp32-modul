import { Image, AlertTriangle } from 'lucide-react';

export default function BoardPinoutVisualSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 lg:p-6 flex flex-col lg:overflow-hidden">
      {/* Header */}
      <div className="text-center mb-3 lg:mb-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
          📌 ESP32 DEVKIT V1 Pinout
        </h1>
        <p className="text-gray-600 text-xs lg:text-sm">
          Complete visual reference for all GPIO pins and their functions
        </p>
      </div>

      {/* Main Content - Two Columns on Desktop */}
      <div className="flex-grow flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-7xl mx-auto w-full lg:overflow-hidden">
        
        {/* Left Column - Pinout Image */}
        <div className="bg-white rounded-xl shadow-lg p-3 lg:p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-blue-700">
            <Image className="w-4 h-4 lg:w-5 lg:h-5" />
            <h2 className="font-semibold text-base lg:text-lg">Board Layout</h2>
          </div>
          
          <div className="flex items-center justify-center rounded-lg bg-gray-50 p-4">
            <img 
              src="https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2018/08/ESP32-DOIT-DEVKIT-V1-Board-Pinout-36-GPIOs-updated.jpg?quality=100&strip=all&ssl=1"
              alt="ESP32 DEVKIT V1 Pinout" 
              className="w-full h-auto object-contain"
              style={{ maxHeight: '65vh' }}
            />
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-2 italic">
            Source: Random Nerd Tutorials
          </p>
        </div>

        {/* Right Column - Warning & Quick Reference */}
        <div className="lg:w-72 flex flex-col gap-3 lg:overflow-y-auto">
          
          {/* Critical Warning - Moved from Footer */}
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-red-500 p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-gray-800 mb-1">
                  ⚠️ Critical: Flash Memory Pins
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pins <strong>GPIO 6-11</strong> (SCK/CLK, SDO, SDI, SHD, SWP, SCS) are internally connected to the SPI flash memory. 
                  <span className="text-red-600 font-medium block mt-1">Never use these pins for external connections</span> — doing so may brick your board.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-white rounded-xl shadow-lg p-3">
            <h3 className="font-semibold text-indigo-700 mb-2 text-sm">📚 Quick Reference</h3>
            
            <div className="space-y-1.5 text-xs">
              <div className="p-1.5 bg-blue-50 rounded border-l-4 border-blue-500">
                <p className="font-medium text-gray-800">Power Pins</p>
                <p className="text-xs text-gray-600">3.3V, 5V (VIN), GND</p>
              </div>
              
              <div className="p-1.5 bg-purple-50 rounded border-l-4 border-purple-500">
                <p className="font-medium text-gray-800">ADC Pins (Input Only)</p>
                <p className="text-xs text-gray-600">GPIO 34, 35, 36 (VP), 39 (VN)</p>
              </div>
              
              <div className="p-1.5 bg-orange-50 rounded border-l-4 border-orange-500">
                <p className="font-medium text-gray-800">Touch Sensors</p>
                <p className="text-xs text-gray-600">GPIO 0, 2, 4, 12, 13, 14, 15, 27, 32, 33</p>
              </div>
              
              <div className="p-1.5 bg-teal-50 rounded border-l-4 border-teal-500">
                <p className="font-medium text-gray-800">I2C Default</p>
                <p className="text-xs text-gray-600">SDA: GPIO 21, SCL: GPIO 22</p>
              </div>
              
              <div className="p-1.5 bg-pink-50 rounded border-l-4 border-pink-500">
                <p className="font-medium text-gray-800">SPI Default</p>
                <p className="text-xs text-gray-600">MOSI: 23, MISO: 19, SCK: 18, SS: 5</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}