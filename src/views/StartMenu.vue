<template>
  <app-breadcrumbs></app-breadcrumbs>
  <div class="container">
    <h2 class="mt-1 mb-1 text-uppercase">Choose New Menu</h2>
    <div>
      <div class="text-left">
        <label class="control-label" for="loja">Select Meal Period</label>
        <select
          id="menu_type"
          name="menu_type"
          class="form-control mt-2"
          v-model="selected"
        >
          <option disabled value="">Select Template</option>
          <option v-for="menu in menus" :key="menu.id" :value="{ menu_id : menu.id, shortname : menu.shortname, name: menu.name }">
            {{ menu.name }}
          </option>
        </select>
        <div>
          <span>Chosen: {{ selected.menu_id }}</span>
        </div>
      </div>
      <div v-if="isSelected">
        <choose-table></choose-table>
        <template-image :menu_name="selected.name" :image_name="selected.shortname"></template-image>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import TemplateImage from "../components/TemplateImage.vue";
import ChooseTable from "../components/ChooseTable.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppBreadcrumbs,
    TemplateImage,
    ChooseTable
  },
  data() {
    return {
      menus: [],
      selected: {},
      menu_name:" ",
      image_name:" "
    };
  },
  methods: {
    setMenus() {},
  },
  computed: {
    ...mapGetters("menu_types", { types: "all" }),
    ...mapGetters("menu_types", ["getAllMenuTypes"]),
    ...mapGetters("concepts", ["getConcept"]),
    // getCode(){
    //   return this.getBranch(this.$route.params.concept);
    // }
    //get menu objects
    getMenus() {
      return this.getAllMenuTypes(this.getConcept(this.$route.params.concept));
    },
    setMenuName(){
      this.menu_name = this.menus.find(item=>item.name);
    },
    isSelected(){
      return Boolean(this.selected);
    }
  },
  created() {
    this.menus = this.getMenus;
  }
  };
</script>