import Queue from '../lib/Queue'

export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password
    }

    // Adicionar job RegistrationMail na Fila
    await Queue.add('RegistrationMail', { user })
    await Queue.add('TemplateJob', { user })

    return res.json(user)
  }
}