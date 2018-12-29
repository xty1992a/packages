/**
 * Created by rule on 2018/12/15.
 */
import dayjs from 'dayjs'

export const getDateList = (year, month, check = d => true) => {
  let day1 = dayjs(new Date(year, month, 1))
  let len = day1.daysInMonth()
  let list = []
  while (len--) {
	let date = day1.add(len, 'day')
	list.push({
	  date,
	  value: date,
	  day: date.day(),
	  text: date.date(),
	  fmt: date.format('YYYY-MM-DD'),
	  usable: check(date)
	})
  }
  return list.reverse()
}