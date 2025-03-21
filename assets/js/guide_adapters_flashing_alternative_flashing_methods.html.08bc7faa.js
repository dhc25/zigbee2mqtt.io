"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88554],{78571:(e,n,a)=>{e.exports=a.p+"assets/img/downloader_cable.720e6aa2.png"},91137:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>c,data:()=>p});var i=a(6254);const s=a.p+"assets/img/CC2531_wiring_raspi-header.5711ef70.jpg";var t=a(78571);const r=a.p+"assets/img/IMG_20180111_193941.03eceed6.jpg",l=a.p+"assets/img/IMG_20180111_193923.a5a7d7ba.jpg",o=a.p+"assets/img/IMG_20180110_234401.a8ca2bd3.jpg",d={},c=(0,a(58079).A)(d,[["render",function(e,n){return(0,i.uX)(),(0,i.CE)("div",null,n[0]||(n[0]=[(0,i.Fv)('<h1 id="alternative-flashing-methods" tabindex="-1"><a class="header-anchor" href="#alternative-flashing-methods"><span>Alternative flashing methods</span></a></h1><ul><li><a href="#raspberry_pi">Raspberry pi</a></li><li><a href="#arduino_ccloader">Arduino/ESP8266 + CCLoader</a></li><li><a href="#arduino_cclib">Arduino/ESP8266 + CCLib</a></li><li><a href="#rp2040_dragndrop">Drag-and-Drop with RP2040</a></li></ul><hr><h3 id="with-raspberry-pi-3min" tabindex="-1"><a class="header-anchor" href="#with-raspberry-pi-3min"><span><a name="raspberry_pi"></a> With Raspberry Pi (~3min)</span></a></h3><ol><li><p>Install <a href="https://github.com/WiringPi/WiringPi/releases" target="_blank" rel="noopener noreferrer">wiringPi</a>, if not already installed.</p></li><li><p>Install <a href="https://github.com/jmichault/flash_cc2531" target="_blank" rel="noopener noreferrer">flash_cc2531</a> :</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/jmichault/flash_cc2531.git</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>Connect the following pins of the debug port to the GPIO port :</li></ol><ul><li>pin 1 (GND) --&gt; pin 39 (GND)</li><li>pin 7 (reset) --&gt; pin 35 (GPIO24, BCM19)</li><li>pin 3 (DC) --&gt; pin 36 (GPIO27, BCM16)</li><li>pin 4 (DD) --&gt; pin 38 (GPIO28, BCM20)</li></ul><img src="'+s+'" width="40%"><p>Optionally, connecting Target Voltage Sense to a 3.3v source (Red wire) eliminates the need to plug the device into a usb port, so optionally connect the following too:</p><ul><li>pin 2 (Target Voltage Sense) --&gt; pin 1 or pin 17 (3.3v) on Raspi</li></ul><p>See above for the dispositions of pins on CC2531, and at <a href="https://pinout.xyz/" target="_blank" rel="noopener noreferrer">https://pinout.xyz/</a> for pins on Raspberry.</p><p>A downloader cable CC2531 <img src="'+t+'" alt=""> and 4 Dupont line Female to Female are perfect for this purpose. If you don&#39;t want to buy a downloader cable, you need to bend the debug pins outwards to be able to connect your Dupont cables since the pins are too close together to connect the Dupont cables directly.</p><p>Now insert the usb dongle in an USB port :</p><img src="https://raw.githubusercontent.com/jmichault/files/master/Raspberry-CC2531.jpg" width="40%"><ol start="4"><li>Test by running :</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> flash_cc2531</span>\n<span class="line">./cc_chipid</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>it should return :</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  ID = b524.</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you see 0000 or ffff, something is wrong and you should probably check your wiring.</p><p>If you get <code>./cc_chipid: cannot execute: required file not found</code>, then you need to run <code>make</code> command</p><ol start="5"><li>Download and extract the latest firmware <a href="https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip" target="_blank" rel="noopener noreferrer">CC2531_DEFAULT_20211115.zip</a>.</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> ~/flash_cc2531       <span class="token comment">#assuming you git-cloned the program to your home directory</span></span>\n<span class="line"><span class="token function">wget</span> https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip</span>\n<span class="line"><span class="token function">unzip</span> CC2531_DEFAULT_20211115.zip</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Erase and flash the CC2531 :</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./cc_erase</span>\n<span class="line">./cc_write CC2531ZNP-Prod.hex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>It takes around 3 minutes.</p><h3 id="via-arduino-uno-esp8266-with-ccloader-3min" tabindex="-1"><a class="header-anchor" href="#via-arduino-uno-esp8266-with-ccloader-3min"><span><a name="arduino_ccloader"></a>Via Arduino Uno/ESP8266 with CCLoader (~3min)</span></a></h3><p><strong>This has been tested with a Genuine Arduino Uno, an Arduino Pro Micro - China clone, and a NodeMCU ESP8266 and is significantly faster than CCLib</strong></p><h4 id="prepare-the-firmware" tabindex="-1"><a class="header-anchor" href="#prepare-the-firmware"><span>Prepare the firmware</span></a></h4><ol><li><p>Download the correct firmware (in this example we&#39;ll be using the <a href="https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/" target="_blank" rel="noopener noreferrer">CC2531 firmware</a>)</p></li><li><p>Unpack firmware and convert the hex file to binary using <code>objcopy</code> (do not use the included binary file!)</p><p><strong><em>Windows</em></strong>: download <code>objcopy.exe</code> as per <a href="https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump" target="_blank" rel="noopener noreferrer">this</a> answer from StackOverflow.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Linux or Bash on Ubuntu on Windows</strong>: install the <code>binutils</code> package using your package manager</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">objcopy --gap-fill 0xFF --pad-to 0x040000 <span class="token parameter variable">-I</span> ihex CC2531ZNP-Prod.hex <span class="token parameter variable">-O</span> binary /tmp/CC2531ZNP-Prod.bin</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h4 id="prepare-ccloader" tabindex="-1"><a class="header-anchor" href="#prepare-ccloader"><span>Prepare CCLoader</span></a></h4><ol><li>Download and unpack <a href="https://github.com/RedBearLab/CCLoader" target="_blank" rel="noopener noreferrer">CCLoader</a></li><li>On Windows you can use the precompiled <code>CCloader.exe</code></li><li>On Linux you have to compile <code>CCLoader</code> yourself so change directory to <code>CCLoader/SourceCode/Linux</code>, and run<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gcc main.c <span class="token parameter variable">-o</span> CCLoader</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h4 id="flashing-the-arduino-or-esp8266-and-the-cc2531-device" tabindex="-1"><a class="header-anchor" href="#flashing-the-arduino-or-esp8266-and-the-cc2531-device"><span>Flashing the Arduino or ESP8266 and the CC2531 device</span></a></h4><ol><li>For Arduino, leave the pins set as default in &#39;Arduino\\CCLoader\\CCLoader.ino&#39; (lines 86-90):</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// Debug control pins &amp; the indicate LED</span>\n<span class="line">int DD = 6;</span>\n<span class="line">int DC = 5;</span>\n<span class="line">int RESET = 4;</span>\n<span class="line">int LED = 13;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For ESP8266 (NodeMCU or WeMos D1 Mini) edit those pins in &#39;Arduino\\CCLoader\\CCLoader.ino&#39; (lines 86-90) to usable pins for the ESP8266, these worked for me (note that the number is the GPIO number, not the label on the NodeMCU):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// Debug control pins &amp; the indicate LED</span>\n<span class="line">int DD = 14; //GPIO14=D5 on NodeMCU/WeMos D1 Mini</span>\n<span class="line">int DC = 4; //GPIO4=D2 on NodeMCU/WeMos D1 Mini</span>\n<span class="line">int RESET = 5; //GPIO5=D1 on NodeMCU/WeMos D1 Mini</span>\n<span class="line">int LED = 2; //GPIO2=D4 and the Blue LED on the WeMos D1 Mini and the ESP-12E module on the NodeMCU, or can use GPIO16=D0 for the other Blue LED on NodeMCU</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>Flash Arduino Uno or ESP8266 board with <code>Arduino\\CCLoader\\CCLoader.ino</code> (For NodeMCU on Windows: install <a href="https://www.arduino.cc/en/main/software" target="_blank" rel="noopener noreferrer">the Arduino IDE</a>, then in Preferences, add the following URL to the Additional Boards Manager URL field: http://arduino.esp8266.com/stable/package_esp8266com_index.json , then go to the Boards Manager and install the esp8266 package, then set the board to &quot;NodeMCU 1.0 (ESP-12E module)&quot; or if you are using a WeMos D1 Mini set it to &quot;LOLIN(WEMOS) D1 R2 &amp; Mini&quot;, then set Port to the correct COM port (it was COM3 for me with a NodeMCU), then Upload the sketch.)</p></li><li><p>Note the COM port number or device name as this will be used later</p></li><li><p>Connect Arduino pins as described below to the debug header of the CC device</p><table><thead><tr><th>Arduino</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D4</td><td>7</td><td>RESETn</td></tr><tr><td>D5</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D6</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table></li></ol><p><img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" width="40%"> <img src="https://user-images.githubusercontent.com/35885181/67834765-dcab2280-faad-11e9-8755-971f0e456217.jpg" width="20%"> <img src="https://user-images.githubusercontent.com/35885181/67834764-dc128c00-faad-11e9-8e06-0937e1bb6790.jpg" width="23%"></p><p>If you have a 3.3V Arduino you can optionally connect <code>3.3V -&gt; Target Voltage Sense (Pin 2)</code> and program the CC2531 without connecting the CC2531 to USB (in the next step).</p><p>Connect the ESP8266 pins as described below to the debug header of the CC device</p><table><thead><tr><th>ESP8266</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D1/GPIO5</td><td>7</td><td>RESETn</td></tr><tr><td>D2/GPIO4</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D5/GPIO14</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table><ol><li><p>Connect Arduino/ESP8266 first, then within a couple seconds connect the CC2531 to USB power</p></li><li><p>Place the prepared <code>CC2531ZNP-Prod.bin</code> next to the executable file</p></li><li><p>Start the flashing process</p><p><strong>Windows</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CCLoader_x86_64.exe [Number of the COM port] CC2531ZNP-Prod.bin 0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><em>Example:</em> Arduino UNO on COM7</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CCLoader_x86_64.exe 7 CC2531ZNP-Prod.bin 0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Linux</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./CCLoader [Name of the USB device] CC2531ZNP-Prod.bin 0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><em>Example:</em> Arduino Uno on <code>/dev/ttyACM0</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./CCLoader /dev/ttyACM0 CC2531ZNP-Prod.bin 0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>It should be done in a few minutes.</p><p>If burning fails/gets stuck at <code>Request sent already! Waiting for respond...</code> - try again, check your wiring, try using <code>1</code> instead of <code>0</code> as the last parameter. Or try run command with <code>sudo</code>.</p><h3 id="via-arduino-esp8266-with-cclib-3hrs" tabindex="-1"><a class="header-anchor" href="#via-arduino-esp8266-with-cclib-3hrs"><span><a name="arduino_cclib"></a> Via Arduino/ESP8266 with CCLib (~3hrs)</span></a></h3><p>Flashing firmware via Arduino is implemented using the project https://github.com/wavesoft/CCLib <strong>But with minor improvements!!!</strong></p><p><a href="https://github.com/AndrewLinden" target="_blank" rel="noopener noreferrer">AndrewLinden</a> described that he was able to flash CC2531 using CCLib <a href="https://github.com/wavesoft/CCLib/issues/19" target="_blank" rel="noopener noreferrer">with comments</a>.</p><p>As described <a href="https://github.com/kirovilya/CCLib" target="_blank" rel="noopener noreferrer">I made a fork of the CCLib library with minor changes</a> for flashing firmware via Arduino:</p><ul><li>Timeouts of operations</li><li>After opening the port (I have in Windows 7) Arduino reboots and, accordingly, does not respond to requests - made a 3 seconds pause (found somewhere in internet).</li><li>The port speed is reduced to 9600, because at another speed leaving communication errors: <code>ERROR: Could not read from the serial port!</code></li></ul><p>Flashing process:</p><ol><li><p>Download and unpack the archive with the library https://github.com/kirovilya/CCLib.</p></li><li><p>Flashing Arduino sketch via Arduino IDE CCLib\\Arduino\\CCLib\\Examples\\CCLib_proxy\\CCLib_proxy.ino</p></li></ol><p><strong>If flashing via esp8266 (wemos d1 mini), you need change connection (p. 5) and Pinout configuration in Arduino/CCLib/Examples/CCLib_proxy/CCLib_proxy.ino:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">int CC_RST   = 5;</span>\n<span class="line">int CC_DC    = 4;</span>\n<span class="line">int CC_DD_I  = 14;</span>\n<span class="line">int CC_DD_O  = 12;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>Install Python 2.7 or later (tested with python 2.7.13), if not installed</p></li><li><p>Install pyserial 3.0.1, if not installed <code>pip install -r CCLib\\Python\\requirements.txt</code> or <code>pip install pyserial==3.0.1</code></p></li><li><p>Connect the contacts as described https://github.com/kirovilya/CCLib#1-prepare-your-arduino-board <strong>But in my case, I connected completely without resistors, combined the contacts CC_DD_I and CC_DD_O together and connected to the DD pin of the DEBUG connector!</strong></p></li></ol><p><img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" alt=""></p><p>I connected only 3 specified contacts and GND. During the firmware, the stick and Arduino must be connected to the USB.</p><p><img src="'+r+'" width="35%"> <img src="'+l+'" width="35%"> <img src="'+o+'" width="15%"></p><ol start="6"><li>After that, try to get information about the chip - if it works, then the connection is correct (example for COM9 port - Arduino port):</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\Projects\\CCLib\\Python&gt;python cc_info.py -p COM9</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><details class="hint-container details"><summary>Command output</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">INFO: Found a CC2531 chip on COM9</span>\n<span class="line"></span>\n<span class="line">Chip information:</span>\n<span class="line">      Chip ID : 0xb524</span>\n<span class="line">   Flash size : 256 Kb</span>\n<span class="line">    Page size : 2 Kb</span>\n<span class="line">    SRAM size : 8 Kb</span>\n<span class="line">          USB : Yes</span>\n<span class="line"></span>\n<span class="line">Device information:</span>\n<span class="line"> IEEE Address : 00124b0014aa</span>\n<span class="line">           PC : 0000</span>\n<span class="line"></span>\n<span class="line">Debug status:</span>\n<span class="line"> [ ] CHIP_ERASE_BUSY</span>\n<span class="line"> [ ] PCON_IDLE</span>\n<span class="line"> [X] CPU_HALTED</span>\n<span class="line"> [ ] PM_ACTIVE</span>\n<span class="line"> [ ] HALT_STATUS</span>\n<span class="line"> [ ] DEBUG_LOCKED</span>\n<span class="line"> [X] OSCILLATOR_STABLE</span>\n<span class="line"> [ ] STACK_OVERFLOW</span>\n<span class="line"></span>\n<span class="line">Debug config:</span>\n<span class="line"> [ ] SOFT_POWER_MODE</span>\n<span class="line"> [ ] TIMERS_OFF</span>\n<span class="line"> [X] DMA_PAUSE</span>\n<span class="line"> [X] TIMER_SUSPEND</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p><a href="https://github.com/wavesoft/CCLib/issues/22#issuecomment-384452424" target="_blank" rel="noopener noreferrer">Another example of connection on MacOS</a></p><ol start="7"><li><p>If everything is successful, download <a href="https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/" target="_blank" rel="noopener noreferrer">the firmware</a>. Before we flash the firmware we need to make a modification to it. Open the <code>.hex</code> file in a text editor and <strong>remove the second last line</strong>. Now save the file.</p></li><li><p>Start the flashing firmware (it takes a long time, about 2-3 hours):</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">C:\\Projects\\ZigBee&gt;python cc_write_flash.py -e -p COM9 --in=CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><details class="hint-container details"><summary>Command output</summary><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">INFO: Found a CC2531 chip on COM9</span>\n<span class="line"></span>\n<span class="line">Chip information:</span>\n<span class="line">      Chip ID : 0xb524</span>\n<span class="line">   Flash size : 256 Kb</span>\n<span class="line">    Page size : 2 Kb</span>\n<span class="line">    SRAM size : 8 Kb</span>\n<span class="line">          USB : Yes</span>\n<span class="line">Sections in CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex:</span>\n<span class="line"></span>\n<span class="line"> Addr.    Size</span>\n<span class="line">-------- -------------</span>\n<span class="line"> 0x0000   8176 B</span>\n<span class="line"> 0x1ff6   10 B</span>\n<span class="line"> 0x3fff0   1 B</span>\n<span class="line"> 0x2000   239616 B</span>\n<span class="line"></span>\n<span class="line">This is going to ERASE and REPROGRAM the chip. Are you sure? &lt;y/N&gt;:  y</span>\n<span class="line"></span>\n<span class="line">Flashing:</span>\n<span class="line"> - Chip erase...</span>\n<span class="line"> - Flashing 4 memory blocks...</span>\n<span class="line"> -&gt; 0x0000 : 8176 bytes</span>\n<span class="line">    Progress 100%... OK</span>\n<span class="line"> -&gt; 0x1ff6 : 10 bytes</span>\n<span class="line">    Progress 100%... OK</span>\n<span class="line"> -&gt; 0x3fff0 : 1 bytes</span>\n<span class="line">    Progress 100%... OK</span>\n<span class="line"> -&gt; 0x2000 : 239616 bytes</span>\n<span class="line">    Progress 100%... OK</span>\n<span class="line"></span>\n<span class="line">Completed</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="via-rp2040-board-with-pico-cc-flasher-3-min" tabindex="-1"><a class="header-anchor" href="#via-rp2040-board-with-pico-cc-flasher-3-min"><span><a name="rp2040_dragndrop"></a> Via RP2040 board with <a href="https://github.com/stolen/pico_cc_flasher" target="_blank" rel="noopener noreferrer">pico_cc_flasher</a> (~3 min)</span></a></h3><p>This method does not need a specialized programmer software. Flashing is as easy as drag-and-drop to a USB drive.</p><h4 id="prepare-the-firmware-1" tabindex="-1"><a class="header-anchor" href="#prepare-the-firmware-1"><span>Prepare the firmware</span></a></h4><ol><li><p>Download the correct firmware (in this example we&#39;ll be using the <a href="https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/" target="_blank" rel="noopener noreferrer">CC2531 firmware</a>)</p></li><li><p>Unpack firmware and convert the hex file to binary using <code>objcopy</code> (do not use the included binary file!)</p><p><strong><em>Windows</em></strong>: download <code>objcopy.exe</code> as per <a href="https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump" target="_blank" rel="noopener noreferrer">this</a> answer from StackOverflow.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Linux or Bash on Ubuntu on Windows</strong>: install the <code>binutils</code> package using your package manager</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">objcopy --gap-fill 0xFF --pad-to 0x040000 <span class="token parameter variable">-I</span> ihex CC2531ZNP-Prod.hex <span class="token parameter variable">-O</span> binary /tmp/CC2531ZNP-Prod.bin</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h4 id="flash-your-rp2040" tabindex="-1"><a class="header-anchor" href="#flash-your-rp2040"><span>Flash your RP2040</span></a></h4><p>I use Waveshare&#39;s RP2040-Zero, but on other boards the only difficulty should be no visual indication.</p><ul><li>Automated installation <ul><li>clone repo <code>git clone https://github.com/stolen/pico_cc_flasher.git &amp;&amp; cd pico_cc_flasher</code></li><li>Connect your RP2040 board in bootloader mode to your PC</li><li>run <code>make install</code></li></ul></li><li>Manual installation <ul><li>Install <a href="https://circuitpython.org/downloads" target="_blank" rel="noopener noreferrer">CircuitPython</a></li><li>Unzip <a href="https://github.com/stolen/pico_cc_flasher/releases/latest/download/pico_cc_flasher.zip" target="_blank" rel="noopener noreferrer">release zip</a> into a CircuitPython USB drive</li></ul></li></ul><h4 id="connect-rp2040-to-cc2531-dongle" tabindex="-1"><a class="header-anchor" href="#connect-rp2040-to-cc2531-dongle"><span>Connect RP2040 to CC2531 dongle</span></a></h4><p><img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/overview.jpg" width="20%"> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/closeup.jpg" width="30%"> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/stick_pinout.png" width="35%"> Connect some pins to your CC2531 stick</p><ul><li><code>GND -&gt; GND</code></li><li><code>GP27 -&gt; DD</code></li><li><code>GP28 -&gt; DC</code></li><li><code>GP29 -&gt; nRST</code></li></ul><h4 id="connect-rp2040-to-pc-and-dongle-to-any-power-source" tabindex="-1"><a class="header-anchor" href="#connect-rp2040-to-pc-and-dongle-to-any-power-source"><span>Connect RP2040 to PC and dongle to any power source</span></a></h4><p>When pico_cc_flasher sees a chip, it reads chip firmware. This may take about a minute.<br> Then it restarts and you can browse to <code>cc25xx</code> directory:</p><ul><li><code>data.read.bin</code> is the flash dump</li><li>Drop any <code>*.bin</code> file (except <code>data.read.bin</code>) into this directory to flash it</li><li>Remove <code>control.skip_flash_read</code> file to re-read flash</li></ul><p><img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/shell_demo.png" width="40%"> <img src="https://github.com/stolen/pico_cc_flasher/raw/master/pictures/filemanager.jpg" width="40%"></p>',79)]))}]]),p=JSON.parse('{"path":"/guide/adapters/flashing/alternative_flashing_methods.html","title":"Alternative flashing methods","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":3,"title":"With Raspberry Pi (~3min)","slug":"with-raspberry-pi-3min","link":"#with-raspberry-pi-3min","children":[]},{"level":3,"title":"Via Arduino Uno/ESP8266 with CCLoader (~3min)","slug":"via-arduino-uno-esp8266-with-ccloader-3min","link":"#via-arduino-uno-esp8266-with-ccloader-3min","children":[]},{"level":3,"title":"Via Arduino/ESP8266 with CCLib (~3hrs)","slug":"via-arduino-esp8266-with-cclib-3hrs","link":"#via-arduino-esp8266-with-cclib-3hrs","children":[]},{"level":3,"title":"Via RP2040 board with pico_cc_flasher (~3 min)","slug":"via-rp2040-board-with-pico-cc-flasher-3-min","link":"#via-rp2040-board-with-pico-cc-flasher-3-min","children":[]}],"git":{"updatedTime":1742562871000},"filePathRelative":"guide/adapters/flashing/alternative_flashing_methods.md"}')}}]);