export const caculateRatio=()=>{const{screenWidth:t}=wx.getSystemInfoSync();return t/375};export const rpxToPx=t=>{const o=t/2,c=caculateRatio();return Math.round(o*c)};