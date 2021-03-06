# 开始之前
 
此文档 由`dumi` 撰写，文档中存在大量的`React`依赖，`请无视`，如以下代码 ：

```jsx
import React from 'react';

export default () =>  
  <div>
    请大家只需关注div中的代码即可
  </div>
  
```

# 安装
 
```bash
# Using npm
npm i @cain-group/cain-ui

# Using yarn
yarn add @cain-group/cain-ui

```

# 使用

## HTML 环境 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cain-group/cain-ui/dist/cain-ui/cain-ui.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/@cain-group/cain-ui/dist/cain-ui/cain-ui.esm.js"></script>
  </head>
  <body>
    <ca-button type="primary">Future</ca-button>
  </body>
</html>
```

完整Demo 可前往[这里查看](./examples/html/)


## React 环境


1. 引入Css内容

```javascript
import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
```


2. 安装 React依赖

```bash
# Using npm
npm i @cain-group/cain-ui-react

# Using yarn
yarn add @cain-group/cain-ui-react
```
3. 使用
```javascript
  import {  CaButton } from '@cain-group/cain-ui-react';
```

完整Demo 可前往[这里查看](./examples/react/)


## Angular 环境

1. 引入Css内容

```javascript
import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
```


2. 安装 Angular依赖

```bash
# Using npm
npm i @cain-group/cain-ui-angular

# Using yarn
yarn add @cain-group/cain-ui-angular
```
3. 使用
```javascript

  import { CainUIModule } from '@cain-group/cain-ui-angular/dist';
  ...
  imports: [
    CainUIModule
  ],
  ...
```

完整Demo 可前往[这里查看](./examples/angular/)


## Vue2 + Js 环境


1. 引入Css内容

```javascript
import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
```


2. 引入

main.js

```javascript

import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
import { applyPolyfills, defineCustomElements } from '@cain-group/cain-ui/loader';


applyPolyfills().then(() => {
    defineCustomElements();
});
  
```
3. 使用
```javascript
   <ca-button type="success">This is Future</ca-button>
```

完整Demo 可前往[这里查看](./examples/vue-js/)

## Vue3 + Ts 环境

待实现
