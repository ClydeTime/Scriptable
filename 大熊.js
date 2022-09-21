// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: grin-hearts;
//////////////////////////////////////////
// 预览大小【小：Small，中：Medium，大：Large】
const previewSize = "Small"

// 是否需要更换背景
const changePicBg = true

// 是否是纯色背景
const colorMode = false

// 小组件背景色
const bgColor = new Color("000000")

// 默认字体
const defaultFont = Font.systemFont(18)

// 默认字体颜色
const defaultTextColor = new Color("#ffffff")

// 内容区左右边距
const padding = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}

// 标题样式定义
let textStyle = {
    stack: undefined, // 加入到哪个内容栈显示
    marginStart: 0, // 开始距离，水平方向的就是左边距离，垂直方向的就是顶部距离
    marginEnd: 0, // 结束距离，水平方向的就是右边距离，垂直方向的就是底部距离
    text: "", // 显示的文字
    width: 0, // 宽
    height: 0, // 长
    lineLimit: 0, // 行数控制，0是全部展示
    font: undefined, // 字体
    textColor: defaultTextColor, // 文字颜色
}

// 图片样式定义
let imgStyle = {
    stack: undefined, // 加入到哪个内容栈显示
    marginStart: 0, // 开始距离，水平方向的就是左边距离，垂直方向的就是顶部距离
    marginEnd: 0, // 结束距离，水平方向的就是右边距离，垂直方向的就是底部距离
    img: undefined, // 图片资源
    width: 0, // 宽
    height: 0, // 长
    tintColor: undefined, // 图片渲染颜色
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////
// 组件Start
const filename = `${Script.name()}.jpg`
const files = FileManager.local()
const path = files.joinPath(files.documentsDirectory(), filename)
const widget = new ListWidget()
const contentStack = widget.addStack()
//////////////////////////////////////



/*
****************************************************************************
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
下面添加你自己的组件内容/逻辑
****************************************************************************
*/
// 获取外部输入的参数
var widgetInputRAW = args.widgetParameter
try {
  widgetInputRAW.toString()
} catch(e) {
  widgetInputRAW = ""
}

// 图片数组
const imgObjs = {'0': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573104/iPhone/sticker@2x.png', '1': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573105/iPhone/sticker@2x.png', '2': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573106/iPhone/sticker@2x.png', '3': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573107/iPhone/sticker@2x.png', '4': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573108/iPhone/sticker@2x.png', '5': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573109/iPhone/sticker@2x.png', '6': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573110/iPhone/sticker@2x.png', '7': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573111/iPhone/sticker@2x.png', '8': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573112/iPhone/sticker@2x.png', '9': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573113/iPhone/sticker@2x.png', '10': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573114/iPhone/sticker@2x.png', '11': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573115/iPhone/sticker@2x.png', '12': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573116/iPhone/sticker@2x.png', '13': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573117/iPhone/sticker@2x.png', '14': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573118/iPhone/sticker@2x.png', '15': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573119/iPhone/sticker@2x.png', '16': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573120/iPhone/sticker@2x.png', '17': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573121/iPhone/sticker@2x.png', '18': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573122/iPhone/sticker@2x.png', '19': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573123/iPhone/sticker@2x.png', '20': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573124/iPhone/sticker@2x.png', '21': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573125/iPhone/sticker@2x.png', '22': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573126/iPhone/sticker@2x.png', '23': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/20573127/iPhone/sticker@2x.png','24': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247802/iPhone/sticker@2x.png', '25': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247803/iPhone/sticker@2x.png', '26': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247804/iPhone/sticker@2x.png', '27': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247805/iPhone/sticker@2x.png', '28': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247806/iPhone/sticker@2x.png', '29': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247807/iPhone/sticker@2x.png', '30': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247808/iPhone/sticker@2x.png', '31': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247809/iPhone/sticker@2x.png', '32': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247810/iPhone/sticker@2x.png', '33': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247811/iPhone/sticker@2x.png', '34': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247812/iPhone/sticker@2x.png', '35': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247813/iPhone/sticker@2x.png', '36': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247814/iPhone/sticker@2x.png', '37': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247815/iPhone/sticker@2x.png', '38': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247816/iPhone/sticker@2x.png', '39': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247817/iPhone/sticker@2x.png', '40': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247818/iPhone/sticker@2x.png', '41': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247819/iPhone/sticker@2x.png', '42': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247820/iPhone/sticker@2x.png', '43': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247821/iPhone/sticker@2x.png', '44': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247822/iPhone/sticker@2x.png', '45': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247823/iPhone/sticker@2x.png', '46': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247824/iPhone/sticker@2x.png', '47': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/18247825/iPhone/sticker@2x.png','26': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15047/android/sticker.png', '27': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15048/android/sticker.png', '28': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15049/android/sticker.png', '29': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15050/android/sticker.png', '30': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15051/android/sticker.png', '31': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15052/android/sticker.png', '32': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15053/android/sticker.png', '33': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15054/android/sticker.png', '34': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15055/android/sticker.png', '35': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15056/android/sticker.png', '36': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15057/android/sticker.png', '37': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15058/android/sticker.png', '38': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15059/android/sticker.png', '39': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15060/android/sticker.png', '40': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15061/android/sticker.png', '41': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15062/android/sticker.png', '42': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15063/android/sticker.png', '43': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15064/android/sticker.png', '44': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15065/android/sticker.png', '45': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15066/android/sticker.png', '46': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15067/android/sticker.png', '47': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15068/android/sticker.png', '48': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15069/android/sticker.png', '49': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15070/android/sticker.png', '50': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15071/android/sticker.png', '51': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15072/android/sticker.png', '52': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15073/android/sticker.png', '53': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15074/android/sticker.png', '54': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15075/android/sticker.png', '55': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15076/android/sticker.png', '56': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15077/android/sticker.png', '57': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15078/android/sticker.png', '58': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15079/android/sticker.png', '59': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15080/android/sticker.png', '60': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15081/android/sticker.png', '61': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15082/android/sticker.png', '62': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15083/android/sticker.png', '63': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15084/android/sticker.png', '64': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15085/android/sticker.png', '65': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/15086/android/sticker.png','66': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822926/iPhone/sticker@2x.png', '67': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822927/iPhone/sticker@2x.png', '68': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822928/iPhone/sticker@2x.png', '69': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822929/iPhone/sticker@2x.png', '70': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822930/iPhone/sticker@2x.png', '71': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822931/iPhone/sticker@2x.png', '72': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822932/iPhone/sticker@2x.png', '73': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822933/iPhone/sticker@2x.png', '74': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822934/iPhone/sticker@2x.png', '75': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822935/iPhone/sticker@2x.png', '76': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822936/iPhone/sticker@2x.png', '77': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822937/iPhone/sticker@2x.png', '78': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822938/iPhone/sticker@2x.png', '79': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822939/iPhone/sticker@2x.png', '80': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822940/iPhone/sticker@2x.png', '81': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822941/iPhone/sticker@2x.png', '82': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822942/iPhone/sticker@2x.png', '83': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822943/iPhone/sticker@2x.png', '84': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822944/iPhone/sticker@2x.png', '85': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822945/iPhone/sticker@2x.png', '86': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822946/iPhone/sticker@2x.png', '87': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822947/iPhone/sticker@2x.png', '88': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822948/iPhone/sticker@2x.png', '89': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/72822949/iPhone/sticker@2x.png','90': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27322/android/sticker.png', '91': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27323/android/sticker.png', '92': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27324/android/sticker.png', '93': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27325/android/sticker.png', '94': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27326/android/sticker.png', '95': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27327/android/sticker.png', '96': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27328/android/sticker.png', '97': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27329/android/sticker.png', '98': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27330/android/sticker.png', '99': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27331/android/sticker.png', '100': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27332/android/sticker.png', '101': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27333/android/sticker.png', '102': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27334/android/sticker.png', '103': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27335/android/sticker.png', '104': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27336/android/sticker.png', '105': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27337/android/sticker.png', '106': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27338/android/sticker.png', '107': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27339/android/sticker.png', '108': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27340/android/sticker.png', '109': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27341/android/sticker.png', '110': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27342/android/sticker.png', '111': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27343/android/sticker.png', '112': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27344/android/sticker.png', '113': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27345/android/sticker.png', '114': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27346/android/sticker.png', '115': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27347/android/sticker.png', '116': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27348/android/sticker.png', '117': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27349/android/sticker.png', '118': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27350/android/sticker.png', '119': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27351/android/sticker.png', '120': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27352/android/sticker.png', '121': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27353/android/sticker.png', '122': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27354/android/sticker.png', '123': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27355/android/sticker.png', '124': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27356/android/sticker.png', '125': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27357/android/sticker.png', '126': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27358/android/sticker.png', '127': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27359/android/sticker.png', '128': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27360/android/sticker.png', '129': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/27361/android/sticker.png','130': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279742/iPhone/sticker@2x.png', '131': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279743/iPhone/sticker@2x.png', '132': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279744/iPhone/sticker@2x.png', '133': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279745/iPhone/sticker@2x.png', '134': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279746/iPhone/sticker@2x.png', '135': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279747/iPhone/sticker@2x.png', '136': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279748/iPhone/sticker@2x.png', '137': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279749/iPhone/sticker@2x.png', '138': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279750/iPhone/sticker@2x.png', '139': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279751/iPhone/sticker@2x.png', '140': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279752/iPhone/sticker@2x.png', '141': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279753/iPhone/sticker@2x.png', '142': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279754/iPhone/sticker@2x.png', '143': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279755/iPhone/sticker@2x.png', '144': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279756/iPhone/sticker@2x.png', '145': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279757/iPhone/sticker@2x.png', '146': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279758/iPhone/sticker@2x.png', '147': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279759/iPhone/sticker@2x.png', '148': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279760/iPhone/sticker@2x.png', '149': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279761/iPhone/sticker@2x.png', '150': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279762/iPhone/sticker@2x.png', '151': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279763/iPhone/sticker@2x.png', '152': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279764/iPhone/sticker@2x.png', '153': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/49279765/iPhone/sticker@2x.png','154': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937750/iPhone/sticker@2x.png', '155': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937751/iPhone/sticker@2x.png', '156': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937752/iPhone/sticker@2x.png', '157': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937753/iPhone/sticker@2x.png', '158': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937754/iPhone/sticker@2x.png', '159': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937755/iPhone/sticker@2x.png', '160': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937756/iPhone/sticker@2x.png', '161': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937757/iPhone/sticker@2x.png', '162': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937758/iPhone/sticker@2x.png', '163': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937759/iPhone/sticker@2x.png', '164': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937760/iPhone/sticker@2x.png', '165': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937761/iPhone/sticker@2x.png', '166': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937762/iPhone/sticker@2x.png', '167': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937763/iPhone/sticker@2x.png', '168': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937764/iPhone/sticker@2x.png', '169': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937765/iPhone/sticker@2x.png', '170': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937766/iPhone/sticker@2x.png', '171': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937767/iPhone/sticker@2x.png', '172': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937768/iPhone/sticker@2x.png', '173': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937769/iPhone/sticker@2x.png', '174': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937770/iPhone/sticker@2x.png', '175': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937771/iPhone/sticker@2x.png', '176': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937772/iPhone/sticker@2x.png', '177': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937773/iPhone/sticker@2x.png','178': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937750/iPhone/sticker@2x.png', '179': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937751/iPhone/sticker@2x.png', '180': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937752/iPhone/sticker@2x.png', '181': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937753/iPhone/sticker@2x.png', '182': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937754/iPhone/sticker@2x.png', '183': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937755/iPhone/sticker@2x.png', '184': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937756/iPhone/sticker@2x.png', '185': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937757/iPhone/sticker@2x.png', '186': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937758/iPhone/sticker@2x.png', '187': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937759/iPhone/sticker@2x.png', '188': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937760/iPhone/sticker@2x.png', '189': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937761/iPhone/sticker@2x.png', '190': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937762/iPhone/sticker@2x.png', '191': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937763/iPhone/sticker@2x.png', '192': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937764/iPhone/sticker@2x.png', '193': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937765/iPhone/sticker@2x.png', '194': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937766/iPhone/sticker@2x.png', '195': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937767/iPhone/sticker@2x.png', '196': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937768/iPhone/sticker@2x.png', '197': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937769/iPhone/sticker@2x.png', '198': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937770/iPhone/sticker@2x.png', '199': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937771/iPhone/sticker@2x.png', '200': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937772/iPhone/sticker@2x.png', '201': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937773/iPhone/sticker@2x.png','202': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937750/iPhone/sticker@2x.png', '203': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937751/iPhone/sticker@2x.png', '204': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937752/iPhone/sticker@2x.png', '205': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937753/iPhone/sticker@2x.png', '206': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937754/iPhone/sticker@2x.png', '207': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937755/iPhone/sticker@2x.png', '208': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937756/iPhone/sticker@2x.png', '209': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937757/iPhone/sticker@2x.png', '210': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937758/iPhone/sticker@2x.png', '211': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937759/iPhone/sticker@2x.png', '212': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937760/iPhone/sticker@2x.png', '213': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937761/iPhone/sticker@2x.png', '214': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937762/iPhone/sticker@2x.png', '215': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937763/iPhone/sticker@2x.png', '216': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937764/iPhone/sticker@2x.png', '217': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937765/iPhone/sticker@2x.png', '218': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937766/iPhone/sticker@2x.png', '219': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937767/iPhone/sticker@2x.png', '220': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937768/iPhone/sticker@2x.png', '221': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937769/iPhone/sticker@2x.png', '222': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937770/iPhone/sticker@2x.png', '223': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937771/iPhone/sticker@2x.png', '224': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937772/iPhone/sticker@2x.png', '225': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/13937773/iPhone/sticker@2x.png','226': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585982/iPhone/sticker@2x.png', '227': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585983/iPhone/sticker@2x.png', '228': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585984/iPhone/sticker@2x.png', '229': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585985/iPhone/sticker@2x.png', '230': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585986/iPhone/sticker@2x.png', '231': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585987/iPhone/sticker@2x.png', '232': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585988/iPhone/sticker@2x.png', '233': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585989/iPhone/sticker@2x.png', '234': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585990/iPhone/sticker@2x.png', '235': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585991/iPhone/sticker@2x.png', '236': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585992/iPhone/sticker@2x.png', '237': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585993/iPhone/sticker@2x.png', '238': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585994/iPhone/sticker@2x.png', '239': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585995/iPhone/sticker@2x.png', '240': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585996/iPhone/sticker@2x.png', '241': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585997/iPhone/sticker@2x.png', '242': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585998/iPhone/sticker@2x.png', '243': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14585999/iPhone/sticker@2x.png', '244': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586000/iPhone/sticker@2x.png', '245': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586001/iPhone/sticker@2x.png', '246': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586002/iPhone/sticker@2x.png', '247': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586003/iPhone/sticker@2x.png', '248': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586004/iPhone/sticker@2x.png', '249': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/14586005/iPhone/sticker@2x.png','250': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470496/iPhone/sticker@2x.png', '251': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470497/iPhone/sticker@2x.png', '252': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470498/iPhone/sticker@2x.png', '253': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470499/iPhone/sticker@2x.png', '254': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470500/iPhone/sticker@2x.png', '255': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470501/iPhone/sticker@2x.png', '256': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470502/iPhone/sticker@2x.png', '257': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470503/iPhone/sticker@2x.png', '258': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470504/iPhone/sticker@2x.png', '259': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470505/iPhone/sticker@2x.png', '260': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470506/iPhone/sticker@2x.png', '261': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470507/iPhone/sticker@2x.png', '262': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470508/iPhone/sticker@2x.png', '263': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470509/iPhone/sticker@2x.png', '264': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470510/iPhone/sticker@2x.png', '265': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/11470511/iPhone/sticker@2x.png','266': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4001/android/sticker.png', '267': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4002/android/sticker.png', '268': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4003/android/sticker.png', '269': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4004/android/sticker.png', '270': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4005/android/sticker.png', '271': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4006/android/sticker.png', '272': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4007/android/sticker.png', '273': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4008/android/sticker.png', '274': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4009/android/sticker.png', '275': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4010/android/sticker.png', '276': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4011/android/sticker.png', '277': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4012/android/sticker.png', '278': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4013/android/sticker.png', '279': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4014/android/sticker.png', '280': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4015/android/sticker.png', '281': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4016/android/sticker.png', '282': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4017/android/sticker.png', '283': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4018/android/sticker.png', '284': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4019/android/sticker.png', '285': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4020/android/sticker.png', '286': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4021/android/sticker.png', '287': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4022/android/sticker.png', '288': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4023/android/sticker.png', '289': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4024/android/sticker.png', '290': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4025/android/sticker.png', '291': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4026/android/sticker.png', '292': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4027/android/sticker.png', '293': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4028/android/sticker.png', '294': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4029/android/sticker.png', '295': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4030/android/sticker.png', '296': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4031/android/sticker.png', '297': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4032/android/sticker.png', '298': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4033/android/sticker.png', '299': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4034/android/sticker.png', '300': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4035/android/sticker.png', '301': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4036/android/sticker.png', '302': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4037/android/sticker.png', '303': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4038/android/sticker.png', '304': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4039/android/sticker.png', '305': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/4040/android/sticker.png','306': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683546/iPhone/sticker@2x.png', '307': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683547/iPhone/sticker@2x.png', '308': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683548/iPhone/sticker@2x.png', '309': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683549/iPhone/sticker@2x.png', '310': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683550/iPhone/sticker@2x.png', '311': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683551/iPhone/sticker@2x.png', '312': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683552/iPhone/sticker@2x.png', '313': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683553/iPhone/sticker@2x.png', '314': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683554/iPhone/sticker@2x.png', '315': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683555/iPhone/sticker@2x.png', '316': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683556/iPhone/sticker@2x.png', '317': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683557/iPhone/sticker@2x.png', '318': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683558/iPhone/sticker@2x.png', '319': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683559/iPhone/sticker@2x.png', '320': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683560/iPhone/sticker@2x.png', '321': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683561/iPhone/sticker@2x.png', '322': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683562/iPhone/sticker@2x.png', '323': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683563/iPhone/sticker@2x.png', '324': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683564/iPhone/sticker@2x.png', '325': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683565/iPhone/sticker@2x.png', '326': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683566/iPhone/sticker@2x.png', '327': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683567/iPhone/sticker@2x.png', '328': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683568/iPhone/sticker@2x.png', '329': 'https://stickershop.line-scdn.net/stickershop/v1/sticker/8683569/iPhone/sticker@2x.png'}

// 索引
const key = parseInt(Math.random() * Object.keys(imgObjs).length).toString()
let imgUrl = imgObjs[key]
if(imgUrl == undefined) {
    imgUrl = imgObjs['0']
}
log(imgUrl)
let img = await getImage(imgUrl)
imgStyle.stack = contentStack
imgStyle.width = 170
imgStyle.height = 170
imgStyle.img = img
addStyleImg()


/*
****************************************************************************
上面添加你自己的组件内容/逻辑
↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
****************************************************************************
*/


/*
****************************************************************************
* 这里是图片逻辑，不用修改
****************************************************************************
*/

if (!colorMode && !config.runsInWidget && changePicBg) {
    const okTips = "您的小部件背景已准备就绪"
    let message = "图片模式支持相册照片&背景透明"
    let options = ["图片选择", "透明背景"]
    let isTransparentMode = await generateAlert(message, options)
    if (!isTransparentMode) {
        let img = await Photos.fromLibrary()
        message = okTips
        const resultOptions = ["好的"]
        await generateAlert(message, resultOptions)
        files.writeImage(path, img)
    } else {
        message = "以下是【透明背景】生成步骤，如果你没有屏幕截图请退出，并返回主屏幕长按进入编辑模式。滑动到最右边的空白页截图。然后重新运行！"
        let exitOptions = ["继续(已有截图)", "退出(没有截图)"]

        let shouldExit = await generateAlert(message, exitOptions)
        if (shouldExit) return

        // Get screenshot and determine phone size.
        let img = await Photos.fromLibrary()
        let height = img.size.height
        let phone = phoneSizes()[height]
        if (!phone) {
            message = "您似乎选择了非iPhone屏幕截图的图像，或者不支持您的iPhone。请使用其他图像再试一次!"
            await generateAlert(message, ["好的！我现在去截图"])
            return
        }

        // Prompt for widget size and position.
        message = "您想要创建什么尺寸的小部件？"
        let sizes = ["小号", "中号", "大号"]
        let size = await generateAlert(message, sizes)
        let widgetSize = sizes[size]

        message = "您想它在什么位置？"
        message += (height == 1136 ? " (请注意，您的设备仅支持两行小部件，因此中间和底部选项相同。)" : "")

        // Determine image crop based on phone size.
        let crop = { w: "", h: "", x: "", y: "" }
        if (widgetSize == "小号") {
            crop.w = phone.小号
            crop.h = phone.小号
            let positions = ["顶部 左边", "顶部 右边", "中间 左边", "中间 右边", "底部 左边", "底部 右边"]
            let position = await generateAlert(message, positions)

            // Convert the two words into two keys for the phone size dictionary.
            let keys = positions[position].split(' ')
            crop.y = phone[keys[0]]
            crop.x = phone[keys[1]]

        } else if (widgetSize == "中号") {
            crop.w = phone.中号
            crop.h = phone.小号

            // 中号 and 大号 widgets have a fixed x-value.
            crop.x = phone.左边
            let positions = ["顶部", "中间", "底部"]
            let position = await generateAlert(message, positions)
            let key = positions[position].toLowerCase()
            crop.y = phone[key]

        } else if (widgetSize == "大号") {
            crop.w = phone.中号
            crop.h = phone.大号
            crop.x = phone.左边
            let positions = ["顶部", "底部"]
            let position = await generateAlert(message, positions)

            // 大号 widgets at the 底部 have the "中间" y-value.
            crop.y = position ? phone.中间 : phone.顶部
        }

        // Crop image and finalize the widget.
        let imgCrop = cropImage(img, new Rect(crop.x, crop.y, crop.w, crop.h))

        message = "您的小部件背景已准备就绪，退出到桌面预览。"
        const resultOptions = ["好的"]
        await generateAlert(message, resultOptions)
        files.writeImage(path, imgCrop)
    }

}


//////////////////////////////////////
// 组件End
// 设置小组件的背景
if (colorMode) {
    widget.backgroundColor = bgColor
} else {
    widget.backgroundImage = files.readImage(path)
}
// 设置边距(上，左，下，右)
widget.setPadding(padding.top, padding.left, padding.bottom, padding.right)
// 设置组件
Script.setWidget(widget)
// 完成脚本
Script.complete()
// 预览
if (previewSize == "Large") {
    widget.presentLarge()
} else if (previewSize == "Medium") {
    widget.presentMedium()
} else {
    widget.presentSmall()
}
//////////////////////////////////////

/*
****************************************************************************
* 重置文本样式
****************************************************************************
*/
function resetTextStyle() {
    textStyle.stack = undefined // 加入到哪个内容栈显示
    textStyle.marginStart = 0
    textStyle.marginEnd = 0
    textStyle.text = "" // 显示的文字
    textStyle.width = 0 // 宽
    textStyle.height = 0 // 长
    textStyle.lineLimit = 0 // 行数控制，0是全部展示
    textStyle.font = undefined // 字体
    textStyle.textColor = defaultTextColor // 文字颜色
}

/*
****************************************************************************
* 重置图片样式
****************************************************************************
*/
function resetImgStyle() {
    imgStyle.stack = undefined // 加入到哪个内容栈显示
    textStyle.marginStart = 0
    textStyle.marginEnd = 0
    imgStyle.img = undefined // 图片资源
    imgStyle.width = 0 // 宽
    imgStyle.height = 0 // 长
    imgStyle.tintColor = undefined // 图片渲染颜色
}

/*
****************************************************************************
* 添加一行文本数据进行显示
****************************************************************************
*/
function addStyleText() {
    const contentStack = textStyle.stack
    if (contentStack == undefined) {
        return
    }

    const marginStart = textStyle.marginStart
    if (marginStart != undefined && marginStart != 0) {
        contentStack.addSpacer(marginStart)
    }

    const textSpan = contentStack.addText(`${textStyle.text}`)
    contentStack.size = new Size(textStyle.width, textStyle.height)
    textSpan.lineLimit = textStyle.lineLimit
    textSpan.font = textStyle.font
    textSpan.textColor = textStyle.textColor

    const marginEnd = textStyle.marginEnd
    if (marginStart != undefined && marginStart != 0) {
        contentStack.addSpacer(marginEnd)
    }

    // 重置样式
    resetTextStyle()
}

/*
****************************************************************************
* 添加图片进行显示
****************************************************************************
*/
function addStyleImg() {
    const contentStack = imgStyle.stack
    if (contentStack == undefined) {
        return
    }

    const marginStart = textStyle.marginStart
    if (marginStart != undefined && marginStart != 0) {
        contentStack.addSpacer(marginStart)
    }

    const imgSpan = contentStack.addImage(imgStyle.img)
    imgSpan.imageSize = new Size(imgStyle.width, imgStyle.height)
    const tintColor = imgStyle.tintColor
    if (tintColor != undefined) {
        imgSpan.tintColor = tintColor
    }

    const marginEnd = textStyle.marginEnd
    if (marginStart != undefined && marginStart != 0) {
        contentStack.addSpacer(marginEnd)
    }

    // 重置样式
    resetImgStyle()
}

/*
****************************************************************************
* 右对齐，水平方向排列
****************************************************************************
*/
function alignRightStack(alignmentStack, marginRight) {
    let contentStack = alignmentStack.addStack()
    contentStack.layoutHorizontally()
    contentStack.addSpacer()

    let returnStack = contentStack.addStack()

    // 添加右边距
    if (marginRight != undefined && marginRight != 0) {
        contentStack.addSpacer(marginRight)
    }

    return returnStack
}


/*
****************************************************************************
* 左对齐，水平方向排列
****************************************************************************
*/
function alignLeftStack(alignmentStack, marginLeft) {
    let contentStack = alignmentStack.addStack()
    contentStack.layoutHorizontally()

    let returnStack = contentStack.addStack()
    returnStack.layoutHorizontally()

    // 添加左边距
    if (marginLeft != undefined && marginLeft != 0) {
        returnStack.addSpacer(marginLeft)
    }

    contentStack.addSpacer()
    return returnStack
}

/*
****************************************************************************
* 上对齐，垂直方向排列
****************************************************************************
*/
function alignTopStack(alignmentStack, marginTop) {
    let contentStack = alignmentStack.addStack()
    contentStack.layoutVertically()

    // 添加左边距
    if (marginTop != undefined && marginTop != 0) {
        contentStack.addSpacer(marginTop)
    }

    let returnStack = contentStack.addStack()
    returnStack.layoutVertically()

    contentStack.addSpacer()
    return returnStack
}


/*
****************************************************************************
* 下对齐，垂直方向排列
****************************************************************************
*/
function alignBottomStack(alignmentStack, marginBottom) {
    let contentStack = alignmentStack.addStack()
    contentStack.layoutVertically()
    contentStack.addSpacer()

    let returnStack = contentStack.addStack()

    // 添加下边距
    if (marginBottom != undefined && marginBottom != 0) {
        contentStack.addSpacer(marginBottom)
    }

    return returnStack
}

/*
****************************************************************************
* 水平居中
****************************************************************************
*/
function alignHorizontallyCenterStack(alignmentStack) {
    let returnStack = alignmentStack.addStack()
    returnStack.layoutHorizontally()
    returnStack.centerAlignContent()
    return returnStack
}


/*
****************************************************************************
* 垂直居中
****************************************************************************
*/
function alignVerticallyCenterStack(alignmentStack) {
    let returnStack = alignmentStack.addStack()
    returnStack.layoutVertically()
    returnStack.centerAlignContent()
    return returnStack
}


/*
****************************************************************************
* 网络请求get封装
****************************************************************************
*/
async function getJson(url) {
    const request = new Request(url)
    const defaultHeaders = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    request.url = url
    request.method = 'GET'
    request.headers = defaultHeaders

    const data = await request.loadJSON()

    return data
}


/*
****************************************************************************
* 网络请求获取图片
****************************************************************************
*/
async function getImage(url) {
    const request = new Request(url)
    const data = await request.loadImage()
    return data
}


/*
****************************************************************************
* 图片裁剪相关
****************************************************************************
*/
// Generate an alert with the provided array of options.
async function generateAlert(message, options) {
    let alert = new Alert()
    alert.message = message

    for (const option of options) {
        alert.addAction(option)
    }

    let response = await alert.presentAlert()
    return response
}

// Crop an image into the specified rect.
function cropImage(img, rect) {
    let draw = new DrawContext()
    draw.size = new Size(rect.width, rect.height)
    draw.drawImageAtPoint(img, new Point(-rect.x, -rect.y))
    return draw.getImage()
}

// Pixel sizes and positions for widgets on all supported phones.
function phoneSizes() {
    let phones = {
        2778: {
      小号: 512,
      中号: 1106,
      大号: 1162,
      左边: 94,
      右边: 650,
      顶部: 244,
      中间: 882,
      底部: 1518,
    },
        "2688": {
            "小号": 507,
            "中号": 1080,
            "大号": 1137,
            "左边": 81,
            "右边": 654,
            "顶部": 228,
            "中间": 858,
            "底部": 1488
        },

        "1792": {
            "小号": 338,
            "中号": 720,
            "大号": 758,
            "左边": 54,
            "右边": 436,
            "顶部": 160,
            "中间": 580,
            "底部": 1000
        },

        "2436": {
            "小号": 465,
            "中号": 987,
            "大号": 1035,
            "左边": 69,
            "右边": 591,
            "顶部": 213,
            "中间": 783,
            "底部": 1353
        },

        "2208": {
            "小号": 471,
            "中号": 1044,
            "大号": 1071,
            "左边": 99,
            "右边": 672,
            "顶部": 114,
            "中间": 696,
            "底部": 1278
        },

        "1334": {
            "小号": 296,
            "中号": 642,
            "大号": 648,
            "左边": 54,
            "右边": 400,
            "顶部": 60,
            "中间": 412,
            "底部": 764
        },

        "1136": {
            "小号": 282,
            "中号": 584,
            "大号": 622,
            "左边": 30,
            "右边": 332,
            "顶部": 59,
            "中间": 399,
            "底部": 399
        }
    }
    return phones
}


/*
****************************************************************************
****************************************************************************
****************************************************************************
*/



