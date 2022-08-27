import pagingBehavior from"./paging";import statusBehavior from"./status";Component({behaviors:[pagingBehavior,statusBehavior],options:{multipleSlots:!0},properties:{height:{type:Number,value:0},autoCloseFresh:{type:Boolean,value:!0}},data:{pullStatus:!1,scrollHeight:0},lifetimes:{attached(){},ready(){this.data.height?this.setData({scrollHeight:this.properties.height}):this.getScrollHeight()},detached(){}},methods:{async handlePull(t){this.triggerEvent("onScroll",t)},handleRefresh(t){this.setData({pullStatus:!0},(async()=>{this.triggerEvent("onPullDown",""),this.data.autoCloseFresh&&this.data.pullStatus&&setTimeout((()=>{this.stopPullDownRefresh()}),5e3)}))},scrollTop(){this.setData({scrollTop:0})},stopPullDownRefresh(){this.setData({pullStatus:!1})},handleAbort(t){this.setData({pullStatus:!1})},handleScrollBottom(t){!this._loading&&this.hasNextPage&&(this.pageNum+=1,this.triggerEvent("onPullUp",""))},async getScrollHeight(){const t=await this.SelectorQuery(this,["._scroll-view"]);this.setData({scrollHeight:t.screenHeight-t._scrollview.top})},SelectorQuery:(t,e,s)=>new Promise(((l,a)=>{try{const a=t.createSelectorQuery(),i=[];e&&e.map((t=>{i.push(t.replace(/\#|\.|\-/g,"")),a.select(t).boundingClientRect()})),s&&s.map((t=>{i.push(t.replace(/\#|\.|\-/g,"")),a.selectAll(t).boundingClientRect()})),a.exec((t=>{const e={screenHeight:wx.getSystemInfoSync().screenHeight};i.map(((s,l)=>{e[s]=t[l]?t[l]:{}})),l(e)}))}catch(t){a(t)}}))}});