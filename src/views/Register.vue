<template>
    <div class="w-full h-screen bg-blue-400">
        <div style="padding-top: 10%;">
            <div class="mx-auto bg-white p-8" style="max-width: 600px; border-radius: 6px;">

                <h1 class="font-semibold text-cc-blue-dark text-2xl text-center py-4">Register with Content Arena</h1>

                <form class="w-full">
                    <div class="w-full flex flex-col">
                        <label for="firstname">First name</label>
                        <input class="outline" type="text" name="firstname">
                    </div>
                    
                    <div class="w-full flex flex-col">
                        <label for="lastname">Last name</label>
                        <input class="outline" type="text" name="lastname">
                    </div>
                    
                    <div class="w-full flex flex-col">
                        <label for="email">Email</label>
                        <input class="outline" type="email" name="email">
                    </div>

                    <div class="w-full flex flex-col">
                        <label for="company">Company</label>
                        <input class="outline" type="text" name="company">
                    </div>

                    <button class="btn btn-blue w-full">Login</button>

                    <p class="text-black text-center">Already have an account? <router-link to="/login">Login here</router-link></p>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register'
    }
</script>

<style scoped>
    .outline {
        padding: 8px;
        outline: solid lightgray 1px;
    }
</style>
