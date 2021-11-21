import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function resetEmail(aliciEmail, siteIsmi, token) {
  const msg = {
    to: aliciEmail, // Change to your recipient
    from: 'suat.bayrak@bilgiedu.net', // Change to your verified sender
    subject: `${siteIsmi} - Sifreyi Sifirla`,
    text: 'and easy to do anywhere, even with Node.js',
    html: `<div
	style="
		width: 90%;
		max-width: 500px;
		height: auto;
		margin: 0 auto;
		background: #edd2cb;
		padding: 25px 50px 40px 50px;
		text-align: center;
	"
>
	<h2
		style="
			font-size: 40px;
			color: #f55951;
			letter-spacing: -1px;
			font-weight: 600;
		"
	>
		Şifre Yenileme
	</h2>
	<img
		src="./public/refresh.png"
		alt=""
		style="width: 75px; height: 75px; object-fit: contain"
	/>
	<p
		style="
			font-size: 20px;
			color: #f55951;
			font-weight: 500;
			margin-bottom: 35px;
		"
	>
		Şifrenizi yenilemek için linke tıklayın.
	</p>
	<a
		href="${process.env.NEXT_PUBLIC_URL}/sifre-yenileme?email=${aliciEmail}&verification=${token}"
		style="
			background: #f55951;
			color: #fff;
			padding: 12px 25px;
			border-radius: 4px;
			text-decoration: none;
		"
		>Şifremi Yenile</a
	>
	<p
		style="font-size: 15px; color: #f55951; font-weight: 400; margin-top: 35px"
	>
		Bu şifre yenileme emaili sadece bir kez kullanılabilir.
	</p>
</div>
`,
  };
  sgMail
    .send(msg)
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      return { success: false };
    });
}

export default resetEmail;
