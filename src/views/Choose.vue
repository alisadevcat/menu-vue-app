<template>
  <div class="container">
    <h2 class="mt-1 mb-1 text-uppercase">Choose New Menu</h2>
    <hr class="divider" />
    <h3 class="mb-2 mt-2 text-uppercase">Choose your Concept</h3>
    <ul class="row justify-space-between mb-2">
      <li v-for="concept in concepts" :key="concept.id" class="col-4-xl gap-2">
        <router-link :to="{ name: 'menu', params: { concept: concept.slug, branch: concept.code } }">
             {{getConcept(concept.slug)}}
          <img :src="addImagePath(concept.slug)" v-bind:alt="concept.slug" />
        </router-link>
      </li>

      <!-- <li v-for="type in types" :key="type.id">{{type.name}}</li> -->
    </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    addImagePath(name) {
      return require("@/assets/images/choose/" + name + ".png");
    },
  },
  computed:{
      	...mapGetters('concepts', { concepts: 'all' }),
      ...mapGetters('menu_types', { types: 'all' }),
      ...mapGetters("concepts", ["getBranch"]),
      ...mapGetters("concepts", ["getConcept"]),
      //1 параметр- имя модуля//2 параметр- объект переименования поля
      //...mapGetters({ all: 'concepts/all' })//переименование
 
  }
};
</script>

// <a href="#" class="branch branch--laluce" data-branch="H037" data-branch-slug="laluce" style="">
//                                 <img src="img/choose-logos/laluce.png">
//                                 <img src="img/choose-logos/laluce-hover.png">
//                             </a>