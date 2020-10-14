<template>
  <div class="single_feed_container post_page_container">
        <div class="single_post_head">
            <div class="post_head">
                <img />
                <div class="name_holder">
                    <p class="cus_name">{{ feed.uploadedBy }}</p>
                    <p class="post_date">{{ feed.created | moment("dddd, MMMM Do YYYY") }}</p>
                </div>
            </div>
            <router-link :to="{path: `Feeds/${feed._id}`}" class="feed_upload_button vue_router_link" style="height: 20%;">
                View Post
            </router-link>
        </div>
        <p class="post_title">{{ feed.title }}</p>
        <div class="post_images">

        </div>
        <textarea placeholder="Write a comment" />
        <div class="post_action_buttons_holder">
            <p class="post_comments">Comments: 50</p>
            <div class="share_social_media post_action_buttons">
                <div class="share">
                    Share
                    <img src="@/assets/img/share.png" />
                </div>
                <div class="social_icons">
                    <div class="twitter_holder social_icon">
                        <img src="@/assets/img/twitter.png" />
                    </div>
                    <div class="facebook_holder social_icon">
                        <img src="@/assets/img/facebook.png" />
                    </div>
                    <div class="whatsapp_holder social_icon">
                        <img src="@/assets/img/whatsapp.png" />
                    </div>
                </div>
            </div>
            <div class="flag_report_button post_action_buttons">
                <img src="@/assets/img/flag.png" />
                Flag report
            </div>

            <img src="@/assets/img/delete.svg" v-if="user" class="delete_post_button" @click="deletePost"/>
        </div>
    </div>
</template>

<script>

import configObject from "@/config";

export default {
    name: 'Post',
    props: ['feed', 'user'],
    methods: {
        deletePost() {
            this.axios
                // .delete(`${configObject.apiBaseUrl}/entry`, {...configObject.authConfig, data: { }})
                .delete(`${configObject.apiBaseUrl}/entry/${this.feed._id}`, configObject.authConfig)
                .then(response => {
                    this.$toast('Successfully deleted entry', {
                        type: "success",
                        timeout: 3000
                    });
                    this.$emit('refresh', this.feed._id)
                })
                .catch(error => {
                    this.$toast(error.response.data.message, {
                        type: "error",
                        timeout: 3000
                    });
                })
        }
    }
}
</script>

<style>

</style>