const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// const DB = process.env.DB.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

	module.exports = function() {
		mongoose.connect(process.env.DB)
		.then(()=> console.log('Connected to MongoDB...'))
		.catch((err) => console.error('Could not connect to MongoDB..',err));
	}
	