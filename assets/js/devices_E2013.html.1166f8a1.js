"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35543],{34869:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>s});var n=i(6254);const a={},o=(0,i(58079).A)(a,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"ikea-e2013",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ikea-e2013"},[(0,n.Lk)("span",null,"IKEA E2013")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"E2013")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"PARASOLL door/window sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"contact, identify, battery")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2013.png",alt:"IKEA E2013"})])],-1))])]),t[12]||(t[12]=(0,n.Fv)('<div class="hint-container warning"><p class="hint-container-title">Known Issues with This Device</p><p>The IKEA PARASOLL door/window sensor is known to suffer from serious usability issues in some Zigbee networks, resulting in some sensors regularly going unavailable / draining their battery.</p><p>Whether this issue will affect you appears to depend on the other devices / routers in your Zigbee network, though the exact devices causing this issue have not been confirmed. Further discussion and investigation is available in the GitHub issue: <a href="https://github.com/Koenkk/zigbee2mqtt/issues/22579" target="_blank" rel="noopener noreferrer">zigbee2mqtt#22579</a></p><p>In the meantime, <strong>it is generally not recommended to buy PARASOLL sensors specifically for use with a Zigbee2MQTT network</strong>.</p></div><h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h2><p>To pair the device, press the pairing button 4 times in 5 seconds to factory reset, it should now enter pairing mode.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,n.Fv)('<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates whether the device is opened or closed. Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/E2013.html","title":"IKEA E2013 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2013 control via MQTT","description":"Integrate your IKEA E2013 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:11:35.000Z"},"headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1742562871000},"filePathRelative":"devices/E2013.md"}')}}]);