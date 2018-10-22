<template>
<div>
    <p class="form-text" style="font-weight:bold;">指导教师</p>
         <p class="form-text text-muted">
           {{info.teacher}}</p>
         <p class="form-text" style="font-weight:bold;">项目简介</p>
         <p class="form-text text-muted">
          {{info.introduction}}
</p>
<p class="form-text" style="font-weight:bold;">关键词</p>
<div>

    <b-badge variant="light" style="font-size:15px; font-weight:200" v-for="item in info.keywords">{{item}}</b-badge>

</div>
                  <!-- <hr class="mb-4"> -->
 <p class="form-text" style="font-weight:bold;"></br>能力要求</p>
         <p class="form-text text-muted">
            {{info.abilities}}
          </p>
 <p class="form-text" style="font-weight:bold;">详细说明</p>
         <p class="form-text text-muted">
           {{info.detailed}}
         </p>
 <p class="form-text" style="font-weight:bold;">可报名人数</p>
         <p class="form-text text-muted">
          {{info.number}}
</p>
 <p class="form-text" style="font-weight:bold;">截止时间</p>
         <p class="form-text text-muted">
         {{info.deadline}}
</p>
</div>
</template>
<script>
export default {
  
props:{
 info:Object
}
}
</script>
