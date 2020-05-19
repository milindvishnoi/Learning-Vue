<template>
    <div class="container">
        <new-header></new-header>
        <div class="row">
            <server-component></server-component>
            <app-server-detail></app-server-detail>
        </div>
        <hr>
        <new-footer></new-footer>
    </div>
</template>

<script>
    import NewHeader from "./components/NewHeader.vue";
    import NewFooter from "./components/NewFooter.vue";
    import ServerDetails from "./components/ServerDetails.vue";
    export default {
        components: {
            'new-header': NewHeader,
            'new-footer': NewFooter,
            'app-server-detail': ServerDetails
        }
    }
</script>

<style>

</style>
