"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/phenomenon@1.6.0";
exports.ids = ["vendor-chunks/phenomenon@1.6.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/phenomenon@1.6.0/node_modules/phenomenon/dist/phenomenon.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/phenomenon@1.6.0/node_modules/phenomenon/dist/phenomenon.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar t=[\"x\",\"y\",\"z\"],e=function(t){Object.assign(this,{uniforms:{},geometry:{vertices:[{x:0,y:0,z:0}]},mode:0,modifiers:{},attributes:[],multiplier:1,buffers:[]}),Object.assign(this,t),this.prepareProgram(),this.prepareUniforms(),this.prepareAttributes()};e.prototype.compileShader=function(t,e){var i=this.gl.createShader(t);return this.gl.shaderSource(i,e),this.gl.compileShader(i),i},e.prototype.prepareProgram=function(){var t=this.gl,e=this.vertex,i=this.fragment,r=t.createProgram();t.attachShader(r,this.compileShader(35633,e)),t.attachShader(r,this.compileShader(35632,i)),t.linkProgram(r),t.useProgram(r),this.program=r},e.prototype.prepareUniforms=function(){for(var t=Object.keys(this.uniforms),e=0;e<t.length;e+=1){var i=this.gl.getUniformLocation(this.program,t[e]);this.uniforms[t[e]].location=i}},e.prototype.prepareAttributes=function(){void 0!==this.geometry.vertices&&this.attributes.push({name:\"aPosition\",size:3}),void 0!==this.geometry.normal&&this.attributes.push({name:\"aNormal\",size:3}),this.attributeKeys=[];for(var t=0;t<this.attributes.length;t+=1)this.attributeKeys.push(this.attributes[t].name),this.prepareAttribute(this.attributes[t])},e.prototype.prepareAttribute=function(e){for(var i=this.geometry,r=this.multiplier,s=i.vertices,n=i.normal,a=new Float32Array(r*s.length*e.size),o=0;o<r;o+=1)for(var h=e.data&&e.data(o,r),u=o*s.length*e.size,f=0;f<s.length;f+=1)for(var c=0;c<e.size;c+=1){var l=this.modifiers[e.name];a[u]=void 0!==l?l(h,f,c,this):\"aPosition\"===e.name?s[f][t[c]]:\"aNormal\"===e.name?n[f][t[c]]:h[c],u+=1}this.attributes[this.attributeKeys.indexOf(e.name)].data=a,this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e.name)])},e.prototype.prepareBuffer=function(t){var e=t.data,i=t.name,r=t.size,s=this.gl.createBuffer();this.gl.bindBuffer(34962,s),this.gl.bufferData(34962,e,35044);var n=this.gl.getAttribLocation(this.program,i);this.gl.enableVertexAttribArray(n),this.gl.vertexAttribPointer(n,r,5126,!1,0,0),this.buffers[this.attributeKeys.indexOf(t.name)]={buffer:s,location:n,size:r}},e.prototype.render=function(t){var e=this,i=this.uniforms,r=this.multiplier,s=this.gl;s.useProgram(this.program);for(var n=0;n<this.buffers.length;n+=1){var a=this.buffers[n],o=a.location,h=a.buffer,u=a.size;s.enableVertexAttribArray(o),s.bindBuffer(34962,h),s.vertexAttribPointer(o,u,5126,!1,0,0)}Object.keys(t).forEach(function(e){i[e].value=t[e].value}),Object.keys(i).forEach(function(t){var r=i[t];e.uniformMap[r.type](r.location,r.value)}),s.drawArrays(this.mode,0,r*this.geometry.vertices.length),this.onRender&&this.onRender(this)},e.prototype.destroy=function(){for(var t=0;t<this.buffers.length;t+=1)this.gl.deleteBuffer(this.buffers[t].buffer);this.gl.deleteProgram(this.program),this.gl=null};var i=function(t){var e=this,i=t||{},r=i.canvas;void 0===r&&(r=document.querySelector(\"canvas\"));var s=i.context;void 0===s&&(s={});var n=i.contextType;void 0===n&&(n=\"experimental-webgl\");var a=i.settings;void 0===a&&(a={});var o=r.getContext(n,Object.assign({alpha:!1,antialias:!1},s));Object.assign(this,{gl:o,canvas:r,uniforms:{},instances:new Map,shouldRender:!0}),Object.assign(this,{devicePixelRatio:1,clearColor:[1,1,1,1],position:{x:0,y:0,z:2},clip:[.001,100]}),Object.assign(this,a),this.uniformMap={float:function(t,e){return o.uniform1f(t,e)},vec2:function(t,e){return o.uniform2fv(t,e)},vec3:function(t,e){return o.uniform3fv(t,e)},vec4:function(t,e){return o.uniform4fv(t,e)},mat2:function(t,e){return o.uniformMatrix2fv(t,!1,e)},mat3:function(t,e){return o.uniformMatrix3fv(t,!1,e)},mat4:function(t,e){return o.uniformMatrix4fv(t,!1,e)}},o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),!1===o.getContextAttributes().alpha&&(o.clearColor.apply(o,this.clearColor),o.clearDepth(1)),this.onSetup&&this.onSetup(o),window.addEventListener(\"resize\",function(){return e.resize()}),this.resize(),this.render()};i.prototype.resize=function(){var t=this.gl,e=this.canvas,i=this.devicePixelRatio,r=this.position;e.width=e.clientWidth*i,e.height=e.clientHeight*i;var s=t.drawingBufferWidth,n=t.drawingBufferHeight,a=s/n;t.viewport(0,0,s,n);var o=Math.tan(Math.PI/180*22.5),h=[1,0,0,0,0,1,0,0,0,0,1,0,r.x,r.y,(a<1?1:a)*-r.z,1];this.uniforms.uProjectionMatrix={type:\"mat4\",value:[.5/o,0,0,0,0,a/o*.5,0,0,0,0,-(this.clip[1]+this.clip[0])/(this.clip[1]-this.clip[0]),-1,0,0,-2*this.clip[1]*(this.clip[0]/(this.clip[1]-this.clip[0])),0]},this.uniforms.uViewMatrix={type:\"mat4\",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},this.uniforms.uModelMatrix={type:\"mat4\",value:h}},i.prototype.toggle=function(t){t!==this.shouldRender&&(this.shouldRender=void 0!==t?t:!this.shouldRender,this.shouldRender&&this.render())},i.prototype.render=function(){var t=this;this.gl.clear(16640),this.instances.forEach(function(e){e.render(t.uniforms)}),this.onRender&&this.onRender(this),this.shouldRender&&requestAnimationFrame(function(){return t.render()})},i.prototype.add=function(t,i){void 0===i&&(i={uniforms:{}}),void 0===i.uniforms&&(i.uniforms={}),Object.assign(i.uniforms,JSON.parse(JSON.stringify(this.uniforms))),Object.assign(i,{gl:this.gl,uniformMap:this.uniformMap});var r=new e(i);return this.instances.set(t,r),r},i.prototype.remove=function(t){var e=this.instances.get(t);void 0!==e&&(e.destroy(),this.instances.delete(t))},i.prototype.destroy=function(){var t=this;this.instances.forEach(function(e,i){e.destroy(),t.instances.delete(i)}),this.toggle(!1)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcGhlbm9tZW5vbkAxLjYuMC9ub2RlX21vZHVsZXMvcGhlbm9tZW5vbi9kaXN0L3BoZW5vbWVub24ubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrQ0FBa0Msb0JBQW9CLFdBQVcsV0FBVyxXQUFXLFlBQVksRUFBRSxvQkFBb0IsdUNBQXVDLCtGQUErRix3Q0FBd0MsOEJBQThCLDREQUE0RCx1Q0FBdUMsZ0VBQWdFLDRJQUE0SSx3Q0FBd0MseUNBQXlDLFdBQVcsTUFBTSxvREFBb0QsZ0NBQWdDLDBDQUEwQyx1REFBdUQsd0JBQXdCLHVEQUF1RCxzQkFBc0Isd0JBQXdCLFlBQVkseUJBQXlCLGdHQUFnRywwQ0FBMEMsNEdBQTRHLElBQUksMkRBQTJELFdBQVcsaUJBQWlCLFNBQVMsTUFBTSw2QkFBNkIsc0dBQXNHLG1JQUFtSSx1Q0FBdUMsd0RBQXdELDhEQUE4RCxnREFBZ0Qsa0lBQWtJLDRCQUE0QixnQ0FBZ0MsdURBQXVELDJCQUEyQixZQUFZLHNCQUFzQixNQUFNLHVEQUF1RCwwRkFBMEYsbUNBQW1DLHNCQUFzQixxQ0FBcUMsV0FBVyx5Q0FBeUMsK0ZBQStGLGdDQUFnQyxZQUFZLHNCQUFzQixrREFBa0Qsa0RBQWtELGtCQUFrQixrQkFBa0IsWUFBWSxpREFBaUQsZ0JBQWdCLGlCQUFpQixFQUFFLG9CQUFvQixxQ0FBcUMsaUJBQWlCLGlCQUFpQixFQUFFLG9DQUFvQyxzQkFBc0IsS0FBSyxvQkFBb0IseUJBQXlCLG1DQUFtQyxzQkFBc0Isa0RBQWtELFlBQVksaUJBQWlCLHlDQUF5QyxvQkFBb0Isd0JBQXdCLG9CQUFvQix5QkFBeUIsb0JBQW9CLHlCQUF5QixvQkFBb0IseUJBQXlCLG9CQUFvQixrQ0FBa0Msb0JBQW9CLGtDQUFrQyxvQkFBb0IsbUNBQW1DLHFOQUFxTixrQkFBa0IsK0JBQStCLDhCQUE4QixvRUFBb0Usa0RBQWtELHlEQUF5RCxvQkFBb0Isc0ZBQXNGLGlDQUFpQyw2S0FBNkssNEJBQTRCLG9EQUFvRCw2QkFBNkIscUJBQXFCLGdDQUFnQyw0R0FBNEcsK0JBQStCLFdBQVcsd0RBQXdELHFCQUFxQix5RkFBeUYsa0JBQWtCLEVBQUUsK0JBQStCLGdCQUFnQixZQUFZLHFDQUFxQyx1RkFBdUYsc0NBQXNDLEVBQUUsZUFBZSxpQ0FBaUMsZ0NBQWdDLDRCQUE0QixtREFBbUQsZ0NBQWdDLFdBQVcscUNBQXFDLGtDQUFrQyxtQkFBbUIsaUVBQWUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3BoZW5vbWVub25AMS42LjAvbm9kZV9tb2R1bGVzL3BoZW5vbWVub24vZGlzdC9waGVub21lbm9uLm1qcz8yYjM1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciB0PVtcInhcIixcInlcIixcInpcIl0sZT1mdW5jdGlvbih0KXtPYmplY3QuYXNzaWduKHRoaXMse3VuaWZvcm1zOnt9LGdlb21ldHJ5Ont2ZXJ0aWNlczpbe3g6MCx5OjAsejowfV19LG1vZGU6MCxtb2RpZmllcnM6e30sYXR0cmlidXRlczpbXSxtdWx0aXBsaWVyOjEsYnVmZmVyczpbXX0pLE9iamVjdC5hc3NpZ24odGhpcyx0KSx0aGlzLnByZXBhcmVQcm9ncmFtKCksdGhpcy5wcmVwYXJlVW5pZm9ybXMoKSx0aGlzLnByZXBhcmVBdHRyaWJ1dGVzKCl9O2UucHJvdG90eXBlLmNvbXBpbGVTaGFkZXI9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdsLmNyZWF0ZVNoYWRlcih0KTtyZXR1cm4gdGhpcy5nbC5zaGFkZXJTb3VyY2UoaSxlKSx0aGlzLmdsLmNvbXBpbGVTaGFkZXIoaSksaX0sZS5wcm90b3R5cGUucHJlcGFyZVByb2dyYW09ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdsLGU9dGhpcy52ZXJ0ZXgsaT10aGlzLmZyYWdtZW50LHI9dC5jcmVhdGVQcm9ncmFtKCk7dC5hdHRhY2hTaGFkZXIocix0aGlzLmNvbXBpbGVTaGFkZXIoMzU2MzMsZSkpLHQuYXR0YWNoU2hhZGVyKHIsdGhpcy5jb21waWxlU2hhZGVyKDM1NjMyLGkpKSx0LmxpbmtQcm9ncmFtKHIpLHQudXNlUHJvZ3JhbShyKSx0aGlzLnByb2dyYW09cn0sZS5wcm90b3R5cGUucHJlcGFyZVVuaWZvcm1zPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKHRoaXMudW5pZm9ybXMpLGU9MDtlPHQubGVuZ3RoO2UrPTEpe3ZhciBpPXRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSx0W2VdKTt0aGlzLnVuaWZvcm1zW3RbZV1dLmxvY2F0aW9uPWl9fSxlLnByb3RvdHlwZS5wcmVwYXJlQXR0cmlidXRlcz1mdW5jdGlvbigpe3ZvaWQgMCE9PXRoaXMuZ2VvbWV0cnkudmVydGljZXMmJnRoaXMuYXR0cmlidXRlcy5wdXNoKHtuYW1lOlwiYVBvc2l0aW9uXCIsc2l6ZTozfSksdm9pZCAwIT09dGhpcy5nZW9tZXRyeS5ub3JtYWwmJnRoaXMuYXR0cmlidXRlcy5wdXNoKHtuYW1lOlwiYU5vcm1hbFwiLHNpemU6M30pLHRoaXMuYXR0cmlidXRlS2V5cz1bXTtmb3IodmFyIHQ9MDt0PHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7dCs9MSl0aGlzLmF0dHJpYnV0ZUtleXMucHVzaCh0aGlzLmF0dHJpYnV0ZXNbdF0ubmFtZSksdGhpcy5wcmVwYXJlQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlc1t0XSl9LGUucHJvdG90eXBlLnByZXBhcmVBdHRyaWJ1dGU9ZnVuY3Rpb24oZSl7Zm9yKHZhciBpPXRoaXMuZ2VvbWV0cnkscj10aGlzLm11bHRpcGxpZXIscz1pLnZlcnRpY2VzLG49aS5ub3JtYWwsYT1uZXcgRmxvYXQzMkFycmF5KHIqcy5sZW5ndGgqZS5zaXplKSxvPTA7bzxyO28rPTEpZm9yKHZhciBoPWUuZGF0YSYmZS5kYXRhKG8sciksdT1vKnMubGVuZ3RoKmUuc2l6ZSxmPTA7ZjxzLmxlbmd0aDtmKz0xKWZvcih2YXIgYz0wO2M8ZS5zaXplO2MrPTEpe3ZhciBsPXRoaXMubW9kaWZpZXJzW2UubmFtZV07YVt1XT12b2lkIDAhPT1sP2woaCxmLGMsdGhpcyk6XCJhUG9zaXRpb25cIj09PWUubmFtZT9zW2ZdW3RbY11dOlwiYU5vcm1hbFwiPT09ZS5uYW1lP25bZl1bdFtjXV06aFtjXSx1Kz0xfXRoaXMuYXR0cmlidXRlc1t0aGlzLmF0dHJpYnV0ZUtleXMuaW5kZXhPZihlLm5hbWUpXS5kYXRhPWEsdGhpcy5wcmVwYXJlQnVmZmVyKHRoaXMuYXR0cmlidXRlc1t0aGlzLmF0dHJpYnV0ZUtleXMuaW5kZXhPZihlLm5hbWUpXSl9LGUucHJvdG90eXBlLnByZXBhcmVCdWZmZXI9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRhLGk9dC5uYW1lLHI9dC5zaXplLHM9dGhpcy5nbC5jcmVhdGVCdWZmZXIoKTt0aGlzLmdsLmJpbmRCdWZmZXIoMzQ5NjIscyksdGhpcy5nbC5idWZmZXJEYXRhKDM0OTYyLGUsMzUwNDQpO3ZhciBuPXRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLGkpO3RoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobiksdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKG4sciw1MTI2LCExLDAsMCksdGhpcy5idWZmZXJzW3RoaXMuYXR0cmlidXRlS2V5cy5pbmRleE9mKHQubmFtZSldPXtidWZmZXI6cyxsb2NhdGlvbjpuLHNpemU6cn19LGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9dGhpcy51bmlmb3JtcyxyPXRoaXMubXVsdGlwbGllcixzPXRoaXMuZ2w7cy51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7Zm9yKHZhciBuPTA7bjx0aGlzLmJ1ZmZlcnMubGVuZ3RoO24rPTEpe3ZhciBhPXRoaXMuYnVmZmVyc1tuXSxvPWEubG9jYXRpb24saD1hLmJ1ZmZlcix1PWEuc2l6ZTtzLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KG8pLHMuYmluZEJ1ZmZlcigzNDk2MixoKSxzLnZlcnRleEF0dHJpYlBvaW50ZXIobyx1LDUxMjYsITEsMCwwKX1PYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lbZV0udmFsdWU9dFtlXS52YWx1ZX0pLE9iamVjdC5rZXlzKGkpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIHI9aVt0XTtlLnVuaWZvcm1NYXBbci50eXBlXShyLmxvY2F0aW9uLHIudmFsdWUpfSkscy5kcmF3QXJyYXlzKHRoaXMubW9kZSwwLHIqdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGgpLHRoaXMub25SZW5kZXImJnRoaXMub25SZW5kZXIodGhpcyl9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuYnVmZmVycy5sZW5ndGg7dCs9MSl0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmJ1ZmZlcnNbdF0uYnVmZmVyKTt0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKSx0aGlzLmdsPW51bGx9O3ZhciBpPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT10fHx7fSxyPWkuY2FudmFzO3ZvaWQgMD09PXImJihyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO3ZhciBzPWkuY29udGV4dDt2b2lkIDA9PT1zJiYocz17fSk7dmFyIG49aS5jb250ZXh0VHlwZTt2b2lkIDA9PT1uJiYobj1cImV4cGVyaW1lbnRhbC13ZWJnbFwiKTt2YXIgYT1pLnNldHRpbmdzO3ZvaWQgMD09PWEmJihhPXt9KTt2YXIgbz1yLmdldENvbnRleHQobixPYmplY3QuYXNzaWduKHthbHBoYTohMSxhbnRpYWxpYXM6ITF9LHMpKTtPYmplY3QuYXNzaWduKHRoaXMse2dsOm8sY2FudmFzOnIsdW5pZm9ybXM6e30saW5zdGFuY2VzOm5ldyBNYXAsc2hvdWxkUmVuZGVyOiEwfSksT2JqZWN0LmFzc2lnbih0aGlzLHtkZXZpY2VQaXhlbFJhdGlvOjEsY2xlYXJDb2xvcjpbMSwxLDEsMV0scG9zaXRpb246e3g6MCx5OjAsejoyfSxjbGlwOlsuMDAxLDEwMF19KSxPYmplY3QuYXNzaWduKHRoaXMsYSksdGhpcy51bmlmb3JtTWFwPXtmbG9hdDpmdW5jdGlvbih0LGUpe3JldHVybiBvLnVuaWZvcm0xZih0LGUpfSx2ZWMyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybTJmdih0LGUpfSx2ZWMzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybTNmdih0LGUpfSx2ZWM0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybTRmdih0LGUpfSxtYXQyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybU1hdHJpeDJmdih0LCExLGUpfSxtYXQzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybU1hdHJpeDNmdih0LCExLGUpfSxtYXQ0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8udW5pZm9ybU1hdHJpeDRmdih0LCExLGUpfX0sby5lbmFibGUoby5ERVBUSF9URVNUKSxvLmRlcHRoRnVuYyhvLkxFUVVBTCksITE9PT1vLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYWxwaGEmJihvLmNsZWFyQ29sb3IuYXBwbHkobyx0aGlzLmNsZWFyQ29sb3IpLG8uY2xlYXJEZXB0aCgxKSksdGhpcy5vblNldHVwJiZ0aGlzLm9uU2V0dXAobyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixmdW5jdGlvbigpe3JldHVybiBlLnJlc2l6ZSgpfSksdGhpcy5yZXNpemUoKSx0aGlzLnJlbmRlcigpfTtpLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdsLGU9dGhpcy5jYW52YXMsaT10aGlzLmRldmljZVBpeGVsUmF0aW8scj10aGlzLnBvc2l0aW9uO2Uud2lkdGg9ZS5jbGllbnRXaWR0aCppLGUuaGVpZ2h0PWUuY2xpZW50SGVpZ2h0Kmk7dmFyIHM9dC5kcmF3aW5nQnVmZmVyV2lkdGgsbj10LmRyYXdpbmdCdWZmZXJIZWlnaHQsYT1zL247dC52aWV3cG9ydCgwLDAscyxuKTt2YXIgbz1NYXRoLnRhbihNYXRoLlBJLzE4MCoyMi41KSxoPVsxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCxyLngsci55LChhPDE/MTphKSotci56LDFdO3RoaXMudW5pZm9ybXMudVByb2plY3Rpb25NYXRyaXg9e3R5cGU6XCJtYXQ0XCIsdmFsdWU6Wy41L28sMCwwLDAsMCxhL28qLjUsMCwwLDAsMCwtKHRoaXMuY2xpcFsxXSt0aGlzLmNsaXBbMF0pLyh0aGlzLmNsaXBbMV0tdGhpcy5jbGlwWzBdKSwtMSwwLDAsLTIqdGhpcy5jbGlwWzFdKih0aGlzLmNsaXBbMF0vKHRoaXMuY2xpcFsxXS10aGlzLmNsaXBbMF0pKSwwXX0sdGhpcy51bmlmb3Jtcy51Vmlld01hdHJpeD17dHlwZTpcIm1hdDRcIix2YWx1ZTpbMSwwLDAsMCwwLDEsMCwwLDAsMCwxLDAsMCwwLDAsMV19LHRoaXMudW5pZm9ybXMudU1vZGVsTWF0cml4PXt0eXBlOlwibWF0NFwiLHZhbHVlOmh9fSxpLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24odCl7dCE9PXRoaXMuc2hvdWxkUmVuZGVyJiYodGhpcy5zaG91bGRSZW5kZXI9dm9pZCAwIT09dD90OiF0aGlzLnNob3VsZFJlbmRlcix0aGlzLnNob3VsZFJlbmRlciYmdGhpcy5yZW5kZXIoKSl9LGkucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5nbC5jbGVhcigxNjY0MCksdGhpcy5pbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihlKXtlLnJlbmRlcih0LnVuaWZvcm1zKX0pLHRoaXMub25SZW5kZXImJnRoaXMub25SZW5kZXIodGhpcyksdGhpcy5zaG91bGRSZW5kZXImJnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JldHVybiB0LnJlbmRlcigpfSl9LGkucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0LGkpe3ZvaWQgMD09PWkmJihpPXt1bmlmb3Jtczp7fX0pLHZvaWQgMD09PWkudW5pZm9ybXMmJihpLnVuaWZvcm1zPXt9KSxPYmplY3QuYXNzaWduKGkudW5pZm9ybXMsSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnVuaWZvcm1zKSkpLE9iamVjdC5hc3NpZ24oaSx7Z2w6dGhpcy5nbCx1bmlmb3JtTWFwOnRoaXMudW5pZm9ybU1hcH0pO3ZhciByPW5ldyBlKGkpO3JldHVybiB0aGlzLmluc3RhbmNlcy5zZXQodCxyKSxyfSxpLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5pbnN0YW5jZXMuZ2V0KHQpO3ZvaWQgMCE9PWUmJihlLmRlc3Ryb3koKSx0aGlzLmluc3RhbmNlcy5kZWxldGUodCkpfSxpLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uKGUsaSl7ZS5kZXN0cm95KCksdC5pbnN0YW5jZXMuZGVsZXRlKGkpfSksdGhpcy50b2dnbGUoITEpfTtleHBvcnQgZGVmYXVsdCBpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/phenomenon@1.6.0/node_modules/phenomenon/dist/phenomenon.mjs\n");

/***/ })

};
;