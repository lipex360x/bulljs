export default {
  key: 'TemplateJob',
  
  async handle({ data }) {
    console.log('TemplateJob', data)
    return 'Return Template JOB'
  }
}