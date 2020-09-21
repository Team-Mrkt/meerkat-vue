<template>
    <div class="general_container">
        <Sidebar />
        <section class="right_content_container single_feed_container">
            <div class="search_page">
                <img src="@/assets/img/back_arrow.png" class="back_arrow" />
                <p class="post_title">Search Results "Market Fire"</p>
                <div class="search_results">
                    <Post />
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import Post from '@/components/Post.vue'

export default {
    name: 'Search',
    components: {
        Sidebar,
        Post
    }
}
</script>

<style>

</style>