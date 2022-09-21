// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// ***************************
// 环境框架   ：@ DmYY  
// author 	 ：原作者未知 DJG修改
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
    this.name = '知乎热榜'
    this.widget_ID = "DJG-120"
    this.version = "V3.1"
    this.API = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true';
    this.logo = 'https://s1.ax1x.com/2022/07/10/jyQAVs.png'

    this.Run(module.filename, args);
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget)
    try{
      let data = await this.getData();
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
    this.addText(cell, '1', 13, {font:'light', color:'#fe2d46'})
    cell.addSpacer(8)
    this.addText(cell, data[0]['target']['title'], 13, {font:'light'})
    w.addSpacer()
    let score = data[0]['target'].follower_count;
    this.addText(w, `      ${score}`, 10, {font:'light', opacity:0.8});
    let url = `zhihu://question/${data[0].target.id}`;
    cell.url = url;
  }
  
  // 中组件
  async renderMedium (w, data, num = 5) {
    w.addSpacer(5);
    await this.renderHeader(w, this.logo, this.name, 8)
    data.slice(0, num).map((d, i) => {
      const cell = w.addStack();
      cell.centerAlignContent();
      let col = null;
      if (i === 0) { col = '#fe2d46'
      } else if (i === 1) { col = '#ff6600'
      } else if (i === 2) { col = '#faa90e'
      } else { col = '#9195a3'}
      this.addText(cell, String(i+1), 13, {font:'light', color:col, font:'bold'})
      cell.addSpacer(10);
      let title = d['target']['title'];
      this.addText(cell, title, 13, {font:'light', lineLimit:1})
      cell.addSpacer();
      let url = `zhihu://question/${d.target.id}`;
      cell.url = url;
      w.addSpacer(6)
    })
  }
  
  /**
   * 获取数据函数，函数名可不固定
   */
  async getData () {
    let data = await this.httpGet(this.API);
    return data.data;
  }
  
  actionUrl (name = '', data = '') {
    let u = URLScheme.forRunningScript()
    let q = `act=${encodeURIComponent(name)}&data=${encodeURIComponent(data)}&__arg=${encodeURIComponent(this.arg)}&__size=${this.widgetFamily}`
    let result = ''
    if (u.includes('run?')) {
      result = `${u}&${q}`
    } else {
      result = `${u}?${q}`
    }
    return result
  }
  
  // 添加设置信息
  Run(filename, args) {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
    }
  }
}

// @组件代码结束
await Runing(Widget)