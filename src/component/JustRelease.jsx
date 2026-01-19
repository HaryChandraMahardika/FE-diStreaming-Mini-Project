import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

import 'swiper/css';
import 'swiper/css/navigation';

const JustRelease = ({ movies }) => {
  const filteredMovies = movies
    .filter(m => m.release_year && m.release_year.toString().trim() === "2025")
    .sort((a, b) => b.movie_id - a.movie_id)
    .slice(0, 10);

  if (filteredMovies.length === 0) return null;

  return (
    <section className="py-8 md:py-10 px-4 md:px-0">
      <div className="flex justify-between items-end mb-6 md:mb-8">
        <div>
          {/* Ukuran text h2 mengecil di mobile */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Just Release
          </h2>
          <p className="text-green-500 text-xs md:text-sm flex items-center gap-2 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Trending in 2025
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={12} // Jarak antar kartu lebih rapat di mobile
        slidesPerView={2.2} // Menampilkan 2 kartu penuh dan sedikit bagian kartu ke-3
        navigation={true}
        breakpoints={{
          // Tablet
          640: { 
            slidesPerView: 3.5,
            spaceBetween: 20 
          },
          // Desktop
          1024: { 
            slidesPerView: 5,
            spaceBetween: 20 
          }, 
        }}
        className="movie-swiper"
      >
        {filteredMovies.map(movie => (
          <SwiperSlide key={movie.movie_id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default JustRelease;