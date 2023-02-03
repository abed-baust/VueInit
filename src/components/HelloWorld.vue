// Home.vue
<template>
  <div>
    <!-- <h1>{{ addClubErrors }}</h1> -->
    <button @click="increment">Increment</button>
  </div>
</template>

<script>

export default {
  components: {

  },

  computed: {
    addClubErrors() {
      return this.$store.state.count;
    },
  },
  data: function () {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      const payload = {
  name: "Size1",
  description: "Size2"
}
      console.log('aaa',payload);
      this.$store.dispatch("getToken2",payload);
    }
  },
};

</script>