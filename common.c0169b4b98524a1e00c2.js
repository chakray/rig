(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{b0m7:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return s});var i=n("mrSG"),o=n("CcnG"),r=function(){return function(){this.hint="text",this.hintPass="passcode",this.check="check",this.resend="resend",this.enter="enter"}}(),s=function(t){function e(){var e=t.call(this)||this;return e._pattern="email",e.event=new o.m,e.passMode="password",e.id="",e.pass="",e.step=1,e}return Object(i.__extends)(e,t),Object.defineProperty(e.prototype,"hints",{set:function(t){var e=this,n=Object.keys(new r);t="object"==typeof t?t:{},n.forEach(function(n){n in t&&(e[n]=t[n])})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this._pattern},set:function(t){this._pattern="phone"===t?"tel":t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"src",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){var t=this;return["src","id","pass"].reduce(function(e,n){return e[n]=t[n],e},{})},enumerable:!0,configurable:!0}),e.prototype.keyDown=function(t,e){if(["doEnter","doCheck"].includes(e)){var n=t.key;"enter"===((void 0===n?"":n)+"").toLowerCase()&&this[e](t.target)}},e.prototype.back=function(){this.step=1},e.prototype.doCheck=function(t){var e=this;this.valid(t)&&this.emit("check",{id:this.id,ok:function(){e.step=2},tag:this})},e.prototype.doResend=function(){this.emit("resend",this.params)},e.prototype.doEnter=function(t){this.valid(t)&&this.emit("enter",this.params)},e.prototype.update=function(t,e){this[t]=e.target.value},e.prototype.valid=function(t){var e=t.checkValidity();return e||this.emit("error",{id:this.id,tag:this,msg:t.validationMessage}),e},e.prototype.emit=function(t,e){this.event.emit({action:t,data:e})},e}(r),c=function(){return function(t){void 0===t&&(t={}),this.read=!1,this.text="Please confirm before continue.",this.notAgree="please agree tos before continue",this.confirm="I agree",Object.assign(this,t)}}(),u=function(){function t(t){void 0===t&&(t={});var e=this;this._tos=new c,this._email={name:"Email",text:"your email"},this._phone={name:"Phone"},this._google={name:"google"},this._github={name:"Github"},this._proceed={text:"You will be proceed as:",confirm:"Not you?"},Object.keys(t).forEach(function(n){n in e&&(e[n]=t[n])})}return Object.defineProperty(t.prototype,"tos",{get:function(){return this._tos},set:function(t){this._tos=t?new c(t):t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"email",{get:function(){return this._email},set:function(t){Object.assign(this._email,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"phone",{get:function(){return this._phone},set:function(t){Object.assign(this._phone,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"google",{get:function(){return this._google},set:function(t){Object.assign(this._google,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"github",{get:function(){return this._github},set:function(t){Object.assign(this._github,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"proceed",{get:function(){return this._proceed},set:function(t){Object.assign(this._proceed,t)},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this._content=new u,this.event=new o.m,this._providers=[],this.error=""}return Object.defineProperty(t.prototype,"content",{get:function(){return this._content},set:function(t){this._content=new u(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"providers",{get:function(){return this._providers},set:function(t){var e=this;t=t.filter(function(t){return t in e.content}),this._providers=t,["phone","email"].includes(t[0])&&(this.use=t[0])},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"notAgree",{get:function(){var t=this.content.tos;return t&&!t.read},enumerable:!0,configurable:!0}),t.prototype.readTos=function(t){this.content.tos.read=t.target.checked},t.prototype.enter=function(t){var e="notAgree";if(this[e])return this.error=this.content.tos[e],void this.emit(e);this.use=t,this.emit("enter",{use:t,tag:this})},t.prototype.wrongId=function(){this.reset(null),this.lastLocker&&this.lastLocker.back()},t.prototype.lockerEvt=function(t,e){var n=e.action,o=e.data;"check"===n&&this.reset(o.id),"error"===n&&(this.error=o.msg),"enter"===n&&this.enter(t),o.tag&&(this.lastLocker=o.tag),this.emit("locker."+n,Object(i.__assign)({key:t},o))},t.prototype.reset=function(t){this.id=t,this.error=""},t.prototype.emit=function(t,e){console.log(t,e),this.event.emit({action:t,data:e})},t}(),h=function(){return function(){}}()}}]);