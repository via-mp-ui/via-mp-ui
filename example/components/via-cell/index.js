Component({externalClasses:["class-cell-view"],options:{multipleSlots:!0},properties:{height:{type:Number,value:120},width:{type:Number,value:0},radius:{type:Number,value:10},leftText:{type:String,value:""},leftTextSize:{type:Number,value:""},leftTextColor:{type:String,value:""},leftIconSize:{type:Number,value:28},leftIconName:{type:String,value:""},leftIconColor:{type:String,value:""},leftIconSrc:{type:String,value:""},rightText:{type:String,value:""},rightTextSize:{type:Number,value:0},rightTextColor:{type:String,value:"#ccc"},rightIconSize:{type:Number,value:28},rightIconName:{type:String,value:"right"},rightIconColor:{type:String,value:"#ccc"},rightIconSrc:{type:String,value:""},touchOpacity:{type:Number,value:.6}},data:{},methods:{handleCellClick(){this.triggerEvent("onClick")}}});