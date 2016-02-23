# ReactNative-Integrating-with-Existing-Apps
ReactNative-Integrating-with-Existing-Apps

在现有App上集成ReactNative用例:

1.如何安装:
>######clone工程:
>
>git clone https://github.com/ilioner/ReactNative-Integrating-with-Existing-Apps.git
>
>######安装reactnative
>cd ReactNative-Integrating-with-Existing-Apps
>
>npm install react-native
>
>######使用pod安装ReactNative组件
>
>pod install
>
>
>

2.版本报错问题:0.18.0版本以上需要注意删除.babelrc

>$cd node_modules/react-deep-force-update
>
>$ls -a
>
>.			.eslintrc		LICENSE.md
>..			.npmignore		README.md
>.babelrc		.travis.yml		lib
>.eslintignore		CODE_OF_CONDUCT.md	package.json

>$rm .babelrc
>
>$ls -a
>
>.			.npmignore		README.md
>..			.travis.yml		lib
>.eslintignore		CODE_OF_CONDUCT.md	package.json
>.eslintrc		LICENSE.md
>

3.开启node服务器:

>(JS_DIR=`pwd`/ReactComponent; cd node_modules/react-native; npm run start -- --root $JS_DIR)

4.run工程:

![](./ReactNative-Integrating-with-Existing-Apps/Simulator.png)
