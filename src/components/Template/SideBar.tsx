'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Abdullah Hassan" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Abdullah&apos;Hassan</h2>
          <p>
            <a href="abdullah.hassan@petigreeglobal.com">abdullah.hassan@petigreeglobal.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Abdullah. I am an <a href="https://icme.stanford.edu/">Actuary, Quant, AI Engineer ICME</a>{' '}
           and the co-founder and Strategic Director of{' '}
          <a href="https://promptfoo.dev">Global Next</a> as well as CEO of{' '}
          <a href="https://usesmileid.com">Unamani AI</a>.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Michael D&apos;Angelo <Link href="/">mldangelo.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
