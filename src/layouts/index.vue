<script setup lang="ts">
import Main from "./components/Main.vue";
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <el-container class="app-wrapper">
        <el-aside class="sidebar-container">
            <Aside />
        </el-aside>
        <el-container class="main-container">
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <Main />
                </el-main>
                <el-footer>
                    <Footer />
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
