// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// 抖音搜索：大舅哥科技
// 微信搜索公众号「大舅哥科技」
// 获取更多精美实用 iOS 桌面组件！
// 更多精选快捷指令、壁纸，等你！
// ***************************
// 环境框架   ：@ DmYY  
// author 	 ：原作者Honye, 由DJG修改
*/

const { DJG, Runing } = importModule(
  FileManager.local().joinPath(
    FileManager.local().libraryDirectory(),
    "/DJG.js"
  )
);

// @组件代码开始
class Widget extends DJG {
  constructor (arg) {
    super(arg)
    this.name = '微博热榜+Top7'
    this.widget_ID = "DJG-106"
    this.version = "V3.6";
    this.apiUrl = "https://weibointl.api.weibo.cn/portal.php?ct=feed&a=search_topic";
    this.logo = "https://s1.ax1x.com/2022/07/10/jrj056.png";

    this.Run();
  }
  
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    if(!this.settings.choiceAction) this.settings.choiceAction = "b";
    try{
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget);
        	break;
        case 'medium':
        	await this.renderMedium(widget);
        	break;
        default:
        	await this.renderMedium(widget, 16);
        	break;
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  /**
   * 渲染小尺寸组件
   */
  async renderSmall (w) {
    let res = await this.httpGet(this.apiUrl);
    let data = res['data'];
    let topic = data[0];
    // 显示数据
    await this.renderHeader(w, this.logo, '微博热搜')
    let body = w.addStack();
    this.addText(body, topic['title'], 13, {font:'light', align:'left'});

    w.addSpacer()
    let footer = w.addStack()
    footer.centerAlignContent()
    footer.addSpacer(5)
    if (topic['icon']) {
      let hot = footer.addImage(await this.getImageByUrl(topic['icon']))
      hot.imageSize = new Size(13, 13)
      footer.addSpacer(5)
    }
    this.addText(footer, String(topic['number']), 10, {font:'light', opacity:0.5});
  }
  
  /**
   * 渲染中尺寸组件
   */
  async renderMedium (widget, count = 7) {
    let widgetBottom, stackBottom;
    let res = await this.httpGet(this.apiUrl);
    let data = res['data'];
    // 显示数据
    widget.setPadding(6, 12, 6, 14);
    for (let i = 0; i < count; ++i) {
      const item = data[i];
      if (i === 0) {
        const stack = widget.addStack();
        await this.addItem(stack, item);
        stack.addSpacer();
        const upTime = this.getDateStr('HH:mm');
        this.addText(stack, `更新于:${upTime}`, 10, {opacity:0.5})
      } else if (i < count - 2) {
        await this.addItem(widget, item);
      } else {
        if (!widgetBottom) {
          stackBottom = widget.addStack();
          stackBottom.bottomAlignContent();
          widgetBottom = stackBottom.addStack();
          widgetBottom.layoutVertically();
          await this.addItem(widgetBottom, item);
        } else {
          await this.addItem(widgetBottom, item);
        }
        widgetBottom.length = (widgetBottom.length || 0) + 1;
        if (widgetBottom.length === 2) {
          stackBottom.addSpacer();
          this.addImage(stackBottom, await this.getImageByUrl(this.logo), {w:30, h:30});
        }
      }
    }
  }

async addItem (widget, item) {
  /** 微博 H5 应用页面 */
  const search = (keyword) => `https://m.weibo.cn/search?containerid=${encodeURIComponent('100103type=1&t=10&q=' + keyword)}`;

  const stack = widget.addStack();
  const queryString = item.scheme.split('?')[1];
  //const [, queryString] = item.scheme.split('?');
  const query = {};
  queryString.split('&').forEach((item) => {
    const dome = item.split('=');
    const key = dome[0];
    const value = dome[1];
    //const [key, value] = item.split('=');
    query[key] = value;
  });
  stack.url = search(query.keyword);
  stack.centerAlignContent();
  stack.size = new Size(-1, 20);
  const stackIndex = stack.addStack();
  stackIndex.size = new Size(14 * 1.4, -1);
  const color = item.pic_id > 3 ? '#f5c94c' : '#fe4f67';
  this.addText(stackIndex, String(item.pic_id), 13, {align:'right', font:'bold', opacity:0.9, color:color});
  stack.addSpacer(4);
  this.addText(stack, item.title, 13, {lineLimit:1, opacity: 0.7});
  if (item.icon) {
    stack.addSpacer(4);
    this.addImage(stack, await this.getImageByUrl(item.icon), {w:12, h:12});
  }
  stack.addSpacer();
};
  
  // 添加设置信息
  Run(filename, args) {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
    }
  }
}
// @组件代码结束
await Runing(Widget)
