<template>
    <div class="md:w-1/4 w-1/2 xl:px-8 px-4 mb-16 text-center">
        <img alt="Sascha Kojic" :src="require('@/assets/people/'+ this.photo +'.jpg')" class="py-2 mx-auto w-40">
        <h3 class="text-lg text-gray-700 font-semibold uppercase pb-1 pt-2">{{this.name}}</h3>
        <p class="text-md font-light text-gray-600">{{this.role}}</p>
    </div>
</template>
<script>
    export default {
        name: 'ContactPerson',
        props: {
            'name': String,
            'role': String
        },
        computed: {
            photo() {
                return this.name.split(' ').join('-').toLocaleLowerCase()
            }
        }
    }
</script>
