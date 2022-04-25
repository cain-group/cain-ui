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

```tsx
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
```tsx
  import {  CaButton } from '@cain-group/cain-ui-react';
```

完整Demo 可前往[这里查看](./examples/react/)


## Angular 环境

1. 引入Css内容

```tsx
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
```tsx
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

```tsx
import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
```


2. 引入

main.js

```js

import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
import { applyPolyfills, defineCustomElements } from '@cain-group/cain-ui/loader';


applyPolyfills().then(() => {
    defineCustomElements();
});
  
```
3. 使用
```tsx
   <ca-button type="success">This is Future</ca-button>
```

完整Demo 可前往[这里查看](./examples/vue-js/)

## Vue3 + Ts 环境

待实现
