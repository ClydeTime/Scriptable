// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// ***************************
// 环境框架   ：@ DmYY  
// script 	 ：原作者不详, 由DJG修改
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
    this.name = '网易云热评'
    this.widget_ID = "DJG-107"
    this.version = "V3.5"

    this.Run(module.filename, args);
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    if (!this.settings.url) {
      if(config.runsInWidget) return await this.renderAlert('需要申请 \'网易云热评\' 接口');
      return await this.inputKey();;
    }
    try{
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderMedium(widget);
        	break;
        case 'medium':
        	await this.renderMedium(widget);
        	break;
        default:
        	await this.renderMedium(widget);
        	break;
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  // 中组件
  async renderMedium(w){
    let hotcommentsData = await this.getData();
    
    this.settings.text = hotcommentsData.data.content;
    this.saveSettings(false);
    
    w.setPadding(10, 10, 10, 10);
    this.addText(w, '❝ ', 18);
    w.addSpacer();
    this.addText(w, `${hotcommentsData.data.content}`, 16, {font:'light', align:'center', zoom:0.2});

    w.addSpacer();

    const footerStack = w.addStack();
    footerStack.bottomAlignContent();

    const profileStack = footerStack.addStack();
    profileStack.topAlignContent();

    const image = await this.getImageByUrl(hotcommentsData.data.avatar);
    this.addImage(profileStack, image, {w:30, h:30}, {corner:15, borderColor:'bfbfbf', borderW:4}); 

    profileStack.addSpacer(10);

    const nameStack = profileStack.addStack();
    nameStack.layoutVertically();
    this.addText(nameStack, hotcommentsData.data.nickname, 10, {color:'FF7F00', url:'orpheuswidget://'})
    nameStack.addSpacer(4)  
    this.addText(nameStack, `—— 评论来自《${hotcommentsData.data.songAutho}》`, 10, {font:'semibold', opacity:0.6})

    footerStack.addSpacer();

    let docsSymbol = SFSymbol.named("book")
    this.addImage(footerStack, docsSymbol.image, {w:20, h:20}, {color:'this', url:hotcommentsData.data.url});
    
    footerStack.addSpacer(8)
  }
  
  async getData(){
    const data = await this.httpGet(this.settings.url)
    if(data.code != 200){
      let error = `错误码：${data.code}，请在接口文档中查看错误码说明`;
      this.ERROR.push({error: error});
    }
    return data;
  }
  
  // 木小果API
  async inputKey(){
    const title = '申请\'网易云热评\'接口';
    const message = '🟢 登陆成功后 🟢\n点击左上角，选择接口列表\n找到\'网易云热评\'，向左滑动\n🔸点击购买，无需付费🔸\n跳到我的接口后，向左滑动\n找到并复制接口链接';
    const idx = await this.generateAlert(message, ['申请接口','输入接口'], title);
    if(idx === 0) return await Safari.open('https://api.muxiaoguo.cn/user/register.html');
    await this.setCustomAction("木小果API", "请正确输入接口链接", {
      url: "接口链接",
    });
  }
  
  // 添加设置信息
  Run(filename, args) {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
      this.registerAction("复制热评", async () => {
        if(this.settings.text){
          Pasteboard.copyString(this.settings.text);
          this.notify(this.name,'当前网易云热评复制成功！');
        }else{
          this.notify('⚠️复制失败','请先运行一次预览组件，再点击此按钮。');
        };
      }, { name: 'chart.bar', color: '#7B68EE' });
      this.registerAction("木小果API", async () => {
        await this.inputKey();
      }, { name: 'key.icloud', color: '#B8860B' });
    }
  }
}
// @组件代码结束
await Runing(Widget)