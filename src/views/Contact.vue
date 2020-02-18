<template>
  <div class="contact p-8">
    <h1>Get in touch with us!</h1>
    <div class="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">

      <div class="relative xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full w-full" style="max-width: 500px; margin: 0 auto;">

        <form action="sendMail">
          <div class="flex flex-row">

            <div class="w-1/2 flex flex-col">
              <label>Full Name</label>
              <input type="text">
            </div>
            <div class="w-1/2 flex flex-col">
              <label>Full Name</label>
              <input type="text">
            </div>
          
          </div>

          <div class="w-full flex flex-col">
            <label>Full Name</label>
            <textarea></textarea>
          </div>

          <div class="absolute bottom-0 right-0">
            <button>Send Message</button>
          </div>

        </form>

      </div>
      <div class="md:ml-4 sm:ml-0 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full w-full">
        <h6>Our Email:</h6>
        <p>info@contentarena.com</p>
        <h6>Address:</h6>
        <p>
          afdasfafbr<br>
          afdasfa asdfbr<br>
          afdasasfafbr<br>
          afda fafbr<br>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
