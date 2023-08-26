import dayjs from 'dayjs';

export const formamteWeek = (year, month, day) => {
  const lastDay = new Date(year, month, 0).getDate()
  let nextDay = (day + 7) > lastDay ? (day + 7) - lastDay : (day + 7)
  let nextMonth = month + 1

  return {
    year,
    month,
    day,
    nextMonth,
    nextDay
  }
  // return `${year}年${month}月${day}日 - ${nextMonth}月${nextDay}日`
}