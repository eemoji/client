const server = `http://localhost:3000`

new Vue({ 
  el: '#app',
  created: function(){
    this.getAllImage()
  },
  data: {
    allPics: [],
    allMembers: [],
    index: 0,
  },
  methods: {
    getAllImage() {
      axios.get(`${server}/images`)
        .then(({data}) => {
          data.forEach(img => {
            img.flex = (Math.round(Math.random()) + 1) * 3
          });
          this.allPics = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})