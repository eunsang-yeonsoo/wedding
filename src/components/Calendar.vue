<template>
  <div
    class="uk-width-1-1"
    uk-scrollspy="target: > h3, div, hr; cls: uk-animation-fade; delay: 500"
  >
    <div>
      <h3>십이월의<br />첫번째 토요일.</h3>
      <div class="calendar uk-text-center uk-overflow-auto">
        <table>
          <caption>
            <span class="caption">2025. 12</span>
          </caption>
          <colgroup>
            <col class="calendar-col" />
            <col class="calendar-col" />
            <col class="calendar-col" />
            <col class="calendar-col" />
            <col class="calendar-col" />
            <col class="calendar-col" />
            <col class="calendar-col" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">일</th>
              <th scope="col">월</th>
              <th scope="col">화</th>
              <th scope="col">수</th>
              <th scope="col">목</th>
              <th scope="col">금</th>
              <th scope="col">토</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td class="circle">6</td>
            </tr>
            <tr>
              <td class="holiday">7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td class="holiday">14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td class="holiday">21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td class="holiday">25</td>
              <td>26</td>
              <td>27</td>
            </tr>
            <tr>
              <td class="holiday">28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr class="uk-divider-icon" />
  </div>
</template>

<style scoped>
.calendar {
  width: 100%;
  font-size: 0.8rem;
}

.calendar-col {
  width: 10%;
}

.caption {
  font-weight: 700;
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid var(--color-calendar-circle);
  background-color: var(--color-calendar-circle-color);
  color: var(--color-calendar-circle-text);
  display: inline-block;
  font-weight: 700;
}

.holiday {
  color: var(--color-calendar-holiday);
}

.time {
  display: block;
  position: relative;
  top: 5px;
  font-size: 0.7rem;
  font-weight: 700;
}

table {
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border-radius: 50px;
}

th, td {
  padding: 5px;
}
</style>
