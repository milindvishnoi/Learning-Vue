<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from '.vuex';
    export default {
        // computed: {
            // to get the getters
            // counter() {
            //     return this.$store.state.doubleCounter;
            // },
            // ... allows us to pull mapGetters key value pairs for
            // putting in computed properties
            // Used for getting the values we want from the getters
            // To use 3 dots we need to install babel-preset-stage-2
            // by "npm install --save-dev babel-preset-stage-2"
            // ...mapGetters(['stringCounter'])
        // }
        computed: mapGetters(['stringCounter', 'doubleCounter'])
    }
</script>