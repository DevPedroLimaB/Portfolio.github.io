'use client';

import { useEffect, useState } from 'react';
import { content, links, type Lang } from './content';
import { Cord, QMark } from './Marks';
import hubvisionLogo from '@/images/hubvision.png';

const LANGS: Lang[] = ['pt', 'en', 'es'];
const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

export default function Site() {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang') as Lang | null;
      if (saved && LANGS.includes(saved)) setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const t = content[lang];

  return (
    <>
      <a className="skip" href="#main">
        {lang === 'pt' ? 'Pular para o conteúdo' : lang === 'es' ? 'Ir al contenido' : 'Skip to content'}
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="brand">
            Pedro Lima
          </a>
          <nav className="nav" aria-label="Menu">
            <a href="#projects">{t.nav.projects}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="langs" role="group" aria-label={t.langLabel}>
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <h1 className="hero-name">Pedro Lima</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <a className="btn btn-ink" href="#projects">
                {t.hero.primary}
              </a>
              <a className="btn btn-line" href="#contact">
                {t.hero.secondary}
              </a>
            </div>
          </div>
          <div className="wrap">
            <Cord />
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <h2 id="projects-title" className="section-title">
              {t.projects.title}
            </h2>
            <ul className="projects">
              {t.projects.items.map((p) => (
                <li key={p.title} className="project">
                  <p className="project-context">{p.context}</p>
                  <div className="project-main">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-body">{p.body}</p>
                    <p className="stack-line">{p.stack.join(', ')}</p>
                    {p.links && (
                      <p className="project-links">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                            {l.label}
                          </a>
                        ))}
                      </p>
                    )}
                    {p.note && <p className="project-note">{p.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title" className="section-title">
              {t.experience.title}
            </h2>
            <ol className="timeline">
              {t.experience.items.map((job) => (
                <li key={job.org} className={job.brand ? `job job-brand job-${job.brand}` : 'job'}>
                  {job.brand === 'hubvision' && (
                    <img className="job-logo" src={hubvisionLogo.src} alt="" width={320} height={60} />
                  )}
                  <div className="job-head">
                    {job.brand === 'qavah' && <QMark className="job-mark" />}
                    <div>
                      <h3 className={job.brand === 'hubvision' ? 'job-org sr-only' : 'job-org'}>{job.org}</h3>
                      <p className="job-role">
                        {job.role}
                        {job.period && <span className="job-period">{job.period}</span>}
                      </p>
                    </div>
                  </div>
                  <p className="job-body">{job.body}</p>
                  {job.points && (
                    <ul className="job-points">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                  {job.brand === 'qavah' && (
                    <a className="job-link" href={links.qavah} target="_blank" rel="noreferrer">
                      {t.experience.qavahLink}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap about">
            <div>
              <h2 id="about-title" className="section-title">
                {t.about.title}
              </h2>
              {t.about.paragraphs.map((para) => (
                <p key={para} className="about-p">
                  {para}
                </p>
              ))}
            </div>
            <div className="about-side">
              <h3 className="side-title">{t.about.stackTitle}</h3>
              <dl className="stack">
                {t.about.stack.map((s) => (
                  <div key={s.group} className="stack-row">
                    <dt>{s.group}</dt>
                    <dd>{s.items.join(', ')}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="side-title">{t.education.title}</h3>
              <p className="edu">
                {t.education.degree}
                <br />
                <span>{t.education.school}</span>
              </p>

              <h3 className="side-title">{t.education.certsTitle}</h3>
              <ul className="certs">
                {t.education.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title" className="section-title">
              {t.contact.title}
            </h2>
            <p className="contact-body">{t.contact.body}</p>
            <a className="contact-email" href={`mailto:${t.contact.email}`}>
              {t.contact.email}
            </a>
            <p className="contact-links">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={links.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <QMark className="footer-mark" />
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  );
}
