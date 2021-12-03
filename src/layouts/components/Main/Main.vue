<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {

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
