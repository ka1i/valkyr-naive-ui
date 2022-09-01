<template>
    <n-layout class="layout" position="absolute" has-sider>
        <!-- 左侧区域 -->
        <n-layout-sider position="absolute" collapse-mode="transform" :collapsed-width="0" :width="280"
            :collapsed="collapsed" class="app-layout-sider" show-trigger="arrow-circle"
            style="border-top-right-radius: 16px;" @collapse="collapsed = true" @expand="collapsed = false">
            <!-- title -->
            <span class="app-layout-sider__title">
                How to use provider
            </span>
            <!-- 左侧菜单 -->
            <n-menu :value="activeName" :options="layoutOptions" :collapsed-width="64" :collapsed-icon-size="22"
                @update:value="handleMenuSelect" />
        </n-layout-sider>
        <!-- 右侧区域-->
        <n-layout position="absolute" style="transition: all 0.3s;" :style="{ left: collapsed ? '10px' : '280px' }">
            <!-- header区域-->
            <n-layout-header bordered>
                <div style="padding-right: 40px;">
                    <span style="margin-right: 20px;" @click="changeTheme">{{ theme === null ? '浅色' : '深色' }}</span>
                    <span @click="changeLang">{{ showLang }}</span>
                </div>
            </n-layout-header>
            <!-- 页面内容区域-->
            <n-layout-content class="layout-content" style="border-radius: 0 16px 16px;">
                <div style="padding: 20px 40px;">
                    <router-view v-slot="{ Component }">
                        <component :is="Component" :key="$route.path" />
                    </router-view>
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'

import useConfig from '/@/hooks/useConfig'
import { LAYOUT_ITEMS } from '/@/constant/constant'

const router = useRouter()

const layoutOptions = ref<MenuOption[]>(LAYOUT_ITEMS)
const collapsed = ref(false)
const activeName = ref('/')
const handleMenuSelect = (value: string) => {
    activeName.value = value
    router.push({
        path: value,
    })
}
// config
const { theme, lang, changeTheme, changeLang, } = useConfig()
const showLang = computed(() => {
    return lang.value.name === 'zh-CN' ? '中文' : 'English'
})

</script>

<style scoped>
.app-layout-sider__title {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    height: 28px;
    color: #333;
    font-weight: 500;
    font-size: 20px;
}

.n-layout-header {
    padding: 24px;
    display: flex;
    justify-content: flex-end;
}

.n-layout-header span {
    cursor: pointer;
}
</style>
    