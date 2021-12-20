<template>
  <div class="col-md-12 text-center">
    <div class="menuHolder menuTemp" style="">
      <h5>TEMPLATE MENU</h5>
      <h6>{{ menu_name }}</h6>
      <img :src="addImagePath(image_name)" />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menu_name: String,
    image_name: String,
  },
  methods: {
    addImagePath(name) {
      return name
        ? require("@/assets/images/MenuThumbnails/" + name + ".png")
        : "";
    },
  },
};
</script>