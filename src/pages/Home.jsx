import { Header, Footer } from '../components/layout';
import { Hero, MovieSlider } from '../components/sections';
import './Home.css';

// Hero banner
const featuredMovie = {
  title: 'Duty After School',
  description: 'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam pertempuran.',
  backdrop: '/hero-banner (5).jpg',
  rating: '8.5',
  year: '2023',
  genre: 'Drama, Action'
};

// Melanjutkan Nonton = 16:9 landscape banners
const continueWatching = {
  title: 'Melanjutkan Nonton Film',
  variant: 'landscape',
  movies: [
    { id: 1, title: "Don't Look Up", poster: '/hero-banner.jpg', rating: '4.5' },
    { id: 2, title: 'The Batman', poster: '/hero-banner (2).jpg', rating: '4.2', showEpisodeBadge: true },
    { id: 3, title: 'Blue Lock', poster: '/hero-banner (3).jpg', rating: '4.6', showEpisodeBadge: true },
    { id: 4, title: 'A Man Called Otto', poster: '/hero-banner (4).jpg', rating: '4.4' },
    { id: 5, title: 'All Of Us Are Dead', poster: '/hero-banner (10).jpg', rating: '4.3', showEpisodeBadge: true },
    { id: 6, title: 'Wednesday', poster: '/hero-banner (11).jpg', rating: '4.7' },
    { id: 7, title: 'Train to Busan', poster: '/hero-banner (12).jpg', rating: '4.8' },
    { id: 8, title: 'Ekspedisi', poster: '/hero-banner (13).jpg', rating: '4.5' },
  ]
};

// Sections below = 9:16 portrait posters (16 movies each)
const movieSections = [
  {
    title: 'Top Rating Film dan Series Hari ini',
    variant: 'portrait',
    movies: [
      { id: 10, title: 'Homestay', poster: '/movie1.jpg', rating: '4.8', showEpisodeBadge: true },
      { id: 11, title: 'Jurassic World', poster: '/movie2.jpg', rating: '4.5' },
      { id: 12, title: 'Broer', poster: '/movie3.jpg', rating: '4.3' },
      { id: 13, title: "Glass Onion", poster: '/movie4.jpg', rating: '4.6', showEpisodeBadge: true },
      { id: 14, title: 'Big Hero 6', poster: '/movie5.jpg', rating: '4.9' },
      { id: 15, title: 'Badminton', poster: '/movie6.jpg', rating: '4.4' },
      { id: 16, title: 'Suicide Squad', poster: '/movie7.jpg', rating: '4.2' },
      { id: 17, title: 'Last Seen', poster: '/movie8.jpg', rating: '4.7' },
      { id: 18, title: 'The Shawshank', poster: '/movie9.jpg', rating: '4.8' },
      { id: 19, title: 'Oppenheimer', poster: '/movie10.jpg', rating: '4.9' },
      { id: 20, title: 'Retro', poster: '/movie11.jpg', rating: '4.5' },
      { id: 21, title: 'Gangnam', poster: '/movie12.jpg', rating: '4.6' },
      { id: 22, title: 'The Exorcist', poster: '/movie13.jpg', rating: '4.3' },
      { id: 23, title: 'A Man Called Otto', poster: '/movie14.jpg', rating: '4.7' },
      { id: 24, title: 'Sweet Revenge', poster: '/movie15.jpg', rating: '4.4' },
      { id: 25, title: 'Alien', poster: '/movie16.jpg', rating: '4.8' },
    ]
  },
  {
    title: 'Film Trending',
    variant: 'portrait',
    movies: [
      { id: 26, title: 'DP2', poster: '/movie17.jpg', rating: '4.2' },
      { id: 27, title: 'Emily the Criminal', poster: '/movie18.jpg', rating: '4.7' },
      { id: 28, title: 'Narcos', poster: '/movie19.jpg', rating: '4.6' },
      { id: 29, title: 'Code Enigma', poster: '/movie20.jpg', rating: '4.8' },
      { id: 30, title: 'Shazam', poster: '/movie21.jpg', rating: '4.3' },
      { id: 31, title: 'Retro', poster: '/movie22.jpg', rating: '4.5' },
      { id: 32, title: 'Babe Station', poster: '/movie23.jpg', rating: '4.4' },
      { id: 33, title: 'Gap of Death', poster: '/movie24.jpg', rating: '4.6' },
      { id: 34, title: 'Wonderful', poster: '/movie25.jpg', rating: '4.7' },
      { id: 35, title: 'Frozen', poster: '/movie26.jpg', rating: '4.9' },
      { id: 36, title: 'Weird Hexed', poster: '/movie27.jpg', rating: '4.3' },
      { id: 37, title: 'Seoul Vibe', poster: '/movie28.jpg', rating: '4.5' },
      { id: 38, title: 'Atlas', poster: '/movie29.jpg', rating: '4.4' },
      { id: 39, title: 'Live Telecast', poster: '/movie30.jpg', rating: '4.6' },
      { id: 40, title: 'Men Maid', poster: '/movie31.jpg', rating: '4.2' },
      { id: 41, title: 'An Man Lai', poster: '/movie32.jpg', rating: '4.8' },
    ]
  },
  {
    title: 'Rilis Baru',
    variant: 'portrait',
    movies: [
      { id: 42, title: 'Backstage', poster: '/movie33.jpg', rating: '4.6', showEpisodeBadge: true },
      { id: 43, title: 'Babe', poster: '/movie34.jpg', rating: '4.4' },
      { id: 44, title: 'Sungkyunkwan', poster: '/movie35.jpg', rating: '4.8', showEpisodeBadge: true },
      { id: 45, title: 'Monster', poster: '/movie36.jpg', rating: '4.5' },
      { id: 46, title: 'Weird Hexed', poster: '/movie37.jpg', rating: '4.7' },
      { id: 47, title: 'Miracle', poster: '/movie38.jpg', rating: '4.9' },
      { id: 48, title: 'Street Fighter', poster: '/movie39.jpg', rating: '4.3' },
      { id: 49, title: 'Atlas', poster: '/movie40.jpg', rating: '4.6' },
      { id: 50, title: 'Malik', poster: '/movie41.jpg', rating: '4.4' },
      { id: 51, title: 'Hra Da Tople', poster: '/movie42.jpg', rating: '4.7' },
      { id: 52, title: 'Duty After School', poster: '/movie43.jpg', rating: '4.8', showEpisodeBadge: true },
      { id: 53, title: 'Backstage', poster: '/movie44.jpg', rating: '4.5' },
      { id: 54, title: 'Gap of Death', poster: '/movie45.jpg', rating: '4.6' },
      { id: 55, title: 'Unknown', poster: '/movie46.jpg', rating: '4.4' },
      { id: 56, title: 'The Glory', poster: '/movie1.jpg', rating: '4.9' },
      { id: 57, title: 'Vincenzo', poster: '/movie2.jpg', rating: '4.7' },
    ]
  }
];

function Home() {
  return (
    <div className="home">
      <Header />
      
      <main className="home__main">
        <Hero 
          title={featuredMovie.title}
          description={featuredMovie.description}
          backdrop={featuredMovie.backdrop}
          rating={featuredMovie.rating}
          year={featuredMovie.year}
          genre={featuredMovie.genre}
          ageRating="18+"
          onPlay={() => console.log('Play movie')}
          onMoreInfo={() => console.log('More info')}
          onVolumeToggle={() => console.log('Toggle volume')}
        />
        
        {/* Melanjutkan Nonton - 16:9 landscape */}
        <MovieSlider 
          title={continueWatching.title}
          movies={continueWatching.movies}
          variant="landscape"
        />
        
        {/* Other sections - 9:16 portrait */}
        {movieSections.map((section, index) => (
          <MovieSlider 
            key={index}
            title={section.title}
            movies={section.movies}
            variant="portrait"
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
