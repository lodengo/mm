# mm
meteor create --react mm

npm install antd --save

国际化：
1. meteor add universe:i18n
2. 新建文件夹 i18n 增加json 翻译文件 如 en.i18n.json zh.i18n.json
3. json 文件可以用"_locale": "zh-CN" 指定语言或文件名命名
4. 使用翻译：
   import i18n from 'meteor/universe:i18n';
    {i18n.__('pages.LoginPage.password')} 或者 const T = i18n.createComponent();  <T>pages.LoginPage.password</T>
5. 设置语言：i18n.setLocale(getLang());
6. package.json 里去掉如下 
"meteor": {
    "mainModule": {
      "client": "client/main.jsx",
      "server": "server/main.js"
    },
    "testModule": "tests/main.js"
  },

hook: useUnmountedRef

antd: https://www.dazhuanlan.com/2020/01/06/5e12b14edf0af/

https://github.com/meteor/babel/issues/13

less: meteor add less
If you want to @import a file, give it the extension .import.less to prevent Meteor from processing it independently.
