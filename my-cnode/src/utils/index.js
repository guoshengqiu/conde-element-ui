// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      // console.log('t', value, validList[i])
      return true
    }
  }
  // console.log('f')
  return false
}
export function replaylasttime (time) {
  let now = new Date().getTime()
  let oldtime = new Date(time).getTime()
  // console.log(now, oldtime)
  let diff = now - oldtime // 计算回复和现在时间差
  var result = ''
  let min = 1000 * 60
  let hour = min * 60
  let day = hour * 24
  let month = day * 30
  let year = month * 12
  let _year = diff / year // 换算成时、天、月、年
  let _month = diff / month
  let _day = diff / day
  let _hour = diff / hour
  let _min = diff / min
  if (_year >= 1) {
    result = ~~(_year) + ' 年前' // 两个波浪号表示返回整数
  } else if (_month >= 1) {
    result = ~~(_month) + ' 个月前'
  } else if (_day >= 1) {
    result = ~~(_day) + ' 天前'
  } else if (_hour >= 1) {
    result = ~~(_hour) + ' 小时前'
  } else if (_min >= 1) {
    result = ~~(_min) + ' 分钟前'
  } else result = '刚刚'
  return result
}
