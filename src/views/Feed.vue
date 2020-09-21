<template>
    <div class="general_container">
        <Sidebar />
        <section class="right_content_container">
            <div class="feed_container_info">
                <div class="feed_search_input">
                    <img src="@/assets/img/search.png" />
                    <input type="search" placeholder="Search incidents/tags" class="search_incidents" />
                </div>
                
                <div class="feed_incident_description">
                    <!-- <div class="quick_report_description_holder">  -->
                        <div class="feed_upload_button_holder">
                            <button class="feed_upload_button">Upload Photos/Videos</button>
                        </div>
                        <textarea placeholder="Give a brief description of the incident" rows="4"/>
                        
                    <!-- </div> -->
                    <div class="report_quick_report">
                        <div>
                            <input type="checkbox" style="display: none;" />
                            <div class="quick_report_check">
                                <div class="quick_report_inner_check"></div>
                            </div>
                            <p>Quick Reporting</p>
                        </div>
                        <button @click="showSuccessfulModal">Report Incident</button>
                    </div>
                </div>

                <Post />
            </div>
        </section>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import Post from '@/components/Post.vue'

export default {
    name: 'Feed',
    components: {
        Sidebar,
        Post
    }

}
</script>

<style>

</style>