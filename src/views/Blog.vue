<template>
    <div class="blog">
        <h1>{{pageName}}</h1>
        <p>{{pageDescription}}</p>
        
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="PostsArea">
                        <blogPosts
                        v-for="post in posts"
                        :key="post.id"
                        :views="post.views"
                        :title="post.title"
                        :date="post.date"
                        :content="post.content"
                        :author="post.author"
                        :category="post.category"
                        />
                    </div><!-- posts area -->
                </div><!-- col-8 -->

                <div class="col-md-4">
                    <div class="sideBar">
                        <blogSideBar />
                    </div><!-- side bar -->
                </div><!-- col-4 -->
            </div><!-- row -->
        </div><!-- container -->
    </div><!-- blog -->
</template>

<script>
import blogPosts from "@/components/Blog/blogPosts.vue";
import blogSideBar from "@/components/Blog/blogSideBar.vue";
import jsonPosts from "../json/blogPosts.json";

export default {
    data: function(){
        return {
            pageName: "Blog",
            pageDescription: "This Is Blog Page",
            posts: jsonPosts,
        }
    },
    name: "blog",
    components:{
        blogPosts,
        blogSideBar,
    }
}
</script>