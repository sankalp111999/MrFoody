const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Excali:Excali@cluster0.ogtlwfh.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const foodCollection = mongoose.connection.db.collection('food_items');
    const data = await foodCollection.find({}).toArray();
    console.log();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

mongoDB();
