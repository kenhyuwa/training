<template>
    <div class="container">
        <h3 v-text="text"></h3>
    </div>
</template>

<script>
    export default{
        props:['text']
    }
</script>