import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, Info, X } from 'lucide-react';
import { Movie } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ContentRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  isMyListRow?: boolean;
  myList?: string[];
}

export const ContentRow: React.FC<ContentRowProps> = ({
  title,
  movies,
  onPlay,
  onAddToList,
  onMoreInfo,
  isMyListRow = false,
  myList = [],
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 400;
    const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <div className="px-4 md:px-8 mb-8">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      
      <div className="relative group">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => {
            const isInMyList = myList.includes(movie.id);
            const isHovered = hoveredMovie === movie.id;
            const isFirstItem = index === 0;
            const isLastItem = index === movies.length - 1;
            
            return (
              <div
                key={movie.id}
                className={`relative flex-shrink-0 w-48 md:w-64 cursor-pointer transition-all duration-300 ${
                  isHovered 
                    ? `z-30 ${isFirstItem ? 'origin-left' : isLastItem ? 'origin-right' : 'origin-center'} scale-125` 
                    : 'z-10'
                }`}
                onMouseEnter={() => {
                  setHoveredMovie(movie.id);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredMovie(null);
                  setHoveredIndex(null);
                }}
                onClick={() => onMoreInfo(movie)}
              >
                <div className="relative overflow-hidden rounded-md transition-all duration-300">
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-300 ${
                    isHovered 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
                      {movie.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3 text-xs md:text-sm">
                      <span className="text-white/80 font-medium">{movie.year}</span>
                      {movie.likes !== undefined && movie.likes > 0 && (
                        <div className="flex items-center space-x-1">
                          <span className="text-red-500">❤</span>
                          <span className="text-white/80">{movie.likes}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 md:space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlay(movie);
                        }}
                        className="bg-white text-black p-2 md:p-2.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-110 shadow-lg"
                      >
                        <Play size={16} fill="currentColor" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToList(movie);
                        }}
                        className={`p-2 md:p-2.5 rounded-full transition-all duration-200 group/button hover:scale-110 shadow-lg ${
                          isMyListRow 
                            ? 'bg-red-600/80 text-white hover:bg-red-600' 
                            : isInMyList
                              ? 'bg-gray-700/80 text-white hover:bg-red-500'
                              : 'bg-gray-700/80 text-white hover:bg-green-500'
                        }`}
                      >
                        {isMyListRow ? (
                          <X size={16} />
                        ) : isInMyList ? (
                          <>
                            <Plus size={16} className="group-hover/button:hidden" />
                            <X size={16} className="hidden group-hover/button:block" />
                          </>
                        ) : (
                          <Plus size={16} />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMoreInfo(movie);
                        }}
                      >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};