<template>
    <div class="header">
        <div class="container">
            <div class="logo">Mido Logo</div>
            <ul class="text-end">
                <li>
                    <router-link to="/" exact><a>Home</a></router-link>
                </li>
                |
                <li>
                    <router-link to="/blog"><a>Blog</a></router-link>
                </li>
                |
                <li>
                    <router-link to="/about"><a>Apout</a></router-link>
                </li>
                |
                <li>
                    <router-link to="/help"><a>Help</a></router-link>
                </li>
                |
                <li>
                    <router-link to="/contact"><a>Contact</a></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
};
</script>

<style lang="scss" scoped>
$dark: rgb(15, 15, 15);
$white : rgb(255, 255, 255);

.header {
    background-color: $dark;
    color: $white;
    overflow: hidden;
    .logo{
        font-size : 24px;
        padding : 20px;
        float : left;
        width : 200px;
    }
    ul{
        float : left;
        width : calc(100% - 200px);
        margin: 0;
        li{
            padding: 15px;
            display : inline-block;
            font-size : 18px;
            a{
                color : $white;
                text-decoration : none;
            }
        }
    }
}
</style>
