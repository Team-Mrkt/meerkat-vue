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
                    <form @submit="submitSignInForm">
                        <div class="signup_details">
                            <label>Email Address</label>
                            <input placeholder="email@email.com" v-model="userDetails.email" />
                        </div>
                        <div class="signup_details">
                            <label>Password</label>
                            <input placeholder="password" type="password" v-model="userDetails.password" />
                        </div>
                        <button class="signup_container_signup_button btn_2" type="submit" :class="loading ? 'loading' : null" :disabled="loading">
                            <p v-if="!loading">Sign In</p>
                            <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
                        </button>
                    </form>
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

import configObject from "@/config";
import Nav from '@/components/Nav.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import jwt_decode from "jwt-decode";

export default {
    name: "SignIn",
    components: {
        Nav,
        ClipLoader
    },
    data() {
        return {
            userDetails: {
                email: '',
                password: ''
            },
            size: '25px',
            color: '#544743',
            loading: false
        }
    }, 
    created() {

    },
    mounted() {

    },
    methods: {
        validEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true;
            }
            return false;
        },
        submitSignInForm(e) {
            e.preventDefault()
            if (!this.userDetails.email) {
                this.$toast('Please input an email address', {
                    type: "error",
                    timeout: 3000
                });
                return
            }
            if (!this.validEmail(this.userDetails.email)) {
                this.$toast('Please input a valid email address', {
                    type: "error",
                    timeout: 3000
                });
                return
            }
            if (!this.userDetails.password) {
                this.$toast('Please input a password', {
                    type: "error",
                    timeout: 3000
                });
                return
            }

            this.loading = true

            this.axios
                .post(`${configObject.apiBaseUrl}/users/login`, this.userDetails, configObject.authConfig)
                .then(response => {
                    this.loading = false
                    this.$toast('Login Successful', {
                        type: "success",
                        timeout: 3000
                    });
                    const decoded = jwt_decode(response.data.data.token);
                    const exp = decoded.exp * 1000;
                    response.data.data.jwtExpiry = exp;
                    localStorage.setItem("userDetails", JSON.stringify(response.data.data))
                    this.$router.push({ name: "Feed" });
                })
                .catch(error => {
                    console.log(error)
                    this.loading = false
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