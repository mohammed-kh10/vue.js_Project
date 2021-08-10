<template>
    <div class="about">
        <h1>{{pageName}}</h1>
        <p>{{pageDescription}}</p>
    </div>
    <!-- <WelcomeMessage /> -->
</template>

<script>
// @ is an alias to /src
//import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
    data: function () {
        return {
            pageName: "About Us",
            pageDescription: "This is about us page",
        };
    },
    name: "About",
    components: {
        //WelcomeMessage,
    },
};
</script>
