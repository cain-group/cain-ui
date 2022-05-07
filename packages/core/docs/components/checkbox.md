# Checkbox 多选框

一组备选项中进行多选

## 基础用法


```jsx
import React from 'react';

export default () =>  
<div>
   <div>
    <ca-checkbox value="t1" checked label="Option 1" size="large" />
    <ca-checkbox value="t2" checked label="Option 2" size="large" />
  </div>
  <div>
    <ca-checkbox value="t3" label="Option 1" />
    <ca-checkbox value="t4" label="Option 2" />
  </div>
  <div>
    <ca-checkbox value="t5" label="Option 1" size="small" />
    <ca-checkbox value="t6" label="Option 2" size="small" />
  </div>
  <div>
    <ca-checkbox value="t7" label="Option 1" size="small" disabled />
    <ca-checkbox value="t8" label="Option 2" size="small" disabled />
  </div>
</div>
  
```

## 禁用状态

多选框不可用状态。

设置 `disabled` 属性即可。


```jsx
import React from 'react';

export default () =>  
<div>
    <ca-checkbox value="true" disabled>Disabled</ca-checkbox>
    <ca-checkbox value="false">Not disabled</ca-checkbox>
</div>
  
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `ca-checkbox` 元素中定义 `value` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean` ，选中为 `true` 。 在 `ca-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 `checkbox` 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

```jsx
import React from 'react';

export default () =>  
<div>
    <ca-checkbox-group value="Option A,Option B">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>
</div>
  
```

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态


```jsx
import React from 'react';

export default () =>  
  <div>
    <ca-checkbox indeterminate="true" label="Option A" id="checkbox1"  />
  </div>
```





## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。


```jsx
import React from 'react';

export default () =>  
<div>
    <ca-checkbox-group  min="1" max="2">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>
</div>
  
```

## 带有边框

设置`border`属性可以渲染为带有边框的多选框。



```jsx
import React from 'react';

export default () =>  
// const checkList = ref(['selected and disabled', 'Option A'])
<div>
  <div>
      <ca-checkbox value="checked1" label="Option1" size="large" border />
  </div>
  <div>
      <ca-checkbox value="checked3" label="Option1" border />

  </div>
  <div>
      <ca-checkbox-group value="checkboxGroup1" size="small">
        <ca-checkbox label="Option1" border />
        <ca-checkbox label="Option2" border />
      </ca-checkbox-group>
  </div>
  <div>
   <ca-checkbox-group value="checkboxGroup1" size="small">
      <ca-checkbox label="Option1" border disabled />
      <ca-checkbox label="Option2" border disabled />
    </ca-checkbox-group>
    </div>
</div>
  
```



## Checkbox 属性

| 属性          | 说明                                                                | 类型    | 可选值                 | 默认值 |
|---------------|-------------------------------------------------------------------|---------|------------------------|--------|
| value         | 选中项绑定值                                                        | string  | —                      | —      |
| label         | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string  | —                      | —      |
| disabled      | 是否禁用                                                            | boolean | —                      | false  |
| border        | 是否显示边框                                                        | boolean | —                      | false  |
| size          | Checkbox 的尺寸                                                     | string  | large / default /small | —      |
| name          | 原生 name 属性                                                      | string  | —                      | —      |
| checked       | 当前是否勾选                                                        | boolean | —                      | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                              | boolean | —                      | false  |

## Checkbox 事件

| 事件名 | 说明                     | 回调参数          |
|--------|------------------------|-------------------|
| change | 当绑定值变化时触发的事件 | the updated value |

## Checkbox 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |

## Checkbox-Group 属性

| 属性     | 说明                           | 类型    | 可选值                 | 默认值 |
|----------|------------------------------|---------|------------------------|--------|
| value    | 绑定值                         | array   | —                      | []     |
| size     | 多选框组尺寸                   | string  | large / default /small | —      |
| disabled | 是否禁用                       | boolean | —                      | false  |
| min      | 可被勾选的 checkbox 的最小数量 | number  | —                      | —      |
| max      | 可被勾选的 checkbox 的最大数量 | number  | —                      | —      |

## Checkbox-Group 事件

| 事件名 | 说明                     | 回调参数 |
|--------|------------------------|----------|
| change | 当绑定值变化时触发的事件 | value    |

## Checkbox-Group 插槽

| 插槽名 | 说明           | 子标签                     |
|--------|--------------|----------------------------|
| -      | 自定义默认内容 | Checkbox / Checkbox-button |
