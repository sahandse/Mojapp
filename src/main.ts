import './style.css'

type DownloadLink = {
  label: string
  sublabel: string
  href: string
  icon: string
  primary?: boolean
}

const logo = `${import.meta.env.BASE_URL}logo.svg`

const downloads: DownloadLink[] = [
  { label: 'دانلود مستقیم', sublabel: 'نسخه Android APK', href: '', icon: '↓', primary: true },
  { label: 'دانلود از مایکت', sublabel: 'Myket', href: '', icon: 'M' },
  { label: 'دانلود از کافه‌بازار', sublabel: 'Cafe Bazaar', href: '', icon: 'B' },
]

const features = [
  ['♫', 'پخش پس‌زمینه', 'حتی با بستن برنامه، موسیقی در پس‌زمینه ادامه پیدا می‌کند.'],
  ['⌕', 'جستجوی سریع', 'آهنگ، آلبوم و هنرمند را سریع و یک‌جا پیدا کن.'],
  ['◉', 'صفحه هنرمند', 'با لمس نام خواننده، تمام آهنگ‌های همان هنرمند را ببین.'],
  ['▤', 'صف پخش هوشمند', 'مدیریت صف پخش و جابه‌جایی سریع بین آهنگ‌ها.'],
  ['♬', 'اعلان پخش', 'کنترل کامل موزیک از نوتیفیکیشن اندروید.'],
  ['✦', 'طراحی مدرن', 'رابط سریع، مینیمال و هماهنگ با هویت بصری Mojapp.'],
]

const downloadCards = downloads.map((item) => {
  const disabled = !item.href
  return `
    <a class="store-card ${item.primary ? 'is-primary' : ''} ${disabled ? 'is-disabled' : ''}"
      href="${item.href || '#'}" ${disabled ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>
      <span class="store-icon">${item.icon}</span>
      <span class="store-copy"><strong>${item.label}</strong><small>${disabled ? 'به‌زودی فعال می‌شود' : item.sublabel}</small></span>
      <span class="arrow">←</span>
    </a>`
}).join('')

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="page-glow glow-a"></div>
  <div class="page-glow glow-b"></div>
  <header class="site-header">
    <div class="shell nav">
      <a class="brand" href="#top" aria-label="Mojapp">
        <img src="${logo}" alt="لوگوی Mojapp" />
        <span><b>Mojapp</b><small>موزیک‌پلیر</small></span>
      </a>
      <nav>
        <a href="#features">امکانات</a>
        <a href="#download">دانلود</a>
        <a href="#faq">پرسش‌ها</a>
      </nav>
      <a class="nav-cta" href="#download">دریافت برنامه</a>
    </div>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-copy reveal">
        <span class="pill"><i></i> تجربه‌ای تازه برای شنیدن موسیقی</span>
        <h1>موسیقی را<br><em>با موج تازه‌ای</em> تجربه کن.</h1>
        <p>Mojapp یک موزیک‌پلیر فارسی مدرن با تمرکز روی سرعت، سادگی و تجربه شنیداری روان است؛ از جستجوی هنرمند تا کنترل پخش از نوتیفیکیشن.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#download">دانلود Mojapp</a>
          <a class="button" href="#features">دیدن امکانات</a>
        </div>
        <div class="trust-row"><span>✓ رابط فارسی</span><span>✓ مناسب اندروید</span><span>✓ طراحی مینیمال</span></div>
      </div>

      <div class="hero-art reveal">
        <div class="sound-ring ring-one"></div>
        <div class="sound-ring ring-two"></div>
        <div class="logo-stage">
          <div class="equalizer eq-left">${Array.from({ length: 8 }, (_, i) => `<i style="--d:${i}"></i>`).join('')}</div>
          <img src="${logo}" alt="لوگوی رسمی Mojapp" />
          <div class="equalizer eq-right">${Array.from({ length: 8 }, (_, i) => `<i style="--d:${i}"></i>`).join('')}</div>
        </div>
        <div class="floating-card now-playing"><span class="dot"></span><div><small>اکنون در حال پخش</small><strong>موج شب</strong></div><b>▶</b></div>
        <div class="floating-card hi-res"><small>کیفیت پخش</small><strong>High Quality</strong></div>
      </div>
    </section>

    <section id="features" class="section shell">
      <div class="section-heading reveal"><span>ویژگی‌ها</span><h2>همه‌چیز برای یک پخش روان 🎧</h2><p>امکانات اصلی بدون شلوغی؛ هر چیزی دقیقاً همان‌جایی است که انتظارش را داری.</p></div>
      <div class="feature-grid">${features.map(([icon, title, text]) => `<article class="feature-card reveal"><span class="feature-icon">${icon}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
    </section>

    <section class="showcase-section">
      <div class="shell showcase reveal">
        <div class="showcase-copy"><span>هویت جدید Mojapp</span><h2>طراحی هماهنگ با موج موسیقی</h2><p>تم آبی و فیروزه‌ای صفحه از لوگوی رسمی برنامه گرفته شده تا تجربه دانلود و خود اپ یک هویت واحد داشته باشند.</p></div>
        <div class="waveform">${Array.from({ length: 44 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>
      </div>
    </section>

    <section id="download" class="section shell">
      <div class="section-heading reveal"><span>دانلود</span><h2>روش دریافت Mojapp را انتخاب کن</h2><p>نسخه مستقیم، مایکت و کافه‌بازار از همین بخش در دسترس قرار می‌گیرند.</p></div>
      <div class="download-grid reveal">${downloadCards}</div>
      <p class="download-note">لینک‌های فروشگاه و APK بعد از واردکردن آدرس واقعی فعال می‌شوند.</p>
    </section>

    <section id="faq" class="section shell faq-wrap">
      <div class="section-heading reveal"><span>پرسش‌های رایج</span><h2>قبل از دانلود</h2></div>
      <div class="faq reveal">
        <details><summary>آیا Mojapp فارسی است؟</summary><p>بله، رابط صفحه دانلود و تجربه اصلی برنامه برای کاربران فارسی‌زبان طراحی شده است.</p></details>
        <details><summary>آیا برنامه در پس‌زمینه پخش می‌شود؟</summary><p>بله، هدف طراحی این است که با خروج از رابط برنامه، کنترل پخش از اعلان اندروید در دسترس بماند.</p></details>
        <details><summary>نسخه مستقیم از کجا دانلود می‌شود؟</summary><p>پس از قرار گرفتن APK یا Release رسمی، دکمه دانلود مستقیم به همان نسخه متصل می‌شود.</p></details>
      </div>
    </section>

    <section class="shell final-cta reveal">
      <img src="${logo}" alt="Mojapp" />
      <div><span>Ready to play?</span><h2>موج موسیقی‌ات را شروع کن.</h2></div>
      <a class="button button-primary" href="#download">دانلود Mojapp</a>
    </section>
  </main>

  <footer><div class="shell"><div class="brand compact"><img src="${logo}" alt="Mojapp"/><span><b>Mojapp</b><small>Music Player</small></span></div><p>© ${new Date().getFullYear()} Mojapp</p></div></footer>
`

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.href = logo
document.head.appendChild(favicon)

document.querySelectorAll<HTMLAnchorElement>('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault())
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
