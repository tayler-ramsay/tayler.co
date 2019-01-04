<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">nuxt-funds</h1>
      <h2 class="subtitle">My premium Nuxt.js project</h2>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :to="{name: 'posts-id', params: {id: post.id}}"
          key="post.id"
          class="button--grey"
        >{{post.title}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: "Tayler.co",
      meta: [
        { name: "twitter:title", content: "Filler content" },
        { name: "twitter:description", content: "tayler.co learning as I go" },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  async fetch({ store }) {
    await store.dispatch("posts/fetchAllPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
