<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="componentSelect='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="componentSelect='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="componentSelect='appRed'">Load Red Template</button>
                <hr>
                <component :is="componentSelect">
                    <h1 slot="title">{{ changeTitle }}</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
                componentSelect: 'appBlue',
                title: 'Primary'
            };
        },
        computed:{
            changeTitle: function () {
                console.log(this.componentSelect);
                if(this.componentSelect === "appBlue") {
                    return this.title = "Primary";
                }else if (this.componentSelect === "appGreen") {
                    return this.title = "Success";
                }else {
                    return this.title = "Failure";
                }
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
