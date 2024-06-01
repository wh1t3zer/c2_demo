<template>
  <a-layout id="app-layout-header">
    <a-layout-header
      theme="light"
      class="layout-header"
      height="64"
      lineHeight="64"
    >
    <div class="menu_button">
      <img class="pic-logo" src="@/assets/logo.png"/>
    </div>
      <a-button type="text" class="menu_button">
        <div class="menu_button-content">
          <SettingTwoTone />
          <span class="menu_button-text">系统设置</span>
        </div>
      </a-button>
      <a-button type="text" class="menu_button">
        <div class="menu_button-content">
          <FileAddTwoTone />         
        <span class="menu_button-text">服务生成</span>
        </div>
      </a-button>
      <a-button type="text" class="menu_button">
        <div class="menu_button-content">
          <ToolTwoTone />
        <span class="menu_button-text">实用工具</span>
        </div>
      </a-button>
      <a-button type="text" class="menu_button">
        <div class="menu_button-content">
          <QuestionCircleTwoTone />          
        <span class="menu_button-text">关于程序</span>
        </div>
      </a-button>
      <a-button type="text" class="menu_button">
        <div class="menu_button-content">
          <CloseCircleTwoTone />          
        <span class="menu_button-text">退出程序</span>
        </div>
      </a-button>
      <!-- 添加时钟和日期 -->
      <div class="clock">
        <span class="current-date">{{ currentDate }}</span>
        <span class="current-time">{{ currentTime }}</span>
      </div>
    </a-layout-header>
  </a-layout>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AppHeader',
  setup() {
    const currentDate = ref('');
    const currentTime = ref('');

    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };

    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    onMounted(() => {
      currentDate.value = getCurrentDate();
      currentTime.value = getCurrentTime();
      setInterval(() => {
        currentTime.value = getCurrentTime();
      }, 1000);
    });

    return {
      currentDate,
      currentTime,
    };
  },
};
</script>

<style lang="less" scoped>
#app-layout-header {
  .logo {
    border-bottom: 1px solid #e8e8e8;
  }
  .pic-logo {
    height: 32px;
    margin: 10px;
  }
  .layout-header {
    display: flex;
    background-color: #fff;
    align-items: center; /* 垂直居中对齐 */
  }
  .menu_button {
    height: auto; 
    background-color: #fff;
    display: flex;
    flex-direction: column; /* 使子元素垂直排列 */
    align-items: center; /* 水平居中对齐 */
    padding: 15px; /* 根据需要调整内边距 */
    margin-right: 10px;
  }
  .menu_button-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中对齐 */
    width: 100%; /* 确保内容宽度100% */
  }
  .menu_button-text {
    text-align: center; /* 文本居中对齐 */
    align-self: flex-end; /* 文本沉底 */
  }
  .clock {
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
    margin-left: auto; /* 将时钟推到右边 */
    padding-right: 20px; /* 根据需要调整右侧内边距 */
    display: flex;
    flex-direction: row; /* 将日期和时间设置为水平排列 */
    align-items: center; /* 垂直居中对齐 */
  }
  .current-date {
    margin-right: 10px; /* 日期和时间之间的间距 */
  }
}
</style>
