<template>
    <div>
        <Nav />
        <div class="row content_container">
            <section class="side_meerkat_container col-md-4">
                <div class="side_meerkat_text_container">
                    <p class="quick_margin_bottom side_meerkat_text">Create an account with meerkat and you can get prompt alerts for dangers, and close misses in your community.</p>
                </div>
                <div class="quickreport_image_holder">
                </div>
            </section>
            <section class="col-md-8 signup_content_container">
                <div class="signup_container signup_container_height">
                    <p class="create_account_text">Create Account</p>
                    <div class="signup_details">
                        <label>Email Address</label>
                        <input placeholder="email@email.com" />
                    </div>
                    <div class="signup_details">
                        <label>Username</label>
                        <input placeholder="username" />
                    </div>
                    <div class="signup_details">
                        <label>Password</label>
                        <input placeholder="password" />
                    </div>
                    <button class="signup_container_signup_button btn_2">Sign Up</button>
                    <p class="or_sign_up_with">Or Sign Up With</p>
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
    name: "SignUp",
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