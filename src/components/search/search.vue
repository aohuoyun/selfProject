<template>
    <div id="seach">
        <input type="text" class="seachInput" :style="[{'background':bgcolor}]" placeholder="请输入关键字搜索">
        <i class="iconfont icon-sousuo"></i>
    </div>
</template>
<script>
export default {
    props:['bgcolor'],
}
</script>
<style scoped lang="scss">
#seach {
    width: 100%;
    padding: 0.2rem;
    position: relative;
    .seachInput {
        width: 7.1rem;
        height: 0.6rem;
        padding-left: 10px;
    }
    .icon-sousuo {
        font-size: 0.4rem;
        line-height: 0.4rem;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
    }
}
</style>

