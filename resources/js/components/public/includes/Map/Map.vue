<template>
    <div>
        <yandex-map
            @map-was-initialized="createdMap"
            zoom="7"
            :coords="coords"
            :controls="[]"
            style="height: 500px;max-width:100%;width:100%"
            :scroll-zoom="false">

            <ymap-marker
                v-if="proj"
                v-for="(billboard,index) in proj"
                :coords="getCords(billboard.coords)"
                :marker-id="index+1"
                :key="index+1"
                marker-type="placemark"
                :icon="getImage(billboard.type_id, billboard.ongoing)"
                :balloon-template="mapItem(billboard,index)"
                @balloonopen="onBalloonOpen">
            </ymap-marker>
        </yandex-map>
    </div>
</template>

<script>
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'
    import windowInstance from "../../../../width";

    const moreItems = () => import("../moreItems");

    export default {
        name: 'Map',
        components: {yandexMap, ymapMarker},
        props: [],
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                coords: [47.041783, 28.883513],
                settings: {
                    apiKey: 'c9f663ad-b0ef-42ab-8700-235248261fc5',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                items:[],
                proj:[],
                myMap: {},
                layout:
                    "<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>",
            }
        },
        mounted() {

        },
        created(){
            this.$store.dispatch('projects',{lang:this.$router.currentRoute.params.locale === 'en' ? 1 : (this.$router.currentRoute.params.locale === 'ru' ? 3 : 2)}).then(()=>{
                this.proj = this.$store.getters.getProjects
            })
        },
        computed: {
            projects() {
                return this.$store.getters.getProjects;
            },
            small() {
                return windowInstance.data.small
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            medium() {
                return windowInstance.data.medium
            },
            large() {
                return windowInstance.data.large
            },
            xlarge(){
                return windowInstance.data.xlarge
            }
        },
        methods: {
            getImage(type, ongoing) {
                let path = '/assets/icons/map/';
                let result = {
                    layout: 'default#imageWithContent',
                    imageHref: '',
                    imageSize: [30, 30],
                    imageOffset: [0, 0],
                };

                if (ongoing){
                    result.imageHref += path + 'full-outline.png';
                } else {
                    switch (type) {
                        case 1:
                            result.imageHref += path + 'semi-gray.png'
                            break;
                        case 2:
                            result.imageHref += path + 'gray.png'
                            break;
                        case 3:
                            result.imageHref += path + 'full.png'
                            break;
                    }
                }

                return result;
            },
            getCords(coords) {
                return coords.split(',')

            },
            mapItem(card, index) {
                if(card.projects){
                    return `<div :class="card">
                                <img class="card-img-top" src="/${card.image}" alt="" style="height: auto;max-height: 160px;width: 100%;object-fit: cover;object-position: center;"/>
                                <div class="card-body">
                                    <h4 class="before-border">${card.projects.name}</h4>
                                    <p class="project-description" style="margin: 15px 0 !important;overflow: hidden;text-overflow: ellipsis;max-width: 100%;max-height: 50px;">${card.projects.description}</p>
                                    <div class="card-project-features d-flex">
                                        <div class="mr-5">
                                            <i class="margin-icon">
                                                <img src="/assets/icons/location-grey.png">
                                            </i>
                                            ${card.projects.location}
                                        </div>
                                        <div class="font-number project-power"><i class="margin-icon"><img
                                            src="/assets/icons/light-grey.png"></i>${card.power} ${this.$t('power')}
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                }
            },
            increaseOpacity() {
                const op = this.optionsB.opacity * 10
                this.optionsB.opacity = Math.round(op > 9 ? 5 : op + 1) / 10
            },
            updatePosition(pos) {
                this.position = pos
            },
            createdMap($map) {
                this.myMap = $map;
            },
            onBalloonOpen(){
                if (this.xsmall){
                    let self = this,
                        elem = document.getElementsByClassName('ymaps-2-1-79-balloon');

                    setTimeout(function(){
                        if (elem.length && (elem[0].getBoundingClientRect().left > 0)){
                            let pixelCenter = self.myMap.getGlobalPixelCenter(),
                                offsetLeft  = elem[0].getBoundingClientRect().left;

                            pixelCenter[0] += offsetLeft;

                            let geoCenter = self.myMap.options.get('projection').fromGlobalPixels(pixelCenter, self.myMap.getZoom());
                            self.myMap.setCenter(geoCenter, self.myMap.getZoom(), {
                                duration: 100
                            });
                        }
                    }, 600);
                }
            }
        }
    }
</script>
<style scoped>
    .ymap-container {
        height: 100%;
    }
</style>

