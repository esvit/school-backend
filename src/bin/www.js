import { createServer } from '../lib/server';
import { env } from '../lib/env';
import { logger } from '../lib/logger';
import mongoose from 'mongoose';

run();

async function run() {
    try {
        const app = await createServer();

        mongoose.Promise = Promise;
        await mongoose.connect(env.MONGO_SERVER, { useMongoClient: true });

        app.listen(env.PORT);

        logger.debug(`Server listening on ${env.PORT} in ${env.NODE_ENV} mode`);
    } catch (err) {
        logger.error('Error while starting up server', err);
        process.exit(1);
    }
}