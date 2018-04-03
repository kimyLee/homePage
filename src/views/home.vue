<template>
  <div class="home">
    <!-- todo列表 -->
    <card title="TODO-LIST" :menus="taskOption" style="margin-left: 16px;" width='965'>
      <div style="display: flex;">
        <div class="list-todo">
          <span style="display: inline-block;color: #999;padding-left: 8px;padding-bottom: 6px;">TODO</span>
          <draggable :options="options" v-model="todoCards"  style="height: 100%;" @end="saveList">
            <div v-for="taskcard in todoCards" :id="taskcard.id" class="my-item" :key="taskcard.id">
              <div class="task-card" @click="openDetail(taskcard)">
                <div class="hover-mask"></div>
                <!--勾选-->
                <div class="check-part">
                   <span class="head-img">
                      <img src="/static/img/head.jpg"/>
                   </span>
                  <!-- <el-checkbox v-model="taskcard.checked" class="check-part-box" @change="finishTask"></el-checkbox> -->
                </div>
                <!--任务内容模块-->
                <div class="content-part">
                  <div class="task-head">
                    <span class="task-infomation" :title="taskcard.title">{{taskcard.title}}</span>
                    <span class="task-infomation" style="margin-top: 3px;">
                      <span class="task-tag" v-for="tag in taskcard.tags" :key="tag">{{tag}}</span>
                    </span>
                  </div>
                </div>
                <!-- point 模块 -->
                <div class="points-part">
                  <div class="">
                    <span class="task-points" >{{taskcard.points ? 'Pos ' + taskcard.points : ''}}</span>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
          </div>
          <div class="list-todo">
            <span style="display: inline-block;color: #999;padding-left: 8px;padding-bottom: 6px;">DONE</span>
          <draggable :options="options" v-model="finishCards"  style="height: 100%;" @end="saveList">
            <div v-for="taskcard in finishCards" :id="taskcard.id" class="my-item" :key="taskcard.id">
              <div class="task-card" @click="openDetail(taskcard)">
                <div class="hover-mask"></div>
                <!--勾选-->
                <div class="check-part">
                  <span class="head-img">
                      <img src="/static/img/head.jpg"/>
                   </span>
                  <!-- <el-checkbox v-model="taskcard.checked" class="check-part-box"></el-checkbox> -->
                </div>
                <!--任务内容模块-->
                <div class="content-part">
                  <div class="task-head">
                    <span class="task-infomation" :title="taskcard.title">{{taskcard.title}}</span>
                    <span class="task-infomation" style="margin-top: 3px;">
                      <span class="task-tag" v-for="tag in taskcard.tags" :key="tag">{{tag}}</span>
                    </span>
                  </div>
                </div>
                <!-- point 模块 -->
                <div class="points-part">
                  <div class="">
                    <span class="task-points" >{{taskcard.points ? 'Pos ' + taskcard.points : ''}}</span>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
         <!-- e-chart面板 -->
        <div class="task-charts">
          <div id="taskCharts" style="width: 250px;height:250px;"></div>
          <!-- 进度条 -->
          <div class="bar-title">point:</div>
          <div class="progress-bar"><span class="progress-inner-bar" :style="{width: pointPercent + '%'}"></span></div>
          <div class="bar-title">task:</div>
          <div class="progress-bar"><span class="progress-inner-bar" :style="{width: taskPercent + '%'}"></span></div>
        </div>
      </div>
    </card>
    <!-- 天气面板 -->
    <weather></weather>
    <!-- 实验室 -->
    <demos></demos>
    <!-- 侧边详情 -->
    <right-side :is-open="isOpenSide" @close="isOpenSide = false;" width="500" body-class="task-detail-body">
      <div slot="head">
        <div style="display: inline-block;width: 80%">
          <span class="before-scroll" :class="{'scrolled' : showHeadTitle}">
            <i class="el-icon-news" style="padding-right: 5px;"></i>任务详情
          </span>
          <span class="after-scroll" :class="{'scrolled' : showHeadTitle}">
            <span class="head-img">
              <img src="/static/img/head.jpg"/>
            </span>
            <span style="vertical-align: middle">{{currentTask.title}}</span>
          </span>
        </div><div style="display: inline-block;width: 20%;vertical-align: top;">
          <el-button type="text" @click="delTask(currentTask.id)">删除任务</el-button>
        </div>
      </div>
      <div class="task-detail">
          <div class="create-task-item">
            <!-- <span style="display: inlin-block;">任务名：</span> -->
            <span class="detail-title"
            @click="detailEditTitle = true"
            v-show="!detailEditTitle">{{currentTask.title}}</span>
            <el-input
              v-myclickoutside="finishEditTitle"
              v-show="detailEditTitle"
              style="display: inline-block;width: 100%;"
              placeholder="请输入标题"
              v-model="currentTask.title">
            </el-input>
          </div>
          <div class="create-task-item">
            <P style="color: #999;padding: 8px 2px;margin: 0;">POINTS</P>
            <el-select v-model="currentTask.points" placeholder="请选择" @change="finishEditTitle" style="display: inlin-block;width: 100%;">
              <el-option
                v-for="item in pointsNum"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
          <div class="create-task-item">
            <P style="color: #999;padding: 8px 2px;margin: 0;font-size: 16px;">
              标签
              <!-- 添加标签 -->
              <el-popover
                  placement="bottom-start"
                  :visible-arrow="false"
                  v-model="addTagShow"
                  width="200"
                  trigger="click"
                  popper-class="header-setting"
                >
                <div style="padding: 8px;">
                  <el-input v-model="addingTag" style="margin-bottom: 8px;"></el-input>
                  <div style="float: right;over-flow: hidden;padding-bottom: 8px;">
                    <el-button size="mini" type="text" @click="addTagShow = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="confirmAddTag">确定</el-button>
                  </div>
                </div>
                   <el-button type="text"
                    slot="reference"
                    style="margin-left: 16px;"
                    icon="el-icon-circle-plus"
                    >
                    添加标签
                  </el-button>
                </el-popover>
              </P>
            <el-select
            v-model="currentTask.tags"
            @change="finishEditTitle"
            multiple
            placeholder="请选择"
            style="display: inlin-block;width: 100%;">
              <el-option
                v-for="item in allTags"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </div>
          <!-- 骨架图 -->
          <div v-for="i in 17" :key="i"><img src="/static/img/bone.jpg" style="width: 100%;"></div>
      </div>
    </right-side>
    <!-- 创建任务弹窗 -->
    <el-dialog title="创建任务" :visible.sync="showCreateTaskForm" custom-class="task-form" :close-on-click-modal="false">
      <div>
        <div class="create-task-item">
          <span style="display: inlin-block;">任务名：</span>
          <el-input
            style="display: inline-block;width: 90%;"
            placeholder="请输入标题"
            v-model="addingTask.title">
          </el-input>
        </div>
        <div class="create-task-item">
          points：
          <el-select v-model="addingTask.points" placeholder="请选择" style="display: inlin-block;width: 90%;">
            <el-option
              v-for="item in pointsNum"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="create-task-item">
          <span style="display: inline-block;width: 56px">
            标签：
          </span>
          <el-select v-model="addingTask.tags" multiple placeholder="请选择" style="display: inlin-block;width: 90%;">
            <el-option
              v-for="item in allTags"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showCreateTaskForm = false">取 消</el-button>
        <el-button type="primary" @click="createTask()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import card from '@/components/card.vue'
import rightSide from '@/components/rightSide.vue'
import weather from '@/components/weather.vue'
import demos from '@/components/demos.vue'
import * as echarts from 'echarts'
export default {
  name: 'home',
  components: { card, draggable, rightSide, weather, demos },
  data () {
    return {
      loading: false,                // 是否正在加载数据，是则不触发change
      isOpenSide: false,             // 是否打开侧边栏
      showHeadTitle: false,          // 是否显示侧边栏滚动标题
      detailEditTitle: false,        // 是否编辑标题
      showCreateTaskForm: false,     // 是否显示创建任务弹窗
      pointsNum: [1, 2, 3, 5, 8, 13, 21],     // 斐波那契数列
      allTags: ['http', '算法'],     // 所有的标签列表
      taskOption: [                  // 任务卡片列表配置
        {
          title: '创建任务',
          icon: 'el-icon-plus',
          cb () {
            this.showCreateTaskForm = true
          }
        }
      ],
      options: {                     // 拖拽配置
        group: 'task',
        animation: 100,
        draggable: '.my-item',
        forceFallback: true
      },
      todoCards: [                   // 待办事项
        {
          id: 1,
          checked: false,
          points: 3,
          title: '示例任务',
          creator: 'lee',
          tags: ['http', '算法']
        },
        {
          id: 2,
          checked: false,
          points: 3,
          title: '示例任务2',
          creator: 'lee'
        }
      ],
      finishCards: [
        {
          id: 3,
          checked: true,
          title: '试试试试试试试试试试试试试试试试试试试试试试试试试试试试试试试试试试',
          creator: 'lee',
          tags: ['http', '算法']
        },
        {
          id: 4,
          checked: true,
          points: 3,
          title: '试试2',
          creator: 'lee'
        }
      ],
      addingTask: {
        title: '',
        tags: [],
        points: ''
      },
      scrollCallback: '',                  // 滚动事件回调
      timer: '',                           // 滚动事件计时器
      currentTempTask: {},                     // 详情暂存数据
      currentTask: {},                      // 当前详情任务
      addTagShow: false,
      addingTag: '',
      myChart: ''
    }
  },
  created () {
    this.getList()
    this.allTags = JSON.parse(localStorage.getItem('allTags')) || this.allTags
  },
  mounted () {
    this.$nextTick(() => {
      // this.myChart = echarts.init(document.getElementById('taskCharts'))
      this.initCharts()
      // 绑定详情滚动事件
      this.scrollCallback = (e) => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          let $target = e.target || e.srcElement
          this.showHeadTitle = $target.scrollTop > 100
        }, 200)
      }
      document.querySelector('.task-detail-body').addEventListener('scroll', this.scrollCallback)
    })
  },
  destroyed () {
    document.querySelector('.task-detail-body').removeEventListener('scroll', this.scrollCallback)
  },
  watch: {
    taskPercent () {
      this.initCharts()
    }
  },
  computed: {
    taskPercent () {
      return (this.finishCards.length / (this.todoCards.length + this.finishCards.length)).toFixed(2) * 100
    },
    pointPercent () {
      let finishPoint = this.finishCards.reduce((sum, cur) => {
        return sum + (cur.points || 0)
      }, 0)
      let todoPoint = this.todoCards.reduce((sum, cur) => {
        return sum + (cur.points || 0)
      }, 0)
      return (finishPoint / (todoPoint + finishPoint)).toFixed(2) * 100
    }
  },
  methods: {
    initCharts () {
      // echarts.dispose(document.getElementById('taskCharts'))
      this.myChart = echarts.init(document.getElementById('taskCharts'))
      // 指定图表的配置项和数据
      var option = {
        color: ['#9bd5dc', 'rgba(155, 213, 220, 0.5)'],
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        // legend: {
        //   // orient: 'vertical',
        //   x: 'left',
        //   data: ['已完成', '未完成']
        // },
        series: [
          {
            // name: '访问来源',
            hoverAnimation: false,
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: this.finishCards.length, name: '已完成'},
              {value: this.todoCards.length, name: '未完成'}
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    },
    getList () {
      this.todoCards = JSON.parse(localStorage.getItem('todoCards')) || this.todoCards
      this.finishCards = JSON.parse(localStorage.getItem('finishCards')) || this.finishCards
    },
    // 检查现在的顺序
    saveList () {
      localStorage.setItem('todoCards', JSON.stringify(this.todoCards))
      localStorage.setItem('finishCards', JSON.stringify(this.finishCards))
    },
    // 创建任务
    createTask () {
      let id = this.finishCards.length + this.todoCards.length + 1
      if (!this.addingTask.title) {
        this.$message.warning('任务标题不能为空')
        return
      }
      this.loading = true
      this.todoCards.push({
        id,
        title: this.addingTask.title,
        tags: this.addingTask.tags,
        points: this.addingTask.points
      })
      this.saveList()
      this.$nextTick(() => {
        this.loading = false
      })
      this.showCreateTaskForm = false
    },
    // 删除任务
    delTask (id) {
      this.$confirm('确定删除该任务?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for (let i = this.todoCards.length; i--;) {
          let e = this.todoCards[i]
          if (e.id === this.currentTask.id) {
            this.todoCards.splice(i, 1)
            break
          }
        }
        for (let i = this.finishCards.length; i--;) {
          let e = this.finishCards[i]
          if (e.id === this.currentTask.id) {
            this.finishCards.splice(i, 1)
            break
          }
        }
        this.saveList()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 查看详情
    openDetail (taskcard) {
      this.loading = true
      this.currentTempTask = JSON.parse(JSON.stringify(taskcard))
      this.currentTask = JSON.parse(JSON.stringify(taskcard))
      this.isOpenSide = true
      this.$nextTick(() => {
        this.loading = false
      })
    },
    // 编辑标题
    finishEditTitle () {
      if (this.loading || !this.isOpenSide) {
        return false
      }
      console.log('edit end')
      if (this.currentTask.title) {
        for (let i = this.todoCards.length; i--;) {
          let e = this.todoCards[i]
          if (e.id === this.currentTask.id) {
            this.$set(this.todoCards, i, this.currentTask)
            break
          }
        }
        for (let i = this.finishCards.length; i--;) {
          let e = this.finishCards[i]
          if (e.id === this.currentTask.id) {
            this.$set(this.finishCards, i, this.currentTask)
            break
          }
        }
        this.saveList()
        this.currentTempTask = JSON.parse(JSON.stringify(this.currentTask))
        setTimeout(() => {
          this.getList()
        }, 100)
      } else {
        this.$message.warning('任务标题不能为空')
        this.currentTask = JSON.parse(JSON.stringify(this.currentTempTask))
        // this.getList()
      }
      this.detailEditTitle = false
    },
    // 创建标签
    addTags () {
    },
    confirmAddTag () {
      if (this.addingTag) {
        this.allTags.push(this.addingTag)
        localStorage.setItem('allTags', JSON.stringify(this.allTags))
        this.addTagShow = false
        this.$nextTick(() => {
          this.currentTask.tags.push(this.addingTag)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.home {
  padding: 16px 8px;
  height: calc(100vh - 92px);
  .list-todo {
    width: 350px;
    display: inline-block;
    vertical-align: top;
    min-height: 350px;
    padding: 8px 0;
    background: #eee;
    margin-right: 8px;
    // -webkit-box-flex: 1;
    // -ms-flex: 1 1 auto;
    // flex: 1 1 auto;
  }
  .task-charts {
    display: inline-block;
    .bar-title {
        padding-left: 4px;
        padding-bottom: 4px;
        color: #444;
      }
    .progress-bar {
      margin-bottom: 16px;
      width: 250px;
      height: 20px;
      border: 1px solid #eee;
      box-sizing: border-box;
      position: relative;
      .progress-inner-bar {
        transition: width .4s ease;
        display: inline-block;
        // width: 50%;
        height: 100%;
        background: #9bd5dc;
      }
    }
  }
  .task-card {
      display: flex;
      position: relative;
      // max-height:100px;
      background-color: white;
      margin:0px 5px 5px 5px;
      border-radius: 5px;
      cursor: move;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      .check-part {
        display: inline-block;
        // 头像
        .head-img {
           margin: 6px 8px 0 8px;
          width: 30px;
          height: 30px;
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .check-part-box {
          width: 50px;
          text-align: center;
          // vertical-align: middle;
        }
        .el-checkbox__inner {
          transform: scale(1.5);
          margin-top: 15px;
          /* margin-top: 14px;
          width: 24px;
          height: 24px; */
        }
      }
      &:hover .hover-mask{
        position: absolute;
        width:5px;
        transition: .4s width;
      }
      .hover-mask {
        position: absolute;
        left: 0px;
        top:0px;
        bottom:0px;
        width:0px;
        border-radius: 4px 0 0 4px;
        background-color: #A6A6A6;
        opacity: .7;
      }
      .icon-part {
        width:20px;
        height:20px;
        margin: 14px 8px 0px 10px;
      }
      .content-part {
        width:140px;
        padding:10px 10px 10px 0px;
        flex:1;
        .task-head {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          min-height: 26px;
          // span,i {
          //   display: inline-block;
          //   // height:30px;
          //   line-height: 30px;
          // }
          .task-infomation {
            width: 100%;
            // white-space:nowrap;
            // text-overflow:ellipsis;
            // overflow:hidden;
          }
          .task-tag {
            padding-left: 12px;
            position: relative;
            color: #666;
            font-size: 12px;
            margin-right: 6px;
            &:before {
              content: '';
              position: absolute;
              background-color: #21a0f2;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              top: 4px;
              left: 0;
            }
          }
          .head-portrait {
            font-size: 6px;
            width:30px;
            text-align: center;
            border-radius: 99em;
            margin-left: 10px;
            color: white;
          }
        }
        .task-deadline {
          font-size: 6px;
          height:20px;
          line-height: 20px;
          max-width: 80px;
          text-align: center;
          border-radius:4px;
          background-color: #3da8f5;
          color: white;
        }
        .task-info {
          display: flex;
          height:30px;
          span {
            display:inline-block;
            height:30px;
            line-height: 30px;
          }
          .responser {
            flex:2;
            color:#A6A6A6;
            .tab-label {
              display: inline-block;
              width:6px;
              height:6px;
              border-radius: 3px;
              background-color: #3da8f5;
              margin-right: 4px;
            }
          }
        }
      }
      .points-part {
        color: #999;
        text-align: right;
        padding-right: 8px;
        padding-top: 14px;
        width: 60px;
        font-size: 14px;
      }
    }
    // 任务详情
    .before-scroll {
      color: #3da8f5;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 60px;
      transition: transform .4s;
      transform: translateY(0);
      &.scrolled {
        transform: translateY(-100%);
      }
    }
    .after-scroll {
        display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 60px;
      transition: transform .4s;
      transform: translateY(0);
      &.scrolled {
        transform: translateY(-100%);
      }
      // 头像
      .head-img {
        margin: 0 8px 0 8px;
        width: 35px;
        height: 35px;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .task-detail {
      height: 1900px;
      .create-task-item {
        margin-bottom: 16px;
      }
      .detail-title {
        display: inline-block;
        cursor: pointer;
        width: 100%;
        min-height: 40px;
        line-height: 40px;
      }
    }
    /*拖拽样式显示*/
    .sortable-fallback {
      opacity: 1!important;
      .task-card {
        box-shadow: 6px 6px 15px #999;
        transform: rotate(3deg) translateZ(0);
      }
    }
    .sortable-ghost {
      background-color: #ccc;
      .task-card {
        opacity: 0;
      }
    }
}
// 创建任务弹窗样式
.task-form {
  .create-task-item {
    margin-bottom: 16px;
  }
}

</style>
