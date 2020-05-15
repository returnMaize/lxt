## 文件说明
介绍组
件中mixin设计原理

## 开始
下面我将会列出几乎所有组件都需要用到的vue.$option，然后我们会对这些公共的vue.$option进行提取转变成mixin，下面来看看我是如何提取和设计的。了解这些之后会让你对改组件库有更深的了解

## props
- optio
n 用户所传option

## data
- defaultOption (组件默认的option)
- baseClass (组件默认需要的样式类)
- optionOfC
lass (组件通过option生成的样式类)

## computed
- finalOption (defaultOption 和 option 合并得到的最终option)
- finalClass (baseClass 和 optionOfClass合并得到最终样式类)

## 生命周期
- created
```
created() {
  this.optionOfClass = this.genClassByOption
}
```

## methods
- genClas
sByOption -> defaultOption (通过option生成样式类)

## mixins
1. 通过以上vue.$options参数 我们可以发现所有组件都需要finalOption finalClass 所以我们把它提取成optionAndClassHandler mixin

optionAndClassHandler (处理option 和 class)
```
{
  props: {
    option: Object,
    default () {
      return this.defaultOption
    }
  },
  data () {
    return {
      defaultOption: {},
      baseClass: [],
      optionOfClass: []
    }
  },
  computed: {
    finalOption () {
      return Object.assign({}, this.defaultOption, this.option);
    },
    finalClass () {
      return this.baseClass.concat(this.optionOfClass);
    }
  },
  created () {
    this.optionOfClass = this.genClassByOption()
  },
  methods: {
    genClassByOption () {
      throw new Error('Used optionAndClassHandler mixin must define genClassByOption method')
    }
  }
}
```
2. 在组件库中 我们发现许多组件都有size配置参数 组件拿到这个size之后会进行判断得出一个base 之后组件和size相关的样式会乘以这个base完成组件大小的控制

genBaseBySizeMethod (混入genBaseBySize方法)
```
{
  methods: {
    genBaseBySize (size) {
      let base;
      switch (size) {
        case "default":
          base = 1;
          break;
        case "small":
          base = 0.8;
          break;
        case "large":
          base = 1.2;
          break;
      }
      return base;
    }
  }
}
```
3. 因为我们的组件配置项是对象类型 而vue监听不到对象属性的添加 所以我们需要一个mixin让option变为响应式

optionReativeHandler
```
{
  watch: {
    option () {
      this.optionOfClass = this.genClassByOption();
    }
  }
}
```
