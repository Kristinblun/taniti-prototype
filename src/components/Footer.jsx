import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-cyan-700 py-6 mt-10 text-center border-t border-cyan-200/40">
      <p className="text-lg italic tracking-wide mb-2">
        🌺 May the spirit of Taniti embrace you. We will see you soon. 🌺
      </p>

      <p className="text-md my-2">
        All photos sourced by{' '}
        <a
          href="https://unsplash.com"
          className="underline hover:text-cyan-500"
        >
          Unsplash
        </a>
      </p>
      <p className="text-sm">
        {' '}
        © {new Date().getFullYear()} Taniti Adventures. All rights reserved{' '}
      </p>
    </footer>
  );
}
