import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';

const portraitChin = '/assets/portrait-chin.jpg';
const portraitCrossed = '/assets/portrait-crossed.jpg';
const ggmtLogo = '/assets/ggmt.jpg';
const deBynaryFlyer = '/assets/de-bynary.jpg';

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Proof of work', '#work'],
  ['Contact', '#contact'],
];

const skills = [
  'Calendar & inbox management',
  'Research & reporting',
  'Community coordination',
  'Client communication',
  'Data entry & organization',
  'Social media support',
  'Meeting preparation',
  'Process documentation',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-testid="site-header">
        <div className="container-wide nav-wrap">
          <a href="#top" className="wordmark" data-testid="link-home">
            Abdulbasit<span>.</span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a
                href={href}
                key={href}
                className={label === 'Contact' ? 'nav-cta' : ''}
                data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Administrative Virtual Assistant</div>
            <h1 className="display" id="hero-title" data-testid="text-hero-title">
              Administrative<br />support that gives<br /><span className="accent-word">you back your time.</span>
            </h1>
            <p className="hero-lede" data-testid="text-hero-summary">
              I manage inboxes, calendars, research, meetings, and community communication. My support
              has freed clients from 26+ hours of admin work each week.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button-primary" data-testid="link-hero-contact">
                Let&apos;s work together <ArrowUpRight size={16} />
              </a>
              <a href="#work" className="button-quiet" data-testid="link-hero-work">
                See proof of work <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="availability" data-testid="status-availability">
              <span className="availability-dot" />
              <span>Nigeria (Remote) · available across EST, GMT &amp; WAT</span>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={portraitChin} alt="Abdulbasit Hassan with his hand on his chin" data-testid="img-portrait-main" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="container-wide about-grid">
          <div className="about-visual" data-reveal>
            <div className="eyebrow">A little context</div>
            <p className="about-quote" id="about-title">
              I handle admin tasks that keeps your work moving.
            </p>
            <div className="secondary-portrait-wrap">
              <img src={portraitCrossed} alt="Abdulbasit Hassan with his arms crossed" data-testid="img-portrait-secondary" />
              <span>Available across EST, GMT and WAT</span>
            </div>
          </div>
          <div className="about-copy" data-reveal data-delay="1">
            <p>
              I keep calendars current, inboxes organized, meetings prepared, and follow-ups visible.
              I also handle research, data entry, travel coordination, and the small details that are
              easy to miss when a business gets busy.
            </p>
            <p>
              At Trove, this approach gave a client roughly 26 hours back every week. At GGMT, it
              helped grow engagement by 150% in a 20,000-member community.
            </p>
            <div className="stat-row">
              <div className="stat" data-testid="stat-hours-saved">
                <b>26+</b><span>hours saved weekly through thoughtful admin support</span>
              </div>
              <div className="stat" data-testid="stat-engagement">
                <b>150%</b><span>engagement growth for a 20,000-member community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="container-wide skills-grid">
          <div className="skills-intro" data-reveal>
            <div className="eyebrow">The toolkit</div>
            <h2 className="display" id="skills-title">The work I handle well.</h2>
            <p>
              Practical administrative support for calendars, communication, coordination, and the
              systems that keep tasks moving.
            </p>
          </div>
          <div className="skill-list" data-reveal data-delay="1">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill} data-testid={`skill-item-${index}`}>
                <strong>{skill}</strong>
                <Check size={16} strokeWidth={1.6} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <div className="container-wide">
          <div className="section-heading" data-reveal>
            <div className="section-heading-copy">
              <div className="eyebrow">Experience</div>
              <h2 className="display" id="experience-title">Three roles. Clear results.</h2>
              <p>Administrative support, community operations, and education project coordination across three different environments.</p>
            </div>
          </div>
          <div className="timeline">
            <article className="timeline-item" data-reveal data-delay="1">
              <div className="timeline-date">Dec 2025 to Aug 2026</div>
              <div><h3>Personal Virtual Assistant</h3><p>Gave a private client roughly 26 hours back each week by managing day-to-day admin, inbox, calendar, research, personal tasks, and 1 to 3 Zoom calls each week.</p></div>
              <div className="timeline-role">Trove<br />Private client</div>
            </article>
            <article className="timeline-item" data-reveal data-delay="2">
              <div className="timeline-date">Jul 2024 to Mar 2026</div>
              <div><h3>Community Manager</h3><p>Grew engagement by 150% in a 20,000-member community through consistent communication, creative content, trivia, meme contests, mini-games, and original graphics.</p></div>
              <div className="timeline-role">GGMT<br />Green Grey Meta Games</div>
            </article>
            <article className="timeline-item" data-reveal data-delay="3">
              <div className="timeline-date">Jul 2025 to Nov 2025</div>
              <div><h3>Project and Operation Support</h3><p>Served as the link between the founder and 50+ students, ran two weekly sessions, shared updates, and recorded sessions for students who missed class.</p></div>
              <div className="timeline-role">De Bynary<br />SchoEx</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="container-wide">
          <div className="work-intro" data-reveal>
            <div className="work-intro-copy">
              <div className="eyebrow">Proof of work</div>
              <h2 className="display" id="work-title">Results from<br /><span className="accent-word">real projects.</span></h2>
              <p>Two projects that show how I support communication, engagement, and day-to-day operations.</p>
            </div>
          </div>
          <div className="work-grid">
            <article className="work-card orange" data-reveal data-testid="card-work-trove">
              <div className="card-top"><span className="tag">Trove</span></div>
              <h3>26+ hours returned each week.</h3>
              <p>Managed inbox, calendar, research, personal admin, and client calls so a private client could focus on higher-value work.</p>
            </article>
            <article className="work-card purple" data-reveal data-delay="1" data-testid="card-work-ggmt">
              <div className="card-top"><span className="tag">GGMT</span></div>
              <img src={ggmtLogo} alt="GGMT logo" data-testid="img-proof-ggmt" />
              <h3>Engagement grew by 150%.</h3>
              <p>Built trivia, meme contests, mini-games, and original graphics for a 20,000-member Telegram and Discord community.</p>
            </article>
            <article className="work-card green" data-reveal data-delay="2" data-testid="card-work-de-bynary">
              <div className="card-top"><span className="tag">De Bynary SchoEx</span></div>
              <img src={deBynaryFlyer} alt="De Bynary SchoEx computer training flyer" data-testid="img-proof-de-bynary" />
              <h3>50+ students kept up to date.</h3>
              <p>Coordinated two weekly sessions, shared regular updates, managed logistics, and recorded classes for students who missed them.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section credentials" id="credentials" aria-labelledby="credentials-title">
        <div className="container-wide credential-grid">
          <div className="credential-card" data-reveal data-testid="card-certification">
            <div className="credential-mark">A /</div>
            <h3 id="credentials-title">ALX Virtual Assistant Certificate</h3>
            <p>Issued April 21, 2026</p>
            <a className="credential-link" href="https://savanna.alxafrica.com/certificates/R8SG7LFn6P" target="_blank" rel="noreferrer" data-testid="link-certificate">
              Verify certificate <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="education" data-reveal data-delay="1">
            <div className="eyebrow">Education</div>
            <h3>BSc Chemistry</h3>
            <p>Air Force Institute of Technology</p>
            <div className="education-rule" />
            <p>Curiosity, precision, and the habit of understanding how things work. Those qualities are useful in any operation.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="container-wide contact-grid">
          <div data-reveal>
            <div className="eyebrow">Contact Abdulbasit</div>
            <h2 className="display" id="contact-title">Need more time for your core work?</h2>
            <p className="contact-copy">
              Tell me which recurring tasks are taking up your week. We can start with the admin that
              needs the most consistent attention.
            </p>
          </div>
          <div data-reveal data-delay="1">
            <div className="contact-links">
              <a className="contact-link" href="mailto:abdulbasithassan815@gmail.com" data-testid="link-email">
                <span><small>Email</small><br />abdulbasithassan815@gmail.com</span><Mail size={18} strokeWidth={1.5} />
              </a>
              <a className="contact-link" href="tel:+2349061405661" data-testid="link-phone">
                <span><small>Phone</small><br />+234 906 140 5661</span><Phone size={18} strokeWidth={1.5} />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/abdulbasit-hassan815" target="_blank" rel="noreferrer" data-testid="link-linkedin">
                <span><small>LinkedIn</small><br />abdulbasit-hassan815</span><Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        <footer className="container-wide footer">
          <div className="footer-mark">Abdulbasit<span>.</span></div>
          <div><MapPin size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Nigeria (Remote)</div>
          <div><Clock3 size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} /> EST · GMT · WAT</div>
          <div>© {new Date().getFullYear()} Abdulbasit Hassan</div>
        </footer>
      </section>
    </main>
  );
}

export default App;