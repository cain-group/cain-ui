# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<ca-container>`：外层容器。 当子元素中包含 `<ca-header>` 或 `<ca-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<ca-header>`：顶栏容器。

`<ca-aside>`：侧边栏容器。

`<ca-main>`：主要区域容器。

`<ca-footer>`：底栏容器。




## 常见页面布局

```jsx
import React from 'react';

export default () =>  
<div>

 <div class="common-layout">
    <ca-container>
      <ca-header>Header</ca-header>
      <ca-main>Main</ca-main>
    </ca-container>
  </div>
</div>
```



```jsx
import React from 'react';

export default () =>  
<div>

<div class="common-layout">
    <ca-container>
      <ca-header>Header</ca-header>
      <ca-main>Main</ca-main>
      <ca-footer>Footer</ca-footer>
    </ca-container>
  </div>
</div>
```


```jsx
import React from 'react';

export default () =>  
<div>

<div class="common-layout">
    <ca-container>
      <ca-aside width="200px">Aside</ca-aside>
      <ca-main>Main</ca-main>
    </ca-container>
  </div>
</div>
```

```jsx
import React from 'react';

export default () =>  
<div>

 <div class="common-layout">
    <ca-container>
      <ca-header>Header</ca-header>
      <ca-container>
        <ca-aside width="200px">Aside</ca-aside>
        <ca-main>Main</ca-main>
      </ca-container>
    </ca-container>
  </div>
</div>
```


```jsx
import React from 'react';

export default () =>  
<div>

<div class="common-layout">
    <ca-container>
      <ca-header>Header</ca-header>
      <ca-container>
        <ca-aside width="200px">Aside</ca-aside>
        <ca-container>
          <ca-main>Main</ca-main>
          <ca-footer>Footer</ca-footer>
        </ca-container>
      </ca-container>
    </ca-container>
  </div>
</div>
```


```jsx
import React from 'react';

export default () =>  
<div>
<div class="common-layout">
    <ca-container>
      <ca-aside width="200px">Aside</ca-aside>
      <ca-container>
        <ca-header>Header</ca-header>
        <ca-main>Main</ca-main>
      </ca-container>
    </ca-container>
  </div>
</div>
```


```jsx
import React from 'react';

export default () =>  
<div>
<div class="common-layout">
    <ca-container>
      <ca-aside width="200px">Aside</ca-aside>
      <ca-container>
        <ca-header>Header</ca-header>
        <ca-main>Main</ca-main>
        <ca-footer>Footer</ca-footer>
      </ca-container>
    </ca-container>
  </div>
</div>
```



## Container 属性

| 属性      | 说明             | 类型   | 可选值                | 默认值                                                                   |
|-----------|----------------|--------|-----------------------|-----------------------------------------------------------------------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 `vertical` ，否则为 horizontal |

## Container 插槽

| 插槽名 | 说明           | 子标签                                     |
|--------|--------------|--------------------------------------------|
| —      | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header 属性

| 属性   | 说明     | 类型   | 可选值 | 默认值 |
|--------|--------|--------|--------|--------|
| height | 顶栏高度 | string | —      | 60px   |

## Header 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |

## Aside 属性

| 属性  | 说明       | 类型   | 可选值 | 默认值 |
|-------|----------|--------|--------|--------|
| width | 侧边栏宽度 | string | —      | 300px  |

## Aside 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |

## Main 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |

## Footer 属性

| 属性   | 说明     | 类型   | 可选值 | 默认值 |
|--------|--------|--------|--------|--------|
| height | 底栏高度 | string | —      | 60px   |

## Footer 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |


<style>
  .waitting{
    color:#0099c5;
    text-decoration:line-through;
  }
</style>


<style>
  .common-layout .ca-header,.common-layout .ca-footer,.common-layout .ca-main,.common-layout .ca-aside {
    display: flex;
    justify-content: center;
    align-items: center
  }

  .common-layout .ca-header,.common-layout .ca-footer {
      background-color: var(--ca-color-primary-light-7);
      color: var(--ca-text-color-primary);
      text-align: center
  }

  .common-layout ca-aside {
      background-color: var(--ca-color-primary-light-8);
      color: var(--ca-text-color-primary);
      text-align: center;

  }

  .common-layout ca-main {
      background-color: var(--ca-color-primary-light-9);
      color: var(--ca-text-color-primary);
      text-align: center;
      height: 150px
  }
</style>