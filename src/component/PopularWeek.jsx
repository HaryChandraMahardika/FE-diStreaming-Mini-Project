import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const PopularWeek = ({ movies }) => {
  
  const popularMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div className="py-12 group">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Popular of the week</h2>
        <div className="flex gap-2">
          
          <div className="popular-prev cursor-pointer p-2 bg-[#1a1a1a] rounded-full hover:text-red-600 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div className="popular-next cursor-pointer p-2 bg-[#1a1a1a] rounded-full hover:text-red-600 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.popular-next',
          prevEl: '.popular-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, 
        }}
        className="popular-swiper"
      >
        {popularMovies.map((movie, index) => (
          <SwiperSlide key={movie.movie_id}>
            <div className="flex items-center gap-4 group cursor-pointer py-2">
              
              <span className="text-6xl font-black text-[#1a1a1a] group-hover:text-red-600 transition-colors duration-300 min-w-[60px]">
                {index + 1}
              </span>
              
              
              <div className="flex-1 bg-[#141414] p-3 rounded-xl flex gap-4 items-center border border-white/5 group-hover:border-red-600/50 transition-all duration-300">
                <img 
                  src={movie.poster_url} 
                  className="w-16 h-20 object-cover rounded-lg shadow-lg" 
                  alt={movie.movie_name} 
                />
                <div className="overflow-hidden">
                  <h3 className="font-bold text-sm truncate text-white">{movie.movie_name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-bold mt-1">
                    {movie.categories && movie.categories.length > 0 
                      ? movie.categories[0].category_name 
                      : "Action"}
                  </p>
                  <div className="flex items-center text-yellow-500 text-xs mt-1">
                    <span className="mr-1">⭐</span> {movie.rating}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularWeek;