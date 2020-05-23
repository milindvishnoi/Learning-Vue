<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Add 1</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log("destroyed");
        },
        deactivated() {
            console.log("Deactivated!");
        },
        activated() {
            console.log("Activated!");
        }
    }
</script>

<style scoped>

</style>