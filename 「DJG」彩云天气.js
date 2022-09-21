// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: feather-alt;
/*
// ***************************
// 环境框架   ：@ DmYY  
// script 	 ：原作者Pih、LSP 由DJG修改
*/

FILE = FileManager.local()
FILEPATH = FILE.joinPath(FILE.libraryDirectory(), "/DJG.js")
const { DJG, Runing } = importModule(FILEPATH);

// @组件代码开始
class Widget extends DJG {
  constructor(arg) {
    super(arg);
    this.name = "彩云天气";
    this.widget_ID = "DJG-116";
    this.version = "V3.7";
    this.logo = 'https://gitee.com/scriptxx_djg/imgebed/raw/master/menu/Imported_Image.png';
    this.isPhone = Device.model() == "iPhone";
    this.Run();
    this.widgetConfigs = {
      greetingText: {
        nightGreeting: "该睡觉了~",    morningGreeting: "早上好~",    noonGreeting: "中午好~",
        afternoonGreeting: "下午好~",  eveningGreeting: "晚上好~",
      },
      anniversaryText: {
        "1-1": "年之伊始，万事如意~",  "10-1": "国之庆典，普天同庆~",  "12-25": "𝔐𝔢𝔯𝔯𝔶 ℭ𝔥𝔯𝔦𝔰𝔱𝔪𝔞𝔰~",
      },
      lunarText: {
        "正月初一": "金牛贺岁迎新春~",  "正月初二": "喜迎财神福满门~",  "正月初三": "赤狗小年朝~",
      },
      // 自定义天气对应的icon 
      weather: {
        CLEAR_DAY: '晴',                CLEAR_NIGHT: '晴',             PARTLY_CLOUDY_DAY: '多云',
        PARTLY_CLOUDY_NIGHT: '多云',     CLOUDY: '阴',                 CLOUDY_NIGHT: '阴',
        LIGHT_HAZE: '轻度雾霾',          LIGHT_HAZE_NIGHT: '轻度雾霾',   MODERATE_HAZE: '中度雾霾',
        MODERATE_HAZE_NIGHT: '中度雾霾', HEAVY_HAZE: '重度雾霾',         HEAVY_HAZE_NIGHT: '重度雾霾',
        LIGHT_RAIN: '小雨',             MODERATE_RAIN: '中雨',          HEAVY_RAIN: '大雨',
        STORM_RAIN: '暴雨',             FOG: '雾',                     LIGHT_SNOW: '小雪',
        MODERATE_SNOW: '中雪',          HEAVY_SNOW: '大雪',            STORM_SNOW: '暴雪',
        DUST: '浮尘',                   SAND: '沙尘',                  WIND: '大风'
      },// 自定义天气对应的icon 
      weatherIcos: {
        CLEAR_DAY: "https://s3.ax1x.com/2020/12/08/rpVVhD.png", // 晴（白天）
        CLEAR_NIGHT: "https://s1.ax1x.com/2020/10/26/BukPhR.png", // 晴（夜间）
        PARTLY_CLOUDY_DAY: "https://s1.ax1x.com/2020/10/26/BuQHN6.png", // 多云（白天）
        PARTLY_CLOUDY_NIGHT: "https://s1.ax1x.com/2020/10/26/BukcbF.png", // 多云（夜间）
        CLOUDY: "https://s3.ax1x.com/2020/12/10/ripz8J.png", // 阴（白天）
        CLOUDY_NIGHT: "https://s3.ax1x.com/2020/12/10/ripz8J.png", // 阴（夜间）
        LIGHT_HAZE: "https://s3.ax1x.com/2021/01/15/s009Mj.png", // 轻度雾霾
        LIGHT_HAZE_NIGHT: "https://s3.ax1x.com/2021/01/15/s00dOA.png", // 轻度雾霾
        MODERATE_HAZE: "https://s3.ax1x.com/2021/01/15/s009Mj.png", // 中度雾霾
        MODERATE_HAZE_NIGHT: "https://s3.ax1x.com/2021/01/15/s00dOA.png", // 中度雾霾
        HEAVY_HAZE: "https://s3.ax1x.com/2021/01/15/s009Mj.png", // 重度雾霾
        HEAVY_HAZE_NIGHT: "https://s3.ax1x.com/2021/01/15/s00dOA.png", // 重度雾霾
        LIGHT_RAIN: "https://s3.ax1x.com/2020/12/15/rMkQVx.png", // 小雨
        MODERATE_RAIN: "https://s3.ax1x.com/2020/12/15/rMkBIf.png", // 中雨
        HEAVY_RAIN: "https://s3.ax1x.com/2020/12/15/rMk6zQ.png", // 大雨
        STORM_RAIN: "https://s3.ax1x.com/2020/12/15/rMk6zQ.png", // 暴雨
        
        FOG: "https://s3.ax1x.com/2020/12/15/rMAYkV.png", // 雾
        LIGHT_SNOW: "https://s3.ax1x.com/2020/12/15/rMActK.png", // 小雪
        MODERATE_SNOW: "https://s3.ax1x.com/2020/12/15/rMActK.png", // 中雪
        HEAVY_SNOW: "https://s3.ax1x.com/2020/12/15/rMActK.png", // 大雪
        STORM_SNOW: "https://s3.ax1x.com/2020/12/15/rMActK.png", // 暴雪
        DUST: "https://s3.ax1x.com/2020/12/08/rpupes.png", // 浮尘
        SAND: "https://s3.ax1x.com/2020/12/08/rpupes.png", // 沙尘
        WIND: "https://s3.ax1x.com/2020/12/15/rMEeBR.png", // 大风
      },
      // 底部的小图标
      lovelyImgArr: [
        "https://s3.ax1x.com/2021/01/16/sDrPeJ.png",
        "https://s3.ax1x.com/2021/01/16/sDrFoR.png",
        "https://s3.ax1x.com/2021/01/16/sDriw9.png",
        "https://s3.ax1x.com/2021/01/16/sDr9L4.png",
        "https://s3.ax1x.com/2021/01/16/sDrpyF.png",
        "https://s3.ax1x.com/2021/01/16/sDrAF1.png",
        "https://s3.ax1x.com/2021/01/16/sDrEJx.png",
        "https://s3.ax1x.com/2021/01/16/sDrVW6.png",
      ],  
    }
  }
  /**
   * 渲染函数，函数名固定
   * 可以根据 this.widgetFamily 来判断小组件尺寸，以返回不同大小的内容
   */
  async render () {
    let widget = this.getWidget();
    await this.getWidgetBackgroundImage(widget);
    if (!this.settings.caiyunKEY) {
      if(config.runsInWidget) return await this.renderAlert('需要申请彩云天气key');
      return await this.inputKey();
  	}
    if(!this.settings.choiceAction) {
      this.settings.choiceAction = 'a';
    }
    try{
      switch (this.widgetFamily) {
        case 'small':
        	await this.renderSmall(widget);
        	break;
        case 'medium':
        	if(this.settings.choiceAction == 'a'){
          		await this.renderMedium(widget);
        	} else {
          		await this.renderMedium2(widget);
        	}
        	break;
        default:
        	return await this.renderAlert();
      }
    }catch(e){
      this.ERROR.push({error:e.toString()});
    }
    return widget;
  }
  
  async http_get (url, json = true, useCache = true, options = null, method = 'GET') {
    let cacheKey = this.hash('caiyunWeather'+this.settings.caiyunKEY);
    let cacheData = null, error = null;
    if (this.isUpdate(cacheKey.slice(-8), useCache) || !Keychain.contains(cacheKey)){
      try {
        let req = new Request(url)
        req.method = method
        if(options){
          Object.keys(options).forEach((key) => {
            req[key] = options[key];
          });
        }
        cacheData = await (json ? req.loadJSON() : req.loadString());
      } catch (e) {
        error = {url:url, error:e.toString()};
        this.writeError(error);
      };
    }
    if(cacheData && useCache) {
      this.saveCacheKey(cacheKey);
      Keychain.set(cacheKey, json ? JSON.stringify(cacheData) : cacheData)
    }else if (!cacheData && Keychain.contains(cacheKey)) {
      let cache = Keychain.get(cacheKey)
      cacheData = json ? JSON.parse(cache) : cache
    }else {this.ERROR.push(error);}
    return cacheData;
  }
  
  async setWeather(){
    let key = this.settings.caiyunKEY;
    let weather = {};
    const locData = await this.getLocation();
    const lon = locData.location.longitude;
    const lat = locData.location.latitude;
    const caiyunUrl = `https://api.caiyunapp.com/v2.5/${key}/${lon},${lat}/weather.json`;
    const caiyun = await this.http_get(caiyunUrl);
    if(caiyun.status == 'ok') {
      weather.alertInfo = caiyun.result.minutely.description; // 天气提醒
      weather.weatherDesc = caiyun.result.hourly.description; // 天气提醒
      weather.dailyTemperature = caiyun.result.daily.temperature; // 未来几天温度
      weather.data = caiyun.result.hourly.temperature; // 未来24小时温度
      weather.hourlySky = caiyun.result.hourly.skycon; // 未来24小时天气
      weather.Mainweather = caiyun.result.daily.skycon; // 未来五天天气
      weather.CHNAQI = caiyun.result.realtime.air_quality.aqi.chn; // 当前空气质量数值
      weather.feelslikeT = parseInt(caiyun.result.realtime.temperature); // 当前温度
      weather.realtimeweather = caiyun.result.realtime.skycon; // 当前天气
      weather.comfort = caiyun.result.realtime.life_index.comfort.desc; // 当前指数
    } else {
      this.ERROR.push({error:caiyun.error});
    }
    
    let city = locData.postalAddress.city;
    let district = locData.postalAddress.subLocality || locData.postalAddress.street;
    if (district.indexOf(city) != -1) {
      district = district.split(city)[1] || "未知";
    }
    
    weather.city = [city, district]; // 当前位置
    return weather;
  }
  // 小组件
  async renderSmall(w){
    w.setPadding(0, 0, 0, 0)
    // 获取天气数据
    const wea = await this.setWeather();
    
    const Drawing = this.makeCanvas(130, 135);
    // 当前天气  
    this.drawIcon(Drawing, 4, 0, wea.realtimeweather,42)
    this.drawText(Drawing, 73, 5, 60, 16, this.widgetConfigs.weather[wea.realtimeweather], "regular",15,"left")
    this.drawText(Drawing, 73, 25, 30, 15, wea.feelslikeT.toString()+'°C', "regular",13,"left")
    
    // 空气质量颜色以及程度  
    let AQIcolor, ac
    // 选择 AQI 数据 USAQI or CHNAQI  
    let AQIData = wea.CHNAQI  
    if (AQIData<=50){ ac = ["00e400",'优']
    }else if (AQIData<=100){ ac = ["f8c50a",'良']
    }else if (AQIData<=150){ ac = ["ff7e00",'轻度']
    }else if (AQIData<=200){ ac = ["ff0000",'中度']
    }else if (AQIData<=300){ ac = ["ba0033",'重度']
    }else{ ac = ["7e0023",'严重']}  
    AQIcolor = new Color(ac[0],1)
    // ######右侧底色#######  
    const x = 10
    this.fillRect(Drawing, 73, 45, 45, 12, 4, AQIcolor)
    let des = ac[1]
    des = des.length > 2 ? des.slice(0, 2) : des  
    this.drawText(Drawing, 76, 46, 55, 10, AQIData + " - " + des, "semibold",8,"left", new Color("ffffff"));
    // 线
    this.fillRect(Drawing, 0, 66, 130, 0.4, 1, this._widgetColor(0.7))
    
    const dailydata = wea.dailyTemperature
    const df = new DateFormatter()  
    df.locale = "zh_cn" 
    for(let i = 0; i < 3; i++){
      // 每日日期  
      const weatherDate = new Date()  
      weatherDate.setDate(weatherDate.getDate() + i + 1)
      df.dateFormat = "E"  
      this.drawText(Drawing, 30*i+i*16+9, 74, 25,11, df.string(weatherDate),"bold",10,"center",this._widgetColor(0.8))
      // 图标
      this.drawIcon(Drawing, 30*i+i*16+8, 88, wea.Mainweather[i+1].value, 20)
      // 每日温度+"º"
      let dMax = Math.round(dailydata[i+1].max).toString()  
      let dMin = Math.round(dailydata[i+1].min).toString()
      this.drawText(Drawing,30*i+i*16,120, 40,11,`${dMin}°/${dMax}°`,"regular",9,"center",this._widgetColor(0.8))
    }
    const contentStack = w.addStack() 
    contentStack.size = new Size(130, 135)
    contentStack.addImage(Drawing.getImage());
  }
  
  // 中组件2
  async renderMedium2(w){
    w.setPadding(0, 0, 0, 0);
    // 当前日期
    //const currentDate = new Date()
    let contentStack = w.addStack()
    contentStack.layoutVertically()
    // 整体内容居中对齐
    contentStack.centerAlignContent()
    // 获取天气数据
    const weatherInfo = await this.setWeather()
    // 获取农历信息
    const lunarInfo = this.getLunar();
    //>>>>>1
    contentStack.addSpacer(10)
    const titleStack = contentStack.addStack()
    titleStack.layoutHorizontally()
    titleStack.centerAlignContent()
    titleStack.addSpacer();
    // 天气Icon
    let weatherImg = await this.getImageByUrl(this.widgetConfigs.weatherIcos[weatherInfo.realtimeweather]);
    // 显示天气
    this.addImage(titleStack, weatherImg, {w:23, h:23})
    titleStack.addSpacer(8)
    let temperatureTips = `${weatherInfo.feelslikeT}°`
    // 显示温度
    this.addText(titleStack, temperatureTips, 17);
    titleStack.addSpacer(8)
    // 天气描述 
    const weatherDesc = this.widgetConfigs.weather[weatherInfo.realtimeweather]
    // 问候语获取内容
    const greeting = await this.provideGreeting();
    // 添加显示
    this.addText(titleStack, `${weatherDesc} • ${greeting}`, 15, {font:'IowanOldStyle-Bold', lineLimit:1})
    titleStack.addSpacer()

    // 年月日周
    contentStack.addSpacer(8);
    const dateStack = contentStack.addStack()
    dateStack.layoutHorizontally()
    dateStack.centerAlignContent()
    dateStack.addSpacer()
    const dateStr = this.getDateStr("M月d日  EEE")  
    // 农历信息
    const infoLunarText = lunarInfo.lunarMonthCn + lunarInfo.lunarDayCn
    const holidayText = lunarInfo.lunarYearCn;
    let dateFullText = `${dateStr} ⊙ ${infoLunarText} ⊙ ${holidayText}`;
    // 显示
    this.addText(dateStack, dateFullText, 13, {color:'FF7F00', opacity:0.8, lineLimit:1})
    dateStack.addSpacer();

    contentStack.addSpacer(8)
    const weatherTipsStack = contentStack.addStack()
    weatherTipsStack.layoutHorizontally()
    weatherTipsStack.centerAlignContent()
    weatherTipsStack.addSpacer()
    
    // 天气预警、预告信息
    const weatherAlertInfo = weatherInfo.alertInfo
    let weatherMessge = weatherInfo.weatherDesc
    if (weatherAlertInfo != undefined) {
        weatherMessge = weatherAlertInfo
    }
    // 添加显示天气预告信息
    const tipText = `Φ ${weatherMessge} ⊙ ${weatherInfo.comfort} Φ`;
    this.addText(weatherTipsStack, tipText, 13, {opacity:0.95, lineLimit:1})
    weatherTipsStack.addSpacer()
    //>>>>>4
    contentStack.addSpacer(8)
    const infoStack = contentStack.addStack();
    infoStack.layoutHorizontally()
    infoStack.centerAlignContent()
    infoStack.addSpacer()
    // 添加背景阴影
    infoStack.backgroundColor = new Color('666', 0.2)
    infoStack.cornerRadius = 4
    infoStack.setPadding(6, 6, 6, 6)
    // 一言
    let contentInfo = await this.getOneWord()
    this.addText(infoStack, contentInfo, 12, {font:'lightMonospaced', opacity:0.9, lineLimit:1})
    infoStack.addSpacer()
    // 图标大小
    const iconSize = new Size(18, 18)
    const spacer = 8
    // 图标边距
    const iconMargin = 10
    contentStack.addSpacer(spacer)
    let updateStack = contentStack.addStack()
    updateStack.layoutHorizontally()
    updateStack.centerAlignContent()
    updateStack.addSpacer()
    // 显示底部图标栏
    const lovelyImgArr = this.widgetConfigs.lovelyImgArr
    for(let i = 0; i < 8; i++){
      let lovelyImg = await this.getImageByUrl(lovelyImgArr[i])
      this.addImage(updateStack, lovelyImg, {w:18,h:18})
      if(i == 3){
        updateStack.addSpacer(iconMargin)
        this.addText(updateStack, `${this.getDateStr("HH:mm")}更新`, 11, {opacity:0.8, lineLimit:1})
      }
      if(i != 7) updateStack.addSpacer(iconMargin)
    }
    updateStack.addSpacer()
    contentStack.addSpacer(10)
  }
  
  // 中组件
  async renderMedium(widget){
    widget.setPadding(10, 10, 8, 10)
    
    const body = widget.addStack()
    body.layoutVertically()
    
    const contentStack = body.addStack()
    
    const wea = await this.setWeather();
    // 左边画布
    const leftDrawing = this.isPhone ? this.makeCanvas(355-10, 255) : this.makeCanvas(355, 255);
    await this.setLeftDraw(leftDrawing, wea);
  
    const leftStack = contentStack.addStack()
    leftStack.addImage(leftDrawing.getImage())
    // 右边画布
    const rightDrawing = this.isPhone ? this.makeCanvas(642-355, 255-10) : this.makeCanvas(642-345, 255-13.5);
    await this.setRightDraw(rightDrawing, wea);
    
    const rightStack = contentStack.addStack()
    rightStack.addImage(rightDrawing.getImage())
    
    const bottomDrawing = this.makeCanvas(642, 25);
    
    // 如果没有预警信息，显示天气描述  
    var content, alertTextColor 
    if (wea.alertInfo == undefined){
      content = wea.weatherDesc  
    }else{
      content = "注意："+wea.alertInfo
    }
    this.drawText(bottomDrawing, 0, 3, 642, 25, content,"regular",21,"center")
  
    const bottomStack = body.addStack()
    bottomStack.addImage(bottomDrawing.getImage())
  }
  
  async setLeftDraw(leftDrawing, data){
    // 位置信息
    const city = data.city[0];
    const district = data.city[1];
    this.drawText(leftDrawing, 10, 5, 110, 28, city, "regular",25,"left") 
    this.drawText(leftDrawing, 10, 36, 110, 28, district, "regular",25,"left")
  
    // 获取农历信息
    let lunarInfo = this.getLunar();
    let date = this.getDateStr("yyyy年M月d日 EEE").split(' ');
    const lunar = lunarInfo.lunarMonthCn + lunarInfo.lunarDayCn;
    this.drawText(leftDrawing, 120, 5, 280, 28, date[0], "regular",25,"left")
    this.drawText(leftDrawing, 120, 36, 300, 28, date[1] + "  " + lunar, "regular",25,"left") 
    
    let futureEvents = await this.getSolarTerm(3);
    for (let i = 0; i < futureEvents.length; i++) {
      let event = futureEvents[i];
      let eventColor = new Color(event.color.hex);
      this.fillRect(leftDrawing, 12, 82+i*61, 5, 48, 2, eventColor)
      // 标题
      const title = event.solarTerm;
      this.drawText(leftDrawing, 29, 80+i*62, 305, 26, title, "bold", 23, "left")
      
      // 格式化时间信息。
      let nowTime = this.getTime();
      const timeLeft = Math.ceil((this.getTime(event.startTime)-nowTime)/(1000*60*60*24));
      const eventSeconds = Math.floor(nowTime / 1000) - 978307200 + timeLeft*3600*24;
      const duration = Math.ceil((this.getTime(event.endDate)-this.getTime(event.startDate))/(1000*60*60*24));
      
      // 事件时间提醒      
      var timeText, eventTimeColor
      if (timeLeft==0||timeLeft<0){
        eventTimeColor = new Color('FF7F00')
        timeText = "今天全天"
      }
      if (timeLeft == 1){
        timeText = "明天全天"
      }
      if(timeLeft>1){
        let startTime = event.startTime;
        let eee = this.getDateStr("EEE MMMd日", new Date(startTime))
        timeText = (eee + " 在" + timeLeft + "天之后")
        eventTimeColor = this._widgetColor(0.8)
      };
      this.drawText(leftDrawing, 29, 85+i*61+25, 305, 30, timeText, "medium", 20, "left", eventTimeColor);
    }
  }
  
  async setRightDraw(rightDrawing, wea){
    // 背景调整
    const slipPosition = 370  
    const daystoShow = 6;
    // ######数据设定#######
    const weatherDesc = wea.weatherDesc; // 天气提醒
    const dailyTemperature = wea.dailyTemperature; // 未来几天温度
    const data = wea.data; // 未来24小时温度
    const dailydata = dailyTemperature; // 未来几天温度
    const Mainweather = wea.Mainweather; // 未来五天天气
    const CHNAQI = wea.CHNAQI; // 未来五天空气质量数值
    let feelslikeT = wea.feelslikeT; // 未来24小时温度
    // 空气质量颜色以及程度  
    let AQIcolor, ac
    // 选择 AQI 数据 USAQI or CHNAQI  
    let AQIData = CHNAQI  
    if (AQIData<=50){ ac = ["00e400",'优']
    }else if (AQIData<=100){ ac = ["f8c50a",'良']
    }else if (AQIData<=150){ ac = ["ff7e00",'轻度']
    }else if (AQIData<=200){ ac = ["ff0000",'中度']
    }else if (AQIData<=300){ ac = ["ba0033",'重度']
    }else{ ac = ["7e0023",'严重']}  
    AQIcolor = new Color(ac[0],1)
    
    // ######右侧底色#######  
    const x = 10
    this.fillRect(rightDrawing, 522-350+x, 36, 90, 18, 6, AQIcolor)
    // 当前天气  
    this.drawIcon(rightDrawing,x-5, 0, wea.realtimeweather,50)
    // 当前温度  
    this.drawText(rightDrawing,420-355+x, 1, 100, 54, wea.feelslikeT.toString(), "regular",52,"center")
    // 空气质量&下雨概率  
    var textColortoShow = new Color("ffffff", 0.8)  
    // 显示长度截取  
    let des = ac[1]  
    des = des.length > 2 ? des.slice(0, 2) : des  
    this.drawText(rightDrawing, 522-350+x, 36, 90, 17, AQIData + " - " + des, "semibold",15,"center", textColortoShow)
    // 温度条位置  
    var tempHeight  
    if (feelslikeT < Math.round(dailyTemperature[0].min)) { tempHeight = 8 }  
    if (feelslikeT > Math.round(dailyTemperature[0].max)) { tempHeight = 90 }  
    if (feelslikeT >= Math.round(dailyTemperature[0].min) && feelslikeT <= Math.round(dailyTemperature[0].max))  
    { tempHeight = (feelslikeT-Math.round(dailyTemperature[0].min))*82/(Math.round(dailyTemperature[0].max)-Math.round(dailyTemperature[0].min))+8 }
    // ######温度条#######  
    this.fillRect(rightDrawing,522-350+x, 25, 90, 8, 4, this._widgetColor(0.2))  
    this.fillRect(rightDrawing,522-350+x, 25, tempHeight, 8, 4, this.widgetColor)
    // 今天最高最低温度 +"º"  
    this.drawText(rightDrawing,522-350+x, 1, 45,18, Math.round(dailyTemperature[0].min).toString(), "semibold",18,"left")  
    this.drawText(rightDrawing,566-350+x, 1, 45,18, Math.round(dailyTemperature[0].max).toString(), "semibold",18,"right")
    
    // ######天气预报#######  
    const weatherDrawing = this.makeCanvas(642-355, (255-98));
  
    const deltaX = (610-slipPosition)/(daystoShow*2)  
    const firstPointtoLeft = slipPosition+deltaX
  
    const ToTop = (120-98)  
    var min, max, diff;  
    for(var i = 0; i<daystoShow ;i++){  
      let temp = Math.round(data[i].value);  
      min = (temp < min || min == undefined ? temp : min)  
      max = (temp > max || max == undefined ? temp : max)  
    }
    diff = max-min
    if (diff == 0) {diff= diff+1; max=max+0.3}
  
    for (i=0;i<daystoShow-1;i++){ 
      let timeText = data[i].datetime.slice(11, 13)  
    }
    // ########小时预报#######  
    for (i=0;i<daystoShow;i++){   
      // 颜色定义
      const temperaturetextcolor = this.widgetColor  
      const temeratureBarcolor = this.widgetColor
      // 温度条位置  
      if (Math.round(data[i*2].value) < Math.round(dailyTemperature[0].min))  
        { tempHeight = 8 }  
      if (Math.round(data[i*2].value) >= Math.round(dailyTemperature[0].max))  
        { tempHeight = 40 }
      if (Math.round(data[i*2].value) >=Math.round(dailyTemperature[0].min) && Math.round(data[i*2].value) < Math.round(dailyTemperature[0].max))
tempHeight = (Math.round(data[i*2].value)-Math.round(dailyTemperature[0].min))*32/(Math.round(dailyTemperature[0].max)-Math.round(dailyTemperature[0].min))+8
      // ######温度条#######  
      this.fillRect(rightDrawing, firstPointtoLeft-4+(2.24*i)*deltaX-361,93, 8, 40, 4, this._widgetColor(0.2))  
      this.fillRect(rightDrawing, firstPointtoLeft-4+(2.24*i)*deltaX-361,150-tempHeight-98+81, 8, tempHeight, 4, temeratureBarcolor)
      // 温度+"º"  
      this.drawText(rightDrawing, firstPointtoLeft+deltaX*i*2.24-381,137,   40,20,Math.round(data[i*2].value).toString(),"regular",17,"center",temperaturetextcolor)
      // 时间  
      let weathertimeText = data[i*2].datetime.slice(11, 13)  
      let zero = weathertimeText.slice(0, 1)  
      weathertimeText = zero == 0 ? weathertimeText.replace("0", "") : weathertimeText  
      if (i==0) {weathertimeText="现在"}  
        else { weathertimeText = weathertimeText + "时"}  
      this.drawText(rightDrawing, firstPointtoLeft+deltaX*i*2.28-382, 70, 40, 30, weathertimeText,"regular",17,"center",temperaturetextcolor)
    }
    
    const df = new DateFormatter()  
    df.locale = "zh_cn" 
    // ####每日预报########  
    for (i=1;i<4;i++){  
      // 图标
      this.drawIcon(rightDrawing,96*(i-1)+45-3, 162, Mainweather[i].value, 31 )
      // 每日温度+"º"  
      let dMax = Math.round(dailydata[i].max).toString()  
      let dMin = Math.round(dailydata[i].min).toString()
      this.fillRect(rightDrawing,96*(i-1)+7,208, 73, 4, 2, this._widgetColor(0.8))  
      this.drawText(rightDrawing,96*(i-1)+7,216, 40,20,dMin,"regular",19,"left",this._widgetColor(0.8))
      this.drawText(rightDrawing,96*(i-1)+49,216, 30,20,dMax,"regular",19,"right",this._widgetColor(0.8))
      // 每日日期  
      const weatherDate = new Date()  
      weatherDate.setDate(weatherDate.getDate() + i)  
      // log(weatherDate)  
      df.dateFormat = "E"  
      this.drawText(rightDrawing, 96*(i-1)-1,176-98+24+68, 50,20,df.string(weatherDate),"bold",17,"center")  
    }
  }
  
  // 问候语
  async provideGreeting() {
    let lunar = await this.getLunar();
    lunar = `${lunar.lunarMonthCn}${lunar.lunarDayCn}`;
    
    let dates = this.getDateStr('M-d H').split(' ');
    // 纪念日
    const anniversary = this.widgetConfigs.anniversaryText[dates[0]];
    // 小时
    const hour = parseInt(dates[1]);
    const greetingText = this.widgetConfigs.greetingText;
    const lunarText = this.widgetConfigs.lunarText[lunar];
    if (anniversary == undefined) {
      if (hour < 5) { return greetingText.nightGreeting }
      if (hour < 11) { return greetingText.morningGreeting }
      if (hour >= 11 && hour <= 13) { return greetingText.noonGreeting }
      if (hour < 19) { return greetingText.afternoonGreeting }
      if (hour < 22) { return greetingText.eveningGreeting }
      return greetingText.nightGreeting
    } else {
      if(!!lunarText){
        return lunarText;
      }else {
        return anniversary;
      }
    }
  }
  
  // ######绘制主要天气图标#######  
  async drawIcon(drawing,x1,y1,WeatherCondition,size){
    if (WeatherCondition=="CLOUDY") {y1=y1+8}
    if(WeatherCondition=="LIGHT_RAIN"||WeatherCondition=="MODERATE_RAIN"||WeatherCondition=="HEAVY_RAIN"||WeatherCondition=="STORM_RAIN")
    {y1=y1+4}
    drawing.drawImageAtPoint(this.provideSymbol(WeatherCondition, 0, size), new Point(x1, y1))
  }
  
  // ######提供天气图标名称#######
  provideSymbol(cond,night,size = false) {
    let symbols = {        
      "CLEAR_DAY": function() {return"sun.max.fill"},  
      "CLEAR_NIGHT": function() {return"moon.stars.fill"},    
      "PARTLY_CLOUDY_DAY": function() {return"cloud.sun.fill"},  
      "PARTLY_CLOUDY_NIGHT": function() {return"cloud.moon.fill"},  
      "CLOUDY": function() {return"cloud.fill"},  
      "LIGHT_HAZE": function() {return night? "cloud.fog.fill":"sun.haze.fill"},  
      "MODERATE_HAZE": function() {return night? "cloud.fog.fill":"sun.haze.fill"},  
      "HEAVY_HAZE": function() {return night? "cloud.fog.fill":"sun.haze.fill"},  
      "LIGHT_RAIN": function() {return"cloud.drizzle.fill"},  
      "MODERATE_RAIN": function() {return"cloud.rain.fill"},  
      "HEAVY_RAIN": function() {return"cloud.rain.fill"},  
      "STORM_RAIN": function() {return"cloud.heavyrain.fill"},
      "RAIN": function() {return"cloud.rain.fill"},
      "FOG": function() {return"cloud.fog.fill"},  
      "LIGHT_SNOW": function() {return"cloud.sleet.fill"},  
      "MODERATE_SNOW": function() {return"cloud.snow.fill"},  
      "HEAVY_SNOW": function() {return"cloud.snow.fill"},  
      "STORM_SNOW": function() {return"snow"},  
      "DUST": function() {return night? "cloud.fog.fill":"sun.dust.fill"},  
      "SAND": function() {return night? "cloud.fog.fill":"sun.dust.fill"},  
      "WIND": function() {return"wind"},
    }
    let sfs = SFSymbol.named(symbols[cond]());
    if(size) sfs.applyFont(Font.systemFont(size))  
    return sfs.image  
  }
  
  /**
   * 获取一言
   */
  async getOneWord() {
    const url = 'https://v1.hitokoto.cn/?encode=json'
    const data = await this.httpGet(url, true, '一言')
    return `“${data.hitokoto}”`
  }
  
  // 彩云天气
  async inputKey(){
    const message = '申请彩云天气key';
    const idx = await this.generateAlert(message, ['申请key','输入key']);
    if(idx === 0) return await Safari.open('https://dashboard.caiyunapp.com/user/sign_up/',false);
    await this.setCustomAction("输入彩云key", "只有输入正确的彩云key\n组件才会生效", {
      caiyunKEY: "此处输入彩云key",
    });
  }
  
  // 添加设置信息
  Run(){
    if (config.runsInApp) {
      if(!this.settings.caiyunKEY) this.notify(this.name, '需申请彩云天气key，点击注册！',{openURL:'https://dashboard.caiyunapp.com/user/sign_up/'});
      this.registerAction("基础设置", this.setWidgetConfig);
      this.registerAction("彩云key", async () => {
        await this.inputKey()
      }, this.logo);
      this.registerAction("界面切换", async () => {
        await this.setChoiceAction("界面切换", "切换中组件显示方式", [
          '常规版','宝藏版',
        ]);
      }, { name: 'square.on.square', color: '#87CEEB' });
    }
  }
}

// @组件代码结束
await Runing(Widget)