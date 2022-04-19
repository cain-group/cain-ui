# Button 按钮
常用的操作按钮。


## 基础用法


使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
<!-- Auto Generated Bcaow -->

  <ca-row class="mb-4">
    <ca-button>Default</ca-button>
    <ca-button type="primary">Primary</ca-button>
    <ca-button type="success">Success</ca-button>
    <ca-button type="info">Info</ca-button>
    <ca-button type="warning">Warning</ca-button>
    <ca-button type="danger">Danger</ca-button>
    <ca-button>中文</ca-button>
  </ca-row>

  <ca-row class="mb-4">
    <ca-button plain>Plain</ca-button>
    <ca-button type="primary" plain>Primary</ca-button>
    <ca-button type="success" plain>Success</ca-button>
    <ca-button type="info" plain>Info</ca-button>
    <ca-button type="warning" plain>Warning</ca-button>
    <ca-button type="danger" plain>Danger</ca-button>
  </ca-row>

  <ca-row class="mb-4">
    <ca-button round>Round</ca-button>
    <ca-button type="primary" round>Primary</ca-button>
    <ca-button type="success" round>Success</ca-button>
    <ca-button type="info" round>Info</ca-button>
    <ca-button type="warning" round>Warning</ca-button>
    <ca-button type="danger" round>Danger</ca-button>
  </ca-row>


```html

 <ca-row class="mb-4">
    <ca-button>Default</ca-button>
    <ca-button type="primary">Primary</ca-button>
    <ca-button type="success">Success</ca-button>
    <ca-button type="info">Info</ca-button>
    <ca-button type="warning">Warning</ca-button>
    <ca-button type="danger">Danger</ca-button>
    <ca-button>中文</ca-button>
  </ca-row>

  <ca-row class="mb-4">
    <ca-button plain>Plain</ca-button>
    <ca-button type="primary" plain>Primary</ca-button>
    <ca-button type="success" plain>Success</ca-button>
    <ca-button type="info" plain>Info</ca-button>
    <ca-button type="warning" plain>Warning</ca-button>
    <ca-button type="danger" plain>Danger</ca-button>
  </ca-row>

  <ca-row class="mb-4">
    <ca-button round>Round</ca-button>
    <ca-button type="primary" round>Primary</ca-button>
    <ca-button type="success" round>Success</ca-button>
    <ca-button type="info" round>Info</ca-button>
    <ca-button type="warning" round>Warning</ca-button>
    <ca-button type="danger" round>Danger</ca-button>
  </ca-row>
  
```



## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

 <ca-row class="mb-4">
    <ca-button disabled>Default</ca-button>
    <ca-button type="primary" disabled>Primary</ca-button>
    <ca-button type="success" disabled>Success</ca-button>
    <ca-button type="info" disabled>Info</ca-button>
    <ca-button type="warning" disabled>Warning</ca-button>
    <ca-button type="danger" disabled>Danger</ca-button>
  </ca-row>

  <ca-row>
    <ca-button plain disabled>Plain</ca-button>
    <ca-button type="primary" plain disabled>Primary</ca-button>
    <ca-button type="success" plain disabled>Success</ca-button>
    <ca-button type="info" plain disabled>Info</ca-button>
    <ca-button type="warning" plain disabled>Warning</ca-button>
    <ca-button type="danger" plain disabled>Danger</ca-button>
  </ca-row>

```html
 <ca-row class="mb-4">
    <ca-button disabled>Default</ca-button>
    <ca-button type="primary" disabled>Primary</ca-button>
    <ca-button type="success" disabled>Success</ca-button>
    <ca-button type="info" disabled>Info</ca-button>
    <ca-button type="warning" disabled>Warning</ca-button>
    <ca-button type="danger" disabled>Danger</ca-button>
  </ca-row>

  <ca-row>
    <ca-button plain disabled>Plain</ca-button>
    <ca-button type="primary" plain disabled>Primary</ca-button>
    <ca-button type="success" plain disabled>Success</ca-button>
    <ca-button type="info" plain disabled>Info</ca-button>
    <ca-button type="warning" plain disabled>Warning</ca-button>
    <ca-button type="danger" plain disabled>Danger</ca-button>
  </ca-row>
```

## 文字按钮

没有边框和背景色的按钮。

 <ca-button type="text">Text Button</ca-button>
 <ca-button type="text" disabled>Text Button</ca-button>

```html
<ca-button type="text">Text Button</ca-button>
<ca-button type="text" disabled>Text Button</ca-button>
```

## 图标按钮

暂未实现 💤


## 按钮组

通过按钮组来组合一系列相似的操作。

使用标签 `<ca-button-group>` 来给按钮分组。

 <ca-button-group>
    <ca-button type="primary" >Previous Page</ca-button>
    <ca-button type="primary">
      Next Page
    </ca-button>
  </ca-button-group>

```html
 <ca-button-group>
    <ca-button type="primary" >Previous Page</ca-button>
    <ca-button type="primary">
      Next Page
    </ca-button>
  </ca-button-group>
```

## 加载中

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

 <ca-button type="primary" loading>Loading</ca-button>

```html
<ca-button type="primary" loading>Loading</ca-button>
```


## 各种尺寸的按钮

除了默认尺寸外，Button 组件还提供了三种额外的尺寸供您在不同的场景中选择。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

  <ca-row>
    <ca-button size="large">Large</ca-button>
    <ca-button>Default</ca-button>
    <ca-button size="small">Small</ca-button>
  </ca-row>
    <ca-row class="my-4">
    <ca-button size="large" round>Large</ca-button>
    <ca-button round>Default</ca-button>
    <ca-button size="small" round>Small</ca-button>
  </ca-row>

```html
 <ca-row>
    <ca-button size="large">Large</ca-button>
    <ca-button>Default</ca-button>
    <ca-button size="small">Small</ca-button>
  </ca-row>
    <ca-row class="my-4">
    <ca-button size="large" round>Large</ca-button>
    <ca-button round>Default</ca-button>
    <ca-button size="small" round>Small</ca-button>
  </ca-row>
```

## 自定义颜色

暂未实现 💤

## Button 属性

| Attribute                                     | Description                    | Type               | Accepted Values                                    | Default |
|-----------------------------------------------|--------------------------------|--------------------|----------------------------------------------------|---------|
| size                                          | 尺寸                           | string             | large / default /small                             | —       |
| type                                          | 类型                           | string             | primary / success / warning / danger / info / text | —       |
| plain                                         | 是否为朴素按钮                 | boolean            | —                                                  | false   |
| round                                         | 是否为圆角按钮                 | boolean            | —                                                  | false   |
| circle                                        | 是否为圆形按钮                 | boolean            | —                                                  | false   |
| loading                                       | 是否为加载中状态               | boolean            | —                                                  | false   |
| <span class="waitting">loading-icon</span> 💤 | 自定义加载中图标               | string / Component | —                                                  | Loading |
| disabled                                      | 是否为禁用状态                 | boolean            | —                                                  | false   |
| <span class="waitting">icon</span> 💤         | 自定义图标                     | string / Component | —                                                  | —       |
| autofocus                                     | 原生 `autofocus`   属性        | boolean            | —                                                  | false   |
| native-type                                   | 原生 `type` 属性               | string             | button / submit / reset                            | button  |
| auto-insert-space                             | 自动在两个中文字符之间插入空格 | boolean            |                                                    | —       |


## Button Group 属性

| Attribute | Description                  | Type   | Accepted Values  | Default |
|-----------|------------------------------|--------|------------------|---------|
| size      | 用于控制该按钮组内按钮的大小 | string | 与按钮的大小相同 | —       |
| type      | 用于控制该按钮组内按钮的类型 | string | 与按钮的类型一致 | —       |

## Button Group 插槽

| Name | Description      | Subtags |
|------|------------------|---------|
| -    | 自定义按钮组内容 | Button  |


<style>
  .waitting{
    color:#0099c5;
    text-decoration:line-through;
  }
  ca-row {
    margin-bottom: 20px;
}
</style>
