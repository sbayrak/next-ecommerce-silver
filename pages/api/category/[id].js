import dbConnect from '../../../utils/dbConnect';
import Category from '../../../models/Category';

export default async (req, res) => {
	await dbConnect();

	//METHOD         :       PATCH
	//DESCRIPTION    :       Category Update
	//ROUTE          :       /api/category/id
	if (req.method === 'PATCH') {
		try {
			const { id } = req.query;
			const { name } = req.body;

			if (!name) return res.status(400).json({ msg: 'Boş bırakmayınız.' });

			const updateCategory = await Category.findByIdAndUpdate(
				{ _id: id },
				{ name },
				{ new: true }
			);
			return res.status(200).json({
				msg: 'Kategori Güncellendi',
				category: updateCategory,
			});
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}

	//METHOD         :       DELETE
	//DESCRIPTION    :       Category Delete
	//ROUTE          :       /api/category/:id
	if (req.method === 'DELETE') {
		try {
			const { id } = req.query;

			await Category.findByIdAndDelete({ _id: id });
			return res.status(200).json({ msg: 'Kategori Silindi' });
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
};
