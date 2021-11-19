import dbConnect from '../../../utils/dbConnect';
import Category from '../../../models/Category';

export default async (req, res) => {
	await dbConnect();

	//METHOD         :       POST
	//DESCRIPTION    :       Category Crete
	//ROUTE          :       /api/category
	if (req.method === 'POST') {
		try {
			const { name } = req.body;

			if (!name) return res.status(400).json({ msg: 'Boş bırakmayın.' });

			const categoryExist = await Category.findOne({ name });
			if (categoryExist)
				return res.status(400).json({ msg: 'Bu kategori zaten var.' });

			const newCategory = new Category({ name });

			await newCategory.save();

			return res.status(201).json({
				msg: 'Kategori Oluşturuldu',
				category: newCategory,
			});
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
	//METHOD         :       GET
	//DESCRIPTION    :       Category Viewing
	//ROUTE          :       /api/category
	if (req.method === 'GET') {
		try {
			const allCategories = await Category.find();

			if (allCategories) {
				return res.status(200).json({ categories: allCategories });
			} else {
				return res.status(404).json({ msg: 'Kategori bulunamadı' });
			}
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
};
