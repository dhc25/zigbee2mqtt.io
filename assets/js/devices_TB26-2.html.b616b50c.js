"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66697],{6500:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>d,data:()=>c});var i=t(6254);const n={},d=(0,t(58079).A)(n,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"zemismart-tb26-2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#zemismart-tb26-2"},[(0,i.Lk)("span",null,"Zemismart TB26-2")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TB26-2")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Zemismart"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Zemismart")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"2 Gang switch with backlight, countdown, inching")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), countdown, power_on_behavior, switch_type, backlight_mode, indicator_mode, inching_control_set")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TB26-2.png",alt:"Zemismart TB26-2"})])],-1))])]),o[9]||(o[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="countdown-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l1-endpoint"><span>Countdown (numeric, l1 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="countdown-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l2-endpoint"><span>Countdown (numeric, l2 endpoint)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint"><span>Power-on behavior (enum, l1 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint"><span>Power-on behavior (enum, l2 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="switch-type-enum" tabindex="-1"><a class="header-anchor" href="#switch-type-enum"><span>Switch type (enum)</span></a></h3><p>Type of the switch. Value can be found in the published state on the <code>switch_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>state</code>, <code>momentary</code>.</p><h3 id="backlight-mode-binary" tabindex="-1"><a class="header-anchor" href="#backlight-mode-binary"><span>Backlight mode (binary)</span></a></h3><p>Mode of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight mode is ON, if <code>OFF</code> OFF.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum"><span>Indicator mode (enum)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="inching-control-set-composite" tabindex="-1"><a class="header-anchor" href="#inching-control-set-composite"><span>Inching control set (composite)</span></a></h3><p>Device Inching function Settings. The device will automatically turn off after each turn on for a specified period of time.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;inching_control_set&quot;: {&quot;inching_control_1&quot;: VALUE, &quot;inching_time_1&quot;: VALUE, &quot;inching_control_2&quot;: VALUE, &quot;inching_time_2&quot;: VALUE}}</code></p><ul><li><code>inching_control</code> (binary): Enable/disable inching function for endpoint 1. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>inching_time</code> (numeric): Delay time for executing a inching action for endpoint 1. min value is 1, max value is 65535, unit is seconds</li><li><code>inching_control</code> (binary): Enable/disable inching function for endpoint 2. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>inching_time</code> (numeric): Delay time for executing a inching action for endpoint 2. min value is 1, max value is 65535, unit is seconds</li></ul>',23))])}]]),c=JSON.parse('{"path":"/devices/TB26-2.html","title":"Zemismart TB26-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zemismart TB26-2 control via MQTT","description":"Integrate your Zemismart TB26-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-07T11:16:43.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l1 endpoint)","slug":"countdown-numeric-l1-endpoint","link":"#countdown-numeric-l1-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l2 endpoint)","slug":"countdown-numeric-l2-endpoint","link":"#countdown-numeric-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l1 endpoint)","slug":"power-on-behavior-enum-l1-endpoint","link":"#power-on-behavior-enum-l1-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l2 endpoint)","slug":"power-on-behavior-enum-l2-endpoint","link":"#power-on-behavior-enum-l2-endpoint","children":[]},{"level":3,"title":"Switch type (enum)","slug":"switch-type-enum","link":"#switch-type-enum","children":[]},{"level":3,"title":"Backlight mode (binary)","slug":"backlight-mode-binary","link":"#backlight-mode-binary","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Inching control set (composite)","slug":"inching-control-set-composite","link":"#inching-control-set-composite","children":[]}]}],"git":{"updatedTime":1742562871000},"filePathRelative":"devices/TB26-2.md"}')}}]);