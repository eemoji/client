
Vue.component(`navbar`, {
  data: function () {
    return {
      bottomNav: 'recent',
    }
  },
  methods: {
    renderPage(status) {
      this.$emit('page-status', status)
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
        @click.prevent="renderPage('recent')"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="#E3F2FD"
        flat
        value="favorites"
        @click.prevent="renderPage('upload')"
      >
        <span>Upload</span>
        <v-icon>add_photo_alternate</v-icon>
      </v-btn>

      <v-btn
        color="#E3F2FD"
        flat
        value="nearby"
        @click.prevent="renderPage('teams')"
      >
        <span>Teams</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  `
})