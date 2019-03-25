<template>
  <v-container pa-0 ma-0>
    <v-layout row>
      <v-flex xs1>
        <v-btn @click="prev">왼쪽</v-btn>
      </v-flex>
      <v-flex xs10>
        <SlickComponent ref="slickComponent"></SlickComponent>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="next">오른쪽</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./Home.ts" />

<style lang='scss' scoped>
// @import "../../../node_modules/slick-carousel/slick/slick.css";

/* .slick-track {
  height: 400px;
}*/

// .slick-slide {
//   margin: 0 20px;
// }
</style>
