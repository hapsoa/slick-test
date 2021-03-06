import { Component, Vue } from 'vue-property-decorator';
import Slick from 'vue-slick';

@Component({
  components: {
    slick: Slick,
  },
})
export default class SlickComponent extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    slick: any;
  };

  public slickOptions = {
    slidesToShow: 3,
    // Any other options that can be got from plugin documentation
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          // dots: true,
        },
      },
      // {
      //   breakpoint: 300,
      //   settings: "unslick" // destroys slick
      // }
    ],
  };

  public next() {
    this.$refs.slick.next();
  }

  public prev() {
    this.$refs.slick.prev();
  }

  public reInit() {
    // Helpful if you have to deal with v-for to update dynamic lists
    this.$nextTick(() => {
      this.$refs.slick.reSlick();
    });
  }

  // Events listeners
  public handleAfterChange(event: any, slick: any, currentSlide: any) {
    console.log('handleAfterChange', event, slick, currentSlide);
  }
  public handleBeforeChange(
    event: any,
    slick: any,
    currentSlide: any,
    nextSlide: any,
  ) {
    console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
  }
  public handleBreakpoint(event: any, slick: any, breakpoint: any) {
    console.log('handleBreakpoint', event, slick, breakpoint);
  }
  public handleDestroy(event: any, slick: any) {
    console.log('handleDestroy', event, slick);
  }
  public handleEdge(event: any, slick: any, direction: any) {
    console.log('handleEdge', event, slick, direction);
  }
  public handleInit(event: any, slick: any) {
    console.log('handleInit', event, slick);
  }
  public handleReInit(event: any, slick: any) {
    console.log('handleReInit', event, slick);
  }
  public handleSetPosition(event: any, slick: any) {
    console.log('handleSetPosition', event, slick);
  }
  public handleSwipe(event: any, slick: any, direction: any) {
    console.log('handleSwipe', event, slick, direction);
  }
  public handleLazyLoaded(
    event: any,
    slick: any,
    image: any,
    imageSource: any,
  ) {
    console.log('handleLazyLoaded', event, slick, image, imageSource);
  }
  public handleLazeLoadError(
    event: any,
    slick: any,
    image: any,
    imageSource: any,
  ) {
    console.log('handleLazeLoadError', event, slick, image, imageSource);
  }
}
