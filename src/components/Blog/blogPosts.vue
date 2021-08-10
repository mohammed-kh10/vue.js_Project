<template>
    <div class="postBox">
        <span class="postViews">{{views}}</span>
        <h3 class="postTitle">{{title || reversing}}</h3>
        <span class="postDate">{{date}}</span>
        <p class="postContent">{{content || shorten(20, '...')}}</p>

        <div class="row">
            <div class="col-sm-6">
                <span class="postAuthor">{{author}}</span>
            </div><!-- col-6 -->

            <div class="col-sm-6 text-end">
                <span class="postCategory">{{category || upperCase}}</span>
            </div><!-- col-6 -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['views' , 'title' , 'date' , 'content' , 'author' , 'category'],
    name : "post",
}
</script>

<style lang="scss" scoped>
$white: rgb(255, 255, 255);
$black: rgb(0, 0, 0);
$gray: rgb(95, 95, 95);
.postBox{
    text-align: left;
    padding: 15px;
    background-color: $white;
    box-shadow: 0 0 4px $black;
    position: relative;
    margin-bottom: 15px;
    .postViews{
        position: absolute;
        top: 5px;
        right: 5px;
        color: $white;
        background-color: $black;
        border-radius: 5px;
        padding: 1px 5px;
        font-weight: bold;
    }
    .postDate{
        display: block;
        padding: 0 0 5px;
        color: $gray;
        font-size: 14px;
    }
    .postContent{
        line-height: 1.7;
        color: $gray;
    }
    .postAuthor , .postCategory{
        color: $white;
        background-color: $black;
        padding: 5px 10px;
        border-radius: 6px;
    }
}
</style>