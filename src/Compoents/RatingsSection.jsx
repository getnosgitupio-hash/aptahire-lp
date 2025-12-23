/**
 * RatingsSection Component
 * Displays review platform ratings and customer quotes
 */

export default function RatingsSection() {
  const ratings = [
    {
      platform: 'G2 Crowd',
      rating: '5/5',
      description: 'Rated 5/5 by recruitment agencies for streamlining first-round interviews with AI.'
    },
    {
      platform: 'Capterra',
      rating: '4.9/5',
      description: 'Rated 4.9/5 by in-house TA teams automating screening and shortlisting for high-volume roles.'
    },
    {
      platform: 'HR Tech Marketplace',
      rating: '5/5',
      description: 'Rated 5/5 by HR leaders looking to cut interview costs while improving candidate experience.'
    }
  ];

  const quotes = [
    {
      name: 'Paul R.',
      title: 'Director, ScaleUp Search',
      quote: 'Couldn\'t run the agency without it. Aptahire takes over the repetitive screening and scheduling, so my team finally spends their time talking to serious candidates, not formatting CVs.'
    },
    {
      name: 'Priya K.',
      title: 'Head of Talent, FintechCo',
      quote: 'The best solution for handling 400+ applications per role. We used to spend days building a shortlist. Now Aptahire ranks and interviews for us and saves at least one full recruiter day per role.'
    },
    {
      name: 'Megan L.',
      title: 'Senior Recruiter, GlobalTech',
      quote: 'Great alternative to traditional ATS workflows. The AI interviews feel structured but human, and the insight reports make it easy to justify every recommendation to hiring managers.'
    },
    {
      name: 'Victor T.',
      title: 'HR Manager, Enterprise BPO',
      quote: 'I was new to AI recruiting tools and honestly skeptical. Now I have to say wow. It saves us a tremendous amount of time and massively reduces no-show and fake-candidate issues.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Hear Why Recruiters and Talent Teams
            <span className="block mt-2 text-blue-600">Love Aptahire...</span>
          </h2>
        </div>

        {/* Rating Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ratings.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.platform}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{item.rating}</p>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-colors duration-300"
            >
              <p className="text-slate-700 leading-relaxed mb-4 italic">
                "{quote.quote}"
              </p>
              <div className="border-t border-slate-300 pt-4">
                <p className="font-bold text-slate-900">{quote.name}</p>
                <p className="text-sm text-slate-600">{quote.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#final-cta"
            className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            See Why Top Recruitment Brands Rate Us Five Stars
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Discover the edge teams gain with AI screening.
          </p>
        </div>
      </div>
    </section>
  );
}
