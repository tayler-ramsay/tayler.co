<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.body}}</p>
    </article>
<<<<<<< HEAD
=======
    <StaticList/>
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
  </div>
</template>

<script>
import StaticList from '@/components/StaticList'
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { name: "twitter:title", content: "this.post.title" },
        { name: "twitter:description", content: "this.post.body" },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  data() {
    return {
<<<<<<< HEAD
      id: this.$route.params.id
      // post: {}
=======
      id: this.$route.params.id,
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("posts/fetchPost", params.id);
  },
  computed: {
<<<<<<< HEAD
    post() {
      return this.$store.state.posts.all.find(
        post => post.id === Number(this.id)
      );
    }
  }
};
=======
    post () {
      return this.$store.state.posts.all.find(post => post.id === Number(this.id))
    }
  },
  components:{
    StaticList
  }
}
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>