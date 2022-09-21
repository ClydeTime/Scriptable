// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// ***************************
// 环境框架   ：@ DmYY  
// author 	 ：原作者「脑瓜」, 由DJG修改
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
    this.name = '中国联通'
    this.widget_ID = "DJG-109"
    this.version = "V1.4"
    this.logo = 'https://s1.ax1x.com/2022/07/10/jsxyZj.png';
    this.verticalLogo = 'https://s1.ax1x.com/2022/07/10/jsxwz8.png';
    
    this.Run(module.filename, args);
  }
  
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    if(!this.settings.cookie){
      const error = "需要输入联通cookie"
      return this.ERROR = [{error:error}];
    }
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    try{
      await this.getData();
      await this.getFlowInfo();
      this.saveSettings(false);
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget);
        	break;
        case 'medium':
        	await this.renderMedium(widget);
        	break;
        default:
        	return await this.renderAlert();
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  fee = {
    LinearColor: ['d7000f', 'EED5D7']
  }
  
  flow = {
    icon: 'antenna.radiowaves.left.and.right',
    iconColor: '1ab6f8',
    FGColor: '12A6E4',
    BGColor: 'F86527',
    LinearColor: ['12A6E4', 'B9E4F6']
  };

  voice = {
    icon: 'phone.fill',
    iconColor: '30d15b',
    FGColor: 'F86527',
    BGColor: 'F86527',
    LinearColor: ['F86527', 'F0DED6']
  };
  
  point = {
    unit: '',
    icon: 'tag.fill',
    iconColor: 'fc6d6d',
  }
  
  addText(stack, text, size, param = {}, useShadow = true){
    const format = {opacity:'textOpacity', url:'url', lineLimit:'lineLimit', zoom:'minimumScaleFactor'};
    let title = stack.addText(`${text}`);
    title.font = param.font ? this.provideFont(param.font, size) : Font.systemFont(size);
    title.textColor = param.color ? new Color(param.color) : this.widgetColor;
    Object.keys(param).forEach((key) => {
      if(format[key]!=null) title[format[key]] = param[key];
    })
    param.align && title[param.align+'AlignText']();
    const lightShadow = this.settings.lightShadowColor;
    const darkShadow = this.settings.darkShadowColor;
    if(useShadow && (lightShadow || darkShadow)) {
      title.shadowColor = Color.dynamic(
        new Color(lightShadow || 'fff', 0.8),
        new Color(darkShadow || '000', 0.8),
      );
      title.shadowOffset = new Point(1, 1);
      title.shadowRadius = 1;
    }
    return title;
  }
  
  // 小组件
  async renderSmall(widget){
    widget.setPadding(12, 12, 12, 12);
    const headerStack = widget.addStack();
    headerStack.addSpacer();
    let image = await this.getImageByUrl(this.logo);
    this.addImage(headerStack, image, {w:415 * 0.24, h:125 * 0.24});
    headerStack.addSpacer();
    widget.addSpacer();

    const feeStack = widget.addStack();
    feeStack.addSpacer();
    this.addText(feeStack, `${this.settings.fee.number}`, 21);
    feeStack.addSpacer();
    widget.addSpacer();
    const bodyStack = widget.addStack();
    bodyStack.layoutVertically();
    let flow = this.getFlow();
    if (this.settings.button[1]){
      this.textLayout(bodyStack, {...flow, ...this.flow});
      bodyStack.addSpacer(7);
      this.textLayout(bodyStack, {...this.settings.voice, ...this.voice});
      bodyStack.addSpacer(7);
      this.textLayout(bodyStack, {...this.settings.point, ...this.point});
    } else {
      const canvas = this.makeCanvas(178, 178);
      const ringStack = bodyStack.addStack();
      this.imageCell(canvas, ringStack, {...flow, ...this.flow});
      ringStack.addSpacer();
      this.imageCell(canvas, ringStack, {...this.settings.voice, ...this.voice});
    }
  }
  
  textLayout(stack, data) {
    const rowStack = stack.addStack();
    rowStack.centerAlignContent();
    const icon = SFSymbol.named(data.icon);
    icon.applyHeavyWeight();
    this.addImage(rowStack, icon.image, {w:13, h:13}, {color:data.iconColor});
    rowStack.addSpacer(4);
    this.addText(rowStack, data.title, 13);
    rowStack.addSpacer();
    this.addText(rowStack, data.number + data.unit, 13);
  }
  
  async imageCell(canvas, stack, data, fee, percent) {
    const canvaStack = stack.addStack();
    canvaStack.layoutVertically();
    if (!fee) {
      const opts = {size:178, radius:80, width:18, percent:data.percent};
      this.drawArc(canvas, opts, data.FGColor, data.BGColor);
      canvaStack.size = new Size(61, 61);
      canvaStack.backgroundImage = canvas.getImage();
      this.ringContent(canvaStack, data, percent);
    } else {
      canvaStack.addSpacer(10);
      const smallLogo = await this.getImageByUrl(this.verticalLogo);
      const logoStack = canvaStack.addStack();
      logoStack.size = new Size(40, 40);
      logoStack.backgroundImage = smallLogo;
    }
  }
  
  ringContent(stack, data, percent = false) {
    const rowIcon = stack.addStack();
    rowIcon.addSpacer();
    const icon = SFSymbol.named(data.icon);
    icon.applyHeavyWeight();
    const iconElement = rowIcon.addImage(icon.image);
    iconElement.tintColor = new Color(data.FGColor);
    iconElement.imageSize = new Size(12, 12);
    iconElement.imageOpacity = 0.7;
    rowIcon.addSpacer();

    stack.addSpacer(1);

    const rowNumber = stack.addStack();
    rowNumber.addSpacer();
    let title = percent ? `${data.percent}` : `${data.number}`;
    this.addText(rowNumber, title, 12, {font:'medium'});
    rowNumber.addSpacer();

    const rowUnit = stack.addStack();
    rowUnit.addSpacer();
    title = percent ? '%' : data.unit;
    this.addText(rowUnit, title, 8, {font:'bold', opacity:0.5});
    rowUnit.addSpacer();
  }
  
  // 中组件
  async renderMedium(widget){
    widget.setPadding(10, 10, 10, 10);
    const canvas = this.makeCanvas(178, 178);
    const bodyStack = widget.addStack();
    await this.mediumCell(canvas, bodyStack, {...this.settings.fee, ...this.fee}, true);
    bodyStack.addSpacer(10);
    let flow = this.getFlow();
    await this.mediumCell(canvas, bodyStack, {...flow, ...this.flow}, false, true);
    bodyStack.addSpacer(10);
    await this.mediumCell(canvas, bodyStack, {...this.settings.voice, ...this.voice}, false, true);
  }
  
  async mediumCell(canvas, stack, data, fee = false, percent) {
    let color = data.LinearColor[0];
    const bg = new LinearGradient();
    bg.locations = [0, 1];
    bg.colors = [
      Color.dynamic(
        new Color(data.LinearColor[0], 0.03),
        new Color(data.LinearColor[1], 0.03)
      ),
      Color.dynamic(
        new Color(data.LinearColor[0], 0.1),
        new Color(data.LinearColor[1], 0.1)
      ),
    ];
    const dataStack = stack.addStack();
    dataStack.backgroundGradient = bg;
    dataStack.cornerRadius = 20;
    dataStack.layoutVertically();
    dataStack.addSpacer();

    const topStack = dataStack.addStack();
    topStack.addSpacer();
    await this.imageCell(canvas, topStack, data, fee, percent);
    topStack.addSpacer();
    
    if (fee) {
      dataStack.addSpacer(5);
      const updateStack = dataStack.addStack();
      updateStack.addSpacer();
      updateStack.centerAlignContent();
      const updataIcon = SFSymbol.named('arrow.2.circlepath');
      updataIcon.applyHeavyWeight();
      const updateImg = updateStack.addImage(updataIcon.image);
      updateImg.tintColor = new Color(color, 0.6);
      updateImg.imageSize = new Size(10, 10);
      updateStack.addSpacer(3);
      const updateTime = this.getDateStr('HH:mm');
      this.addText(updateStack, `${updateTime}`, 10, {font:'medium', color:color, opacity:0.6});
      updateStack.addSpacer();
    }
    
    dataStack.addSpacer();

    const numberStack = dataStack.addStack();
    numberStack.addSpacer();
    this.addText(numberStack, `${data.number} ${data.unit}`, 15, {font:'semibold', color:color});
    numberStack.addSpacer();

    dataStack.addSpacer(3);

    const titleStack = dataStack.addStack();
    titleStack.addSpacer();
    this.addText(titleStack, data.title, 11, {font:'medium', color:color, opacity:0.7});
    titleStack.addSpacer();

    dataStack.addSpacer(15);
  }
  
  getFlow(){
    let flow = null;
    let optionStatus = this.settings.optionStatus || [true];
    if(optionStatus[0]){
      flow = this.settings.flows[0];
    }else if(optionStatus[1]){
      flow = this.settings.flows[1];
    }else if(optionStatus[2]){
      flow = this.settings.flows[2];
    }
    return flow;
  }
  
  async login() {
    const url = 'https://m.client.10010.com/dailylottery/static/textdl/userLogin?version=iphone_c@8.0200&desmobile=';
    const opts = {
      headers: {'cookie': this.settings.cookie}
    }
    const signInfo = await this.httpGet(url, false, true, opts);
    try {
      if (signInfo.indexOf('天天抽奖') >= 0 && signInfo.indexOf('请稍后重试') < 0) {
        console.log('用户登录成功');
      } else {
        this.flow.FGColor = 'C4C4C4';
        this.voice.FGColor = 'C4C4C4';
        this.notify(this.name, '用户登录失败，cookie失效');
        console.log('用户登录失败，cookie失效');
      }
    } catch (e) {
      console.log('用户登录失败：' + e);
    }
  }

  async getData() {
    await this.login();
    const url= 'https://m.client.10010.com/mobileserviceimportant/home/queryUserInfoSeven?version=iphone_c@8.0200&desmobiel=&showType=0';

    const opts = {
      headers: {'cookie': this.settings.cookie}
    }
    const userInfo = await this.httpGet(url, true, true, opts);
    try {
      if (userInfo.code === 'Y') {
        console.log('获取信息成功');
        userInfo.data.dataList.forEach((item) => {
          if (item.type === 'fee') {
            let fee = {en: '¥'};
            if (item.unit ==='万元') {
              fee.number = item.number * 10000;
              fee.unit = '元';
            } else {
              fee.number = item.number;
              fee.unit = item.unit;
            }
            fee.title = item.remainTitle;
            this.settings.fee = fee;
          }
          if (item.type === 'flow') {
            let flow = {};
            flow.itemName = '套餐内总流量';
            flow.unit = item.unit;
            flow.en = item.unit;
            if(!this.settings.button[0]){
              flow.title = '剩余流量';
              flow.number = item.number;
              flow.percent = (100 - item.persent).toFixed(2);
            } else {
              flow.title = '已用流量';
              flow.number = (item.number/(1 - item.persent/100) - item.number).toFixed(2);
              flow.percent = item.persent || '0.00';
            }
            this.settings.flow = flow;
          }
          if (item.type === 'voice') {
            let voice = {en: 'MIN'};
            voice.number = item.number;
            voice.unit = item.unit;
            voice.percent = (100 - item.persent).toFixed(2);
            voice.title = item.remainTitle;
            this.settings.voice = voice;
          }
          if (item.type === 'point') {
            let point = {};
            point.number = item.number;
            point.title = item.remainTitle;
            this.settings.point = point;
          }
        });
      } else {
        this.ERROR.push({error:'cookie失效|服务器维护'});
      }
    } catch (e) {
      this.ERROR.push({error:e.toString()});
      console.log('获取信息失败：' + e);
    }
  }
  
  async getFlowInfo() {
    const url= 'https://m.client.10010.com/servicequerybusiness/operationservice/queryOcsPackageFlowLeftContentRevisedInJune';
    const opts = {
      headers: {'cookie': this.settings.cookie}
    }
    let flowInfo = await this.httpGet(url, true, true, opts);
    try {
      let _flowInfo = flowInfo.resources[0].details;
      if(!!!_flowInfo || _flowInfo.length == 0) _flowInfo = flowInfo.unshared[0].details;
      let flows = [this.settings.flow];
      _flowInfo.forEach((item) => {
      	let flow = {};
      	let total = parseInt(item.total);
      	if(total == 0) {
          let use = parseInt(item.use);
          flow = this.formatFlow(use);
          flow.title = '已用流量';
          flow.percent = '1.00'
    		} else {
      	  if(!this.settings.button[0]){
        	    let remain = parseInt(item.remain);
            flow = this.formatFlow(remain);
            flow.title = '剩余流量';
            flow.percent = (remain/total*100).toFixed(2);
      	  } else {
        		flow = this.unlimitUser(item);
      	  }
    		}
        flow.itemName = item.feePolicyName;
        flows.push(flow);
      });
      this.settings.flows = flows;
    } catch (e) {
      console.log('获取信息失败：' + e);
    }
    return this.flows;
  }
  
  formatFlow(number) {
    const n = number;
    if (n < 1024) {
      return {number: n.toFixed(2), unit: 'MB'};
    } else if (n < 1024 * 1024) {
      return {number: (n / 1024).toFixed(2), unit: 'GB'};
    } else {
      return {number: (n / (1024*1024)).toFixed(2), unit: 'TB'};
    }
  }

  unlimitUser(item) {
    let flow = {};
    const usedFlow = this.formatFlow(parseInt(item.use));
    flow.title = '已用流量';
    flow.number = usedFlow.number;
    flow.unit = usedFlow.unit;
    flow.en = usedFlow.unit;
    flow.percent = ((item.use / item.total * 100)).toFixed(2);
    return flow;
  }
  
  async setFeeDetails () {
    const flows = this.settings.flows || [];
    let opts = flows.map((item) => {
      return item.itemName;
    })
    await this.setChoiceAction("流量显示", "选择需要加载的流量套餐。\n如无内容，请先预览！", opts);
  }
  
  async renderTables() {
    const actions = [
      {
        title: "流量套餐",
        onClick: async () => {
          await this.setFeeDetails();
        }
      },
      {
        title: '已用流量',
        but: 0,
      },
      {
        explain: '显示已用流量，不限量或伪不限量用户可开启'
      },
      {
        title: '组件样式',
        but: 1,
      },
      {
        explain: '开启后，小号组件以列表方式加载'
      }
    ];
    const table = new UITable();
    table.showSeparators = true;
    await this.dynamicMenu(table, actions, "样式设置");
    await table.present();
  }
  
  // 添加设置信息
  Run(filename, args) {
    if (config.runsInApp) {
      this.registerAction("基础设置", this.setWidgetConfig);
      this.registerAction("账号设置", async () => {
        await this.setCustomAction("账号信息", "- cookie需抓包获取-", {
            cookie: "cookie",
        });
      }, { name: 'person.crop.circle', color: '#66CD00' });  
      this.registerAction("设置样式", async () => {
        await this.renderTables()
      }, { name: 'antenna.radiowaves.left.and.right', color: '#CD6600' });
    }
  }
}
// @组件代码结束
await Runing(Widget)