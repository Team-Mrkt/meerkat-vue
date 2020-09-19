<template>
    <div>
        <Nav />
        <div class="row content_container">
            <section class="side_meerkat_container col-md-4">
                <div class="side_meerkat_text_container">
                    <p class="quick_margin_bottom side_meerkat_text">Welcome back,</p>
                    <p class="quick_margin_bottom side_meerkat_text">Don't be safety blinded, be safety minded.</p>
                </div>
                <div class="quickreport_image_holder">
                </div>
            </section>
            <section class="col-md-8 signup_content_container">
                <div class="signup_container signin_container_height">
                    <p class="create_account_text">Sign In</p>
                    <div class="signup_details">
                        <label>Email Address</label>
                        <input placeholder="email@email.com" />
                    </div>
                    <div class="signup_details">
                        <label>Password</label>
                        <input placeholder="password" />
                    </div>
                    <button class="signup_container_signup_button btn_2">Sign In</button>
                    <p class="or_sign_up_with">Or Sign In With</p>
                    <div class="sign_up_with_container">
                        <button class="sign_up_with_buttons btn_2 google_button">Google</button>
                        <button class="sign_up_with_buttons btn_2 twitter_button">Twitter</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
    name: "SignIn",
    components: {
        Nav,
    },
    data() {
        return {

        }
    }, 
    created() {

    },
    mounted() {

    },
    methods: {
        
    }
}
</script>

<style>

</style>