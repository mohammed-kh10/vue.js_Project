<template>
    <div class="contact">
        <h1>{{pageName}}</h1>
        <form action="">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />

            <label for="message">Your Message</label>
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
            ></textarea>
        </form>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            pageName: "Contact Us",
        };
    },
    name: "contact",
};
</script>
