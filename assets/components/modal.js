Vue.component('editImage', {
  props: ['edit_data', 'dialog'],
  data: () => ({
    effects: ['al_dente','athena','audrey','aurora','daguerre','eucalyptus','fes','frost','hairspray','hokusai','incognito','linen','peacock','primavera','quartz','red_rock','refresh','sizzle','sonnet','ukulele','zorro'],
    newEffect: null,
    newImageUrl: ``,
  }),
watch: {
  newEffect: function() {
    this.edit_data.effects.forEach(e => {
      if (e.name == this.newEffect) {
        this.newImageUrl = e.url
        console.log(this.newImageUrl)
      }
  });
  }
},
  methods: {
    generateEffects() {
      this.edit_data.effects.forEach(e => {
          if (e.name == this.newEffect) {
            this.newImageUrl = e.url
          }
      });
    },
    closeDialog(){
      this.$emit(`close_dialog`, false)
    },
    uploadFile() {
      let obj = {
        title: this.edit_data.title,
        description: this.edit_data.description,
        image_url: this.newImageUrl
      }
      // let newData = new FormData()
      // newData.append(`data`, JSON.stringify(obj))
      axios.put(`${server}/images/${this.edit_data._id}`, obj)
        .then(({data}) => {
          console.log(data)
          this.closeDialog()
        })
        .catch(err =>{
          console.log(err)
        })
      
    }
  },
  template: `
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Image Filter</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <img :src="edit_data.image_url" style="width:540px" v-if="!newEffect">
            <img :src="newImageUrl" style="width:540px" v-if="newEffect">
            <v-layout wrap>
              
              <v-flex xs12>
                <v-text-field label="Title" v-model="edit_data.title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" type="text" v-model="edit_data.description" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="effects" v-model="newEffect" label="Filter"  @click="generateEffects" required>
                </v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.prevent="uploadFile">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  `
})