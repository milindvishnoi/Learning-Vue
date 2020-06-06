<template>
    <ul class="nav justify-content-end">
            <!-- Router Link is used to stop reload when you are already at that page -->
            <router-link to="/" tag="li" active-class="active" exact class="nav-item">Home</router-link>
            <router-link to="/user" tag="li" active-class="active" class="nav-item">User</router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>