<template>
    <section class="app-main">
        <!-- 内部应该显示子路由页面信息 -->
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const item = {
            date: "2016-05-02",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
        };

        const tableData = ref(Array(20).fill(item));

        return {
            tableData,
        };
    },
});
</script>

<style scoped>
.app-main {
    min-height: calc(100vh - 200px);
    width: 100%;
    position: relative;
    overflow: hidden;
}
</style>
