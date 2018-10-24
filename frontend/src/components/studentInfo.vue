<template>
  <div>
         <p class="form-text text-muted"> {{detail.selfIntr}} </p>
        
         <p class="form-text" style="font-weight:bold;">获得奖项</p>
         <p class="form-text text-muted"> {{detail.award}} </p>
         <p class="form-text" style="font-weight:bold;">报名原因</p>
         <p class="form-text text-muted"> {{detail.reasonEnroll}} </p>
         <p class="form-text" style="font-weight:bold;">手机/微信号</p>
         <p class="form-text text-muted"> {{detail.wechatPhone}} </p>
         <p class="form-text" style="font-weight:bold;">邮箱</p>
         <p class="form-text text-muted"> {{detail.email}} </p>
         <p class="form-text" style="font-weight:bold;">个人主页</p>
         <p class="form-text text-muted"> {{detail.perWebAddr}} </p>
  </div>
</template>



<script>


export default {
  
  name: "enroll",
  props:{
    detail:Object
  }
}
</script>