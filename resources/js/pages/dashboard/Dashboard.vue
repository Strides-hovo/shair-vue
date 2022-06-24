<template>
  <router-view></router-view>
</template>

<script>
import Sidebar from "@/components/Sidebar";


import apiRoutes from "../../routes/api-routes";
export default {
  name: "Dashboard",
  components: {  Sidebar },
  mounted() {
    axios.get(apiRoutes("language.index")).then((r) => console.log(r.data));
    console.log(apiRoutes("language.index"));
  },
};
</script>

