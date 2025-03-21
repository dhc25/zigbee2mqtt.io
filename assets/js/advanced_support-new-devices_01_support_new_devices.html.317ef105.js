"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64492],{82160:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>d});var i=n(6254);const a=n.p+"assets/img/generate_external_definition.2d7d3337.gif",o={class:"hint-container tip"},r={},s=(0,n(58079).A)(r,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[17]||(t[17]=(0,i.Lk)("h1",{id:"support-new-devices",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#support-new-devices"},[(0,i.Lk)("span",null,"Support new devices")])],-1)),(0,i.Lk)("p",null,[t[1]||(t[1]=(0,i.eW)("This page will guide you through the process of adding support for new devices through a temporary ")),(0,i.bF)(n,{to:"/advanced/more/external_converters.html"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("external converter")]))),_:1}),t[2]||(t[2]=(0,i.eW)("."))]),t[18]||(t[18]=(0,i.Fv)('<p>In case you require any help feel free to open a <a href="https://github.com/Koenkk/zigbee2mqtt/discussions" target="_blank" rel="noopener noreferrer">discussion</a>.</p><p><strong>Before</strong> starting, first check if your device is not already supported in the Zigbee2MQTT dev branch! This can be done by checking the <a href="https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices" target="_blank" rel="noopener noreferrer">changelog</a> of the dev branch. Also set the Zigbee2MQTT <code>log_level</code> to <code>debug</code> for easier debugging.</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="_1-pairing-the-device-with-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#_1-pairing-the-device-with-zigbee2mqtt"><span>1. Pairing the device with Zigbee2MQTT</span></a></h3><p>The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any Zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.</p><p>Once you successfully paired the device you will see something like this in the logs:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired</span>\n<span class="line">Zigbee2MQTT:warn  2019-11-09T12:19:56: Device &#39;0x00158d0001dc126a&#39; with Zigbee model &#39;lumi.sens&#39; and manufacturer name &#39;some_name&#39; is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Make sure that joining is enabled, otherwise new devices cannot join the network.</p></div><h3 id="_2-creating-the-external-definition" tabindex="-1"><a class="header-anchor" href="#_2-creating-the-external-definition"><span>2. Creating the external definition</span></a></h3><p>When pairing an unsupported device with Zigbee2MQTT, it will attempt to discover features supported by this device. To check what has already been discovered, navigate to the <code>Exposes</code> tab of the device in frontend. See if the exposed features work by checking if values are reported and/or states are controllable (in case of e.g. a light). Note that feature discovery is still WIP, not all features may be discovered, some may not be discoverable at all due to a non-standard implementation on the device (commonly the case for Tuya devices).</p><p>Next generate the external definition by navigating to the <code>Dev console</code> tab of the device and press <code>Generate external definition</code>.</p><img src="'+a+'" height="300"><p>By default, the external definition will map exposed Zigbee clusters to features according to the Zigbee ZCL specification. Of course, if the device does not conform to the specification, it may not work properly or at all. If all features work and all expected features are present, you are lucky and can skip to step 3. If not, you will have to extend the external definition.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Depending on the device, it may be possible to extend the definition using other modern extends. This is the recommended process as it is generally easier.</p></div><h3 id="_2-1-extending-the-generated-external-definition" tabindex="-1"><a class="header-anchor" href="#_2-1-extending-the-generated-external-definition"><span>2.1. Extending the generated external definition</span></a></h3>',15)),(0,i.Lk)("p",null,[t[4]||(t[4]=(0,i.eW)("To extend the generated external definition, you can either save the code in a file manually, and restart Zigbee2MQTT, or you can use the MQTT API to load the converter at runtime. See ")),(0,i.bF)(n,{to:"/advanced/more/external_converters.html"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("external converters")]))),_:1}),t[5]||(t[5]=(0,i.eW)(" for more details."))]),t[19]||(t[19]=(0,i.Fv)('<p>Add and/or configure the appropriate modern extends for the device (see previous link).</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The <code>Clusters</code> tab of the device, in frontend, lists supported clusters for further analysis.</p></div><p>Once done, trigger actions on the device.</p><p>If your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a <code>configure:</code> section. <em>It may help to look at similar <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices" target="_blank" rel="noopener noreferrer">devices</a>.</em></p>',4)),(0,i.Lk)("div",o,[t[11]||(t[11]=(0,i.Lk)("p",{class:"hint-container-title"},"Tips",-1)),(0,i.Lk)("p",null,[t[7]||(t[7]=(0,i.eW)("If your device is advertised as Tuya compatible or reports anything with ")),t[8]||(t[8]=(0,i.Lk)("code",null,"manuSpecificTuya",-1)),t[9]||(t[9]=(0,i.eW)(", additional instructions for adding your device can be found ")),(0,i.bF)(n,{to:"/advanced/support-new-devices/02_support_new_tuya_devices.html"},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.eW)("here")]))),_:1}),t[10]||(t[10]=(0,i.eW)("."))])]),t[20]||(t[20]=(0,i.Fv)('<p>If you still see messages like below after adding and configuring all appropriate modern extends, you may need to add specific converters that modern extends do not provide. Existing converters can probably be reused, those can be found <a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts" target="_blank" rel="noopener noreferrer">here</a>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>For the above message, you would use the already existing <code>fz.temperature</code> converter:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>fz<span class="token punctuation">.</span>temperature<span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',4)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[t[13]||(t[13]=(0,i.eW)("Note: This converter would actually be covered by the appropriate modern extend (")),t[14]||(t[14]=(0,i.Lk)("code",null,"temperature()",-1)),t[15]||(t[15]=(0,i.eW)("), it is just given as an example. See ")),(0,i.bF)(n,{to:"/advanced/more/external_converters.html#more-examples"},{default:(0,i.k6)((()=>t[12]||(t[12]=[(0,i.eW)("more examples")]))),_:1}),t[16]||(t[16]=(0,i.eW)("."))])]),t[21]||(t[21]=(0,i.Fv)('<p>Repeat this last step until your device no longer produces log messages like <code>No converter available for &#39;WSDCGQ01LM&#39; with cluster...</code></p><p>If none of the existing converters fit, you can add custom ones, an example for this can be found <a href="https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="_3-add-device-picture-to-zigbee2mqtt-io-documentation" tabindex="-1"><a class="header-anchor" href="#_3-add-device-picture-to-zigbee2mqtt-io-documentation"><span>3. Add device picture to zigbee2mqtt.io documentation</span></a></h3><p>To make sure a picture is available for this device on the supported devices page and in the frontend:</p><ol><li>Clone <a href="https://github.com/Koenkk/zigbee2mqtt.io" target="_blank" rel="noopener noreferrer">zigbee2mqtt.io</a></li><li>Add a device picture (<code>.png</code>, 512x512, transparent background) in <code>public/images/devices</code>. <ul><li><em>If necessary, use the <a href="https://new.express.adobe.com/tools/remove-background" target="_blank" rel="noopener noreferrer">Adobe Express Remove Background tool</a> to make the background transparent.</em></li></ul></li><li><strong><em>Optional:</em></strong> Add a markdown file for your device to <code>docs/devices</code>, use the <code>model</code> property of your definition as the filename. Most of the contents of this file will be auto-generated through docgen but you can add your own notes in a notes section. Do not use h1 or h2 heading within &quot;## Notes&quot;-Section. <blockquote><blockquote><p>&lt;!-- Notes BEGIN --&gt;<br> &gt;&gt; ## Notes<br> ...<br> &gt;&gt; &lt;!-- Notes END --&gt;</p></blockquote></blockquote></li><li>Create a Pull Request for <a href="https://github.com/Koenkk/zigbee2mqtt.io" target="_blank" rel="noopener noreferrer">zigbee2mqtt.io</a>.</li></ol><p>Upon the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in <code>../../supported-devices.md</code> automatically.</p><h3 id="_4-done" tabindex="-1"><a class="header-anchor" href="#_4-done"><span>4. Done!</span></a></h3><p>Now it&#39;s time to submit a pull request to <a href="https://github.com/Koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a> so this device is supported out of the box by Zigbee2MQTT. This can be done by adding the definition to the <a href="https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices" target="_blank" rel="noopener noreferrer">vendor file</a> of your device. 😃</p>',8))])}]]),d=JSON.parse('{"path":"/advanced/support-new-devices/01_support_new_devices.html","title":"Support new devices","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Pairing the device with Zigbee2MQTT","slug":"_1-pairing-the-device-with-zigbee2mqtt","link":"#_1-pairing-the-device-with-zigbee2mqtt","children":[]},{"level":3,"title":"2. Creating the external definition","slug":"_2-creating-the-external-definition","link":"#_2-creating-the-external-definition","children":[]},{"level":3,"title":"2.1. Extending the generated external definition","slug":"_2-1-extending-the-generated-external-definition","link":"#_2-1-extending-the-generated-external-definition","children":[]},{"level":3,"title":"3. Add device picture to zigbee2mqtt.io documentation","slug":"_3-add-device-picture-to-zigbee2mqtt-io-documentation","link":"#_3-add-device-picture-to-zigbee2mqtt-io-documentation","children":[]},{"level":3,"title":"4. Done!","slug":"_4-done","link":"#_4-done","children":[]}]}],"git":{"updatedTime":1742562871000},"filePathRelative":"advanced/support-new-devices/01_support_new_devices.md"}')}}]);