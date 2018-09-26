<template>
    <div>
        <nav class="navbar is-transparent is-fixed-top">
            <div class="container is-fluid">
                <div class="navbar-brand">
                    <nuxt-link class="navbar-item" :to="`/`">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                    </nuxt-link>
                    <div class="navbar-burger burger" 
                        :class="{ 'is-active' : isActive }"
                        @click="myToggle"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="navbar-menu"
                    :class="{ 'is-active' : isActive }"
                >
                    <div class="navbar-start">
                        <nuxt-link class="navbar-item" :to="`/`">
                            Home
                        </nuxt-link>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="/documentation/overview/start/">
                                Docs
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="/documentation/overview/start/">
                                    Overview
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                    Modifiers
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                    Columns
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                    Layout
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                                    Form
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                    Elements
                                </a>
                                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                                    Components
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                                        <span class="icon">
                                            <i class="fab fa-twitter"></i>
                                        </span>
                                        <span>
                                            Tweet
                                        </span>
                                    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                                        <span class="icon">
                                            <i class="fas fa-download"></i>
                                        </span>
                                        <span>Download</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <section class="hero is-primary"
            :style="'margin-top: 52px;'"
        >
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    Learn Nuxt.js
                    </h1>
                    <h2 class="subtitle">
                    Awesome Nuxt.js
                    </h2>
                </div>
            </div>
        </section>
        <div class="container"
            :style="'margin-top: 15px;'"
        >
            <div class="columns">
                <div class="column is-4">
                    <nav class="panel">
                        <p class="panel-heading">
                            Posts
                        </p>
                        <div class="panel-block">
                            <button class="button is-link is-outlined is-fullwidth">
                            new post
                            </button>
                        </div>
                        <div class="panel-block">
                            <p class="control has-icons-left">
                                <input class="input is-small" type="text" placeholder="search">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                </span>
                            </p>
                        </div>
                        <a class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            bulma
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import LogoDua from '~/components/LogoDua.vue'
export default {
    // components:{
    //     LogoDua
    // },
    data(){
        return{
            isActive: false,
            text: 'OK'
        }
    },
    methods:{
        myToggle(){
            this.isActive = !this.isActive
        }
    }
}
</script>