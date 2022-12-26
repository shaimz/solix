<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>
    const Sidebar = () => import("./includes/Sidebar.vue");
    const Navbar = () => import("./includes/Navbar.vue");

    export default {
        name: 'adminDashboard',
        data:() => {
            return{
            }
        },
        components: {
            Navbar: Navbar,
            Sidebar: Sidebar
        },
        created() {
            this.$router.push('/admin/requests/product')
        }
    }
</script>
