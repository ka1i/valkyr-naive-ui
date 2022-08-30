<template>
    <n-loading-bar-provider>
        <n-message-provider>
            <n-dialog-provider>
                <slot></slot>
            </n-dialog-provider>
        </n-message-provider>
    </n-loading-bar-provider>
</template>

  <script lang="ts">
  import {
      NDialogProvider,
      NMessageProvider,
      NLoadingBarProvider
  } from 'naive-ui';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
      name: "Provider",
      components: {
          NDialogProvider,
          NMessageProvider,
          NLoadingBarProvider
      },
  });
  </script>