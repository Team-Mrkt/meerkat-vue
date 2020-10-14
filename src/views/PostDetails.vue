<template>
    <div class="general_container">
        <Sidebar />
        <section class="right_content_container single_feed_container">
            <div class="page_details_padding" v-if="!loading">
                <img src="@/assets/img/back_arrow.png" @click="goToFeeds" class="back_arrow" />
                <p class="post_title">{{ postDetails.title }}</p>
                <div class="post_images">

                </div>
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
                </div>
                <textarea placeholder="Write a comment" />
                <div class="post_comments_holder">
                    <div class="post_comment">
                        <img />
                        <div class="post_comment_info">
                            <div class="post_comment_head">
                                <p class="post_comment_name">{{ postDetails.uploadedBy }}</p>
                                <p class="post_comment_date">{{ postDetails.created | moment("dddd, MMMM Do YYYY") }}</p>
                            </div>
                            <p class="post_comment_text">Occaecat veniam proident sit incididunt reprehenderit dolore Sit do zzreprehenderit nostrud ipsum. Officia ullamco sint id consequat. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cent_loader" v-if="loading">
                <clip-loader :color="color" :size="size"></clip-loader>
            </div>
        </section>
    </div>
</template>

<script>

import configObject from "@/config";
import Sidebar from '@/components/Sidebar.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    name: 'PostDetails',
    components: {
        Sidebar,
        ClipLoader
    },
    data() {
        return {
            postDetails: {},
            size: '105px',
            color: '#544743',
            loading: true,
        }
    },
    created() {
        this.loading = true;
        this.getPostDetails()

    },
    methods: {
        goToFeeds() {
            this.$router.push({name: "Feed"})
        },
        getPostDetails() {
            const url = localStorage.getItem('userDetails') ? `${configObject.apiBaseUrl}/users/entry/${this.$route.params.id}` : `${configObject.apiBaseUrl}/entry/${this.$route.params.id}`
            this.axios
                .get(url, configObject.authConfig)
                .then(response => {
                    console.log(response.data.data)
                    this.postDetails = response.data.data
                    this.loading = false;
                })
                .catch(e => {
                    
                })
        }
    }
}
</script>

<style>

</style>