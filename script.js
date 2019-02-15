const server = `http://localhost:3000`

new Vue({ 
  el: '#app',
  created: function(){
    this.getAllImage()
  },
  data: {
    allPics: [],
    render: 'recent',
    edit_data: [],
    modal: false,
    allMembers: [
      {
        image: `https://www.shareicon.net/data/64x64/2016/07/07/792311_man_512x512.png`,
        fullName: `Fauzan Bintang`,
        message: `Hi all!`
      },
      {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XRE46joiP1D55BihdV6YVrnap287S85QrgDcOoI9AHVzCvxkCQ`,
        fullName: `Arie Septian`,
        message: `Hi all!`
      },
      {
        image: `https://www.shareicon.net/data/64x64/2016/07/07/792332_people_512x512.png`,
        fullName: `Theresia Coanata`,
        message: `Hi all!`
      }
    ],
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
    },
    pageStatus(status) {
      this.render = status
    },
    dialog(payload) {
      this.editData = payload
      console.log(payload)
      this.dialog = true
    }
  }
})