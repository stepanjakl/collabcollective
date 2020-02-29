<template>
    <button v-if="blue" @click="routePush()" class="btn btn-blue raised relative clickable overflow-hidden z-0 rounded-sm"><!--self-center md:self-start text-sm md:mt-6 mt-0 lg:mb-6 md:mb-10 mb-16 md:text-lg py-1 md:py-4 px-10 md:px-20">-->
        <input class="toggle" type="checkbox"/><div class="anim"></div>
        <slot></slot>
    </button>
    <button v-else-if="yellow" @click="routePush()" class="btn btn-yellow raised relative clickable overflow-hidden z-0 rounded-sm"><!-- self-center md:self-start text-sm md:mt-6 mt-0 lg:mb-6 md:mb-10 mb-16 md:text-lg py-1 md:py-4 px-10 md:px-20">-->
        <input class="toggle" type="checkbox"/><div class="anim"></div>
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
                pushStopper: null
            }
        },
        methods: {
            
            routePush(){
                const that = this;
                if(this.pushStopper == null) {
                    that.pushStopper = setTimeout(() => {
                        
                        that.pushStopper = null;

                        if(that.ahref){
                            window.location.href = that.ahref;
                        }

                        if(that.to) {
                            that.$router.push( that.to );
                        }

                    }, 300)
                }
            }
        }
    }
</script>
