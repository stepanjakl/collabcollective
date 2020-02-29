<template>
    <button v-if="blue" v-on:click="() => { routePush(); animate = true }" v-on:animationend="animate = false"
            v-bind:class="{ 'animate light' : animate }"
            class="btn btn-blue btn-transition relative clickable rounded-sm">
        <!--self-center md:self-start text-sm md:mt-6 mt-0 lg:mb-6 md:mb-10 mb-16 md:text-lg py-1 md:py-4 px-10 md:px-20">-->
        <div class="ripple"></div>
        <slot></slot>
    </button>

    <button v-else-if="yellow" v-on:click="() => { routePush(); animate = true }" v-on:animationend="animate = false"
            v-bind:class="{ 'animate dark' : animate }"
            class="btn btn-yellow btn-transition relative clickable rounded-sm">
        <!--self-center md:self-start text-sm md:mt-6 mt-0 lg:mb-6 md:mb-10 mb-16 md:text-lg py-1 md:py-4 px-10 md:px-20">-->
        <div class="ripple"></div>
        <slot></slot>
    </button>

    <button v-else>
        <slot></slot>
    </button>
</template>
<script>
    export default {
        // This button will wait to finish animation before redirection
        name: 'AnimButton',
        props: {
            // Required [to / ahref] : [URL / vue-route]
            'to': String,
            'ahref': String,
            // Required [blue / yellow]
            'blue': Boolean,
            'yellow': Boolean
        },
        data() {
            return {
                animate: false,
                pushStopper: null
            }
        },
        methods: {

            routePush() {
                const that = this;
                if (this.pushStopper == null) {
                    that.pushStopper = setTimeout(() => {

                        that.pushStopper = null;

                        if (that.ahref) {
                            window.location.href = that.ahref;
                        }

                        if (that.to) {
                            that.$router.push(that.to);
                        }

                    }, 300)
                }
            },

            /*animateRippleEffect() {

            }*/
        }
    }
</script>
