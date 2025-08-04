<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > h3, div, hr; cls: uk-animation-fade; delay: 500"
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

/* 일반 dotnav 점: 테두리만 있는 투명 원 */
::v-deep(.uk-dotnav > * > *) {
  width: 7px;
  height: 7px;
  border: 1px solid var(--color-gallery-dotnav); /* 테두리 색상 변경 */
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s, border-color 0.3s;
}

/* 활성화된 dotnav 점: 안이 채워짐 */
::v-deep(.uk-dotnav > .uk-active > *) {
  background-color: var(--color-gallery-dotnav);   /* 안쪽 색상 */
}

/* hover 상태 - 테두리 색을 약간 진하게 */
::v-deep(.uk-dotnav > * > *:hover) {
  background-color: var(--color-gallery-dotnav);   /* 안쪽 색상 */
}
</style>
