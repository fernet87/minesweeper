import{a as ke}from"./chunk-W6BZJ6OV.js";import{b as xe}from"./chunk-HOKI6FGS.js";import{a as Pe,b as d}from"./chunk-6MIOUXA2.js";import{A as T,B as M,C as p,D as ue,E as y,F as l,H as Ve,I as m,J as De,M as Me,N as Ae,O as C,P as g,Q as q,S as _,U as Fe,V as Ee,W as b,X as we,Y as de,Z as E,_ as z,a as h,aa as Z,b as v,ba as Y,ca as X,d as ve,da as R,e as ye,ea as Se,fa as Ie,g as Ce,ga as K,ha as A,i as be,ia as ce,n as P,p as le,pa as Ne,q as F,s as W,ta as Oe,v as f,w as $,x as k,y as u,z as a}from"./chunk-M6Z6SCRI.js";var We=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(a(T),a(k))};static \u0275dir=y({type:n})}return n})(),ge=(()=>{class n extends We{static \u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})();static \u0275dir=y({type:n,features:[l]})}return n})(),ne=new F("");var ct={provide:ne,useExisting:P(()=>ie),multi:!0};function ht(){let n=ce()?ce().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ft=new F(""),ie=(()=>{class n extends We{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ht())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(a(T),a(k),a(ft,8))};static \u0275dir=y({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&_("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[R([ct]),l]})}return n})();var pt=new F(""),mt=new F("");function $e(n){return n!=null}function qe(n){return Ve(n)?ye(n):n}function ze(n){let t={};return n.forEach(e=>{t=e!=null?h(h({},t),e):t}),Object.keys(t).length===0?null:t}function Ze(n,t){return t.map(e=>e(n))}function gt(n){return!n.validate}function Ye(n){return n.map(t=>gt(t)?t:e=>t.validate(e))}function _t(n){if(!n)return null;let t=n.filter($e);return t.length==0?null:function(e){return ze(Ze(e,t))}}function Xe(n){return n!=null?_t(Ye(n)):null}function vt(n){if(!n)return null;let t=n.filter($e);return t.length==0?null:function(e){let i=Ze(e,t).map(qe);return be(i).pipe(Ce(ze))}}function Ke(n){return n!=null?vt(Ye(n)):null}function Te(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function yt(n){return n._rawValidators}function Ct(n){return n._rawAsyncValidators}function he(n){return n?Array.isArray(n)?n:[n]:[]}function J(n,t){return Array.isArray(n)?n.includes(t):n===t}function Re(n,t){let e=he(t);return he(n).forEach(r=>{J(e,r)||e.push(r)}),e}function Ge(n,t){return he(t).filter(e=>!J(n,e))}var ee=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Xe(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Ke(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},fe=class extends ee{name;get formDirective(){return null}get path(){return null}},H=class extends ee{_parent=null;name=null;valueAccessor=null},pe=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},bt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pn=v(h({},bt),{"[class.ng-submitted]":"isSubmitted"}),re=(()=>{class n extends pe{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(a(H,2))};static \u0275dir=y({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&De("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[l]})}return n})();var G="VALID",Q="INVALID",w="PENDING",B="DISABLED",I=class{},te=class extends I{value;source;constructor(t,e){super(),this.value=t,this.source=e}},j=class extends I{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},U=class extends I{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},S=class extends I{status;source;constructor(t,e){super(),this.status=t,this.source=e}};function Vt(n){return(oe(n)?n.validators:n)||null}function Dt(n){return Array.isArray(n)?Xe(n):n||null}function Mt(n,t){return(oe(t)?t.asyncValidators:n)||null}function At(n){return Array.isArray(n)?Ke(n):n||null}function oe(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var me=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return A(this.statusReactive)}set status(t){A(()=>this.statusReactive.set(t))}_status=K(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===G}get invalid(){return this.status===Q}get pending(){return this.status==w}get disabled(){return this.status===B}get enabled(){return this.status!==B}errors;get pristine(){return A(this.pristineReactive)}set pristine(t){A(()=>this.pristineReactive.set(t))}_pristine=K(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return A(this.touchedReactive)}set touched(t){A(()=>this.touchedReactive.set(t))}_touched=K(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new ve;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Re(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Re(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ge(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}hasValidator(t){return J(this._rawValidators,t)}hasAsyncValidator(t){return J(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(v(h({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new U(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new U(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(v(h({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new j(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new j(!0,i))}markAsPending(t={}){this.status=w;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new S(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(v(h({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=B,this.errors=null,this._forEachChild(r=>{r.disable(v(h({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new te(this.value,i)),this._events.next(new S(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(h({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=G,this._forEachChild(i=>{i.enable(v(h({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(v(h({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===G||this.status===w)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new te(this.value,e)),this._events.next(new S(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(v(h({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=qe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new S(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?Q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(Q)?Q:G}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new j(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new U(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){oe(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Dt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=At(this._rawAsyncValidators)}};var Qe=new F("CallSetDisabledState",{providedIn:"root",factory:()=>_e}),_e="always";function Ft(n,t){return[...t.path,n]}function Et(n,t,e=_e){St(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),It(n,t),Ot(n,t),Nt(n,t),wt(n,t)}function Be(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function wt(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function St(n,t){let e=yt(n);t.validator!==null?n.setValidators(Te(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=Ct(n);t.asyncValidator!==null?n.setAsyncValidators(Te(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Be(t._rawValidators,r),Be(t._rawAsyncValidators,r)}function It(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Je(n,t)})}function Nt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Je(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ot(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function xt(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Pt(n){return Object.getPrototypeOf(n.constructor)===ge}function kt(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===ie?e=o:Pt(o)?i=o:r=o}),r||i||e||null}function je(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ue(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Tt=class extends me{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(Vt(e),Mt(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oe(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ue(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){je(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){je(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Rt={provide:H,useExisting:P(()=>L)},He=Promise.resolve(),L=(()=>{class n extends H{_changeDetectorRef;callSetDisabledState;control=new Tt;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new $;constructor(e,i,r,o,s,c){super(),this._changeDetectorRef=s,this.callSetDisabledState=c,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=kt(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),xt(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Et(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){He.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Ie(i);He.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ft(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(a(fe,9),a(pt,10),a(mt,10),a(ne,10),a(Se,8),a(Qe,8))};static \u0275dir=y({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[R([Rt]),l,W]})}return n})();var Gt={provide:ne,useExisting:P(()=>se),multi:!0};function et(n,t){return n==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function Bt(n){return n.split(":")[0]}var se=(()=>{class n extends ge{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i=this._getOptionId(e),r=et(i,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=Bt(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})();static \u0275dir=y({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&_("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[R([Gt]),l]})}return n})(),tt=(()=>{class n{_element;_renderer;_select;id;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(et(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(a(k),a(T),a(se,9))};static \u0275dir=y({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})(),jt={provide:ne,useExisting:P(()=>nt),multi:!0};function Le(n,t){return n==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function Ut(n){return n.split(":")[0]}var nt=(()=>{class n extends ge{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));i=(o,s)=>{o._setSelected(r.indexOf(s.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let s=o;for(let c=0;c<s.length;c++){let D=s[c],x=this._getOptionValue(D.value);r.push(x)}}else{let s=i.options;for(let c=0;c<s.length;c++){let D=s[c];if(D.selected){let x=this._getOptionValue(D.value);r.push(x)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=Ut(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})();static \u0275dir=y({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&_("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[R([jt]),l]})}return n})(),it=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Le(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Le(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(a(k),a(T),a(nt,9))};static \u0275dir=y({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})();var Ht=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ue({type:n});static \u0275inj=le({})}return n})();var O=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Qe,useValue:e.callSetDisabledState??_e}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=ue({type:n});static \u0275inj=le({imports:[Ht]})}return n})();var V=(()=>{class n{constructor(){this.label="",this.attr="",this.enabled=!0,this.visualModel=""}updateModel(){this.model[this.attr]=this.visualModel}updateVisualModel(){this.model&&(this.visualModel=this.model[this.attr])}onInputChange(){this.updateModel()}ngOnInit(){}ngAfterViewInit(){}ngOnChanges(e){e.model&&this.updateVisualModel()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=p({type:n,selectors:[["base-field"]],inputs:{label:"label",model:"model",attr:"attr",enabled:"enabled"},features:[W],decls:0,vars:0,template:function(i,r){},encapsulation:2})}}return n})();var Lt=["*"],ae=(()=>{class n extends V{constructor(){super(...arguments),this.for=""}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["field"]],inputs:{for:"for"},features:[l],ngContentSelectors:Lt,decls:4,vars:2,consts:[[1,"field-container"],[1,"field-container__label",3,"for"]],template:function(i,r){i&1&&(Fe(),C(0,"div",0)(1,"label",1),E(2),g(),Ee(3),g()),i&2&&(u(),b("for",r.for),u(),z(r.label))},styles:["[_nghost-%COMP%]{--border-radius: .5rem;--control-border: .5px solid rgb(180, 180, 180);--control-border-focus: .5px solid rgb(146, 146, 250);--control-border-radius: var(--border-radius);--control-margin: 0 1rem 1rem 1rem;--control-padding: .5rem}.field-container[_ngcontent-%COMP%]{margin:var(--control-margin);padding:var(--control-padding);border:var(--control-border);border-radius:var(--control-border-radius);display:flex;flex-direction:column}.field-container__label[_ngcontent-%COMP%]{font-size:.8rem;margin:.2rem}"]})}}return n})();var ot=(()=>{class n extends V{constructor(){super(...arguments),this.type=""}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["input-field"]],inputs:{type:"type"},features:[l],decls:2,vars:14,consts:[[3,"for","label"],["autocomplete","off","placeholder","",1,"form-control","input-field",3,"ngModelChange","change","keyup.enter","id","type","ngModel","title","name","disabled"]],template:function(i,r){i&1&&(C(0,"field",0)(1,"input",1),X("ngModelChange",function(s){return Y(r.visualModel,s)||(r.visualModel=s),s}),_("change",function(){return r.onInputChange()})("keyup.enter",function(){return r.onInputChange()}),g()()),i&2&&(de("for","input_",r.type,"_",r.attr,""),b("label",r.label),u(),we("id","input-",r.attr,""),b("type",r.type),de("name","input_",r.type,"_",r.attr,""),b("title",r.attr),Z("ngModel",r.visualModel),m("title",r.label)("disabled",!r.enabled))},dependencies:[O,ie,re,L,ae],styles:["[_nghost-%COMP%]{--border-radius: .5rem;--control-border: .5px solid rgb(180, 180, 180);--control-border-focus: .5px solid rgb(146, 146, 250);--control-border-radius: var(--border-radius);--control-margin: 0 1rem 1rem 1rem;--control-padding: .5rem}.input-field[_ngcontent-%COMP%]{padding:var(--control-padding);border:none;border-radius:var(--control-border-radius)}.input-field[_ngcontent-%COMP%]:focus{border:var(--control-border-focus)}"]})}}return n})();var st=(()=>{class n extends V{constructor(){super(...arguments),this.type="number"}updateModel(){this.model[this.attr]=Number.parseInt(this.visualModel)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["numeric-field"]],inputs:{type:"type"},features:[l],decls:1,vars:5,consts:[[3,"type","model","attr","label","enabled"]],template:function(i,r){i&1&&q(0,"input-field",0),i&2&&m("type",r.type)("model",r.model)("attr",r.attr)("label",r.label)("enabled",r.enabled)},dependencies:[O,ot],encapsulation:2})}}return n})();var Wt=(n,t)=>t.label+"_"+t.value;function $t(n,t){if(n&1&&(C(0,"option",2),E(1),g()),n&2){let e=t.$implicit;m("value",e.value),u(),z(e.label)}}var at=(()=>{class n extends V{constructor(){super(...arguments),this.options=[]}updateModel(){this.model[this.attr]=Number.parseInt(this.visualModel)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(n)))(r||n)}})()}static{this.\u0275cmp=p({type:n,selectors:[["select-field"]],inputs:{options:"options"},features:[l],decls:4,vars:2,consts:[["for","select_",3,"label"],["autocomplete","off","placeholder","","title","asd","name","select_",1,"form-control","select-field",3,"ngModelChange","change","keyup.enter","ngModel"],[3,"value"]],template:function(i,r){i&1&&(C(0,"field",0)(1,"select",1),X("ngModelChange",function(s){return Y(r.visualModel,s)||(r.visualModel=s),s}),_("change",function(){return r.onInputChange()})("keyup.enter",function(){return r.onInputChange()}),Me(2,$t,2,2,"option",2,Wt),g()()),i&2&&(b("label",r.label),u(),Z("ngModel",r.visualModel),u(),Ae(r.options))},dependencies:[O,tt,it,se,re,L,ae],styles:['[_nghost-%COMP%]{--border-radius: .5rem;--control-border: .5px solid rgb(180, 180, 180);--control-border-focus: .5px solid rgb(146, 146, 250);--control-border-radius: var(--border-radius);--control-margin: 0 1rem 1rem 1rem;--control-padding: .5rem}.select-field[_ngcontent-%COMP%]{padding:var(--control-padding);border:none;border-radius:var(--control-border-radius);-webkit-appearance:none!important;-moz-appearance:none!important;background-color:#fff;background-image:url("./media/down-arrow-LS2ZVNHP.png");background-position:100%;background-repeat:no-repeat}.select-field[_ngcontent-%COMP%]:focus{border:var(--control-border-focus)}']})}}return n})();var Ln=(()=>{class n{constructor(e,i,r){this.router=e,this.configService=i,this.notificationService=r,this.difficultyLevels=[{label:d[d.CUSTOM],value:d.CUSTOM.toString()},{label:d[d.EASY],value:d.EASY.toString()},{label:d[d.MEDIUM],value:d.MEDIUM.toString()},{label:d[d.HARD],value:d.HARD.toString()}],this.config=M(void 0),this.customDifficultyEnabled=M(!1),this.config.set(void 0)}ngOnInit(){this.configService.restoreConfig(),this.config.set(this.configService.getConfig()),this.customDifficultyEnabled.set(this.isCustomDifficultyLevel())}validateFields(){let e=(x,lt,ut,dt)=>`${x} number of ${lt} exceeded. Please set a number ${ut} than or equal to ${dt}.`;if(!this.config())return!1;let i=this.config(),r=2;if(i.getBombs()<r)return this.notificationService.addError(e("Minimum","bombs","greater",r)),!1;if(!this.configService.validateBombsQuantity())return this.notificationService.addError(e("Maximum","bombs","lower",this.configService.getMaxQuantityOfBombs())),!1;let o=4;if(i.getColumns()<o)return this.notificationService.addError(e("Minimum","columns","greater",o)),!1;let s=50;if(i.getColumns()>s)return this.notificationService.addError(e("Maximum","columns","lower",s)),!1;let c=4;if(i.getRows()<c)return this.notificationService.addError(e("Minimum","rows","greater",c)),!1;let D=25;return i.getRows()>D?(this.notificationService.addError(e("Maximum","rows","lower",D)),!1):!0}onGoToBoardClick(){this.validateFields()&&(this.configService.storeConfig(),this.navigateToBoard())}navigateToBoard(){this.router.navigateByUrl("/board")}onDifficultyLevelChange(){this.configService.doConfig(),this.config.set(this.configService.getConfig()),this.customDifficultyEnabled.set(this.isCustomDifficultyLevel())}isCustomDifficultyLevel(){return(this.config()&&this.config().getDifficultyLevel())===d.CUSTOM}static{this.\u0275fac=function(i){return new(i||n)(a(Ne),a(ke),a(xe))}}static{this.\u0275cmp=p({type:n,selectors:[["app-setup"]],decls:8,vars:8,consts:[[1,"panel"],["title","Setup"],["attr","difficultyLevel","label","Difficulty Level",3,"change","model","options"],["attr","columns","label","Columns",3,"model","enabled"],["attr","rows","label","Rows",3,"model","enabled"],["attr","bombs","label","Bombs",3,"model","enabled"],[1,"panel__to-board-button",3,"click"]],template:function(i,r){i&1&&(C(0,"div",0)(1,"panel",1)(2,"select-field",2),_("change",function(){return r.onDifficultyLevelChange()}),g(),q(3,"numeric-field",3)(4,"numeric-field",4)(5,"numeric-field",5),C(6,"custom-button",6),_("click",function(){return r.onGoToBoardClick()}),E(7," Go to Board "),g()()()),i&2&&(u(2),m("model",r.config())("options",r.difficultyLevels),u(),m("model",r.config())("enabled",r.customDifficultyEnabled()),u(),m("model",r.config())("enabled",r.customDifficultyEnabled()),u(),m("model",r.config())("enabled",r.customDifficultyEnabled()))},dependencies:[Pe,at,st,Oe],styles:[".panel[_ngcontent-%COMP%]{max-width:20rem}.panel__to-board-button[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})}}return n})();export{Ln as SetupComponent};
