// Home.vue
<template>
  <div>
    <!-- <h1>{{ addClubErrors }}</h1> -->
    <button @click="updateSessionModel">Increment</button>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';

export default {
  setup() {
    const tabId = ref(window.name);
    onMounted(() => {
      // Generate a new ID if one doesn't exist
      if (!tabId.value) {
        tabId.value = Math.random().toString(36).substr(2, 9);
        window.name = tabId.value;
        let sessionIdsAndModel = [];
        console.log(sessionIdsAndModel, "SS");

        let tabIdAndModel = {
          sessionId: window.name,
          model: [],
        };
        console.log(tabIdAndModel, "abc");
        sessionIdsAndModel.push(tabIdAndModel);
        window.sessionStorage.setItem(
          "sessionIdsAndModel",
          JSON.stringify(sessionIdsAndModel)
        );
      }
    });
    // Remove data from sessionStorage when tab is closed
    // window.addEventListener("beforeunload", () => {
    //   let sessionIdsAndModel =
    //     JSON.parse(window.sessionStorage.getItem("sessionIdsAndModel")) || [];
    //   sessionIdsAndModel = sessionIdsAndModel.filter(
    //     (obj) => obj.sessionId !== tabId.value
    //   );
    //   window.sessionStorage.setItem(
    //     "sessionIdsAndModel",
    //     JSON.stringify(sessionIdsAndModel)
    //   );
    // });
  },
  data: function () {
    return {
      sessionId: 0,
      dashboardModel: {
        name: "abed",
        Id: 1
      },
    };
  },
  mounted() {
    // window.addEventListener("beforeunload", () => {
    //   this.clearSession(window.name, "specificPropName");
    // });
  },
  methods: {
    updateSessionModel() {
      // Retrieve the sessionIdsAndModel array from sessionStorage
      let sessionIdsAndModel =
        JSON.parse(window.sessionStorage.getItem("sessionIdsAndModel")) || [];

      // Find the index of the object with the specified sessionId
      let index = sessionIdsAndModel.findIndex(
        (obj) => obj.sessionId === window.name
      );

      // Update the model property of the object at the specified index
      sessionIdsAndModel[index].model = this.dashboardModel;

      // Store the updated sessionIdsAndModel array back in sessionStorage
      window.sessionStorage.setItem(
        "sessionIdsAndModel",
        JSON.stringify(sessionIdsAndModel)
      );
    },
  }
}


</script>