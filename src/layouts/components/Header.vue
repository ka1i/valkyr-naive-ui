<template>
    <Breadcrumb class="breadcrumb" />
    <el-dropdown>
        <el-icon style="margin-right: 15px">
            <img src="/src/assets/logo.png" class="user-avatar" />
        </el-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts">
import Breadcrumb from "./breadcrumb.vue";

import { defineComponent, ref } from 'vue'
import { Setting } from '@element-plus/icons'

export default defineComponent({
    components: {
        Setting,
        Breadcrumb,
    },
})
</script>

<style lang="scss" scoped>
* {
    line-height: 60px;
}
.breadcrumb {
    float: left;
}
.el-dropdown {
    float: right;
}
.user-avatar {
    cursor: pointer;
    margin: 10px 0;
    width: 40px;
    height: 40px;
    border-radius: 10px;
}
</style>
