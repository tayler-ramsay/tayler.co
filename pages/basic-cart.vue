<template>
    <div>
        <h1>Products</h1>
        <p>{{products}}</p>
        <a :href="link">link</a>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                products:'socks',
                link:"https://google.com"
            }
        },
    }
</script>

<style scoped>

</style>