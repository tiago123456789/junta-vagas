const schedule = require('node-schedule')
const insert_jobs = require('./insert_jobs')

const rule = new schedule.RecurrenceRule()
rule.hour = 15 //23
rule.minute = 07 //30
rule.tz = 'America/Sao_Paulo'

schedule.scheduleJob(rule, () => {
  try {
    insert_jobs.insertData()
  } catch (err) {
    console.log(err)
  }
})