"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59076],{16959:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>a});var s=o(6254);const n={},i=(0,o(58079).A)(n,[["render",function(e,t){const o=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[9]||(t[9]=(0,s.Lk)("h1",{id:"tuya-ts0601-cover-1",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-cover-1"},[(0,s.Lk)("span",null,"Tuya TS0601_cover_1")])],-1)),(0,s.Lk)("table",null,[t[7]||(t[7]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"TS0601_cover_1")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Curtain motor/roller blind motor/window pusher/tubular motor")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"cover (state, position), options")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_cover_1.png",alt:"Tuya TS0601_cover_1"})])],-1)),t[6]||(t[6]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"White-label"),(0,s.Lk)("td",null,"Yushun YS-MT750, Zemismart ZM79E-DT, Binthen BCM100D, Binthen CV01A, Zemismart M515EGB, Oz Smart Things ZM85EL-1Z, Tuya M515EGZT, Tuya DT82LEMA-1.2N, Tuya ZD82TN, Larkkey ZSTY-SM-1SRZG-EU, Zemismart AM43, Zemismart M2805EGBZTN, Zemismart BCM500DS-TYZ, A-OK AM25, Alutech AM/R-Sm, Quoya AT8510-TY")],-1))])]),t[10]||(t[10]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h2><ul><li>On 2-button units: press down and set simultaneously until LED flashes blue.</li><li>On 1-button units: press the set key 3 times in 5 seconds until the LED flashes blue.</li><li>On Tuya/Zemismart bead curtain motor: Press set once shortly, then press set again for 5 seconds until LED flashes blue. <ul><li>If the sequence was not started with the initial short press, the 5 second press will turn the device off. In this case press set again for 5 seconds to turn it back on)</li></ul></li></ul><h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes"><span>Configuration of device attributes</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;reverse_direction&quot;</span><span class="token operator">:</span> xxx</span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>reverse_direction</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Device can be configured to act in an opposite direction.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>t[8]||(t[8]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,s.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="options-composite" tabindex="-1"><a class="header-anchor" href="#options-composite"><span>Options (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;options&quot;: {&quot;motor_speed&quot;: VALUE, &quot;reverse_direction&quot;: VALUE}}</code></p><ul><li><code>motor_speed</code> (numeric): Motor speed max value is 255</li><li><code>reverse_direction</code> (binary): Reverse the motor direction allowed values: <code>true</code> or <code>false</code></li></ul>',7))])}]]),a=JSON.parse('{"path":"/devices/TS0601_cover_1.html","title":"Tuya TS0601_cover_1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_cover_1 control via MQTT","description":"Integrate your Tuya TS0601_cover_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:57.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Options (composite)","slug":"options-composite","link":"#options-composite","children":[]}]}],"git":{"updatedTime":1742562871000},"filePathRelative":"devices/TS0601_cover_1.md"}')}}]);