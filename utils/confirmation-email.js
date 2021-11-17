import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(aliciEmail, siteIsmi, token) {
  const msg = {
    to: aliciEmail, // Change to your recipient
    from: 'suat.bayrak@bilgiedu.net', // Change to your verified sender
    subject: `${siteIsmi} - Uyelik Aktiflestirme`,
    text: 'and easy to do anywhere, even with Node.js',
    html: `<div
	style="
		width: 90%;
		max-width: 550px;
		margin: 0 auto;
		height: auto;
		background: #edd2cb;
		padding: 25px 50px 40px 50px;
		text-align: center;
	"
><h2
style="
    font-size: 40px;
    color: #f55951;
    letter-spacing: -1px;
    font-weight: 600;
"
>
Merhaba!
</h2>
<img
src="./public/email.png"
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
Üyeliğinizi aktive etmek için linke tıklayın.
</p>
<a
href="${process.env.NEXT_PUBLIC_URL}/giris?token=${token}"
style="
    background: #f55951;
    color: #fff;
    padding: 12px 25px;
    border-radius: 4px;
    text-decoration: none;
"
>Hesabımı Onayla</a
>
<p
style="font-size: 15px; color: #f55951; font-weight: 400; margin-top: 35px"
>
Üyeliğinizi daha önce aktif ettiyseniz bu maili dikkate almayın.
</p>
</div>`,
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

export default sendMail;
