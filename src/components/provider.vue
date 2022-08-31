<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <!-- <DialogContent /> -->
            <n-notification-provider>
                <n-message-provider>
                    <!-- <MessageContent /> -->
                    <slot></slot>
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    NDialogProvider,
    NMessageProvider,
    NLoadingBarProvider,
    NNotificationProvider
} from 'naive-ui';

// import { MessageContent } from '/@/components/MessageContent';
// import { DialogContent } from '/@/components/DialogContent';


export default defineComponent({
    name: "Provider",
    components: {
        // DialogContent,
        // MessageContent,
        NDialogProvider,
        NMessageProvider,
        NLoadingBarProvider,
        NNotificationProvider
    },
});
</script>