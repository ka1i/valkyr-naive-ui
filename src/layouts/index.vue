<script setup lang="ts">
import {
    LayoutAside,
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
} from "./components";
</script>

<template>
    <el-container class="app-wrapper">
        <el-aside class="sidebar-container">
            <LayoutAside />
        </el-aside>
        <el-container class="main-container">
            <el-container>
                <el-header>
                    <LayoutHeader />
                </el-header>
                <el-main>
                    <LayoutMain />
                </el-main>
                <el-footer>
                    <LayoutFooter />
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
.el-aside {
    width: 230px;
}
</style>
