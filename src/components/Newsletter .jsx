import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Add your API call here
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Newsletter</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe To Our Newsletter Get Bonus For The Next Purchase
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-base outline-none text-gray-800"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-yellow-500 text-white rounded-lg text-base font-semibold transition-all duration-300 hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;