import{d as e,l as o,o as s}from"./chunk-M6Z6SCRI.js";var r=function(t){return t[t.SUCCESS=0]="SUCCESS",t[t.INFO=1]="INFO",t[t.WARNING=2]="WARNING",t[t.ERROR=3]="ERROR",t}(r||{});var R=(()=>{class t{constructor(){this.notification$=new e}ngOnDestroy(){let n=new e;this.notification$.pipe(o(n)).subscribe(()=>{})}add(n,i,a){this.notification$.next({type:n,message:i,action:a})}addSuccess(n,i){this.notification$.next({type:r.SUCCESS,message:n,action:i})}addInfo(n,i){this.notification$.next({type:r.INFO,message:n,action:i})}addWarning(n,i){this.notification$.next({type:r.WARNING,message:n,action:i})}addError(n,i){this.notification$.next({type:r.ERROR,message:n,action:i})}observable(){return this.notification$.asObservable()}clear(){this.notification$.next(null)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{r as a,R as b};