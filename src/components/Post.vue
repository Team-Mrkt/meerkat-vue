<template>
  <div class="single_feed_container">
        <div class="post_head">
            <img />
            <div class="name_holder">
                <p class="cus_name">Anon1234</p>
                <p class="post_date">May 5, 2020</p>
            </div>
        </div>
        <p class="post_title">Fire outbreak in balogun market</p>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post'
}
</script>

<style>

</style>