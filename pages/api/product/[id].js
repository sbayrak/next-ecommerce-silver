import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

export default async (req, res) => {
	await dbConnect();

	//  METHOD         :       GET
	// 	DESCRIPTION    :       Single Product
	// 	ROUTE          :       /api/product/:id
	if (req.method === 'GET') {
		try {
			const { id } = req.query;

			const singleProduct = await Product.findById(id);

			return res.status(200).json({ singleProduct });
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
	//  METHOD         :       PATCH
	// 	DESCRIPTION    :       Product Update
	// 	ROUTE          :       /api/product/:id
	if (req.method === 'PATCH') {
		try {
			const { id } = req.query;

			const updateProduct = await Product.findByIdAndUpdate(
				{ _id: id },
				req.body,
				{ new: true }
			);

			return res.status(200).json({
				msg: 'Ürün Güncellendi.',
				updateProduct,
			});
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error  : ' + err });
		}
	}
	//  METHOD         :       DELETE
	// 	DESCRIPTION    :       Product Delete
	// 	ROUTE          :       /api/product/:id
	if (req.method === 'DELETE') {
		try {
			const { id } = req.query;

			await Product.findByIdAndDelete({ _id: id });
			return res.status(200).json({ msg: 'Ürün Silindi.' });
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error  : ' + err });
		}
	}
};
