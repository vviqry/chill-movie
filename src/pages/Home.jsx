import { Header, Footer } from '../components/layout';
import { Hero, MovieSlider } from '../components/sections';
import './Home.css';

// Sample movie data - in real app, this would come from an API
const featuredMovie = {
  title: 'Happiness',
  description: 'Dalam drama Korea yang menegangkan ini, wabah misterius melanda sebuah gedung apartemen mewah, memaksa penghuninya untuk berjuang bertahan hidup sambil menghadapi ketegangan antar tetangga dan ancaman yang terus berkembang.',
  backdrop: 'https://image.tmdb.org/t/p/original/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
  rating: '8.5',
  year: '2023',
  genre: 'Drama, Thriller'
};

const movieSections = [
  {
    title: 'Melanjutkan Tonton Film',
    movies: [
      { id: 1, title: 'Don\'t Look Up', poster: 'https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg', rating: '7.2', year: '2021', genre: 'Komedi' },
      { id: 2, title: 'The Adam Project', poster: 'https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg', rating: '6.7', year: '2022', genre: 'Sci-Fi' },
      { id: 3, title: 'All Of Us Are Dead', poster: 'https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSxKpQEFzgn.jpg', rating: '8.0', year: '2022', genre: 'Horror' },
      { id: 4, title: 'Squid Game', poster: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', rating: '8.0', year: '2021', genre: 'Thriller' },
      { id: 5, title: 'Money Heist', poster: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', rating: '8.2', year: '2021', genre: 'Crime' },
      { id: 6, title: 'Vincenzo', poster: 'https://image.tmdb.org/t/p/w500/dvXJgEDQXhL9Ouot2WkBHpQiHGd.jpg', rating: '8.4', year: '2021', genre: 'Drama' },
    ]
  },
  {
    title: 'Top Rating Film dan Series Hari ini',
    movies: [
      { id: 7, title: 'The Glory', poster: 'https://image.tmdb.org/t/p/w500/ea3ziqbwwCPJ1P8ukIlFV2vhcaV.jpg', rating: '8.1', year: '2023', genre: 'Drama' },
      { id: 8, title: 'Sweet Home', poster: 'https://image.tmdb.org/t/p/w500/6eMg81CPLalULg8spPt2LxfQJ1.jpg', rating: '7.9', year: '2020', genre: 'Horror' },
      { id: 9, title: 'Parasyte', poster: 'https://image.tmdb.org/t/p/w500/vYe8Hd0JXbsawHRLVo8dh4J5xnY.jpg', rating: '8.5', year: '2019', genre: 'Thriller' },
      { id: 10, title: 'Itaewon Class', poster: 'https://image.tmdb.org/t/p/w500/zXpEV7jkLVNS0knJxFgHGqFDkRe.jpg', rating: '8.1', year: '2020', genre: 'Drama' },
      { id: 11, title: 'Kingdom', poster: 'https://image.tmdb.org/t/p/w500/8HfnKurNOXqFpjVFXkFBDLbzK79.jpg', rating: '8.3', year: '2019', genre: 'Horror' },
      { id: 12, title: 'Crash Landing', poster: 'https://image.tmdb.org/t/p/w500/jFsBoqQ9g1JF9jHdwvPHxzCiEQy.jpg', rating: '8.7', year: '2020', genre: 'Romance' },
    ]
  },
  {
    title: 'Film Trending',
    movies: [
      { id: 13, title: 'Oppenheimer', poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', rating: '8.5', year: '2023', genre: 'Drama' },
      { id: 14, title: 'Barbie', poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', rating: '7.0', year: '2023', genre: 'Komedi' },
      { id: 15, title: 'John Wick 4', poster: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', rating: '7.7', year: '2023', genre: 'Aksi' },
      { id: 16, title: 'Avatar 2', poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NaSMtxNJZDc.jpg', rating: '7.6', year: '2022', genre: 'Sci-Fi' },
      { id: 17, title: 'Top Gun', poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DG35LeH.jpg', rating: '8.3', year: '2022', genre: 'Aksi' },
      { id: 18, title: 'Dune', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', rating: '8.0', year: '2021', genre: 'Sci-Fi' },
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
