<template>
  <a-layout id="app-layout-footer">
    <a-layout-footer class="app-layout-footer">
      <div class="app-layout-content-left">
      <a-descriptions layout="horizontal">
        <a-descriptions-item label="操作日志" style="width:90px;">
        </a-descriptions-item>
        <a-descriptions-item  v-for="(log,index) in logs" :key="index" style="display:flex;">
          {{log}}
    </a-descriptions-item>
      </a-descriptions>
      </div>
      <a-layout-content class="app-layout-content-right">此处待开发</a-layout-content>
       <div>
      server listen on :
      <a-tag color="success">3456</a-tag>
      </div>
    </a-layout-footer>
   
  </a-layout>
</template>

<script>
export default {
  name: 'AppFooter',
  setup() {
    return {
      logs: ["2024xxx 创建文件","2024xxx 创建文件","2024xxx 创建文件","2024xxx 创建文件"], // 用于存储日志记录
      dataSource: [
      {
        key: '1',
        Time: '2024-05-23 21:28:53',
        EventRecord: '系统启动成功'
      },
    ],
    columns: [
      {
        title: '发生时间',
        dataIndex: 'Time',
        key: 'Time',
        width: 100,
      },
      {
        title: '事件记录',
        dataIndex: 'EventRecord',
        key: 'EventRecord',
        width: 100,
      },
    ],
    };
    

    
  }
};
</script>

<style lang="less" scoped>
#app-layout-footer {
  height: calc(25vh - 10px); /* 计算得到 footer 的高度 */
  position: fixed; /* 将 footer 固定在页面底部 */
  bottom: 0; /* 设置底部距离为 0 */
  width: 100%; /* 设置宽度为 100% */
  padding: 5px;
  .app-layout-footer {
    background-color: #fff;
    height: 100%;
    display: flex;
  }
  .app-layout-content-left {
    width: 70%;
    height: 100%;
    background-color: #fff;
    margin-right: 5px;
  }
  .app-layout-content-right {
    width: 30%;
    height: 100%;
    background-color: green;
    margin-left: 5px;
  }
}
</style>
