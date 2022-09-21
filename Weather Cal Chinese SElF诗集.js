// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: fish;
/*
 * SETUP/设置
 * Use this section to set up the widget.
 * 使用此部分来设置小部件
 * ======================================
 */

// To use weather, get a free API key at openweathermap.org/appid and paste it in between the quotation marks.
// 要使用天气，请在http://openweathermap.org/appid 中获取免费的API密钥并将其粘贴在引号之间。
const apiKey = "d9d0aa21fa3e3c3769d61da95c5e20ab"

// Set the locale code. Leave blank "" to match the device's locale. You can change the hard-coded text strings in the TEXT section below.
// 设置语言环境代码。“”内保留空白以匹配设备的语言环境。您可以在下面的“文本”部分中更改硬编码的文本字符串。
let locale = "zh_cn"

// Set to true for fixed location, false to update location as you move around
// 固定使用当前位置设置为true，更换了位置时设置为false以更新位置信息
const lockLocation = true

// The size of the widget preview in the app.
// 小部件预览时的大小。large/medium/small
const widgetPreview = "medium"

// Set to true for an image background, false for no image.
// 使用图片背景，设置为true；不使用图片，则设置为false（不使用自定义背景时则使用默认的渐变背景）
const imageBackground = true

// Set to true to reset the widget's background image.
// 重置小部件的背景图像时设置为true以重新选择新的图像作为小部件背景
const forceImageUpdate = false

// Set the padding around each item. Default is 10.
// 设置默认的边距（更多边距设置参考xxxStack.setpadding）
const padding = 5

/*
 * LAYOUT/布局
 * Decide what items to show on the widget.
 * 此设置决定要在小部件上显示的项目。
 * ========================================
 */

// Set the width of the column, or set to 0 for an automatic width.
// 设置列的宽度，或者将其设置为0以表示自动宽度。

// You can add items to the column: 
// 把你要显示在小部件上的项目添加到items:

// date, greeting, events, current, future, battery, text("Your text here")
// 日期，问候语，事件，当前天气，未来天气，电池，文本（“此处输入文字”）（默认只有这些项目，可自定义添加）

// You can also add a left, center, or right to the list. Everything after it will be aligned that way.
// 您还可以在列表中添加left（居左对齐），center（居中对齐）或right（居右对齐）。之后的该列下的所有内容都将以这种方式对齐。

// Make sure to always put a comma after each item.
// 注意格式，确保在每个项目后面加上逗号！！！

const columns = [{
  
  // Settings for the left column.
  width: 0,
  items: [
    
    left,
    greeting,
    //text("hello"),如果你要在这里显示自定义文本内容，请以这个格式输入
    date,
    events,
    battery,
    GetPoetry,

  ]},{

  // Settings for the right column.
  width: 125,
  items: [
    
    right,
    current,
    sunrise,
    future,

  
]}]

/*
 * ITEM SETTINGS/项目设置
 * Choose how each item is displayed.
 * 选择每个项目的显示方式。
 * ==================================
 */  
 
// DATE/日期
// ========
const dateSettings = {

  // If set to true, date will become smaller when events are displayed.
  // 如果设置为true，则显示事件时日期将变小。
  dynamicDateSize: true

  // If the date is not dynamic, should it be large or small?
  // 如果日期非dynamic的，它将以什么大小显示？large/small
  ,staticDateSize: "small"

  // Determine the date format for each date type. See docs.scriptable.app/dateformatter
  // 设置每种日期类型的日期格式。参见docs.scriptable.app/dateformatter
  ,smallDateFormat: "MM月d日   EEEE" //上面的设置为small时此项生效
  ,largeDateLineOne: "yyyy年MM月d日" //上面的设置为large时此项生效并显示在第一行
  ,largeDateLineTwo: "EEEE"  //上面的设置为large时生效并显示在第二行
}

// EVENTS/事件
// ==========
const eventSettings = {

  // How many events to show.
  // 你想显示多少个事件在小部件上
  numberOfEvents: 6

  // Show all-day events.
  // 是否显示全天的事件，不显示则设置为false
  ,showAllDay: true

  // Show tomorrow's events.
  // 是否显示明天/后的事件，不显示则设置为false
  ,showTomorrow: true

  // Can be blank "" or set to "duration" or "time" to display how long an event is.
  // “”内可以为空白，也可以设置为“ duration”或“ time”以显示事件的持续时间（则设置了之后会显示事件的时间XX小时，XX分钟）
  ,showEventLength: "duration"

  // Set which calendars for which to show events. Empty [] means all calendars.
  // 设置要显示事件的日历。空[]表示所有日历。如果你日历上有订阅多个日历，则可选此项，或留空则显示全部日历事件
  ,selectCalendars: []

  // Leave blank "" for no color, or specify shape (circle, rectangle) and/or side (left, right).
  // “”不设置为无颜色，或可指定显示的形状（圆形，矩形）或侧面（左侧，右侧）
  ,showCalendarColor: "rectangle left"
  
  // When no events remain, show a hard-coded "message", a "greeting", or "none".
  // 如果没有事件，显示硬编码的“消息”，“问候”或“无”。
  ,noEventBehavior: "message"
}

// SUNRISE/日出日出
// ==============
const sunriseSettings = {
  
  // How many minutes before/after sunrise or sunset to show this element. 0 for always.
  // 日出或日落前后多少分钟才​​能显示此项。如果想始终显示则设置为 0
  showWithin: 0
}

// WEATHER/天气
// ===========
const weatherSettings = {

  // Set to imperial for Fahrenheit, or metric for Celsius
  // 设置温度单位，imperial为华氏度，metric为摄氏度
  units: "metric"
  
  // Show the location of the current weather.
  // true显示当前天气的位置，false则不显示（注意开启后会占用顶部位置空间）
  ,showLocation: false
  
  // Show the text description of the current conditions.
  // true显示当前天气的文字说明，false则不显示（注意，这个API并不支持中文）
  ,showCondition: false

  // Show today's high and low temperatures.
  // true显示今天的最高/低温度，false则不显示
  ,showHighLow: true

  // Set the hour (in 24-hour time) to switch to tomorrow's weather. Set to 24 to never show it.
  // 设置多少小时（以24小时制）以监视明天的天气。设置为24永不显示它。（则该数值是你想在哪个时间开始显示明天的天气，如设置为20，则当天晚上8点才显示明天的天气，晚上8点前都将显示每个时段的下一个小时的天气）
  ,tomorrowShownAtHour: 18
}

/*
 * TEXT/文本
 * Change the language and formatting of text displayed.
 * 更改所显示文本的语言和格式。
 * =====================================================
 */  
 
// You can change the language or wording of any text in the widget.
// 您可以更改窗口小部件中任何文本的语言或措辞。
const localizedText = {
  
  // The text shown if you add a greeting item to the layout.
  // 如果在布局中添加问候语，则显示此处的文本。
  nightGreeting: "该睡觉了哟🥱"
  ,morningGreeting: "早上好呀😜"
  ,noonGreeting: "中午好呀🤪"
  ,afternoonGreeting: "下午好呀☺️"
  ,eveningGreeting: "晚上好呀👻"
  
  // The text shown if you add a future weather item to the layout, or tomorrow's events.
  // 如果将未来的天气项目添加到布局或明天的事件中，则显示此处的文本。
  ,nextHourLabel: "下一小时"
  ,tomorrowLabel: "明天"
 
  // Shown when noEventBehavior is set to "message".
  // 当没有事件时则显示此处的“ message”
  ,noEventMessage: "Cease to struggle and you cease to live."
  
  // The text shown after the hours and minutes of an event duration.
  // 事件持续时间显示的文本（小时/分钟）。
  ,durationMinute: "分"
  ,durationHour: "小时"
     
}

// Set the font, size, and color of various text elements. Use iosfonts.com to find fonts to use. If you want to use the default iOS font, set the font name to one of the following: ultralight, light, regular, medium, semibold, bold, heavy, black, or italic.
// 设置各种文本元素的字体，大小和颜色。使用http://iosfonts.com 查找要使用的字体。如果要使用默认的iOS字体，请将字体名称设置为以下之一：超轻，轻，常规，中，半粗体，粗体，粗体，黑色或斜体。
const textFormat = {
  
  // Set the default font and color.
  // 设置默认的字体和颜色。
  defaultText: { size: 14, color: "ffffff", font: "regular" },
  
  // Any blank values will use the default.
  // 以下的空白值都将使用上面的默认值。
  smallDate:   { size: 16, color: "ffe15f", font: "regular" },
  largeDate1:  { size: 16, color: "", font: "medium" },
  largeDate2:  { size: 16, color: "", font: "medium" },
  
  greeting:    { size: 20, color: "", font: "italic" },
  eventLabel:  { size: 8, color: "", font: "semibold" },
  eventTitle:  { size: 12, color: "", font: "semibold" },
  eventTime:   { size: 10, color: "ffffffcc", font: "" },
  noEvents:    { size: 15, color: "", font: "light" },
  
  largeTemp:   { size: 17, color: "ffe15f", font: "semibold" },
  smallTemp:   { size: 12, color: "ffe15f", font: "italic" },
  tinyTemp:    { size: 12, color: "", font: "" },
  
  customText:  { size: 14, color: "", font: "" },
  
  battery:     { size: 18, color: "", font: "bold" },
  sunrise:     { size: 12, color: "", font: "medium" },
}

/*
 * WIDGET CODE/小部件代码
 * Be more careful editing this section. 
 * 在编辑此部分时要格外小心（所有小部件的源数据将从此处调用）
 * ===============================================
 */

// Make sure we have a locale value.
// 语言环境值，对应上面设置的语言，不设置将使用设备的语言
if (locale == "" || locale == null) { locale = Device.locale() }

// Declare the data variables.
// 声明数据变量
var eventData, locationData, sunData, weatherData

// Create global constants.
// 创建全局常量
const currentDate = new Date()
const files = FileManager.local()

/*
 * COLUMNS
 * =======
 */

// Set up the widget and the main stack.
// 设置小部件和主Stack（此主Stack表示整个窗口）
let widget = new ListWidget()
widget.setPadding(5, 5, 0, 5)

let mainStack = widget.addStack()
mainStack.layoutHorizontally()
mainStack.setPadding(0, 0, 0, 0) //此为整个小部件的窗口的内边距，如非必要请不要更改，否则你想放的内容会显示不全

// Set up alignment.
// 设置对齐方式
var currentAlignment = left

// Set up our columns.
for (var x = 0; x < columns.length; x++) {

  let column = columns[x]
  let columnStack = mainStack.addStack()
  columnStack.layoutVertically()
  
  // Only add padding on the first or last column.
  columnStack.setPadding(0, x == 0 ? padding/2 : 0, 0, x == columns.length-1 ? padding/2 : 0)
  columnStack.size = new Size(column.width,0)
  
  // Add the items to the column.
  for (var i = 0; i < column.items.length; i++) {
    await column.items[i](columnStack)
  }
}

/*
 * BACKGROUND DISPLAY/背景显示
 * =========================
 */

// If it's an image background, display it.
// 如果它是图像背景，则显示它。
if (imageBackground) {
  
  // Determine if our image exists and when it was saved.
  // 判断图像是否存在以及何时保存
  const path = files.joinPath(files.documentsDirectory(), "weather-cal-image")
  const exists = files.fileExists(path)
  
  // If it exists and an update isn't forced, use the cache.
  // 如果已有背景图像并且不打开每次运行时重新选择图像时使用缓存已有的背景图像。
  if (exists && (config.runsInWidget || !forceImageUpdate)) {
    widget.backgroundImage = files.readImage(path)
  
  // If it's missing when running in the widget, use a gray background.
  // 如果在小部件中运行时缺少这个背景，将使用灰色背景。
  } else if (!exists && config.runsInWidget) {
      widget.backgroundColor = Color.gray() 
    
  // But if we're running in app, prompt the user for the image.
  // 但是，如果在应用程序中运行，则提示选择图像
  } else {
      const img = await Photos.fromLibrary()
      widget.backgroundImage = img
      files.writeImage(path, img)
  }
    
// If it's not an image background, show the gradient.
// 如果不是图片背景，显示渐变
} else {
  let gradient = new LinearGradient()
  let gradientSettings = await setupGradient()
  
  gradient.colors = gradientSettings.color()
  gradient.locations = gradientSettings.position()
  
  widget.backgroundGradient = gradient
}

// Finish the widget and show a preview.
// 完成小部件并显示预览
Script.setWidget(widget)
if (widgetPreview == "small") { widget.presentSmall() }
else if (widgetPreview == "medium") { widget.presentMedium() }
else if (widgetPreview == "large") { widget.presentLarge() }
Script.complete()

/*
 * LAYOUT FUNCTIONS/布局函数
 * These functions manage spacing and alignment.
 * 这些函数管理间距和对齐方式
 * =============================================
 */

// Create an aligned stack to add content to.
// 创建对齐的Stack以向其添加内容
function align(column) {
  
  // Add the containing stack to the column.
  // 将包含Stack的内容添加到该列中
  let alignmentStack = column.addStack()
  alignmentStack.layoutHorizontally()
  
  // Get the correct stack from the alignment function.
  // 从对齐函数获取正确的Stack
  let returnStack = currentAlignment(alignmentStack)
  returnStack.layoutVertically()
  return returnStack
}

// Create a right-aligned stack.
// 创建一个居右对齐的Stack
function alignRight(alignmentStack) {
  alignmentStack.addSpacer()
  let returnStack = alignmentStack.addStack()
  return returnStack
}

// Create a left-aligned stack.
// 创建一个居左对齐的Stack
function alignLeft(alignmentStack) {
  let returnStack = alignmentStack.addStack()
  alignmentStack.addSpacer()
  return returnStack
}
// Create a center-aligned stack.
// 创建一个居中对齐的Stack
function alignCenter(alignmentStack) {
  alignmentStack.addSpacer()
  let returnStack = alignmentStack.addStack()
  alignmentStack.addSpacer()
  return returnStack
}

// This function adds a space, with an optional amount.
// 此函数添加一个间距，并带有一个可选的数值
function space(input = null) { 
  
  // This function adds a spacer with the input width.
  // 此函数在输入宽度处添加一个间距
  function spacer(column) {
  
    // If the input is null or zero, add a flexible spacer.
    // 如果输入为null或零时，添加一个间距
    if (!input || input == 0) { column.addSpacer() }
    
    // Otherwise, add a space with the specified length
    // 否则，添加具有指定长度的间距
    else { column.addSpacer(input) }
  }
  
  // If there's no input or it's a number, it's being called in the column declaration.
  // 如果没有输入或是数字，则在列声明中调用它
  if (!input || typeof input == "number") { return spacer }
  
  // Otherwise, it's being called in the column generator.
  // 否则，将在列生成器中调用它
  else { input.addSpacer() }
}

// Change the current alignment to right.
// 将当前对齐方式更改为居右
function right(x) { currentAlignment = alignRight }

// Change the current alignment to left.
// 将当前对齐方式更改为居左
function left(x) { currentAlignment = alignLeft }

// Change the current alignment to center.
// 将当前对齐方式更改为居中
function center(x) { currentAlignment = alignCenter }

/*
 * SETUP FUNCTIONS
 * 设定函数
 * These functions prepare data needed for items
 * 以下这些函数是小部件所需的数据
 * ==============================================
 */
// 设定诗集
async function GetPoetry(column){
  var feel = '';
  let req = new Request("https://v2.jinrishici.com/one.json");
  let json = await req.loadJSON();
  let poem = json.data.origin.content[0]
  feel = '️ ' + poem;
//   var hltemptext = widgetHello.addText(feel);
  let greetingStack = align(column)
  let poetry = provideText(feel, greetingStack, textFormat.smallTemp)
  greetingStack.setPadding(0, padding, padding, padding)
}
// Set up the eventData object.
// 设定事件日期的对象
async function setupEvents() {
  
  eventData = {}
  const calendars = eventSettings.selectCalendars
  const numberOfEvents = eventSettings.numberOfEvents

  // Function to determine if an event should be shown.
  // 判断是否应该显示事件的函数。
  function shouldShowEvent(event) {
  
    // If events are filtered and the calendar isn't in the selected calendars, return false.
    // 如果事件被过滤，并且日历不在所选日历中，则返回false
    if (calendars.length && !calendars.includes(event.calendar.title)) { return false }

    // Hack to remove canceled Office 365 events.
    // 删除已取消的Office 365事件
    if (event.title.startsWith("Canceled:")) { return false }

    // If it's an all-day event, only show if the setting is active.
    // 如果是全天事件，则仅在设置处于active状态时显示
    if (event.isAllDay) { return eventSettings.showAllDay }

    // Otherwise, return the event if it's in the future.
    // 否则，会返回处于未来的事件
    return (event.startDate.getTime() > currentDate.getTime())
  }
  
  // Determine which events to show, and how many.
  // 判断要显示的事件以及数量
  const todayEvents = await CalendarEvent.today([])
  let shownEvents = 0
  let futureEvents = []
  
  for (const event of todayEvents) {
    if (shownEvents == numberOfEvents) { break }
    if (shouldShowEvent(event)) {
      futureEvents.push(event)
      shownEvents++
    }
  }

  // If there's room and we need to, show tomorrow's events.
  // 如果需要的话，显示明天的事件
  let multipleTomorrowEvents = false
  if (eventSettings.showTomorrow && shownEvents < numberOfEvents) {
  
    const tomorrowEvents = await CalendarEvent.tomorrow([])
    for (const event of tomorrowEvents) {
      if (shownEvents == numberOfEvents) { break }
      if (shouldShowEvent(event)) {
      
        // Add the tomorrow label prior to the first tomorrow event.
        // 在第一个明天事件之前添加“明天标签”
        if (!multipleTomorrowEvents) { 
          
          // The tomorrow label is pretending to be an event.
          futureEvents.push({ title: localizedText.tomorrowLabel.toUpperCase(), isLabel: true })
          multipleTomorrowEvents = true
        }
        
        // Show the tomorrow event and increment the counter.
        // 显示明天的事件并增加计数器
        futureEvents.push(event)
        shownEvents++
      }
    }
  }
  
  // Store the future events, and whether or not any events are displayed.
  // 存储未来的事件，以及是否显示全部事件
  eventData.futureEvents = futureEvents
  eventData.eventsAreVisible = (futureEvents.length > 0) && (eventSettings.numberOfEvents > 0)
}

// Set up the gradient for the widget background.
// 设置小部件渐变背景
async function setupGradient() {
  
  // Requirements: sunrise
  if (!sunData) { await setupSunrise() }

  let gradient = {
    dawn: {
      color() { return [new Color("142C52"), new Color("1B416F"), new Color("62668B")] },
      position() { return [0, 0.5, 1] },
    },

    sunrise: {
      color() { return [new Color("274875"), new Color("766f8d"), new Color("f0b35e")] },
      position() { return [0, 0.8, 1.5] },
    },

    midday: {
      color() { return [new Color("3a8cc1"), new Color("90c0df")] },
      position() { return [0, 1] },
    },

    noon: {
      color() { return [new Color("b2d0e1"), new Color("80B5DB"), new Color("3a8cc1")] },
      position() { return [-0.2, 0.2, 1.5] },
    },

    sunset: {
      color() { return [new Color("32327A"), new Color("662E55"), new Color("7C2F43")] },
      position() { return [0.1, 0.9, 1.2] },
    },

    twilight: {
      color() { return [new Color("021033"), new Color("16296b"), new Color("414791")] },
      position() { return [0, 0.5, 1] },
    },

    night: {
      color() { return [new Color("16296b"), new Color("021033"), new Color("021033"), new Color("113245")] },
      position() { return [-0.5, 0.2, 0.5, 1] },
    },
  }

  const sunrise = sunData.sunrise
  const sunset = sunData.sunset

  // Use sunrise or sunset if we're within 30min of it.
  // 如果距离30分钟以内，使用日出或日落
  if (closeTo(sunrise)<=15) { return gradient.sunrise }
  if (closeTo(sunset)<=15) { return gradient.sunset }

  // In the 30min before/after, use dawn/twilight.
  // 如果距离30分钟前/后，使用黎明/暮光
  if (closeTo(sunrise)<=45 && utcTime < sunrise) { return gradient.dawn }
  if (closeTo(sunset)<=45 && utcTime > sunset) { return gradient.twilight }

  // Otherwise, if it's night, return night.
  // 否则，如果是夜晚，则使用夜晚
  if (isNight(currentDate)) { return gradient.night }

  // If it's around noon, the sun is high in the sky.
  // 如果在正午时分，太阳在天空中很高
  if (currentDate.getHours() == 12) { return gradient.noon }

  // Otherwise, return the "typical" theme.
  // 否则，返回“typical”主题。
  return gradient.midday
}

// Set up the locationData object.
// 设置位置数据对象
async function setupLocation() {

  locationData = {}
  const locationPath = files.joinPath(files.documentsDirectory(), "weather-cal-loc")

  // If our location is unlocked or cache doesn't exist, ask iOS for location.
  // 如果位置已解锁定或不存在缓存，询问iOS
  var readLocationFromFile = false
  if (!lockLocation || !files.fileExists(locationPath)) {
    try {
      const location = await Location.current()
      const geocode = await Location.reverseGeocode(location.latitude, location.longitude, locale)
      locationData.latitude = location.latitude
      locationData.longitude = location.longitude
      locationData.locality = geocode[0].locality
      files.writeString(locationPath, location.latitude + "|" + location.longitude + "|" + locationData.locality)
    
    } catch(e) {
      // If we fail in unlocked mode, read it from the cache.
      if (!lockLocation) { readLocationFromFile = true }
      
      // We can't recover if we fail on first run in locked mode.
      else { return }
    }
  }
  
  // If our location is locked or we need to read from file, do it.
  // 如果位置信息被锁定或需要从文件中读取，执行此操作
  if (lockLocation || readLocationFromFile) {
    const locationStr = files.readString(locationPath).split("|")
    locationData.latitude = locationStr[0]
    locationData.longitude = locationStr[1]
    locationData.locality = locationStr[2]
  }
}

// Set up the sunData object.
// 设置日落/日出数据对象
async function setupSunrise() {

  // Requirements: location
  if (!locationData) { await setupLocation() }

  // Set up the sunrise/sunset cache.
  // 设置日出/日落缓存
  const sunCachePath = files.joinPath(files.documentsDirectory(), "weather-cal-sun")
  const sunCacheExists = files.fileExists(sunCachePath)
  const sunCacheDate = sunCacheExists ? files.modificationDate(sunCachePath) : 0
  let sunDataRaw, afterSunset

  // If cache exists and was created today, use cached data.
  // 如果缓存存在并且是今天创建的，使用缓存的数据
  if (sunCacheExists && sameDay(currentDate, sunCacheDate)) {
    const sunCache = files.readString(sunCachePath)
    sunDataRaw = JSON.parse(sunCache)
    
    // Determine if it's after sunset.
    // 判断是否在日落之后
    const sunsetDate = new Date(sunDataRaw.results.sunset)
    afterSunset = currentDate.getTime() - sunsetDate.getTime() > (45 * 60 * 1000)
  }
  
  // If we don't have data yet, or we need to get tomorrow's data, get it from the server.
  // 如果还没有数据，或者需要获取明天的数据，从服务器获取。
  if (!sunDataRaw || afterSunset) {
    let tomorrowDate = new Date()
    tomorrowDate.setDate(currentDate.getDate() + 1)
    const dateToUse = afterSunset ? tomorrowDate : currentDate
    const sunReq = "http://api.sunrise-sunset.org/json?lat=" + locationData.latitude + "&lng=" + locationData.longitude + "&formatted=0&date=" + dateToUse.getFullYear() + "-" + (dateToUse.getMonth()+1) + "-" + dateToUse.getDate()
    sunDataRaw = await new Request(sunReq).loadJSON()
    files.writeString(sunCachePath, JSON.stringify(sunDataRaw))
  }

  // Store the timing values.
  // 存储计时值
  sunData = {}
  sunData.sunrise = new Date(sunDataRaw.results.sunrise).getTime()
  sunData.sunset = new Date(sunDataRaw.results.sunset).getTime()
}

// Set up the weatherData object.
// 设置天气数据对象
async function setupWeather() {

  // Requirements: location
  if (!locationData) { await setupLocation() }

  // Set up the cache.
  // 设定缓存
  const cachePath = files.joinPath(files.documentsDirectory(), "weather-cal-cache")
  const cacheExists = files.fileExists(cachePath)
  const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  var weatherDataRaw

  // If cache exists and it's been less than 60 seconds since last request, use cached data.
  // 如果存在缓存，并且距离上次请求少于60秒，使用缓存的数据
  if (cacheExists && (currentDate.getTime() - cacheDate.getTime()) < 60000) {
    const cache = files.readString(cachePath)
    weatherDataRaw = JSON.parse(cache)

  // Otherwise, use the API to get new weather data.
  // 否则，使用API​​获取新的天气数据
  } else {
    const weatherReq = "https://api.openweathermap.org/data/2.5/onecall?lat=" + locationData.latitude + "&lon=" + locationData.longitude + "&exclude=minutely,alerts&units=" + weatherSettings.units + "&lang=" + locale + "&appid=" + apiKey
    weatherDataRaw = await new Request(weatherReq).loadJSON()
    files.writeString(cachePath, JSON.stringify(weatherDataRaw))
  }

  // Store the weather values.
  // 储存天气数据值
  weatherData = {}
  weatherData.currentTemp = weatherDataRaw.current.temp
  weatherData.currentCondition = weatherDataRaw.current.weather[0].id
  //weatherData.currentDescription = weatherDataRaw.current.weather[0].main //英文天气描述
  weatherData.currentDescription = weatherDataRaw.current.weather[0].description //中文天气描述
  weatherData.todayHigh = weatherDataRaw.daily[0].temp.max
  weatherData.todayLow = weatherDataRaw.daily[0].temp.min

  weatherData.nextHourTemp = weatherDataRaw.hourly[1].temp
  weatherData.nextHourCondition = weatherDataRaw.hourly[1].weather[0].id

  weatherData.tomorrowHigh = weatherDataRaw.daily[1].temp.max
  weatherData.tomorrowLow = weatherDataRaw.daily[1].temp.min
  weatherData.tomorrowCondition = weatherDataRaw.daily[1].weather[0].id
}

/*
 * WIDGET ITEMS/小部件项目
 * These functions display items on the widget.
 * 以下这些函数将是显示在小部件上的项目
 * ============================================
 */

// Display the date on the widget.
// 在小部件上显示日期
async function date(column) {

  // Requirements: events (if dynamicDateSize is enabled)
  if (!eventData && dateSettings.dynamicDateSize) { await setupEvents() }

  // Set up the date formatter and set its locale.
  // 设置日期格式并设置其语言环境
  let df = new DateFormatter()
  df.locale = locale
  
  // Show small if it's hard coded, or if it's dynamic and events are visible.
  // 如果是有硬编码文本或有事件显示，则显示为小日期样式
  if (dateSettings.staticDateSize == "small" || (dateSettings.dynamicDateSize && eventData.eventsAreVisible)) {
    let dateStack = align(column)
    dateStack.setPadding(padding*2, padding, padding, padding) //日期的间距设置，当你在日期设置中选择了显示“small”日期时，调整这项以更改边距，依次是逆时针顺序上、左、下、右

    df.dateFormat = dateSettings.smallDateFormat
    let dateText = provideText(df.string(currentDate), dateStack, textFormat.smallDate)
    
  // Otherwise, show the large date.
  // 否则，显示大日期样式
  } else {
    let dateOneStack = align(column)
    df.dateFormat = dateSettings.largeDateLineOne
    let dateOne = provideText(df.string(currentDate), dateOneStack, textFormat.largeDate1)
    dateOneStack.setPadding(padding, padding, 0, padding) //日期的间距设置，当你在日期设置中选择了显示“large”日期时，调整这项以更改边距，依次是逆时针顺序上、左、下、右
    
    let dateTwoStack = align(column)
    df.dateFormat = dateSettings.largeDateLineTwo
    let dateTwo = provideText(df.string(currentDate), dateTwoStack, textFormat.largeDate2)
    dateTwoStack.setPadding(0, padding, padding, padding) //日期的间距设置，当你在日期设置中选择了显示“large”日期时，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  }
}

// Display a time-based greeting on the widget.
// 在小部件上显示每个时间段的问候语
async function greeting(column) {

  // This function makes a greeting based on the time of day.
  // 此函数可以调整一天中不同时间段的问候语显示
  function makeGreeting() {
    const hour = currentDate.getHours()
    if (hour    < 5)  { return localizedText.nightGreeting }
    if (hour    < 11) { return localizedText.morningGreeting }
    if (hour    > 11 && hour-12 < 1)  { return localizedText.noonGreeting }
    if (hour-12 < 6)  { return localizedText.afternoonGreeting }
    if (hour-12 < 10) { return localizedText.eveningGreeting }
    return localizedText.nightGreeting
  }
  
  // Set up the greeting stack
  // 设置问候语Stack和边距
  let greetingStack = align(column)
  let greeting = provideText(makeGreeting(), greetingStack, textFormat.greeting)
  greetingStack.setPadding(padding, padding, padding, padding) //问候语的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
}

// Display events on the widget.
// 在小部件上显示事件
async function events(column) {

  // Requirements: events
  if (!eventData) { await setupEvents() }

  // If no events are visible, figure out what to do.
  // 判断没有事件时该显示什么
  if (!eventData.eventsAreVisible) { 
    const display = eventSettings.noEventBehavior
    
    // If it's a greeting, let the greeting function handle it.
    // 如果是问候语，将由问候语函数处理它
    if (display == "greeting") { return await greeting(column) }
    
    // If it's a message, get the localized text.
    // 如果是消息，将获取本地化的文本
    if (display == "message" && localizedText.noEventMessage.length) {
      const messageStack = align(column)
      messageStack.setPadding(padding, padding, padding, padding) //自定义本文的间距设置，如果你选择了没有事件是显示这个内容，调整这项以更改边距，依次是逆时针顺序上、左、下、右
      provideText(localizedText.noEventMessage, messageStack, textFormat.noEvents)
    }
    
    // Whether or not we displayed something, return here.
    return
  }
  
  // Set up the event stack.
  // 设置事件Stack和间距
  let eventStack = column.addStack()
  eventStack.layoutVertically()
  const todaySeconds = Math.floor(currentDate.getTime() / 1000) - 978307200
  eventStack.url = 'calshow:' + todaySeconds
  
  // If there are no events and we have a message, show it and return.
  if (!eventData.eventsAreVisible && localizedText.noEventMessage.length) {
    let message = provideText(localizedText.noEventMessage, eventStack, textFormat.noEvents)
    eventStack.setPadding(padding, padding, padding, padding) //事件的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
    return
  }
  
  // If we're not showing the message, don't pad the event stack.
  // 如果没有事件显示将不会显示这个事件Stack
  eventStack.setPadding(0, 0, 0, 0) //当没有事件时改为这个边距，全是0代表不限制这个Stack了，被自定义文本替代（这个默尔开启了，可开启/关闭）
  
  // Add each event to the stack.
  // 将每个事件添加到Stack中
  var currentStack = eventStack
  const futureEvents = eventData.futureEvents
  for (let i = 0; i < futureEvents.length; i++) {
    
    const event = futureEvents[i]
    const bottomPadding = (padding-10 < 0) ? 0 : padding-10
    
    // If it's the tomorrow label, change to the tomorrow stack.
    // 如果是明天的lable，则改用明天的Stack
    if (event.isLabel) {
      let tomorrowStack = column.addStack()
      tomorrowStack.layoutVertically()
      const tomorrowSeconds = Math.floor(currentDate.getTime() / 1000) - 978220800
      tomorrowStack.url = 'calshow:' + tomorrowSeconds
      currentStack = tomorrowStack
      
      // Mimic the formatting of an event title, mostly.
      // 事件标题的格式
      const eventLabelStack = align(currentStack)
      const eventLabel = provideText(event.title, eventLabelStack, textFormat.eventLabel)
      eventLabelStack.setPadding(i==0 ? padding : padding/2, padding, padding/2, padding)
      continue
    }
    
    const titleStack = align(currentStack)
    titleStack.layoutHorizontally()
    const showCalendarColor = eventSettings.showCalendarColor
    const colorShape = showCalendarColor.includes("circle") ? "circle" : "rectangle"
    
    // If we're showing a color, and it's not shown on the right, add it to the left.
    if (showCalendarColor.length && !showCalendarColor.includes("right")) {
      let colorItemText = provideTextSymbol(colorShape) + " "
      let colorItem = provideText(colorItemText, titleStack, textFormat.eventTitle)
      colorItem.textColor = event.calendar.color
    }

    const title = provideText(event.title.trim(), titleStack, textFormat.eventTitle)
    titleStack.setPadding(i==0 ? padding : padding/2, padding, event.isAllDay ? padding/2 : padding/10, padding)
    
    // If we're showing a color on the right, show it.
    if (showCalendarColor.length && showCalendarColor.includes("right")) {
      let colorItemText = " " + provideTextSymbol(colorShape)
      let colorItem = provideText(colorItemText, titleStack, textFormat.eventTitle)
      colorItem.textColor = event.calendar.color
    }
  
    // If there are too many events, limit the line height.
    // //如果事件太多，限制行高
    if (futureEvents.length >= 3) { title.lineLimit = 1 }

    // If it's an all-day event, we don't need a time.
    // 如果是全天的的事件，则不显示时间
    if (event.isAllDay) { continue }
    
    // Format the time information.
    // 格式化时间信息
    let timeText = formatTime(event.startDate)
    
    // If we show the length as time, add an en dash and the time.
    // 如果显示为时间，添加一个破折号“-”
    if (eventSettings.showEventLength == "time") { 
      timeText += "–" + formatTime(event.endDate) 
      
    // If we should it as a duration, add the minutes.
    } else if (eventSettings.showEventLength == "duration") {
      const duration = (event.endDate.getTime() - event.startDate.getTime()) / (1000*60)
      const hours = Math.floor(duration/60)
      const minutes = Math.floor(duration % 60)
      const hourText = hours>0 ? hours + localizedText.durationHour : ""
      const minuteText = minutes>0 ? minutes + localizedText.durationMinute : ""
      const showSpace = hourText.length && minuteText.length
      timeText += " \u2022 " + hourText + (showSpace ? " " : "") + minuteText
    }

    const timeStack = align(currentStack)
    const time = provideText(timeText, timeStack, textFormat.eventTime)
    timeStack.setPadding(0, padding, i==futureEvents.length-1 ? padding : padding/2, padding)
  }
}

// Display the current weather.
// 显示当前天气在小部件上
async function current(column) {

  // Requirements: weather and sunrise
  if (!weatherData) { await setupWeather() }
  if (!sunData) { await setupSunrise() }

  // Set up the current weather stack.
  // 设置当前天气的Stack
  let currentWeatherStack = column.addStack()
  currentWeatherStack.layoutVertically()
  currentWeatherStack.setPadding(0, 0, 0, 0) //当前天气的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  currentWeatherStack.url = "https://weather.com/weather/today/l/" + locationData.latitude + "," + locationData.longitude
  
  // If we're showing the location, add it.
  // 如果要显示位置，添加这个
  if (weatherSettings.showLocation) {
    let locationTextStack = align(currentWeatherStack)
    let locationText = provideText(locationData.locality, locationTextStack, textFormat.smallTemp)
    locationTextStack.setPadding(padding, padding, padding/2, padding) //位置名称的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右（这个默认关闭，可到天气设置处启用）
  }

  // Show the current condition symbol.
  // 显示当前天气的图标
  let mainConditionStack = align(currentWeatherStack)
  let mainCondition = mainConditionStack.addImage(provideConditionSymbol(weatherData.currentCondition,isNight(currentDate)))
  mainCondition.imageSize = new Size(22,22)
  mainConditionStack.setPadding(weatherSettings.showLocation ? 0 : padding, padding, 0, padding) //当前天气图标的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  
  // If we're showing the description, add it.
  // 如果要显示天气描述，添加这个
  if (weatherSettings.showCondition) {
    let conditionTextStack = align(currentWeatherStack)
    let conditionText = provideText(weatherData.currentDescription, conditionTextStack, textFormat.smallTemp)
    conditionTextStack.setPadding(padding, padding, 0, padding) //天气描述的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  }

  // Show the current temperature.
  // 显示当前温度
  const tempStack = align(currentWeatherStack)
  tempStack.setPadding(0, padding, 0, padding) //当前温度的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  const tempText = Math.round(weatherData.currentTemp) + "°"
  const temp = provideText(tempText, tempStack, textFormat.largeTemp)
  
  // If we're not showing the high and low, end it here.
  if (!weatherSettings.showHighLow) { return }

  // Show the temp bar and high/low values.
  // 显示温度条和高/低值
  let tempBarStack = align(currentWeatherStack)
  tempBarStack.layoutVertically()
  tempBarStack.setPadding(0, padding, padding/2, padding) //高/低温度的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  
  let tempBar = drawTempBar()
  let tempBarImage = tempBarStack.addImage(tempBar)
  tempBarImage.size = new Size(50,0)
  
  tempBarStack.addSpacer(1)
  
  let highLowStack = tempBarStack.addStack()
  highLowStack.layoutHorizontally()
  
  const mainLowText = Math.round(weatherData.todayLow).toString()
  const mainLow = provideText(mainLowText, highLowStack, textFormat.tinyTemp)
  highLowStack.addSpacer()
  const mainHighText = Math.round(weatherData.todayHigh).toString()
  const mainHigh = provideText(mainHighText, highLowStack, textFormat.tinyTemp)
  
  tempBarStack.size = new Size(70,30)
}

// Display upcoming weather.
//显示未来的天气
async function future(column) {

  // Requirements: weather and sunrise
  if (!weatherData) { await setupWeather() }
  if (!sunData) { await setupSunrise() }

  // Set up the future weather stack.
  // 设置未来天气的Stack
  let futureWeatherStack = column.addStack()
  futureWeatherStack.layoutVertically()
  futureWeatherStack.setPadding(0, 0, 0, 0) //未来天气的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  futureWeatherStack.url = "https://weather.com/weather/tenday/l/" + locationData.latitude + "," + locationData.longitude

  // Determine if we should show the next hour.
  // 判断是否应该显示下一个小时的天气
  const showNextHour = (currentDate.getHours() < weatherSettings.tomorrowShownAtHour)
  
  // Set the label value.
  // 设置标签值
  const subLabelStack = align(futureWeatherStack)
  const subLabelText = showNextHour ? localizedText.nextHourLabel : localizedText.tomorrowLabel
  const subLabel = provideText(subLabelText, subLabelStack, textFormat.smallTemp)
  subLabelStack.setPadding(0, padding, padding/4, padding)
  
  // Set up the sub condition stack.
  // 设置子条件的Stack
  let subConditionStack = align(futureWeatherStack)
  subConditionStack.layoutHorizontally()
  subConditionStack.centerAlignContent()
  subConditionStack.setPadding(0, padding, padding, padding)
  
  // Determine if it will be night in the next hour.
  // 判断下一个小时是否会是夜晚
  var nightCondition
  if (showNextHour) {
    const addHour = currentDate.getTime() + (60*60*1000)
    const newDate = new Date(addHour)
    nightCondition = isNight(newDate)
  } else {
    nightCondition = false 
  }
  
  let subCondition = subConditionStack.addImage(provideConditionSymbol(showNextHour ? weatherData.nextHourCondition : weatherData.tomorrowCondition,nightCondition))
  const subConditionSize = showNextHour ? 14 : 18
  subCondition.imageSize = new Size(subConditionSize, subConditionSize)
  subConditionStack.addSpacer(5)
  
  // The next part of the display changes significantly for next hour vs tomorrow.
  // 与明天相比，下一个小时的显示内容会有很大变化
  if (showNextHour) {
    const subTempText = Math.round(weatherData.nextHourTemp) + "°"
    const subTemp = provideText(subTempText, subConditionStack, textFormat.smallTemp)
    
  } else {
    let tomorrowLine = subConditionStack.addImage(drawVerticalLine(new Color("ffffff", 0.5), 18))
    tomorrowLine.imageSize = new Size(3,28)
    subConditionStack.addSpacer(5)
    let tomorrowStack = subConditionStack.addStack()
    tomorrowStack.layoutVertically()
    
    const tomorrowHighText = Math.round(weatherData.tomorrowHigh) + ""
    const tomorrowHigh = provideText(tomorrowHighText, tomorrowStack, textFormat.tinyTemp)
    tomorrowStack.addSpacer(4)
    const tomorrowLowText = Math.round(weatherData.tomorrowLow) + ""
    const tomorrowLow = provideText(tomorrowLowText, tomorrowStack, textFormat.tinyTemp)
  }
}

// Return a text-creation function.
// 返回一个文本创建函数
function text(input = null) {

  function displayText(column) {
  
    // Don't do anything if the input is blank.
    // 如果输入为空，则不执行任何操作
    if (!input || input == "") { return }
  
    // Otherwise, add the text.
    // 否则添加该文本
    const textStack = align(column)
    textStack.setPadding(padding, padding, padding, padding) //自定义文本的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
    const textDisplay = provideText(input, textStack, textFormat.customText)
  }
  return displayText
}

// Add a battery element to the widget; consisting of a battery icon and percentage.
// 向小部件添加电池元素；由电池图标和百分比组成
async function battery(column) {

  // Get battery level via Scriptable function and format it in a convenient way
  // 通过脚本函数获取电池电量并以简单的方式对其进行格式化
  function getBatteryLevel() {
  
    const batteryLevel = Device.batteryLevel()
    const batteryPercentage = `${Math.round(batteryLevel * 100)}%`+"  "+" by CLY💓"

    return batteryPercentage
  }

  const batteryLevel = Device.batteryLevel()
  
  // Set up the battery level item
  // 设置电池电量项目
  let batteryStack = align(column)
  batteryStack.layoutHorizontally()
  batteryStack.centerAlignContent()

  let batteryIcon = batteryStack.addImage(provideBatteryIcon())
  batteryIcon.imageSize = new Size(30,30)

  // Change the battery icon to red if battery level is <= 20 to match system behavior
  // 如果电池电量小于等于20，则将电池图标更改为红色，以匹配系统行为
  if ( Math.round(batteryLevel * 100) > 20 || Device.isCharging() ) {

    batteryIcon.tintColor = new Color(textFormat.battery.color || textFormat.defaultText.color)

  } else {

    batteryIcon.tintColor = Color.red()

  }

  batteryStack.addSpacer(padding * 0.8)

  // Display the battery status
  // 显示电池状态
  let batteryInfo = provideText(getBatteryLevel(), batteryStack, textFormat.battery)

  batteryStack.setPadding(5, padding, padding, padding) //电池电量的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右

}

// Show the sunrise or sunset time.
// 显示日出或日落时间
async function sunrise(column) {
  
  // Requirements: sunrise
  if (!sunData) { await setupSunrise() }
  
  const sunrise = sunData.sunrise
  const sunset = sunData.sunset
  const showWithin = sunriseSettings.showWithin
  const closeToSunrise = closeTo(sunrise) <= showWithin
  const closeToSunset = closeTo(sunset) <= showWithin

  // If we only show sometimes and we're not close, return.
  if (showWithin > 0 && !closeToSunrise && !closeToSunset) { return }
  
  // Otherwise, determine which time to show.
  const showSunrise = closeTo(sunrise) <= closeTo(sunset)
  
  // Set up the stack.
  // 设置Stack
  const sunriseStack = align(column)
  sunriseStack.setPadding(padding, padding, padding, padding) //日落日出的间距设置，调整这项以更改边距，依次是逆时针顺序上、左、下、右
  sunriseStack.layoutHorizontally()
  sunriseStack.centerAlignContent()
  
  // Add the correct symbol.
  // 添加正确的符号
  const symbolName = showSunrise ? "sunrise.fill" : "sunset.fill"
  const symbol = sunriseStack.addImage(SFSymbol.named(symbolName).image)
  symbol.imageSize = new Size(22,22)
  
  sunriseStack.addSpacer(padding * 0.8)
  
  // Add the time.
  // 添加时间
  const timeText = formatTime(showSunrise ? new Date(sunrise) : new Date(sunset))
  const time = provideText(timeText, sunriseStack, textFormat.sunrise)
}

// Allow for either term to be used.
// 允许使用任一术语
async function sunset(column) {
  return await sunrise(column)
}

/*
 * HELPER FUNCTIONS
 * 帮助函数
 * These functions perform duties for other functions.
 * 这些函数都是服务于以上的项目的
 * ===================================================
 */

// Determines if the provided date is at night.
function isNight(dateInput) {
  const timeValue = dateInput.getTime()
  return (timeValue < sunData.sunrise) || (timeValue > sunData.sunset)
}

// Determines if two dates occur on the same day
function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
}

// Returns the number of minutes between now and the provided date.
function closeTo(time) {
  return Math.abs(currentDate.getTime() - time) / 60000
}

// Format the time for a Date input.
function formatTime(date) {
  let df = new DateFormatter()
  df.locale = locale
  df.useNoDateStyle()
  df.useShortTimeStyle()
  return df.string(date)
}

// Provide a text symbol with the specified shape.
function provideTextSymbol(shape) {

  // Rectangle character.
  if (shape.startsWith("rect")) {
    return "\u2759"
  }
  // Circle character.
  if (shape == "circle") {
    return "\u2B24"
  }
  // Default to the rectangle.
  return "\u2759" 
}

// Provide a battery SFSymbol with accurate level drawn on top of it.
function provideBatteryIcon() {
  
  // If we're charging, show the charging icon.
  if (Device.isCharging()) { return SFSymbol.named("battery.100.bolt").image }

  // Set the size of the battery icon.
  const batteryWidth = 87
  const batteryHeight = 41
  
  // Start our draw context.
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(batteryWidth, batteryHeight)
  
  // Draw the battery.
  draw.drawImageInRect(SFSymbol.named("battery.0").image, new Rect(0, 0, batteryWidth, batteryHeight))
  
  // Match the battery level values to the SFSymbol.
  const x = batteryWidth*0.1525
  const y = batteryHeight*0.247
  const width = batteryWidth*0.602
  const height = batteryHeight*0.505
  
  // Prevent unreadable icons.
  let level = Device.batteryLevel()
  if (level < 0.05) { level = 0.05 }
  
  // Determine the width and radius of the battery level.
  const current = width * level
  let radius = height/6.5
  
  // When it gets low, adjust the radius to match.
  if (current < (radius * 2)) { radius = current / 2 }

  // Make the path for the battery level.
  let barPath = new Path()
  barPath.addRoundedRect(new Rect(x, y, current, height), radius, radius)
  draw.addPath(barPath)
  draw.setFillColor(Color.black())
  draw.fillPath()
  return draw.getImage()
}

// Provide a symbol based on the condition.
function provideConditionSymbol(cond,night) {
  
  // Define our symbol equivalencies.
  let symbols = {
  
    // Thunderstorm
    "2": function() { return "cloud.bolt.rain.fill" },
    
    // Drizzle
    "3": function() { return "cloud.drizzle.fill" },
    
    // Rain
    "5": function() { return (cond == 511) ? "cloud.sleet.fill" : "cloud.rain.fill" },
    
    // Snow
    "6": function() { return (cond >= 611 && cond <= 613) ? "cloud.snow.fill" : "snow" },
    
    // Atmosphere
    "7": function() {
      if (cond == 781) { return "tornado" }
      if (cond == 701 || cond == 741) { return "cloud.fog.fill" }
      return night ? "cloud.fog.fill" : "sun.haze.fill"
    },
    
    // Clear and clouds
    "8": function() {
      if (cond == 800 || cond == 801) { return night ? "moon.stars.fill" : "sun.max.fill" }
      if (cond == 802 || cond == 803) { return night ? "cloud.moon.fill" : "cloud.sun.fill" }
      return "cloud.fill"
    }
  }
  
  // Find out the first digit.
  let conditionDigit = Math.floor(cond / 100)
  
  // Get the symbol.
  return SFSymbol.named(symbols[conditionDigit]()).image
}

// Provide a font based on the input.
function provideFont(fontName, fontSize) {
  const fontGenerator = {
    "ultralight": function() { return Font.ultraLightSystemFont(fontSize) },
    "light": function() { return Font.lightSystemFont(fontSize) },
    "regular": function() { return Font.regularSystemFont(fontSize) },
    "medium": function() { return Font.mediumSystemFont(fontSize) },
    "semibold": function() { return Font.semiboldSystemFont(fontSize) },
    "bold": function() { return Font.boldSystemFont(fontSize) },
    "heavy": function() { return Font.heavySystemFont(fontSize) },
    "black": function() { return Font.blackSystemFont(fontSize) },
    "italic": function() { return Font.italicSystemFont(fontSize) }
  }
  
  const systemFont = fontGenerator[fontName]
  if (systemFont) { return systemFont() }
  return new Font(fontName, fontSize)
}
 
// Add formatted text to a container.
function provideText(string, container, format) {
  const textItem = container.addText(string)
  const textFont = format.font || textFormat.defaultText.font
  const textSize = format.size || textFormat.defaultText.size
  const textColor = format.color || textFormat.defaultText.color
  
  textItem.font = provideFont(textFont, textSize)
  textItem.textColor = new Color(textColor)
  return textItem
}

/*
 * DRAWING FUNCTIONS
 * These functions draw onto a canvas.
 * ===================================
 */

// Draw the vertical line in the tomorrow view.
function drawVerticalLine(color, height) {
  
  const width = 2
  
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(width,height)
  
  let barPath = new Path()
  const barHeight = height
  barPath.addRoundedRect(new Rect(0, 0, height, height), width/2, width/2)
  draw.addPath(barPath)
  draw.setFillColor(color)
  draw.fillPath()
  
  return draw.getImage()
}

// Draw the temp bar.
function drawTempBar() {

  // Set the size of the temp bar.
  const tempBarWidth = 200
  const tempBarHeight = 20
  
  // Calculate the current percentage of the high-low range.
  let percent = (weatherData.currentTemp - weatherData.todayLow) / (weatherData.todayHigh - weatherData.todayLow)

  // If we're out of bounds, clip it.
  if (percent < 0) {
    percent = 0
  } else if (percent > 1) {
    percent = 1
  }

  // Determine the scaled x-value for the current temp.
  const currPosition = (tempBarWidth - tempBarHeight) * percent

  // Start our draw context.
  let draw = new DrawContext()
  draw.opaque = false
  draw.respectScreenScale = true
  draw.size = new Size(tempBarWidth, tempBarHeight)

  // Make the path for the bar.
  let barPath = new Path()
  const barHeight = tempBarHeight - 10
  barPath.addRoundedRect(new Rect(0, 5, tempBarWidth, barHeight), barHeight / 2, barHeight / 2)
  draw.addPath(barPath)
  draw.setFillColor(new Color("ffffff", 0.5))
  draw.fillPath()

  // Make the path for the current temp indicator.
  let currPath = new Path()
  currPath.addEllipse(new Rect(currPosition, 0, tempBarHeight, tempBarHeight))
  draw.addPath(currPath)
  draw.setFillColor(new Color("ffffff", 1))
  draw.fillPath()

  return draw.getImage()
}