import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3">Stay Updated</h2>
          <p className="text-sm sm:text-lg mb-5 sm:mb-8 opacity-90">
            Subscribe to our newsletter for the latest product launches, industry news, and exclusive offers.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-300 font-semibold text-base sm:text-lg">
              ✅ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-row gap-2 sm:gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-3 sm:px-5 py-2.5 sm:py-4 rounded-lg text-sm sm:text-base
                           outline-none text-gray-800 bg-white border-2 border-white
                           placeholder-gray-400 focus:border-yellow-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 px-4 sm:px-8 py-2.5 sm:py-4 bg-yellow-500 text-white rounded-lg
                           text-sm sm:text-base font-semibold transition-all duration-300
                           hover:bg-yellow-600 hover:-translate-y-0.5 hover:shadow-2xl whitespace-nowrap"
              >
                Subscribe →
              </button>
            </form>
          )}

          <p className="text-xs opacity-60 mt-3 sm:mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;