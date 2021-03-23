export default {
  key: 'Template',
  
  async handle({ data }) {
    console.log('TemplateJob', data)
    return 'Return Template JOB'
  },

  options: {
    jobId: 'repeatTemplate',
     repeat: {
      cron: '*/2 * * * * *',
      limit: 5
    },
    removeOnComplete: true
  }
}