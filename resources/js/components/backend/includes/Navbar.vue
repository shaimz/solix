<template>
    <header class="navbar navbar-light">
        <div class="container-fluid pt-2 pl-4">
            <div class="d-flex flex-column">
                <a class="navbar-brand"><h2>{{this.title ? this.capitalize(this.title) : 'Dashboard'}}</h2></a>
                <ul v-if="emailPage && nav" class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li v-for="(item,index) in nav" :key="item.value"
                        :class="['nav-item ', (index === 0 ? 'd-flex align-items-center' : '')]" role="presentation">
                        <router-link :to="{name:(index === 0 ? item.id.replace(' ','') : '')}">
                            <button :class="'nav-link active'" id="pills-home-tab"
                                    v-bind:data-bs-target="`#pills-`+item.id" type="button" role="tab"
                                    aria-controls="pills-home" aria-selected="true">{{item.name}}
                            </button>
                        </router-link>
                        <svg v-if="index === 0" width="6" class="svg-arrow" height="10" viewBox="0 0 6 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.825L3.7085 5L0 1.175L1.1417 0L6 5L1.1417 10L0 8.825Z" fill="white"/>
                        </svg>
                    </li>
                </ul>
                <ul v-else-if="!emailPage && nav" class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li v-for="(item,index) in nav" :key="item.id" class="nav-item"
                        role="presentation">
                        <button :class="['nav-link ', (index === 0 ? 'active' : '')]" id="pills-home-tab"
                                data-bs-toggle="pill" v-bind:data-bs-target="`#pills-`+item.id" type="button" role="tab"
                                aria-controls="pills-home" aria-selected="true">{{item.name}}
                        </button>
                    </li>
                </ul>
            </div>

            <form class="d-flex input-group w-auto align-self-center">
                <a class="nav-item text-white text-decoration-none text-uppercase logout" @click.prevent="logout"
                   href="">Logout</a>
            </form>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'Navbar',
        props: {
            heading: String,
            pageType: String,
            tabs: Array,
            emailPage: Boolean
        },
        data: () => {
            return {
                title: '',
                type: '',
                nav: [],
                email: false
            }
        },
        mounted() {
            this.title = this.heading;
            this.type = this.pageType;
            this.nav = this.toCarmel(this.tabs);
            this.email = this.emailPage;
        },
        methods: {
            capitalize(text) {
                return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
            },
            toCarmel: (tabs) => {
                if (tabs) {
                    let arr = [];
                    for (let i = 0; i < tabs.length; i++) {
                        let keys = Object.keys(tabs[i]),
                            values = Object.values(tabs[i]);
                        for (let j = 0; j < keys.length; j++) {
                            arr.push({
                                id: keys[j].replace(' ', ''),
                                name: values[j],
                                value: keys[j].toLowerCase().replace(' ', '-')
                            });
                        }
                    }
                    return arr;
                }
            },
            logout() {
                axios.post('/logout')
                    .then((response) => {
                        this.$router.go(this.$router.currentRoute)
                    })
            }
        },
    }
</script>
