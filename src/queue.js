import 'dotenv/config';

import Queue from './app/lib/Queue';

Queue.process();
Queue.getRepeatableJobs()