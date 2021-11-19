import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

export default async (req, res) => {
	await dbConnect();

	// METHOD         :       POST
	// DESCRIPTION    :       Product Create
	// ROUTE          :       /api/product
	if (req.method === 'POST') {
		try {
			const {
				name,
				category,
				price,
				description,
				photos,
				sizes,
				colors,
				stock,
			} = req.body;

			if (!name || !category || !price || !stock)
				return res.status(400).json({ msg: 'Boş alan bırakmayınız.' });

			const nameExist = await Product.findOne({ name });

			if (nameExist) return res.status(400).json({ msg: 'Bu ürün zaten var' });

			if (description.length > 250)
				return res
					.status(400)
					.json({ msg: 'Açıklama alanı en fazla 250 karakter olabilir' });

			if (stock < 1)
				return res.status(400).msg({ msg: 'Lütfen geçerli stok girin.' });

			if (photos.length > 4)
				return res
					.status(400)
					.json({ msg: 'En fazla 4 adet resim yüklenebilir' });

			const newProduct = new Product({
				name,
				category,
				price,
				description,
				photos,
				sizes,
				colors,
				stock,
			});

			await newProduct.save();

			return res.status(201).json({
				msg: 'Ürün Oluşturuldu',
				product: newProduct,
			});
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
	// METHOD         :       GET
	// DESCRIPTION    :       All Product
	// ROUTE          :       /api/product
	if (req.method === 'GET') {
		try {
			const allProducts = await Product.find();

			if (allProducts) return res.status(200).json({ products: allProducts });
		} catch (err) {
			return res.status(500).json({ msg: 'Server Error : ' + err });
		}
	}
};
