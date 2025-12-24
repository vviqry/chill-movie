import { Header, Footer } from '../components/layout';
import { Hero, MovieSlider } from '../components/sections';
import './Home.css';

// Sample movie data with reliable backdrop images (16:9)
const featuredMovie = {
  title: 'Duty After School',
  description: 'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam pertempuran.',
  backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop',
  rating: '8.5',
  year: '2023',
  genre: 'Drama, Action'
};

const movieSections = [
  {
    title: 'Melanjutkan Nonton Film',
    movies: [
      { id: 1, title: 'Big Hero 6', poster: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=320&h=180&fit=crop', rating: '4.9', year: '2014', genre: 'Animasi' },
      { id: 2, title: 'Dilan 1991', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=320&h=180&fit=crop', rating: '4.8', year: '2019', genre: 'Romance' },
      { id: 3, title: 'Spider-Man', poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=320&h=180&fit=crop', rating: '4.7', year: '2021', genre: 'Action' },
      { id: 4, title: 'The Batman', poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=320&h=180&fit=crop', rating: '4.6', year: '2022', genre: 'Action' },
      { id: 5, title: 'Avatar 2', poster: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=320&h=180&fit=crop', rating: '4.5', year: '2022', genre: 'Sci-Fi' },
      { id: 6, title: 'Black Panther', poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=320&h=180&fit=crop', rating: '4.8', year: '2022', genre: 'Action' },
    ]
  },
  {
    title: 'Top Rating Film & Series Hari Ini',
    movies: [
      { id: 7, title: 'The Glory', poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=320&h=180&fit=crop', rating: '4.9', year: '2023', genre: 'Drama' },
      { id: 8, title: 'Wednesday', poster: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=320&h=180&fit=crop', rating: '4.8', year: '2022', genre: 'Mystery' },
      { id: 9, title: 'Squid Game', poster: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=320&h=180&fit=crop', rating: '4.7', year: '2021', genre: 'Thriller' },
      { id: 10, title: 'Stranger Things', poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=320&h=180&fit=crop', rating: '4.9', year: '2022', genre: 'Sci-Fi' },
      { id: 11, title: 'Money Heist', poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=320&h=180&fit=crop', rating: '4.6', year: '2021', genre: 'Crime' },
      { id: 12, title: 'All of Us Are Dead', poster: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=320&h=180&fit=crop', rating: '4.5', year: '2022', genre: 'Horror' },
    ]
  },
  {
    title: 'Film Trending',
    movies: [
      { id: 13, title: 'Oppenheimer', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=320&h=180&fit=crop', rating: '4.9', year: '2023', genre: 'Drama' },
      { id: 14, title: 'Barbie', poster: 'https://images.unsplash.com/photo-1594908900066-3f47337c1d55?w=320&h=180&fit=crop', rating: '4.5', year: '2023', genre: 'Comedy' },
      { id: 15, title: 'John Wick 4', poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=320&h=180&fit=crop', rating: '4.8', year: '2023', genre: 'Action' },
      { id: 16, title: 'Guardians 3', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=320&h=180&fit=crop', rating: '4.7', year: '2023', genre: 'Sci-Fi' },
      { id: 17, title: 'Fast X', poster: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=320&h=180&fit=crop', rating: '4.4', year: '2023', genre: 'Action' },
      { id: 18, title: 'Mission Impossible', poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=320&h=180&fit=crop', rating: '4.6', year: '2023', genre: 'Action' },
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
          onPlay={() => console.log('Play movie')}
          onMoreInfo={() => console.log('More info')}
        />
        
        {movieSections.map((section, index) => (
          <MovieSlider 
            key={index}
            title={section.title}
            movies={section.movies}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;
