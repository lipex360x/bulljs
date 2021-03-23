import express from 'express'
import UserController from './app/controllers/UsersControllers'

const app = express()
app.use(express.json())

app.post('/users', UserController.store)

app.listen(3333, () => {
  console.log('Server running on port 3333')
})