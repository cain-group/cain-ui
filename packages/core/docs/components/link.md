# Link 链接


文字超链接


## 基础用法


基础的文字链接用法。


```jsx
import React from 'react';

export default () =>  
<div>
  <ca-link href="https://caement.caeme.io" target="_blank">default</ca-link>
    <ca-link type="primary">primary</ca-link>
    <ca-link type="success">success</ca-link>
    <ca-link type="warning">warning</ca-link>
    <ca-link type="danger">danger</ca-link>
    <ca-link type="info">info</ca-link>
</div>
  
```



## 禁用状态

文字链接不可用状态。

```jsx
import React from 'react';

export default () =>  
<div>
 <ca-link disabled>default</ca-link>
    <ca-link type="primary" disabled>primary</ca-link>
    <ca-link type="success" disabled>success</ca-link>
    <ca-link type="warning" disabled>warning</ca-link>
    <ca-link type="danger" disabled>danger</ca-link>
    <ca-link type="info" disabled>info</ca-link>
</div>
```

## 下划线

文字链接下划线。

```jsx
import React from 'react';

export default () =>  
<div>
   <ca-link underline="false">Without Underline</ca-link>
  <ca-link>With Underline</ca-link>
</div>
```

## 图标

暂未实现 💤



## 属性

| 属性                                  | 说明           | 类型               | 可选值                                      | 默认值  |
|---------------------------------------|--------------|--------------------|---------------------------------------------|---------|
| type                                  | 类型           | string             | primary / success / warning / danger / info | default |
| underline                             | 是否下划线     | boolean            | —                                           | true    |
| disabled                              | 是否禁用状态   | boolean            | —                                           | false   |
| href                                  | 原生 href 属性 | string             | —                                           | -       |
| <span class="waitting">icon</span> 💤 | 自定义图标     | string / Component | —                                           | —       |

## 插槽

| Name | Description      |
|------|------------------|
| -    | 自定义按钮组内容 |

<style>
  .waitting{
    color:#0099c5;
    text-decoration:line-through;
  }
  .ca-link {
  margin-right: 8px;
}
.ca-link .ca-icon--right.ca-icon {
  vertical-align: text-bottom;
}
</style>
