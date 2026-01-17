interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    'Quick Links': [
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms of Service', page: 'terms' },
      { label: 'Contact Us', page: 'contact' },
      { label: 'FAQ', page: 'faq' }
    ],
    Popular: [
      { label: 'All Games', page: 'games' },
      { label: 'Home', page: 'home' },
      { label: 'About Us', page: 'about' },
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-purple-950/60 dark:to-purple-950/80 text-white pt-12 pb-6 mt-10 dark:border-t dark:border-purple-400/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 items-start">

          {/* 1️⃣ LOGO */}
          <div className="flex justify-start">
            <img
              src="/pi7_tool_chatgpt_image_jan_11__2026__02_34_41_pm-removebg-preview.png"
              alt="OrryGames Logo"
              className="w-40 md:w-64 object-contain"
            />
          </div>

          {/* 2️⃣ TEXT */}
          <div className="flex items-center">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Your ultimate destination for free online games! Play hundreds of exciting games across all categories, from action packed adventures to brain-teasing puzzles. Built for gamers worldwide.
            </p>
          </div>

          {/* 3️⃣ QUICK LINKS */}
          <div>
            <h3 className="text-lg font-black mb-3 text-yellow-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks['Quick Links'].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition text-sm font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ POPULAR */}
          <div>
            <h3 className="text-lg font-black mb-3 text-yellow-300">
              Popular
            </h3>
            <ul className="space-y-2">
              {footerLinks.Popular.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition text-sm font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 5️⃣ SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-black mb-3 text-yellow-300">
              Follow Us
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer">
                {/* Instagram */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5C19.99 2 22 4.01 22 6.25v11.5C22 19.99 19.99 22 16.25 22h-8.5C4.01 22 2 19.99 2 17.75V6.25C2 4.01 4.01 2 7.75 2Zm4.25 5.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.75-7.88a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z" />
                </svg>
                <span className="text-sm font-semibold">Instagram</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer">
                {/* Facebook */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.88v-7H8v-3h2.5V9.5c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.2 2.2.2v2.4h-1.24c-1.22 0-1.6.76-1.6 1.54V12H16l-.5 3h-2.5v7A10 10 0 0 0 22 12Z" />
                </svg>
                <span className="text-sm font-semibold">Facebook</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition cursor-pointer">
                {/* X (Twitter) */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-6.8 7.77L23 22h-6.8l-5.3-6.7L5.3 22H2l7.3-8.3L1 2h7l4.9 6.1L18.9 2Z" />
                </svg>
                <span className="text-sm font-semibold">X (Twitter)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
            <p className="text-gray-400 text-sm font-semibold">
              © 2026 OrryGames. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm font-semibold">
              Made with ❤️ for gamers worldwide
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}