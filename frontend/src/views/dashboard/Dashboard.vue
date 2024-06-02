<template>
  <AppHeader/>
  <a-table 
    :dataSource="dataSource" 
    :columns="columns"
    :scroll="{ y: 380 }"
    :pagination="false"
   />
   <AppFooter />
</template>
<script>
import AppHeader from '@/layouts/AppHeader.vue'
import AppFooter from '@/layouts/AppFooter.vue'
  export default {
    name: 'Dashboard',
    components: {
        AppHeader,
        AppFooter
    },
    setup() {
      return {
        dataSource: [
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'windows',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          {
            key: '1',
            Zone: '中国',
            Internet: 'CN',
            ExternalIP: '127.0.0.1',
            InternalIP: '127.0.0.1',
            HostName: 'wht3zer/drawin',
            SystemInfo: 'macos',
            SoftwareInfo: 'M1pro',
            Speed: '200kb/s',
            Media: '',
            NetInet: 'test',
            Status: '17ms',
          },
          
        ],

        columns: [
          {
            title: '区域',
            dataIndex: 'Zone',
            key: 'zone',
            width: 100,
          },
          {
            title: '网络',
            dataIndex: 'Internet',
            key: 'internet',
            width: 60,
          },
          {
            title: '外网IP',
            dataIndex: 'ExternalIP',
            key: 'ExternalIP',
            width: 100,
          },
          {
            title: '内网IP',
            dataIndex: 'InternalIP',
            key: 'InternalIP',
            width: 100,
          },
          {
            title: '计算机名',
            dataIndex: 'HostName',
            key: 'HostName',
            width: 100
          },
          {
            title: '系统',
            dataIndex: 'SystemInfo',
            key: 'SystemInfo',
            width: 90,
          },
          {
            title: '处理器、内存、硬盘',
            dataIndex: 'SoftwareInfo',
            key: 'SoftwareInfo',
            width: 160,
          },
          {
            title: '网速',
            dataIndex: 'Speed',
            key: 'Speed',
            width: 60,
          },
          {
            title: '视频',
            dataIndex: 'Media',
            key: 'Media',
            width: 60,
          },
          {
            title: '网卡',
            dataIndex: 'NetInet',
            key: 'NetInet',
            width: 80,
          },
          {
            title: '状态',
            dataIndex: 'Status',
            key: 'Status',
            width: 70,
          },
        ],
      };
    },
  };
</script>