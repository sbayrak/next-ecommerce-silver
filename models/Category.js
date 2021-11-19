import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Category ||
	mongoose.model('Category', categorySchema);
