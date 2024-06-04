<template>
  <a-layout id="app-layout-header">
    <a-layout-header theme="light" class="layout-header" height="64" lineHeight="64">
      <div class="menu_button">
        <img class="pic-logo" src="@/assets/logo.png"/>
      </div>
      <a-button @click="openSettingModal" type="text" class="menu_button">
        <div class="menu_button-content">
          <SettingTwoTone />
          <span class="menu_button-text">系统设置</span>
        </div>
      </a-button>
      <a-button @click="openServiceGenModal" type="text" class="menu_button">
        <div class="menu_button-content">
          <FileAddTwoTone />         
          <span class="menu_button-text">服务生成</span>
        </div>
      </a-button>
      <a-button @click="openToolsModal" type="text" class="menu_button">
        <div class="menu_button-content">
          <ToolTwoTone />
          <span class="menu_button-text">实用工具</span>
        </div>
      </a-button>
      <a-button @click="openAboutModal" type="text" class="menu_button">
        <div class="menu_button-content">
          <QuestionCircleTwoTone />          
          <span class="menu_button-text">关于程序</span>
        </div>
      </a-button>
      <a-button @click="openExitModal" type="text" class="menu_button">
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

      <!-- 系统设置弹窗 -->
      <a-modal v-model:visible="isSettingOpen" title="系统设置">
         <a-form  autocomplete="off">
            <a-form-item label="监听端口" name="port" :rules="[{ required: true, message: 'Please input your port!' }]">
              <a-input v-model:value="port" style="width:20%"/>
            </a-form-item>
            <a-form-item label="心跳间隔" name="heartbeat" :rules="[{ required: true, message: 'Please input your minute!' }]">
              <a-input v-model:value="hearbeat" style="width:20%;"/> /分钟(0为关闭)
            </a-form-item>
          </a-form>
      </a-modal>

      <!-- 服务生成弹窗 -->
      <a-modal v-model:visible="isServiceGenOpen" title="服务生成">
        <a-form  autocomplete="off">
            <a-form-item label="上线地址" name="Address" :rules="[{ required: true, message: 'Please input your adress!' }]">
              <a-input v-model:value="port" style="width:50%"/>         
              <a-button style="margin-left:10px;">测试</a-button>
            </a-form-item>
            <a-form-item label="服务名称" name="ServiceName" :rules="[{ required: true, message: 'Please input your service!' }]">
              <a-input v-model:value="hearbeat" style="width:50%;"/>
              <a-button style="margin-left:10px;">随机生成</a-button>
            </a-form-item>         
          </a-form>
         <div>
            <a-radio-group v-model:value="value">
              <a-radio :value="1">默认启动</a-radio>
              <a-radio :value="2">注册表启动</a-radio>
              <a-radio :value="3">服务启动</a-radio>
            </a-radio-group>
          </div>
          <div> 
            服务版本
            <a-tag color="processing">1.0</a-tag>
            默认分组
            <a-select
              v-model:value="value"
              label-in-value
              style="width: 120px"
              :options="options"
              @change="handleChange"
            ></a-select>
          </div>
      <!-- 签名文件 -->


      </a-modal>

      <!-- 实用工具弹窗 -->
      <a-modal v-model:visible="isToolsOpen" title="实用工具">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>

      <!-- 关于本程序弹窗 -->
      <a-modal v-model:visible="isAboutOpen" title="关于本程序" @ok="handleOk" :cancel-button-props="{ disabled: true }" :footer="null">
        <p>wh1t3zer开发</p>
        <p>基于electron框架</p>
        <p>杰克</p>
      </a-modal>

      <a-modal v-model:visible="isExitOpen" title="退出程序" @ok="handleOk">
        <p>确定要退出程序吗</p>
      </a-modal>
    </a-layout-header>
  </a-layout>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { SettingTwoTone, FileAddTwoTone, ToolTwoTone, QuestionCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons-vue';
import { ipcApiRoute } from '@/api/main';
import { ipc } from '@/utils/ipcRenderer';
import  axios  from 'axios';

export default {
  name: 'AppHeader',
  setup() {
    const serverUrl = ref('');
    const port = ref('');
    const isSettingOpen = ref(false);
    const isServiceGenOpen = ref(false);
    const isToolsOpen = ref(false);
    const isAboutOpen = ref(false);
    const isExitOpen = ref(false);
    const currentDate = ref('');
    const currentTime = ref('');
    const options = ref([
      {
        value: 'jack',
        label: 'Jack (100)',
      },
    ]);
    const handleChange = value => {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    };
    const value = ref({
      value: 'lucy',
      label: 'Lucy (101)',
    });
    let hearbeat;
    let intervalId;

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
      intervalId = setInterval(() => {
        currentTime.value = getCurrentTime();
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    const openSettingModal = () => {
      isSettingOpen.value = true;
      isServiceGenOpen.value = false;
      isToolsOpen.value = false;
      isAboutOpen.value = false;
      isExitOpen.value = false;
      initData()
    };

    const openServiceGenModal = () => {
      isSettingOpen.value = false;
      isServiceGenOpen.value = true;
      isToolsOpen.value = false;
      isAboutOpen.value = false;
      isExitOpen.value = false;
    };

    const openToolsModal = () => {
      isSettingOpen.value = false;
      isServiceGenOpen.value = false;
      isToolsOpen.value = true;
      isAboutOpen.value = false;
      isExitOpen.value = false;
    };

    const openAboutModal = () => {
      isSettingOpen.value = false;
      isServiceGenOpen.value = false;
      isToolsOpen.value = false;
      isAboutOpen.value = true;
      isExitOpen.value = false;
    };

    const openExitModal = () => {
      isSettingOpen.value = false;
      isServiceGenOpen.value = false;
      isToolsOpen.value = false;
      isAboutOpen.value = false;
      isExitOpen.value = true;
    };

    const handleOk = e => {
      console.log(e);
      isAboutOpen.value = false;
    };

    const initData = () => {
    ipc.invoke(ipcApiRoute.getCrossUrl, {name: 'goapp'}).then(url => {
    serverUrl.value = url;
    let reqApi = serverUrl.value + '/api/ping';
    const cfg = {
      method: 'get',
      url: reqApi,
      timeout: 1000,
    };

    axios(cfg).then(res => {
      port.value = res.data.data.split(':')[1]
    }).catch(err => {
      console.error("Error:", err);
    });
  }).catch(err => {
    console.error("Error getting server URL:", err);
  });
};

    return {
      isSettingOpen,
      isServiceGenOpen,
      isToolsOpen,
      isAboutOpen,
      isExitOpen,
      currentDate,
      currentTime,
      port,
      hearbeat,
      options,
      value,
      serverUrl,
      openSettingModal,
      openServiceGenModal,
      openToolsModal,
      openAboutModal,
      openExitModal,
      handleOk,
      handleChange,
      initData,
    };
  }
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
