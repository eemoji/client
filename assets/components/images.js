Vue.component('images', {
  props: ['pics'],
  data: () => ({
    show: false,
    index: '',
  }),
  template: `
  <div class="masonryholder">
    <div class="masonryblocks" v-for="image in pics">
        <img :src="image.image_url"><br>
        <h2>{{ image.title }}</h2>
        <p v-if="image.description">{{ image.description }}</p>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
  
    </div>
  </div>
  `
})