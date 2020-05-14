export default {
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