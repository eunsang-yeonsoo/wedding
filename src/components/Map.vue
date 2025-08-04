<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > div>h3, div.uk-accordion-content, div#map, div.button-div, hr; cls: uk-animation-fade; delay: 500"
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
        <div id="map"></div>
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

#map {
  width: 100%;
  height: 300px;
}
</style>
<script>
export default {
  name: "Map",
  mounted() {
    if (typeof kakao === "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8112831c106e7f974e63fd1f8b1484b0&autoload=false";
      script.onload = () => {
        kakao.maps.load(this.initMap);
      };
      document.head.appendChild(script);
    } else {
      kakao.maps.load(this.initMap);
    }
  },
  methods: {
    initMap() {
      const LAT = 37.5708467;
      const LNG = 126.9822199;
      const PLACE_NAME = "SC제일은행 본점";
      const ADDRESS = "서울 종로구 종로47";

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(LAT, LNG),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      const markerPosition = new kakao.maps.LatLng(LAT, LNG);

      // marker
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      // info window
      const infoContent = `
        <div style="padding:10px; font-size:12px; line-height:150%;">
          <strong>${PLACE_NAME}</strong><br/>
          ${ADDRESS}<br/>
          <a href="https://map.kakao.com/link/to/${encodeURIComponent(
            PLACE_NAME
          )},${LAT},${LNG}" target="_blank" style="color:#007aff; font-weight:bold;">길찾기</a>
        </div>
      `;

      const infowindow = new kakao.maps.InfoWindow({
        content: infoContent,
        removable: true,
      });

      infowindow.open(map, marker);
      
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    },
  },
};
</script>
