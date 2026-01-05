import { WifiIcon, TerminalIcon, ScanIcon, ZapIcon } from 'lucide-react';

export default function WifiScannerSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white mb-4">
          <WifiIcon size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Bonus: WiFi Scanner</h1>
        <p className="text-lg text-gray-600 mt-2">
          Let the ESP32 “listen” to the wireless world around it 🌐
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">

        {/* Left: Concept & Instructions */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-indigo-500">
            <h2 className="font-bold text-xl text-gray-800 flex items-center gap-2">
              <ScanIcon size={20} className="text-indigo-600" />
              How It Works
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>ESP32 scans for nearby WiFi networks (like your phone).</li>
              <li>Results are printed to the <strong>Serial Monitor</strong>.</li>
              <li>Runs every 5 seconds automatically.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-amber-500">
            <h2 className="font-bold text-xl text-gray-800 flex items-center gap-2">
              <TerminalIcon size={20} className="text-amber-600" />
              Steps to Run
            </h2>
            <ol className="mt-3 space-y-2 text-gray-700 list-decimal pl-5">
              <li>Upload the code to your ESP32 (physical board only).</li>
              <li>Open <strong>Tools → Serial Monitor</strong>.</li>
              <li>Set baud rate to <code className="bg-gray-100 px-1.5 py-0.5 rounded">115200</code>.</li>
              <li>Watch the list of networks appear!</li>
            </ol>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
            <h2 className="font-bold text-xl text-gray-800 flex items-center gap-2">
              <ZapIcon size={20} className="text-green-600" />
              Challenge for You
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>🔍 Can you find your school’s WiFi name?</li>
              <li>📶 Which network has the strongest signal? (Hint: RSSI closest to <strong>0</strong> is strongest)</li>
              <li>💡 Try adding <code>Serial.println(WiFi.BSSIDstr(i));</code> to show MAC addresses!</li>
            </ul>
          </div>
        </div>

        {/* Right: Code Snippet */}
        <div className="bg-gray-900 text-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-mono">scan_wifi.ino</span>
            <span className="text-xs bg-indigo-700 px-2 py-0.5 rounded">C++</span>
          </div>
          <pre className="p-4 text-sm leading-relaxed overflow-x-auto">
{`#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);
  Serial.println("Setup done. Ready to scan!");
}

void loop() {
  Serial.println("Scanning for WiFi networks...");
  int n = WiFi.scanNetworks();

  if (n == 0) {
    Serial.println("No networks found.");
  } else {
    Serial.print(n); Serial.println(" networks found!");
    for (int i = 0; i < n; i++) {
      Serial.print(i+1); Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (Signal: ");
      Serial.print(WiFi.RSSI(i)); // e.g., -45 (strong), -85 (weak)
      Serial.println(")");
      delay(10);
    }
  }
  Serial.println();
  delay(5000); // scan every 5 sec
}`}
          </pre>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-gray-500 text-sm max-w-3xl mx-auto">
        <p>
          💡 <strong>Note:</strong> This only works on a <em>physical ESP32</em> (Wokwi doesn’t support WiFi scanning yet).
          The ESP32 proves its “smart” identity — not just blinking lights, but sensing the invisible world!
        </p>
      </div>
    </div>
  );
}