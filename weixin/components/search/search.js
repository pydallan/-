// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    console.log(this.data.status)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navigateToSearch(){
      console.log(1),
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
