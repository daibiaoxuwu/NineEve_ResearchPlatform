<template>
    <div>
           <p class="form-text text-muted">
             <!-- {{detail.breIntr}} -->
</p>
        
           <p class="form-text" style="font-weight:bold;">获得奖项</p>
         <p class="form-text text-muted">
           特奖</p>
         <p class="form-text" style="font-weight:bold;">报名原因</p>
         <p class="form-text text-muted">
           <!-- {{detail.reasonEnroll}} -->
</p>


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