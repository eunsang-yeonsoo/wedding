<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > h3, div; cls: uk-animation-fade; delay: 500"
  >
    <div>
      <h3>오시는 길</h3>
      <div class="uk-accordion-content">
        <p>
          <span class="header-text">SC제일은행 본점 4층</span><br />
          <span class="content-text">서울 종로구 종로47 SC제일은행본점 4층</span>
        </p>
        <p>
          <span class="content-text"
            ><span class="uk-label uk-label-success label-color">1호선</span> 종각역 2번출구 →
            도보 이동</span
          >
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.3299839259744!2d126.97964497592102!3d37.570846672037526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e912d8323f%3A0x53062553c7a9ae8b!2zU0PsoJzsnbzsnYDtlokg7JiB7JeF67aA!5e0!3m2!1sko!2skr!4v1749278765784!5m2!1sko!2skr"
            width="100%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <hr class="uk-divider-icon" />
  </div>
</template>

<style scoped>
.header-text {
  color: var(--color-map-header);
  font-weight: 600;
}

.uk-label {
  font-size: 0.8rem;
  padding: 0 5px;
  border-radius: 10px;
  vertical-align: inherit;
  margin: 0 5px 0 0;
}

.label-color {
  background-color: #0052a4;
}
</style>
