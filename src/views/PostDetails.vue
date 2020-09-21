<template>
    <div class="general_container">
        <Sidebar />
        <section class="right_content_container single_feed_container">
            <div class="page_details_padding">
                <img src="@/assets/img/back_arrow.png" class="back_arrow" />
                <p class="post_title">Fire outbreak in balogun market</p>
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
                                <p class="post_comment_name">anon1234</p>
                                <p class="post_comment_date">May 6, 2020</p>
                            </div>
                            <p class="post_comment_text">Occaecat veniam proident sit incididunt reprehenderit dolore Sit do zzreprehenderit nostrud ipsum. Officia ullamco sint id consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'

export default {
    name: 'PostDetails',
    components: {
        Sidebar
    }
}
</script>

<style>

</style>