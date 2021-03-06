define({ "api": [
  {
    "type": "GET",
    "url": "/cms3/streamInfo",
    "title": "获取流信息",
    "group": "Device",
    "version": "1.1.1",
    "description": "<p>用于获取流信息</p>",
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "         [\n\t\t\t{\n\t\t\t\t\"serialnum\":\"02614581a214a345f458\",\n\t\t\t\t\"streamType\":0,\n\t\t\t\t\"channel\":1,\n\t\t\t\t\"clientIps\":[\"192.168.0.16\",\"192.168.0.17\",\"192.168.0.18\"]\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"serialnum\":\"02614581a214a345f458\",\n\t\t\t\t\"streamType\":1,\n\t\t\t\t\"channel\":1,\n\t\t\t\t\"clientIps\":[\"192.168.1.16\",\"192.168.1.17\",\"192.168.1.18\"]\n\t\t\t}\n\t\t]",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Device",
    "name": "GetCms3Streaminfo"
  },
  {
    "type": "POST",
    "url": "/cms3/closeStream",
    "title": "关流",
    "group": "Device",
    "version": "1.1.1",
    "description": "<p>用于关闭流</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n\t\"serialnum\":\"02614581a214a345f458\",\n\t\"streamType\":0,\n\t\"channels\":[1,2,3,4,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "              \t\t{\n\t\t\t\t\t\"code\":0,\n\t\t\t\t\t\"msg\":\"指令发送成功\"\n\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Device",
    "name": "PostCms3Closestream"
  },
  {
    "type": "POST",
    "url": "/cms3/getDeviceParam",
    "title": "获取设备的登录信息",
    "group": "Device",
    "version": "1.1.1",
    "description": "<p>用于获取设备信息</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n   \"serialnum\":\"02614581a214a345f458\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "              \t\t{\n\t\t\t\t   \"serialnum\":\"02614581a214a345f458\",\n\t\t\t\t   \"protocol\":\"ONVIF\",\n\t\t\t\t   \"username\":\"admin\",\n\t\t\t\t   \"password\":\"123456\",\n\t\t\t\t   \"ip\":\"10.0.0.33\",\n\t\t\t\t   \"port\":8000\n\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Device",
    "name": "PostCms3Getdeviceparam"
  },
  {
    "type": "POST",
    "url": "/cms3/openStream",
    "title": "开流",
    "group": "Device",
    "version": "1.1.1",
    "description": "<p>用于打开流</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n\t\"serialnum\":\"02614581a214a345f458\",\n\t\"streamType\":0,\n\t\"channels\":[1,2,3,4,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "              \t\t{\n\t\t\t\t\t\"code\":0,\n\t\t\t\t\t\"msg\":\"指令发送 成功\"\n\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Device",
    "name": "PostCms3Openstream"
  },
  {
    "type": "POST",
    "url": "/cms3/setDeviceParam",
    "title": "设置设备登录信息",
    "group": "Device",
    "version": "1.1.1",
    "description": "<p>用于获取服务器运行状态</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n   \"serialnum\":\"02614581a214a345f458\",\n   \"protocol\":\"ONVIF\",\n   \"username\":\"admin\",\n   \"password\":\"123456\",\n   \"ip\":\"10.0.0.33\",\n   \"port\":8000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"设置成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Device",
    "name": "PostCms3Setdeviceparam"
  },
  {
    "type": "GET",
    "url": "/cms3/serverStatus",
    "title": "获取服务器运行状态",
    "group": "Server",
    "version": "1.1.1",
    "description": "<p>用于获取服务器运行状态</p>",
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"totalMemory\":5123466,\"usedMemory\":4216564,\"cpu\":54.25,\"netIn\":45614646,\"netOut\":164687316}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Server",
    "name": "GetCms3Serverstatus"
  },
  {
    "type": "GET",
    "url": "/cms3/userInfo/rtsp",
    "title": "获取rtsp连接账号",
    "group": "Users",
    "version": "1.1.1",
    "description": "<p>用于获取账号密码</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"username\":\"admin\",\"password\":\"123456\"}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Users",
    "name": "GetCms3UserinfoRtsp"
  },
  {
    "type": "POST",
    "url": "/cms3/login",
    "title": "登录",
    "group": "Users",
    "version": "1.1.1",
    "description": "<p>登录转发服务器</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\"username\":\"admin\",\"password\":\"123456\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0 代表无错误 1代表有错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"登录成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Users",
    "name": "PostCms3Login"
  },
  {
    "type": "POST",
    "url": "/cms3/setAccount",
    "title": "设置转发服务器账号",
    "group": "Users",
    "version": "1.1.1",
    "description": "<p>用于获取账号密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\"username\":\"admin\",\"password\":\"123456\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0 代表无错误 1代表有错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"设置成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Users",
    "name": "PostCms3Setaccount"
  },
  {
    "type": "POST",
    "url": "/cms3/userInfo/rtsp",
    "title": "设置rtsp连接账号信息",
    "group": "Users",
    "version": "1.1.1",
    "description": "<p>用于设置rtsp连接的账号信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\"username\":\"admin\",\"password\":\"123456\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          },
          {
            "group": "200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>0 代表无错误 1代表有错误</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":\"0\",\"msg\":\"设置成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/HG_Panda/go/CMS_Forword/src/web_api/server.go",
    "groupTitle": "Users",
    "name": "PostCms3UserinfoRtsp"
  }
] });
