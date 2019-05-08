import mongoose from 'mongoose';

/**
 * Connects to the database
 */
const dbConnect = async () => {
  const connectUrl =
    `${process.env.MONGO_URI}:
     ${process.env.MONGO_PORT}/
     ${process.env.MONGO_DBNAME}`;

  mongoose.connect(connectUrl, {'useNewUrlParser': true},
      (err) => {
        if (err) console.log(`MongoDB ${err}`);
      }
  );

  mongoose.connection.once(
      'open',
      () => console.log('MongoDB Connection Established')
  );
};

export default dbConnect;
