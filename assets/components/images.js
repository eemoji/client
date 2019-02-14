Vue.component('images', {
  props: ['pics'],
  data: () => ({
    show: false,
    index: 0,
  }),
  template: `
  <v-card>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout row wrap align-baseline>
          <v-flex
            v-for="(card, index) in pics"
            :key="card.title"
          >
            <v-card>
              <v-img
                :src="card.image_url"
                width="100%" height="100%"
              >
                <v-container
                  fill-height
                  fluid
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>

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
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  `
})