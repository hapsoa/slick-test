import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import $ from 'jquery';
// import '../../../node_modules/slick-carousel/slick/slick.css';
import SlickComponent from '@/components/VueSlickComponent/SlickComponent.vue';
import SlickComponentTs from '@/components/VueSlickComponent/SlickComponent.ts';

@Component({
  components: {
    SlickComponent,
  },
})
export default class Home extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    slickComponent: SlickComponentTs;
  };

  public next() {
    this.$refs.slickComponent.next();
  }

  public prev() {
    this.$refs.slickComponent.prev();
  }
}
