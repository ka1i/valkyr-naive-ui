import type { Component } from 'vue'
import { h } from 'vue'
import { NIcon } from 'naive-ui'

import { Home, InformationCircle } from '@vicons/ionicons5'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export const LAYOUT_ITEMS = [
    {
        label: 'Home',
        key: '/',
        icon: renderIcon(Home)
    },
    {
        label: 'About',
        key: '/about',
        icon: renderIcon(InformationCircle)
    },
]
