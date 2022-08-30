<script setup lang="ts">
import { RouterView } from 'vue-router'
import Provider from '@/components/provider.vue'
import { ref } from 'vue';

console.log("valkyr app init")

const inverted = ref(false)

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-switch v-model:value="inverted" /> inverted
    </n-space>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered>
        Valkyr
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
          :native-scrollbar="false" :inverted="inverted" style="max-height: 320px">
          <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <Provider>
          <RouterView />
        </Provider>
        <n-layout style="max-height: 320px" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style scoped>
</style>
