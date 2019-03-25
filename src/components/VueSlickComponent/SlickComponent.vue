<template>
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
    <div class="rect"></div>
    <div class="rect"></div>
    <div class="rect"></div>
    <div class="rect"></div>
  </slick>
</template>

<script lang='ts' src='./SlickComponent.ts' />

<style scoped lang='scss'>
.rect {
  // width: 200px;
  height: 400px;
  background-color: blue;
  border: 1px solid black;
}

/* .slick-track {
  height: 400px;
}*/

// .slick-slide {
//   margin: 0 20px;
// }
</style>