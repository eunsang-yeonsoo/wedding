<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500"
  >
    <div>
      <h3>마음 전하실 곳</h3>
      <div class="uk-accordion-content">
        <p class="content-text">
          비대면으로 축하를 전하고자 하시는 분들을 위해 계좌번호를 기재하였습니다.
          너그러운 마음으로 양해 부탁드립니다.
        </p>
        <div>
          <ul uk-accordion="multiple: true">
            <li v-for="(group, idx) in accounts" :key="idx">
              <a class="uk-accordion-title">{{ group.title }}</a>
              <div class="uk-accordion-content">
                <dl class="uk-description-list uk-description-list-divider">
                  <template v-for="(person, pIdx) in group.people" :key="pIdx">
                    <dt>{{ person.role }}</dt>
                    <dd class="account">
                      <span v-html="person.info"></span>
                      <svg
                        class="copy-icon"
                        @click="copyToClipboard($event)"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          fill="none"
                          stroke="#000"
                          x="3.5"
                          y="2.5"
                          width="12"
                          height="16"
                        />
                        <polyline
                          fill="none"
                          stroke="#000"
                          points="5 0.5 17.5 0.5 17.5 17"
                        />
                      </svg>
                    </dd>
                  </template>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uk-accordion-title {
  letter-spacing: 10px;
  font-size: 1rem;
  font-weight: 700;
}

.uk-description-list {
  background-color: var(--color-account-background);
  border-radius: 10px;
  padding: 20px;
}

a:hover {
  color: var(--color-account-hover);
}

dt {
  letter-spacing: 5px;
  font-size: 0.8rem;
  font-weight: 700;
}

dd {
  font-size: 0.8rem;
}

.account {
  position: relative;
}

.copy-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--color-account-copy-icon);
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.copy-icon:hover {
  opacity: 1;
}
</style>

<style>
.uk-notification {
  width: auto !important;
}
.uk-notification-top-center,
.uk-notification-bottom-center {
  margin-left: 0 !important;
  transform: translateX(-50%);
}

.uk-notification-message {
  background: var(--color-account-copy-toast-background) !important;
  color: var(--color-account-copy-toast-text) !important;
  border-radius: 10px !important;
  padding: 10px 20px !important;
  font-size: 0.8rem !important;
}
</style>

<script>
export default {
  name: "AccountList",
  data() {
    return {
      accounts: [
        {
          title: "신랑측",
          people: [
            { role: "신랑", info: "3333-04-7675225<br />카카오 이은상" },
            { role: "신랑아버지", info: "352-4656-4161-33<br />농협 이병율" },
            { role: "신랑어머니", info: "601188-56-248012<br />농협 이민숙" },
          ],
        },
        {
          title: "신부측",
          people: [
            { role: "신부", info: "1002-745-935403<br />우리은행 구연수" },
            { role: "신부아버지", info: "707-20-033036<br />SC제일은행 구병문" },
            { role: "신부어머니", info: "125-20-284293<br />SC제일은행 김길순" },
          ],
        },
      ],
    };
  },
  methods: {
    copyToClipboard(event) {
      const parent = event.currentTarget.closest(".account");
      const text = parent?.querySelector("span")?.innerText?.trim();
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          UIkit.notification.closeAll();
          UIkit.notification({
            message: "클립보드에 복사되었습니다.",
            pos: "bottom-center",
            timeout: 500,
          });
        });
      }
    },
  },
};
</script>
