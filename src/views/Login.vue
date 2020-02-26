<template>
    <div class="w-full h-screen bg-blue-400">
        <div style="padding-top: 18%;">
            <div class="mx-auto bg-white p-8" style="max-width: 600px; border-radius: 6px;">

                <h1 class="font-semibold text-cc-blue-dark text-2xl text-center py-4">Login to Content Arena</h1>

                <form class="w-full">
                    <div class="w-full flex flex-col">
                        <label for="email">Email</label>
                        <input class="outline" type="email" name="email">
                    </div>
                    
                    <div class="w-full flex flex-col">
                        <label for="pass">Password</label>
                        <input class="outline" type="password" name="pass">
                    </div>

                    <div class="w-full">
                        <a class="text-right" href="">Forgot password?</a>
                    </div>

                    <button class="btn btn-blue w-full">Login</button>

                    <p class="text-black text-center">Don't have an account yet? <router-link to="/register">Register now</router-link></p>

                </form>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<style scoped>
    .outline {
        padding: 8px;
        outline: solid lightgray 1px;
    }
</style>
