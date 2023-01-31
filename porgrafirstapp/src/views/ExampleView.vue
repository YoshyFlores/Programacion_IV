<template>
    <example-component title="Programacion IV"></example-component>
</template>
<script>
// @ is an alias to /src
import exampleComponent from "@/components/exampleComponent.vue";

export default {
    name: "ExampleView",
    components: {
    exampleComponent,
},
};
</script>