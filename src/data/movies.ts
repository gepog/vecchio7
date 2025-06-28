import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';

export const featuredMovie = {
  id: 'featured-1',
  title: 'The Future of AI',
  description: 'Explore the cutting-edge developments in artificial intelligence and how they\'re reshaping our world. From machine learning breakthroughs to ethical considerations, this comprehensive guide covers everything you need to know about AI\'s impact on society.',
  genre: ['Technology', 'Science', 'Future'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: img1,
  backdrop: img1,
  videoUrl: '/videos/featured.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies = [
  {
    id: '1',
    title: 'Digital Revolution',
    description: 'A deep dive into how digital technology is transforming every aspect of our lives.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: '/videos/digital-revolution.mp4',
    trailerUrl: '/videos/digital-revolution-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Quantum Computing Explained',
    description: 'Understanding the principles and potential of quantum computing technology.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: '/videos/quantum-computing.mp4',
    trailerUrl: '/videos/quantum-computing-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Sustainable Energy Solutions',
    description: 'Exploring renewable energy technologies and their impact on climate change.',
    genre: ['Environment', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: img4,
    backdrop: img4,
    videoUrl: '/videos/sustainable-energy.mp4',
    trailerUrl: '/videos/sustainable-energy-trailer.mp4',
    likes: 1034
  },
  {
    id: '4',
    title: 'Space Exploration 2024',
    description: 'The latest missions and discoveries in space exploration and astronomy.',
    genre: ['Space', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: img5,
    backdrop: img5,
    videoUrl: '/videos/space-exploration.mp4',
    trailerUrl: '/videos/space-exploration-trailer.mp4',
    likes: 1189
  },
  {
    id: '5',
    title: 'Cybersecurity Fundamentals',
    description: 'Essential knowledge for protecting yourself in the digital age.',
    genre: ['Technology', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 40m',
    thumbnail: img11,
    backdrop: img11,
    videoUrl: '/videos/cybersecurity.mp4',
    trailerUrl: '/videos/cybersecurity-trailer.mp4',
    likes: 678
  },
  {
    id: '6',
    title: 'Machine Learning Basics',
    description: 'An introduction to machine learning concepts and applications.',
    genre: ['Technology', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: img12,
    backdrop: img12,
    videoUrl: '/videos/machine-learning.mp4',
    trailerUrl: '/videos/machine-learning-trailer.mp4',
    likes: 945
  },
  {
    id: '7',
    title: 'Blockchain Technology',
    description: 'Understanding blockchain and its applications beyond cryptocurrency.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: img13,
    backdrop: img13,
    videoUrl: '/videos/blockchain.mp4',
    trailerUrl: '/videos/blockchain-trailer.mp4',
    likes: 823
  },
  {
    id: '8',
    title: 'Virtual Reality Worlds',
    description: 'Exploring the immersive possibilities of virtual and augmented reality.',
    genre: ['Technology', 'Gaming'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: img14,
    backdrop: img14,
    videoUrl: '/videos/virtual-reality.mp4',
    trailerUrl: '/videos/virtual-reality-trailer.mp4',
    likes: 712
  },
  {
    id: '9',
    title: 'Internet of Things',
    description: 'How connected devices are creating smart homes and cities.',
    genre: ['Technology', 'Smart Home'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: img15,
    backdrop: img15,
    videoUrl: '/videos/iot.mp4',
    trailerUrl: '/videos/iot-trailer.mp4',
    likes: 589
  },
  {
    id: '10',
    title: 'Data Science Revolution',
    description: 'How big data and analytics are transforming business decisions.',
    genre: ['Technology', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: img31,
    backdrop: img31,
    videoUrl: '/videos/data-science.mp4',
    trailerUrl: '/videos/data-science-trailer.mp4',
    likes: 867
  },
  {
    id: '11',
    title: 'Cloud Computing Guide',
    description: 'Understanding cloud services and their impact on modern computing.',
    genre: ['Technology', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: img32,
    backdrop: img32,
    videoUrl: '/videos/cloud-computing.mp4',
    trailerUrl: '/videos/cloud-computing-trailer.mp4',
    likes: 734
  },
  {
    id: '12',
    title: 'Robotics and Automation',
    description: 'The future of work in an age of intelligent machines.',
    genre: ['Technology', 'Future'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: img33,
    backdrop: img33,
    videoUrl: '/videos/robotics.mp4',
    trailerUrl: '/videos/robotics-trailer.mp4',
    likes: 1098
  }
];

export const contentRows = [
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with the most liked movies
  }
];

export const getMostLikedMovies = (movieLikes: Record<string, number>) => {
  return movies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};