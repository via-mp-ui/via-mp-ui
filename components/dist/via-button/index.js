Component({externalClasses:["class-button","class-button-disabled"],properties:{text:{type:String,value:""},loading:{type:Boolean,value:!1},loadingText:{type:String,value:""},disabled:{type:Boolean,value:!1},touchOpacity:{type:Number,value:.6},textSize:{type:Number,value:32},textColor:{type:String,value:""},width:{type:Number,value:0},height:{type:Number,value:88},radius:{type:Number,value:44},btnColor:{type:String,value:"#0a1d66"},styleName:{type:String,value:""},iconName:{type:String,value:""},iconSize:{type:Number,value:28},iconColor:{type:String,value:"#fff"},iconSrc:{type:String,value:""}},data:{status:"normal"},observers:{disabled(){this.btnStatusChange()},loading(){this.btnStatusChange()},with(t){t.includes("%")&&this.setData({with:t})}},methods:{btnStatusChange(){const{loading:t,disabled:e,touchOpacity:a}=this.properties;t?this.setData({status:"loading",touchOpacity:1}):e?this.setData({status:"disabled",touchOpacity:1}):this.setData({status:"normal",touchOpacity:a})},handleBtnClick(t){const{status:e}=this.data;"normal"===e&&this.triggerEvent("onClick",t)}}});