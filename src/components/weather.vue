<template>
   <card title="" :width="400" class="my-weather">
      <div class="weather-top">
        <div>
          <span class="weather-tmp">
            <span style="font-size: 56px;">20°</span><br>
            <span style="font-size: 16px;">广州&nbsp;&nbsp;&nbsp;{{today}}</span><br>
            <span style="font-size: 20px;text-align: right;">多云</span>
          </span>
          <span class="weather-icon">
            <img src='/static/weather/day/01.png'>
          </span>
        </div>
         <svg id="svg-area" width="400" height="100" class="svg-area">
          <path fill="rgba(255, 255, 255, 0.4)"></path>
          <path fill="rgba(255, 255, 255, 0.6)"></path>
        </svg>
      </div>
      <div class="note">
        <el-input
          @input='toSaveNote'
          class="myNote"
          type="textarea"
          :rows="9"
          placeholder="请输入内容"
          v-model="myNote">
        </el-input>
      </div>
    </card>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name: 'weather',
  components: { card },
  data () {
    return {
      today: '',
      myNote: '',
      timer: ''
    }
  },
  methods: {
    toSaveNote () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.saveNote()
      }, 1000)
    },
    saveNote () {
      localStorage.setItem('myNote', JSON.stringify(this.myNote))
    },
    getNote () {
      this.myNote = JSON.parse(localStorage.getItem('myNote'))
    }
  },
  mounted () {
    this.getNote()
    this.today = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][(new Date()).getDay()]
    this.$nextTick(() => {
      /* eslint-disable */
      let d3 = window.d3
      var svg_height = 100
      var svg_width = 400
      var wave_data = [[],[]]
      var area = d3.area().y0(svg_height).curve(d3.curveBasis)   //curve会进行平滑处理
      var svg_paths = []
      var max = 100   //控制速度
      for (let i = 0; i < max; i++) {
        var r = i / max * 2
        wave_data[0].push(r)           //波浪一
        wave_data[1].push(r + 1)       //波浪二（+1代表偏移π）
      }
      var d = svg_width / (wave_data[0].length - 1)
      svg_paths.push(d3.select('#svg-area path:first-child'))
      svg_paths.push(d3.select('#svg-area path:last-child'))
      function area_generator(data) {
        var wave_height = 0.15     //波浪高度
        var area_data = data.map(function(y, i) {
          return [i * d, svg_height * (1 - (wave_height * Math.sin(y * Math.PI) + 2) / 3)]  //+2将范围[-1,1]转成[1,3]
        })
        return function() {
          return area(area_data)
        }
      }
      function renderWave() {
        svg_paths.forEach(function(svg_path, i) {
          svg_path.attr('d', area_generator(wave_data[i]))
          wave_data[i] = getNextData(wave_data[i])
        })
        requestAnimationFrame(renderWave)
      }
      function getNextData(data) {
        var r = data.slice(1)
        r.push(data[0])
        return r
      }
      requestAnimationFrame(renderWave)
    })
    /* eslint-enable */
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.my-weather {
  padding: 0;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  margin-left: 16px;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,.1);
  .g-card-body {
    padding: 0;
  }
}
.weather-top {
  height: 200px;
  background: #9bd5dc;
  position: relative;
  .weather-tmp {
    display: inline-block;
    float: right;
    padding-right: 12px;
    color: #fff;
    font-family: sans-serif;
    // font-size: 64px;
    vertical-align: top;
  }
  .weather-icon {
    display: inline-block;
    float: left;
    padding-left: 12px;
  }
  .svg-area {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.note {
  background: linear-gradient(to bottom, #e7f5f7, #fff);
  // background-color: #cae8fc;
}
.myNote {
    .el-textarea__inner {
      background: none;
      font-size: 18px;
      color: #21a0f2;
      font-family: '微软雅黑';
      border: none;
       outline: none;
        resize: none;
    }
  }
</style>
