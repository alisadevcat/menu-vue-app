<template>
  <app-breadcrumbs></app-breadcrumbs>
  <div class="container">
    <h2 class="mt-1 mb-1 text-uppercase">Choose New Menu</h2>
    {{ menus }}
    <div>
      <div class="text-left">
        <label class="control-label" for="loja">Select Meal Period</label>
        <select id="menu_type" name="menu_type" class="form-control mt-2">
          <option value="" name="">Select Template</option>

          <!-- <option
            v-for="menu in menus"
            :key="menu.id"
            :value="menu.id"
            :name="menu.name"
            :shortname="menu.shortname"
            :template="menu.template"
          >
          </option> -->
           <option value="{{menu.id}}" v-for="menu in menus" :key="menu.id">
            {{ menu.name }}
          </option>
          <!-- <option
          value="5"
          name="La Luce | Drinks (US Letter)"
          shortname="laluce_drinks"
          template="laluce_drinks"
        >
          La Luce | Drinks (US Letter)
        </option>
        <option
          value="6"
          name="La Luce | Mobile Menu"
          shortname="laluce_mobile"
          template="laluce_mobile"
        >
          La Luce | Mobile Menu
        </option> -->
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../components/Breadcrumbs.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppBreadcrumbs,
  },
  data() {
    return {
      menus: [],
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
  },
  created() {
    this.menus = this.getMenus;
  },
};
</script>