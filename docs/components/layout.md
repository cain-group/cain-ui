# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

> TIP
> 组件默认使用 Flex 布局，不需要手动设置` type="flex"`。
> 请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
```jsx
import React from 'react';

export default () =>  
<div>
<ca-row>
    <ca-col span="24"><div class="grid-content bg-purple-dark" ></div></ca-col>
  </ca-row>
  <ca-row>
    <ca-col span="12"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="12"><div class="grid-content bg-purple-light" ></div></ca-col>
  </ca-row>
  <ca-row>
    <ca-col span="8"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="8"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="8"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
  </ca-row>
  <ca-row>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple-light" ></div></ca-col>
  </ca-row>
  
</div>
```

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。


```jsx
import React from 'react';

export default () =>  
<div>
 <ca-row gutter="20">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
</div>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```jsx
import React from 'react';

export default () =>  
<div>

  <ca-row gutter="20">
    <ca-col span="16"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="8"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row gutter="20">
    <ca-col span="8"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="8"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row gutter="20">
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="16"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="4"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
</div>
```


## 列偏移

您可以指定列偏移量。

通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。

```jsx
import React from 'react';

export default () =>  
<div>

 <ca-row gutter="20">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6" offset="6"
      ><div class="grid-content bg-purple"
></div></ca-col>
  </ca-row>
  <ca-row gutter="20">
    <ca-col span="6" offset="6"
      ><div class="grid-content bg-purple"
    ></div></ca-col>
    <ca-col span="6" offset="6"
      ><div class="grid-content bg-purple"
    ></div></ca-col>
  </ca-row>
  <ca-row gutter="20">
    <ca-col span="12" offset="6"
      ><div class="grid-content bg-purple"
    ></div></ca-col>
  </ca-row>
</div>
```


## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过使用 start、center、end、space-between、space-around 或 space-evenly 设置 `justify` 属性来定义子元素的布局。

```jsx
import React from 'react';

export default () =>  
<div>

   <ca-row class="row-bg">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row class="row-bg" justify="center">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row class="row-bg" justify="end">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row class="row-bg" justify="space-between">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row class="row-bg" justify="space-around">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>
  <ca-row class="row-bg" justify="space-evenly">
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple-light" ></div></ca-col>
    <ca-col span="6"><div class="grid-content bg-purple" ></div></ca-col>
  </ca-row>

</div>
```



  ## 响应式布局

  参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

```jsx
import React from 'react';

export default () =>  
<div>

  <ca-row gutter="10">
    <ca-col xs="8" sm="6" md="4" lg="3" xl="1"
      ><div class="grid-content bg-purple"
    ></div></ca-col>
    <ca-col xs="4" sm="6" md="8" lg="9" xl="11"
      ><div class="grid-content bg-purple-light"
    ></div></ca-col>
    <ca-col xs="4" sm="6" md="8" lg="9" xl="11"
      ><div class="grid-content bg-purple"
    ></div></ca-col>
    <ca-col xs="8" sm="6" md="4" lg="3" xl="1"
      ><div class="grid-content bg-purple-light"
    ></div></ca-col>
  </ca-row>
</div>
```


  ## 基于断点的隐藏类

  暂不实现



  ## Row 属性

| 属性    | 说明                      | 类型   | 可选值                                                   | 默认值 |
|---------|-------------------------|--------|----------------------------------------------------------|--------|
| gutter  | 栅格间隔                  | number | —                                                        | 0      |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between/space-evenly | start  |
| align   | flex 布局下的垂直排列方式 | string | top/middle/bottom                                        | top    |
| <span class="waitting">tag</span> 💤    | 自定义元素标签            | string | \*                                                       | div    |

## Row 插槽

| 插槽名 | 说明           | 子标签 |
|--------|--------------|--------|
| —      | 自定义默认内容 | Col    |

## Col 属性

| 属性   | 说明                                   | 类型                                    | 可选值 | 默认值 |
|--------|--------------------------------------|-----------------------------------------|--------|--------|
| span   | 栅格占据的列数                         | number                                  | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                  | —      | 0      |
| push   | 栅格向右移动格数                       | number                                  | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                  | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如 {span 4, offset 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如 {span 4, offset 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如 {span 4, offset 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如 {span 4, offset 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如 {span 4, offset 4}) | —      | —      |
| <span class="waitting">tag</span> 💤    | 自定义元素标签                         | string                                  | \*     | div    |

## Col 插槽

| 插槽名 | 说明           | 
|------|---------------------------|
| —    | 自定义默认内容 |



<style>
  .waitting{
    color:#0099c5;
    text-decoration:line-through;
  }
    ca-row {
    margin-bottom: 20px;
    }
    .ca-col {
    border-radius: 4px;
    }
    .bg-purple-dark {
    background: #99a9bf;
    }
    .bg-purple {
    background: #d3dce6;
    }
    .bg-purple-light {
    background: #e5e9f2;
    }
    .grid-content {
    border-radius: 4px;
    min-height: 36px;
    }
    .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    }
</style>
