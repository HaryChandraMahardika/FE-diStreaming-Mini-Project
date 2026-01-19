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
    <section className="py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Just Release</h2>
          <p className="text-green-500 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Trending in 2025
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }, 
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