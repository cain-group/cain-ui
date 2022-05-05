# Checkbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

`checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `value` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `ca-checkbox` 标签中的内容将成为复选框按钮之后的描述。



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
// const checkList = ref(['selected and disabled', 'Option A'])
<div>
    <ca-checkbox-group value="checkList">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="disabled" disabled />
        <ca-checkbox label="selected and disabled" disabled />
  </ca-checkbox-group>
</div>
  
```

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果


## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。


```jsx
import React from 'react';

export default () =>  
// const checkList = ref(['selected and disabled', 'Option A'])
<div>
    <ca-checkbox-group value="checkList" min="1" max="2">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>
</div>
  
```

## 按钮样式

按钮样式的多选组合。

只需要把 `ca-checkbox` 元素替换为 `ca-checkbox-button` 元素即可。 此外还提供了`size`属性。



```jsx
import React from 'react';

export default () =>  
// const checkList = ref(['selected and disabled', 'Option A'])
<div>
    <ca-checkbox-group value="checkList" size="large">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>


    <ca-checkbox-group value="checkList" >
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>

  <ca-checkbox-group value="checkList" size="small">
        <ca-checkbox label="Option A" />
        <ca-checkbox label="Option B" />
        <ca-checkbox label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>

    <ca-checkbox-group value="checkList" size="small">
        <ca-checkbox label="Option A" />
        <ca-checkbox disabled label="Option B" />
        <ca-checkbox disabled label="Option C" />
        <ca-checkbox label="Option D"  />
  </ca-checkbox-group>

  <ca-checkbox-group value="checkList" size="small" disabled>
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
     <ca-checkbox value="checked1" label="Option1" size="large" border />

     <ca-checkbox value="checked3" label="Option1" border />



     <ca-checkbox-group value="checkboxGroup1" size="small">
      <ca-checkbox label="Option1" border />
      <ca-checkbox label="Option2" border />
    </ca-checkbox-group>


    <ca-checkbox-group value="checkboxGroup1" size="small">
      <ca-checkbox label="Option1" border disabled />
      <ca-checkbox label="Option2" border disabled />
    </ca-checkbox-group>
</div>
  
```



## Checkbox 属性

| 属性          | 说明                                                                | 类型                               | 可选值                 | 默认值 |
|---------------|-------------------------------------------------------------------|------------------------------------|------------------------|--------|
| value         | 选中项绑定值                                                        | string / number / boolean          | —                      | —      |
| label         | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean / object | —                      | —      |
| true-label    | 选中时的值                                                          | string / number                    | —                      | —      |
| false-label   | 没有选中时的值                                                      | string / number                    | —                      | —      |
| disabled      | 是否禁用                                                            | boolean                            | —                      | false  |
| border        | 是否显示边框                                                        | boolean                            | —                      | false  |
| size          | Checkbox 的尺寸                                                     | string                             | large / default /small | —      |
| name          | 原生 name 属性                                                      | string                             | —                      | —      |
| checked       | 当前是否勾选                                                        | boolean                            | —                      | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                              | boolean                            | —                      | false  |

## Checkbox 事件

| 事件名 | 说明                     | 回调参数          |
|--------|------------------------|-------------------|
| change | 当绑定值变化时触发的事件 | the updated value |

## Checkbox 插槽

| 插槽名 | 说明           |
|--------|--------------|
| —      | 自定义默认内容 |

## Checkbox-Group 属性

| 属性       | 说明                                       | 类型    | 可选值                 | 默认值  |
|------------|------------------------------------------|---------|------------------------|---------|
| value      | 绑定值                                     | array   | —                      | []      |
| size       | 多选框组尺寸                               | string  | large / default /small | —       |
| disabled   | 是否禁用                                   | boolean | —                      | false   |
| min        | 可被勾选的 checkbox 的最小数量             | number  | —                      | —       |
| max        | 可被勾选的 checkbox 的最大数量             | number  | —                      | —       |
| text-color | 按钮形式的 Checkbox 激活时的文本颜色       | string  | —                      | #ffffff |
| fill       | 按钮形式的 Checkbox 激活时的填充色和边框色 | string  | —                      | #409EFF |

## Checkbox-Group 事件

| 事件名 | 说明                     | 回调参数 |
|--------|------------------------|----------|
| change | 当绑定值变化时触发的事件 | value    |

## Checkbox-Group 插槽

| 插槽名 | 说明           | 子标签                     |
|--------|--------------|----------------------------|
| -      | 自定义默认内容 | Checkbox / Checkbox-button |

## Checkbox-Button 属性

| 属性        | 说明                                            | 类型                               | 可选值 | 默认值 |
|-------------|-----------------------------------------------|------------------------------------|--------|--------|
| label       | 选中状态的值，只有在绑定对象类型为 array 时有效。 | string / number / boolean / object | —      | —      |
| true-label  | 选中时的值                                      | string / number                    | —      | —      |
| false-label | 没有选中时的值                                  | string / number                    | —      | —      |
| disabled    | 是否禁用                                        | boolean                            | —      | false  |
| name        | 原生 name 属性                                  | string                             | —      | —      |
| checked     | 当前是否勾选                                    | boolean                            | —      | false  |

## Checkbox-Button 插槽

| 插槽名 | 描述           |
|--------|--------------|
| —      | 自定义默认内容 |


