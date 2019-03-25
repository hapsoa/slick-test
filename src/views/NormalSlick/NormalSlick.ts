import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';
// import '../../../node_modules/slick-carousel/slick/slick.css';

@Component({
  components: {},
})
export default class Home extends Vue {
  private mounted() {
    // $(".slider").slick({
    //   // normal options...
    //   infinite: false,
    //   // the magic
    //   responsive: [{
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       infinite: true
    //     }
    //   }, {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       dots: true
    //     }
    //   }, {
    //     breakpoint: 300,
    //     settings: "unslick" // destroys slick
    //   }]
    // });
  }
}
