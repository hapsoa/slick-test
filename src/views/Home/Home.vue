<template>
  <v-container pa-0 ma-0>
    <v-layout row>
      <v-btn @click="prev">왼쪽</v-btn>
      <v-flex>
        <slick
          ref="slick"
          :options="slickOptions"
          @afterChange="handleAfterChange"
          @beforeChange="handleBeforeChange"
          @breakpoint="handleBreakpoint"
          @destroy="handleDestroy"
          @edge="handleEdge"
          @init="handleInit"
          @reInit="handleReInit"
          @setPosition="handleSetPosition"
          @swipe="handleSwipe"
          @lazyLoaded="handleLazyLoaded"
          @lazyLoadError="handleLazeLoadError"
        >
          <!-- <a href="http://placehold.it/2000x1000"> -->
          <!-- <img src="http://placehold.it/2000x1000" alt> -->
          <!-- </a> -->
          <!-- <a href="http://placehold.it/2000x1000"> -->
          <!-- <img src="http://placehold.it/2000x1000" alt> -->
          <!-- </a> -->
          <!-- <a href="http://placehold.it/2000x1000"> -->
          <!-- <img src="http://placehold.it/2000x1000" alt> -->
          <!-- </a> -->
          <!-- <a href="http://placehold.it/2000x1000"> -->
          <!-- <img src="http://placehold.it/2000x1000" alt> -->
          <!-- </a> -->
          <!-- <a href="http://placehold.it/2000x1000"> -->
          <!-- <img src="http://placehold.it/2000x1000" alt> -->
          <!-- </a> -->
          <div class="rect"></div>
          <div class="rect"></div>
          <div class="rect"></div>
          <div class="rect"></div>
        </slick>
      </v-flex>

      <v-btn @click="next">오른쪽</v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./Home.ts" />

<style>
@import "../../../node_modules/slick-carousel/slick/slick.css";

.rect {
  width: 200px;
  height: 400px;
  background-color: blue;
  border: 1px solid black;
}

/* .slick-track {
  height: 400px;
}*/

.slick-slide {
  margin: 0 20px;
}
</style>
