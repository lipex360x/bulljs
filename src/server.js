import 'dotenv/config';
import express from 'express';
import UsersControllers from './app/controllers/UsersControllers';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UsersControllers.store);

app.use('/admin/queues', BullBoard.UI);

const server = app.listen(3333, () => {
  console.log('Server running on localhost:3333');
});

process.on('SIGINT', () => {
  console.log('\n🔒 API Stopped')
  server.close()
  process.exit()
})