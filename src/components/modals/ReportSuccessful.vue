<template>
  <modal
    name="ReportSuccessfulModal"
    transition="pop-out"
    :width="modalWidth"
    :height="360"
  >
    <div class="report_successful_modal">
        <h3>Report Successful!!!</h3>
        <p>Your report has now been posted as an anonymous source, but you can create an account and start reporting more incidents in your community and its environs.</p>
        <div>
            <button class="report_successful_modal_create_account btn_1">Create an account</button>
            <button class="report_successful_modal_no_thanks btn_1">No thanks</button>
        </div>
    </div>
  </modal>
</template>

<script>

const MODAL_WIDTH = 700;

export default {
    name: 'ReportSuccessfulModal',
    data() {
        return {
            modalWidth: MODAL_WIDTH
        }
    },
    created() {
        this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
    }, 
}
</script>

<style>

</style>