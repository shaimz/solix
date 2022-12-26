import Vue from 'vue'

const windowInstance = new Vue({
    data() {
        return {
            data:{
                innerWidth: window.innerWidth,
                small:window.innerWidth > 428 && window.innerWidth < 769,
                xsmall:window.innerWidth < 429,
                medium:window.innerWidth < 1025 && window.innerWidth > 768,
                large:window.innerWidth > 1024,
                compare:window.innerWidth < 3000 && window.innerWidth > 768,
                windowCompare:window.innerWidth < 3000 && window.innerWidth > 1025,
                largeCompare:window.innerWidth < 1025,
                mediumCompare:window.innerWidth < 769,
                smallCompare:window.innerWidth < 429,
                xlarge:window.innerWidth < 3000
            }
        }
    },
    created() {
        const self = this;
        window.addEventListener('resize', e => {
            self.data.innerWidth = window.innerWidth;
            window.innerWidth < 429 ? self.data.xsmall = true : self.data.xsmall = false;
            window.innerWidth > 428 && window.innerWidth < 769 ? self.data.small = true : self.data.small = false;
            window.innerWidth < 1025 && window.innerWidth > 768 ? self.data.medium = true : self.data.medium = false;
            window.innerWidth > 1024 ? self.data.large = true : self.data.large = false;
            window.innerWidth < 3000 && window.innerWidth > 768 ? self.data.compare = true : self.data.compare = false;
            window.innerWidth < 1025 ? self.data.largeCompare = true : self.data.largeCompare = false;
            window.innerWidth < 769 ? self.data.mediumCompare = true : self.data.mediumCompare = false;
            window.innerWidth < 429 ? self.data.smallCompare = true : self.data.smallCompare = false;
            window.innerWidth < 3000 && window.innerWidth > 1024 ? self.data.windowCompare = true : self.data.windowCompare = false;
            window.innerWidth <3000 ? self.data.xlarge = true : self.data.xlarge = false;

            if(this.mediumCompare){

            }

        })
    },
})

export default windowInstance
