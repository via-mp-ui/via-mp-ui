import datepicker from"../via-date-picker-cell/behavior";Component({behaviors:[datepicker],options:{multipleSlots:!0},externalClasses:[],properties:{title:String},data:{},ready(){this.$dateCell=this.selectComponent("#date-picker-cell-id")},methods:{show(){this.$pop.show(),this.$dateCell.render()},hide(){this.$pop.hide(),setTimeout((()=>{this.$dateCell.handleRest()}),100)},handleDateChange(e){const{value:t,selectPickerText:i,flag:a}=e.detail;this.setData({selectPickerText:i}),a&&this.triggerEvent("onChange",{value:t})},handleConfirm(e){const{value:t}=e.detail;this.triggerEvent("onConfirm",{value:t});const{autoClose:i}=this.data;i&&this.hide()},handleReset(){wx.nextTick((()=>{this.$dateCell.render(),this.triggerEvent("onRest","")}))}}});