import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    breakpoint: {
        thresholds: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1024,
            xl: 1920
        }
    }
}

export default new Vuetify(opts)
