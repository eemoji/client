
Vue.component(`navbar`, {
  data: function () {
    return {
      bottomNav: 'recent'
    }
  },
  template: `
  <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5 display-4">
      Eemoji
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="#EF5350"
    >
      <v-btn
        color="#E3F2FD"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="#E3F2FD"
        flat
        value="favorites"
      >
        <span>Upload</span>
        <v-icon>add_photo_alternate</v-icon>
      </v-btn>

      <v-btn
        color="#E3F2FD"
        flat
        value="nearby"
      >
        <span>Teams</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  `
})