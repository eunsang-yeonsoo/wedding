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
            ><span class="uk-label uk-label-success label-color">1호선</span> 종각역
            2번출구 → 도보 이동</span
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
        <div class="button-div">
          <button
            onclick="window.open('https://map.naver.com/p/search/SC%EC%A0%9C%EC%9D%BC%EC%9D%80%ED%96%89%20%EB%B3%B8%EC%A0%90/place/12080926')"
            class="uk-button uk-button-default width-1-3"
          >
            <img class="icon" src="/icon/naver.webp" />네이버지도
          </button>
          <button
            onclick="window.open('tmap://route/?goalname=SC%EC%A0%9C%EC%9D%BC%EC%9D%80%ED%96%89%20%EB%B3%B8%EC%A0%90&goalx=126.9822199&goaly=37.5708467')"
            class="uk-button uk-button-default width-1-3"
          >
            <img class="icon" src="/icon/tmap.svg" />티맵
          </button>
          <button onclick="shareLocation()" class="uk-button uk-button-default width-1-3">
            <img class="icon" src="/icon/kakao.png" />카카오내비
          </button>
        </div>
      </div>
    </div>
    <hr class="uk-divider-icon" />
  </div>
</template>

<style scoped>
.width-1-3 {
  width: calc((100% * 1 / 3.001) - 2px);
}

@media (max-width: 370px) {
  .width-1-3 {
    width: 100% !important;
    margin-bottom: 8px;
  }
}

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

.button-div {
  width: 100%;
  padding-top: 20px;
  text-align: center;
}

.button-div > button {
  padding: 5px;
  margin: 1px;
  background-color: #fff;
  border-radius: 5px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.button-div > button:hover {
  border: 1px solid #e5e5e5;
  opacity: 1;
}

.icon {
  width: 25px;
  padding-right: 2px;
  margin-top: -4px;
}
</style>
