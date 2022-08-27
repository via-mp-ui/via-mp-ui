Component({
  properties: {
    src:{
      type:String,
      value:''
    },
    errorType:{
      type:String,
      value:'noNetwork'
    },
    full:{
      type:Boolean,
      value:false
    },
    errorText:{
      type:String,
      value:''
    },
    zIndex:{
      type:Number,
      value:-1
    },
  },
});