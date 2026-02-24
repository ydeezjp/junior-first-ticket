export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>お問い合わせ</h1>
      <p>
        ご質問やご要望は下記メールアドレスまでお送りください。
      </p>
      <p className="email">
        <a href="mailto:support@old-example.com">
          support@old-example.com
        </a>
      </p>
      <p className="note">
        ※ 営業時間内（平日9:00-18:00）に順次ご返信いたします。
      </p>
    </div>
  );
}
