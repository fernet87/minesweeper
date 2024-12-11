import{a as E}from"./chunk-W6BZJ6OV.js";import{b as q}from"./chunk-HOKI6FGS.js";import{a as N,b as L,c as F}from"./chunk-A7TAVQJ3.js";import{a as J}from"./chunk-6MIOUXA2.js";import{$ as O,B as P,C as _,G as B,I as y,J as G,K as w,L as U,M as D,N as I,O as c,P as p,Q as f,R as z,S as C,T,Z as b,c as H,ea as K,k as W,la as V,pa as Z,t as X,ta as $,u as Y,ua as A,w as Q,y as g,z as h}from"./chunk-M6Z6SCRI.js";var k=class{constructor(){this.id=0,this.type=m.EMPTY,this.discovered=!1,this.flag=!1,this.number=0}getId(){return this.id}setId(n){this.id=n}getType(){return this.type}setType(n){this.type=n}isDiscovered(){return this.discovered}setDiscovered(n){this.discovered=n}getNumber(){return this.number}setNumber(n){this.number=n}setFlag(n){this.flag=n}isFlag(){return this.flag}isType(n){return this.getType()===n}isTypeEmpty(){return this.isType(m.EMPTY)}isTypeNumber(){return this.isType(m.NUMBER)}isTypeBomb(){return this.isType(m.BOMB)}isTypeExplosion(){return this.isType(m.EXPLOSION)}isNumber(n){return this.getNumber()===n}},m=function(r){return r[r.EMPTY=0]="EMPTY",r[r.NUMBER=1]="NUMBER",r[r.BOMB=2]="BOMB",r[r.EXPLOSION=4]="EXPLOSION",r}(m||{});function re(r,n){r&1&&f(0,"img",5)}function ne(r,n){r&1&&f(0,"img",6)}var te=(()=>{class r{constructor(i,t,e){this.configService=i,this.boardService=t,this.cdr=e,this.timerIntervalSubscription=H.EMPTY,this.elapsedTime=P(0),this.flagsCounter=P(0),this.gameOver=P(!1)}ngOnInit(){this.resetFlagCounter(),this.boardService.getStartNewGameObservable().subscribe(()=>{this.startGame()}),this.boardService.getStartTimerObservable().subscribe(()=>{this.startTimer()}),this.boardService.getGameOverObservable().subscribe(i=>{this.gameOver.set(i),this.stopTimer()}),this.boardService.getUpdateFlagCounterObservable().subscribe(i=>{this.flagsCounter.set(this.configService.getConfig().getBombs()-i)})}ngOnDestroy(){this.stopTimer()}startTimer(){this.timerIntervalSubscription=W(1e3).subscribe(()=>{this.elapsedTime.set(this.elapsedTime()+1),this.cdr.detectChanges()})}stopTimer(){this.timerIntervalSubscription.unsubscribe()}startGame(){this.gameOver.set(!1),this.elapsedTime.set(0),this.resetFlagCounter()}restartGame(){this.boardService.resetGame(),this.startGame(),this.stopTimer()}resetFlagCounter(){this.flagsCounter.set(this.configService.getConfig().getBombs())}static{this.\u0275fac=function(t){return new(t||r)(h(E),h(F),h(K))}}static{this.\u0275cmp=_({type:r,selectors:[["board-header"]],decls:12,vars:3,consts:[[1,"board-header"],[1,"board-header-display-container"],[1,"board-header-display-container__icon","icon-bomb"],["id","flag-counter",1,"board-header-display-container__label"],[1,"board-header__button",3,"click"],["src","assets/icons/face_unpressed.svg","title","Restart Game",1,"board-header__face"],["src","assets/icons/face_loose.svg","title","Restart Game",1,"board-header__face"],[1,"board-header-display-container__icon","icon-clock"],["id","timer",1,"board-header-display-container__label"]],template:function(t,e){t&1&&(c(0,"div",0)(1,"div",1),f(2,"i",2),c(3,"span",3),b(4),p()(),c(5,"custom-button",4),C("click",function(){return e.restartGame()}),B(6,re,1,0,"img",5)(7,ne,1,0,"img",6),p(),c(8,"div",1),f(9,"i",7),c(10,"span",8),b(11),p()()()),t&2&&(g(4),O(" ",e.flagsCounter(),""),g(2),w(e.gameOver()?7:6),g(5),O(" ",e.elapsedTime(),""))},dependencies:[$],styles:['[_nghost-%COMP%]{--border-radius: .5rem;--control-border: .5px solid rgb(180, 180, 180);--control-border-focus: .5px solid rgb(146, 146, 250);--control-border-radius: var(--border-radius);--control-margin: 0 1rem 1rem 1rem;--control-padding: .5rem}.board-header[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;margin-bottom:1rem}.board-header[_ngcontent-%COMP%]   .board-header-display-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.5rem;background-color:#fff;border-radius:var(--border-radius)}.board-header[_ngcontent-%COMP%]   .board-header-display-container__icon[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:1.5rem;width:1.5rem;display:block}.board-header[_ngcontent-%COMP%]   .board-header-display-container__icon.icon-bomb[_ngcontent-%COMP%]{background-image:url("./media/bomb-LZOP5SQX.png")}.board-header[_ngcontent-%COMP%]   .board-header-display-container__icon.icon-clock[_ngcontent-%COMP%]{background-image:url("./media/clock-6HG5APAF.svg")}.board-header[_ngcontent-%COMP%]   .board-header-display-container__label[_ngcontent-%COMP%]{margin-left:1rem;font-size:1.2rem}.board-header[_ngcontent-%COMP%]     .custom-button{border:none;margin-bottom:0}.board-header[_ngcontent-%COMP%]     .custom-button .board-header__face{background-repeat:no-repeat;background-size:cover;height:3rem;width:3rem}']})}}return r})();function oe(r,n){if(r&1&&(c(0,"span",2),b(1),p()),r&2){let i=T();G("one",i.tile.isNumber(1))("two",i.tile.isNumber(2))("three",i.tile.isNumber(3))("four",i.tile.isNumber(4))("five",i.tile.isNumber(5))("six",i.tile.isNumber(6)),g(),O(" ",i.tile.getNumber()," ")}}var ie=(()=>{class r{constructor(){this.TileTypes=m,this.tile=void 0,this.change=new Q,this.gameOver=!1}updateType(){this.gameOver||this.tile&&(this.tile.isDiscovered()||this.tile.isFlag()||(this.tile.isTypeBomb()&&(this.tile.setType(this.TileTypes.EXPLOSION),this.tile.setDiscovered(!0)),(this.tile.isTypeBomb()||this.tile.isTypeEmpty()||this.tile.isTypeNumber())&&this.tile.setDiscovered(!0)))}onClick(){this.tile&&(this.updateType(),this.change.next(this.tile))}onContextMenuClick(i){i.preventDefault(),!this.gameOver&&this.tile&&(this.tile.isDiscovered()||(this.tile.setFlag(!this.tile.isFlag()),this.change.next(this.tile)))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=_({type:r,selectors:[["tile"]],inputs:{tile:"tile",gameOver:"gameOver"},outputs:{change:"change"},decls:2,vars:10,consts:[[1,"tile",3,"click","contextmenu","id"],[1,"tile__number",3,"one","two","three","four","five","six"],[1,"tile__number"]],template:function(t,e){t&1&&(c(0,"span",0),C("click",function(){return e.onClick()})("contextmenu",function(d){return e.onContextMenuClick(d)}),B(1,oe,2,13,"span",1),p()),t&2&&(G("filled",!(e.tile!=null&&e.tile.isDiscovered())&&((e.tile==null?null:e.tile.isTypeEmpty())||(e.tile==null?null:e.tile.isTypeNumber())||(e.tile==null?null:e.tile.isTypeBomb())))("bomb",(e.tile==null?null:e.tile.isDiscovered())&&(e.tile==null?null:e.tile.isTypeBomb()))("explosion",(e.tile==null?null:e.tile.isDiscovered())&&(e.tile==null?null:e.tile.isTypeExplosion()))("flag",!(e.tile!=null&&e.tile.isDiscovered())&&(e.tile==null?null:e.tile.isFlag())),y("id","tile-"+(e.tile==null?null:e.tile.getId())),g(),w(e.tile&&e.tile.getNumber()>0&&e.tile.isDiscovered()?1:-1))},dependencies:[V],styles:['.tile[_ngcontent-%COMP%]{cursor:pointer;display:flex;justify-content:center;align-items:center;background-repeat:no-repeat;background-size:cover;height:2rem;width:2rem}.tile.filled[_ngcontent-%COMP%]{background-image:url("./media/filled-tile-RZHQON4O.svg")}.tile.flag[_ngcontent-%COMP%]{background-image:url("./media/flag-HK7GP6BV.svg")}.tile.bomb[_ngcontent-%COMP%]{background-image:url("./media/bomb-LZOP5SQX.png")}.tile.explosion[_ngcontent-%COMP%]{background-image:url("./media/explosion-LTKB4LYQ.png")}.tile__number[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:bolder}.tile__number.one[_ngcontent-%COMP%]{color:#00f}.tile__number.two[_ngcontent-%COMP%]{color:#007800}.tile__number.three[_ngcontent-%COMP%]{color:red}.tile__number.four[_ngcontent-%COMP%]{color:#00007f}.tile__number.five[_ngcontent-%COMP%]{color:#7b0000}.tile__number.six[_ngcontent-%COMP%]{color:#a2ad00}']})}}return r})();var se=(r,n)=>n.getId();function ae(r,n){if(r&1){let i=z();c(0,"td",3)(1,"tile",4),C("change",function(e){X(i);let o=T(2);return Y(o.onTileChange(e))}),p()()}if(r&2){let i=n.$implicit,t=T(2);g(),y("tile",i)("gameOver",t.gameOver)}}function le(r,n){if(r&1&&(c(0,"tr",2),D(1,ae,2,2,"td",3,se),p()),r&2){let i=n.$implicit;g(),I(i)}}function ce(r,n){r&1&&b(0," There were no items in the list. ")}var Le=(()=>{class r{constructor(i,t,e,o){this.router=i,this.configService=t,this.boardService=e,this.notificationService=o,this.ActionHelper=N,this.grid=[],this.gameOver=!1,this.gameStart=null,this.config=this.configService.getConfig()}ngOnInit(){this.configService.restoreConfig(),this.config=this.configService.getConfig(),this.newGame(),this.boardService.getResetGameObservable().subscribe(()=>{this.newGame()})}navigateToFinishedGameList(){this.router.navigateByUrl("/finished-games-list")}newGame(){this.notificationService.clear(),this.initGrid(),this.updateGridWithRandomBombs(),this.updateGridWithNumbers(),this.gameOver=!1,this.gameStart=null,this.boardService.startNewGame()}initGrid(){let i=0;for(let t=0;t<this.config.getRows();t++){this.grid[t]=[];for(let e=0;e<this.config.getColumns();e++){let o=new k;o.setId(++i),this.grid[t][e]=o}}}updateGridWithRandomBombs(){let i=0;for(;i<this.config.getBombs();){let t=Math.floor(Math.random()*this.config.getRows()),e=Math.floor(Math.random()*this.config.getColumns());this.grid[t][e].isTypeBomb()||(this.grid[t][e].setType(m.BOMB),i++)}}updateGridWithNumbers(){let i=(t,e)=>{let o=this.grid[t];if(o){let d=o[e];d&&!d.isTypeBomb()&&(d.setNumber(d.getNumber()+1),d.setType(m.NUMBER))}};for(let t=0;t<this.config.getRows();t++)for(let e=0;e<this.config.getColumns();e++)this.grid[t][e].isTypeBomb()&&(i(t-1,e-1),i(t,e-1),i(t+1,e-1),i(t-1,e),i(t+1,e),i(t-1,e+1),i(t,e+1),i(t+1,e+1))}updateFlagCounter(){let i=this.grid.flat().filter(t=>t.isFlag()).length;this.boardService.updateFlagCounter(i)}onTileChange(i){let t=i.getType();if(t===m.EXPLOSION&&!this.gameOver?(this.boardService.registerFinishedGameItem(this.gameStart,new Date,this.config.getDifficultyLevel(),L.LOOSE),this.boardService.gameOver(!0),this.gameOver=!0,this.notificationService.addError("Game Over!",N.buildFuctionAction({id:"try-again",label:"Try Again.",fn:()=>{this.newGame()},type:A.LINK})),this.grid.flat().forEach(e=>{!e.isDiscovered()&&e.isTypeBomb()&&e.setDiscovered(!0)})):t===m.EMPTY&&!i.isFlag()&&this.updateAdjacentTilesShowFlagWhenAEmptyTileWasClicked(i),!this.gameOver){let e=this.grid.flat().filter(o=>o.isDiscovered()&&!o.isTypeBomb()).length;e>0&&!this.gameStart&&(this.gameStart=new Date,this.boardService.startTimer()),e===this.config.getCells()-this.config.getBombs()&&(this.boardService.registerFinishedGameItem(this.gameStart,new Date,this.config.getDifficultyLevel(),L.WIN),this.boardService.gameOver(!1),this.notificationService.addSuccess("Game Won!",N.buildFinishedGameListAction({label:"Check your results.",type:A.LINK}))),this.updateFlagCounter()}}findRowAndColumn(i){let t=-1,e=-1;return this.grid.findIndex((o,d)=>{let u=o.findIndex(S=>S===i);return u!==-1?(t=d,e=u,!0):!1}),t!==-1&&e!==-1?{row:t,column:e}:{row:-1,column:-1}}updateAdjacentTilesShowFlagWhenAEmptyTileWasClicked(i){let t=this.findRowAndColumn(i),e=t?.row,o=t?.column,d=[],u=(l,s)=>l>-1&&s>-1&&l<this.config.getRows()&&s<this.config.getColumns()&&!d.some(a=>a.column===s&&a.row===l)?{row:l,column:s}:null,S=(l,s)=>{let a=[];return a.push(u(l-1,s-1)),a.push(u(l,s-1)),a.push(u(l+1,s-1)),a.push(u(l-1,s)),a.push(u(l+1,s)),a.push(u(l-1,s+1)),a.push(u(l,s+1)),a.push(u(l+1,s+1)),a.filter(M=>M!==null)},j=l=>{l.forEach(s=>{let a=s.row,M=s.column;if(this.grid[a]){let v=this.grid[a][M];if(v&&((v.isTypeEmpty()||v.isTypeNumber()&&!v.isFlag())&&v.setDiscovered(!0),v.isTypeEmpty())){let x=S(a,M);d.push(...x),j(x)}}})},R=S(e,o);d.push(...R),j(R)}static{this.\u0275fac=function(t){return new(t||r)(h(Z),h(E),h(F),h(q))}}static{this.\u0275cmp=_({type:r,selectors:[["app-board"]],decls:7,vars:2,consts:[["title","Board",1,"board",3,"actions"],[1,"board__grid"],[1,"row"],[1,"col"],[3,"change","tile","gameOver"]],template:function(t,e){t&1&&(c(0,"panel",0),f(1,"board-header"),c(2,"div",1)(3,"table"),D(4,le,3,0,"tr",2,U,!1,ce,1,0),p()()()),t&2&&(y("actions",e.ActionHelper.buildBoardActions()),g(4),I(e.grid))},dependencies:[J,te,ie],styles:["[_nghost-%COMP%]{--border-radius: .5rem;--control-border: .5px solid rgb(180, 180, 180);--control-border-focus: .5px solid rgb(146, 146, 250);--control-border-radius: var(--border-radius);--control-margin: 0 1rem 1rem 1rem;--control-padding: .5rem}.board__grid[_ngcontent-%COMP%]{display:flex;justify-content:center}.board[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%], .board[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{border:1px solid #808080}"]})}}return r})();export{Le as BoardComponent};