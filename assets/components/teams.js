Vue.component(`teams`, {
  props: ['members'],
  data: function () {
    return {

    }
  },
  template: `
  <div>
  <br><br><br>
  <h1 display-4> &ensp; Our Team Members</h1>
  <br><br><br>
  <v-timeline>
    <v-timeline-item
      v-for="(member, n) in members"
      :key="n"
      large
    >
      <v-avatar slot="icon">
        <img :src="member.image">
      </v-avatar>
      <span slot="opposite">{{member.fullName}}</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ member.message}}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
  `
})