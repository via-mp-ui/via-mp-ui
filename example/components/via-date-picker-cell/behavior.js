module.exports=Behavior({properties:{mode:{type:String,value:"date"},autoClose:{type:Boolean,value:!0},dateTextFormatChart:{type:String,value:"-"},dateValFormatChart:{type:String,value:"-"},timeTextFormatChart:{type:String,value:":"},timeValFormatChart:{type:String,value:":"},value:{type:Array,value:[]},beginRange:{type:Number,value:2},endRange:{type:Number,value:2},maskClose:{type:Boolean,value:!0},confirmColor:{type:String,value:"#0a1d66"},resetColor:{type:String,value:"#323232"},titleColor:{type:String,value:"#999999"},activeColor:{type:String,value:"#0a1d66"},isUnitZero:{type:Boolean,value:!0},showUnitText:{type:Boolean,value:!0}},data:{},ready(){this.$pop=this.selectComponent("#pop-modal")},methods:{}});