import Mail from '../lib/Mail'

export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password
    }

    // Enviar email
    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${name}, bem-vindo ao sistema de filas`
    })

    return res.json(user)
  }
}