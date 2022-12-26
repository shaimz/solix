<template>
    <div class="d-flex m-auto">
        <h1>Not found</h1>
    </div>
</template>

<script>
    import {bus} from "../../event/eventbus";

    export default{
        name:'NotFound',
        mounted() {
            bus.$emit('position','relative');
            bus.$emit('theme','light');
        }
    }
</script>
