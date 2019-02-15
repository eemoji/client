Vue.component('upload', {
    template: `
    <v-content>
    <v-container fluid>

      <v-form ref="form" lazy-validation>
        <v-text-field v-model="title" label="Title" required></v-text-field>

        <v-text-field v-model="description" label="Description" required></v-text-field>

        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
          <img :src="image_url" height="150" v-if="image_url" />
          <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
          <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
        </v-flex>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Hello World!</v-card-title>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn color="success" @click.prevent="uploadImage">
          Post
        </v-btn>
      </v-form>
    </v-container>
  </v-content>
  `,
    data: function () {
      return {
        title: '',
        description: '',
        image_url: '',
        dialog: false,
        imageName: '',
        imageFile: ''
      }
    },
    methods: {

    },

  })