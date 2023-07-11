const fs = require('fs');
const path = require('path');

let dataCache = null

function loadData() {
  if(!dataCache) {
    const file = path.resolve(__dirname, '../mock/data.json')
    const data = JSON.parse(fs.readFileSync(file, 'utf8'))
    const reports = data.dailyReports;
    dataCache = {}
    reports.forEach(report =>{
      dataCache[report.updatedDate] = report
    });
  }
  return dataCache;
}

function loadData() {

}
function getCoronavirusKeyIndex() {
  return Object.keys(loadData())
}

function getCoronavirusByDate(date) {
  const dailyData = loadData()[date] || {}
  if (dailyData.countries) {
    // 排序各国数据
    dailyData.countries.sort((a, b) => {
      return b.confirmed - a.confirmed
    })
  }
  return dailyData
}

module.exports = {
  getCoronavirusKeyIndex, // 所有疫情记录的日期
  getCoronavirusByDate  // 获取指定日期的疫情数据
}