Vue.component('editImage', {
  props: ['edit_data', 'modal'],
  data: () => ({
    effects: [],
  }),
  methods: {
    filteredOpt(effects) {
      effects.forEach(e => {
        this.effects.push(e.name)
      });
    }
  },
  template: `
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Image Filter</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <img :src="image.image_url" style="width:540px" v-if="">
            <v-layout wrap>
              
              <v-flex xs12>
                <v-text-field label="Title" v-model="image.title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" type="text" v-model="image.description" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="effects" label="Filter" required>
                </v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  `
})