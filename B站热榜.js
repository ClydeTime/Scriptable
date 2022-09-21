// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: fighter-jet;
/*
// ***************************
// 环境框架   ：@ DmYY  
// author 	 ：原作者2Ya 由DJG修改
*/

const { DJG, Runing } = importModule(
  FileManager.local().joinPath(
    FileManager.local().libraryDirectory(),
    "/DJG.js"
  )
);

// @组件代码开始
class Widget extends DJG {
  constructor(arg) {
    super(arg);
    this.name = 'B站热榜'
    this.widget_ID = "DJG-112"
    this.version = "V3.0";
    this.logo = 'https://s1.ax1x.com/2022/07/10/jszrp6.png';
    
    this.Run(module.filename, args);
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    if(!this.settings.choiceAction && !this.settings.openMode) {
      this.settings.choiceAction = "a";
      this.settings.openMode = "a";
    }
    try{
      let data = await this.getData()
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget, data);
        	break;
        case 'medium':
        	await this.renderMedium(widget, data);
        	break;
        default:
        	await this.renderMedium(widget, data, 13);
        	break;
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  // 小组件
  async renderSmall (w, data) {
    await this.renderHeader(w, this.logo, this.name)
    const cell = w.addStack()
    this.addText(cell, '1', 13, {font:'light', color:'fe2d46'})
    cell.addSpacer(8)
    this.addText(cell, data.data[0]['title'], 13, {font:'light'})
    w.addSpacer()
    let _score = data.data[0]['play']
    this.addText(w, `      ${_score}`, 10, {font:'light', opacity:0.8})
    let _url = this.decideGoto(data.data[0])
    cell.url = _url
  }
  
  // 中组件
  async renderMedium (w, data, num = 5) {
    w.addSpacer(5);
    await this.renderHeader(w, this.logo, this.name, 8)
    for( let i = 0; i < num; i++){
      let d = data.data[i]
      const cell = w.addStack();
      cell.centerAlignContent();
      let col = null;
      if (i === 0) { col = '#fe2d46'
      } else if (i === 1) { col = '#ff6600'
      } else if (i === 2) { col = '#faa90e'
      } else { col = '#9195a3'}
      this.addText(cell, String(i+1), 13, {font:'light', color:col, font:'bold'})
      cell.addSpacer(10)
      let _title = d['title']
      this.addText(cell, _title, 13, {font:'light', lineLimit:1})
      cell.addSpacer()
      let _score = String(d['play'])
      this.addText(cell, _score, 10, {font:'light', opacity:0.8})
      let _url = this.decideGoto(d)
      cell.url = _url
      w.addSpacer(6)
    }
  }
  /**
   * 获取数据函数，函数名可不固定
   */
  async getData () {
    let title = ['0', '1', '3', '4', '5', '36', '119', '129']
    const optionStatus = this.settings.optionStatus || new Array(8);
    let index = optionStatus.indexOf(true);
    index = index==-1 ? 0 : index;
    const url = `https://app.bilibili.com/x/v2/rank/region?rid=${title[index]}`;
    let data = await this.httpGet(url, 2)
    return data
  }
  // 获取对应的打开方式
  decideGoto(item) {
    const optionStatus2 = this.settings.optionStatus2 || new Array(2);
    let index = optionStatus2.indexOf(true);
    index = index==-1 ? 0 : index;
    if(index == 0){
      return `https://bilibili.com/${item.goto}${item.param}`;
    }else{
      return item.uri;
    }
  }
  // 添加设置信息
  Run(filename, args) {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
      this.registerAction("榜单设置", async () => {
          await this.setChoiceAction("榜单设置", "选择不同类型的B站榜单", [
            '全站', '动画', '音乐', '游戏', '娱乐', '科技', '鬼畜', '舞蹈'
          ]);
      }, { name: 'chart.bar', color: '#7B68EE' });
      this.registerAction("打开设置", async () => {
          await this.setChoiceAction("打开设置", "点击某条榜单时的打开方式", [
            "浏览器", "客户端"
          ], true, 'optionStatus2');
      }, { name: 'envelope.open', color: '#66CD00' });
    }
  }
}

// @组件代码结束
await Runing(Widget)