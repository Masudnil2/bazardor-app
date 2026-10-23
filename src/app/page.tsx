
export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="container navbar-content">
          <a href="/" className="logo">
            🛒 বাজার দর
          </a>

          <p className="date">আজকের বাজারদর</p>

          <div className="auth-buttons">
            <a href="/signin" className="signin">
              সাইন ইন
            </a>
            <a href="/signup" className="signup">
              সাইন আপ
            </a>
          </div>
        </div>
      </header>

      <nav className="category-nav">
        <div className="container category-links">
          <a href="#সব-পণ্য">সব পণ্য</a>
          <a href="#চাল">চাল</a>
          <a href="#ডাল">ডাল</a>
          <a href="#সবজি">সবজি</a>
          <a href="#মাছ">মাছ</a>
          <a href="#মাংস">মাংস</a>
          <a href="#তেল">তেল</a>
        </div>
      </nav>

      <section className="container hero">
        <div>
          <p className="eyebrow">আপনার প্রতিদিনের বাজার সঙ্গী</p>
          <h1>
            জানুন আজকের
            <br />
            <span>বাজার দর</span>
          </h1>
          <p className="hero-description">
            নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ দাম জানুন।
            সঠিক দামে কেনাকাটা করুন নিশ্চিন্তে।
          </p>
          <a href="#সব-পণ্য" className="hero-button">
            বাজার দর দেখুন →
          </a>
        </div>

        <div className="hero-emoji" aria-label="বাজারের ঝুড়ি">
          🧺
        </div>
      </section>

      <section id="সব-পণ্য" className="container products-section">
        <p className="eyebrow">আজকের বাজার</p>
        <h2>সব পণ্যের দাম</h2>
        <p>আমাদের পণ্যের তালিকা খুব শীঘ্রই এখানে দেখানো হবে।</p>
      </section>

      <footer className="footer">
        <p>🛒 বাজার দর — সঠিক দামে, নিশ্চিন্তে।</p>
        <p>বাজারদরের তথ্য পরিবর্তনশীল হতে পারে। কেনার আগে যাচাই করুন।</p>
      </footer>
    </main>
  );
}
