<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > h3, div; cls: uk-animation-fade; delay: 500"
  >
    <div>
      <h3>갤러리</h3>
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="autoplay: true"
      >
        <ul class="uk-slider-items uk-child-width-1-1">
          <li v-for="index in 15" :key="index">
            <img :src="`/wedding/img/gallery/${index}.jpg`" />
            <div class="uk-position-center uk-panel"></div>
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
    <hr class="uk-divider-icon" />
  </div>
</template>

<style scoped>
.uk-label {
  font-size: 0.8rem;
  padding: 0 5px;
  border-radius: 10px;
  vertical-align: inherit;
  margin: 0 5px 0 0;
}
</style>
