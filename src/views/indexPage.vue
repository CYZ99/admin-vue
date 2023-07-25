<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import indexCard from '@/components/indexCard.vue'
import { ElMessage } from 'element-plus';
import useUserStore from '@/stores/userStore'
import * as echarts from 'echarts'
import CountTo from '@/components/CountTo.vue';


const pie = ref<HTMLElement>()
const pieTwo = ref<HTMLElement>()
const userStore = useUserStore()

const colorObj = {
  green: '#00B42A',
  blue: '#3491FA',
  yellow: '#FADC19'
}

const accessNum = ref(855)
const isFinsh = ref(false)
const listItem = ref('')
const todoList = reactive<string[]>([
  '首页搭建',
  '首页集成Echart',
  '后端邮箱接口设计'
])

const handleAddListItem = () => {
  if (listItem.value === '') {
    ElMessage.error('请输入内容在提交')
    return
  }
  todoList.push(listItem.value)
  listItem.value = ''
}

const handleDeleteListItem = (index: number) => {
  todoList.splice(index, 1)
}

onMounted(() => {
  const myChart = echarts.init(pie.value!)
  const options: echarts.EChartsOption = {
    title: {
      text: 'Build Website',
      subtext: 'font-end',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'JS' },
          { value: 700, name: 'Vue' },
          { value: 700, name: 'React' },
          { value: 484, name: 'Node' },
          { value: 300, name: 'Css' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(options)
  const myChartTwo = echarts.init(pieTwo.value!)
  const optionsTwo: echarts.EChartsOption = {
      xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
  myChartTwo.setOption(optionsTwo)
})

</script>

<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :span="9">
        <indexCard>
          <template #header>
            <div class="flex flex-items-center">
              <el-avatar :size="50" :src="userStore.avatar"/>
              <div class="ml-2">管理员 CYZ99</div>
            </div>
          </template>
          <template #body>
            <div class="demo-progress">
              <span class="font-class">页面布局</span>
              <el-progress :percentage="80" :color="colorObj.green" striped striped-flow :duration="20" />
              <span class="font-class">接口设计</span>
              <el-progress :percentage="66" :color="colorObj.yellow" striped striped-flow :duration="20" />
              <span class="font-class">数据库设计</span>
              <el-progress :percentage="50" :color="colorObj.blue" striped striped-flow :duration="20" />
            </div>
          </template>
        </indexCard>
      </el-col>
      <el-col :span="6">
        <indexCard>
          <template #header>
            <div class="flex flex-col flex-items-center">
              <div class="font-class">本月访问人数</div>
              <div class="mb-4 mt-2 font-big-class">
                <CountTo :value="accessNum"></CountTo>
              </div>
              <div class="font-class">增加<span class="up-ratio">{{ '24%' }}</span></div>
            </div>
          </template>
          <template #body>
            <div class="flex flex-col flex-items-center">
              <div class="font-class">本月访问人数</div>
              <div class="mb-4 mt-2 font-big-class">
                <CountTo :value="accessNum"></CountTo>
              </div>
              <div class="font-class">下降<span class="drow-ratio">{{ '24%' }}</span></div>
            </div>
          </template>
        </indexCard>
      </el-col>
      <el-col :span="9">
        <indexCard>
          <template #header>
            <div class="flex flex-justify-between">
              <el-input v-model="listItem" placeholder="新增待办事项" />
              <div class="btn-class" @click="handleAddListItem">+</div>
            </div>
          </template>
          <template #body>
            <div class="list-wrapper">
              <div v-for="(item, index) in todoList" :key="item" class="list-item">
                <input type="checkbox" :value="isFinsh">
                <span>{{ item }}</span>
                <el-icon @click="handleDeleteListItem(index)"><DeleteFilled /></el-icon>
              </div>
            </div>
          </template>
        </indexCard>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-4">
      <el-col :span="9">
        <indexCard>
          <template #header>
            <div class="font-700">技术重要程度</div>
          </template>
          <template #body>
            <div class="pie-container" ref="pie"></div>
          </template>
        </indexCard>
      </el-col>
      <el-col :span="15">
      <indexCard>
          <template #header>
            <div class="font-700">Echarts</div>
          </template>
          <template #body>
            <div class="pie-container" ref="pieTwo"></div>
          </template>
        </indexCard></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.index-container{
  margin-top: 10px;
}
.statistic-footer{
  font-size: 10px;
}
.font-class{
  font-size: 12px;
  font-weight: 400;
}
.up-ratio{
  margin-top: 10px;
  position: relative;
  margin-left: 2px;
  color: #00B42A;
}
.up-ratio::after{
  position: absolute;
  left: 26px;
  content:'';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-bottom:6px solid #00B42A;
}
.drow-ratio{
  margin-top: 10px;
  position: relative;
  margin-left: 2px;
  color: #F53F3F;
}
.drow-ratio::after{
  position: absolute;
  left: 26px;
  top: 6px;
  content:'';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top:6px solid #F53F3F;
}
.font-big-class{
  font-size: 20px;
}
.list-wrapper{
  height: 118px;
  overflow-y: auto;
}
.list-item{
  padding: 6px;
  color:#7a427d9b;
  margin-top: 8px;
  background-color: #DDBEF6;
  display: flex;
  justify-content: space-between;
}

.btn-class{
  width: 22px;
  height: 22px;
  color:#fff;
  margin-left: 4px;
  margin-top: 4px;
  text-align: center;
  line-height: 22px;
  background-color: #3863db;
  border-radius: 50%;
}
.pie-container{
  height: 36vh;
  width: 100%;
}
</style>