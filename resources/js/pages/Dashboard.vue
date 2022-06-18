<template>
  <router-view></router-view>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Language from "./Language";
import apiRoutes from "../routes/api-routes";
export default {
  name: "Dashboard",
  components: { Language, Sidebar },
  mounted() {
    axios.get(apiRoutes("language.index")).then((r) => console.log(r.data));
    console.log(apiRoutes("language.index"));
  },
};
</script>

