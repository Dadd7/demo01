<template>
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv">
      这段优美的音乐至多已播放
      <span id="busuanzi_value_site_pv"></span>次辣
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv">
      至多有
      <span id="busuanzi_value_site_uv"></span>人打开过这个音乐辣
    </span>
  </div>
</template>
 
<script>
let script;
export default {
  mounted() {
    script = require("busuanzi.pure.js");
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
      // console.log(to.path);
    }
  }
};
</script>
