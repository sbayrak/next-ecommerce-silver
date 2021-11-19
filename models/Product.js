import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
	category: {
		type: String,
		trim: true,
		required: true,
	},
	price: {
		type: Number,
	},
	description: {
		type: String,
		trim: true,
		maxLength: 250,
	},
	photos: [String],
	sizes: [String],
	colors: [String],
	stock: {
		type: Number,
		default: 0,
	},
	active: {
		type: Boolean,
		default: true,
	},
});

export default mongoose.models.Product ||
	mongoose.model('Product', productSchema);

// colors: [
// 	{
// 		color: '',
// 		sizes: [
// 			{
// 				size: '',
// 				stock: {
// 					type: Number,
// 					default: 0,
// 				},
// 			},
// 		],
// 	},
// ];
