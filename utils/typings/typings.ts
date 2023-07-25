export type MovieProps = {
  id: number;
  backdrop_path: string;
  imageUrl?: string;
  link: string;
  adult: boolean;
  backdropPath: string;
  poster_path: string;
  genre_ids: [];
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
  overview: string;
};

export type SectionTitleProps = {
  title: string;
};

export type CommonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type PosterProps = {
  media: {
    id: number;
    backdrop_path: string;
    imageUrl?: string;
    link: string;
    adult: boolean;
    backdropPath: string;
    poster_path: string;
    genre_ids: [];
    title: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    popularity: number;
    overview: string;
  };
};

export type User = {
  id: string;
  name?: string | null;
  email: string;
  image?: string | null;
};

export type movieDetailsProps = {
  movie: {
    id: number;
    first_air_date?: string;
    title: string;
    original_name?: string;
    release_date: string;
    ratings: number;
    popularity: number;
    vote_count: number;
    totalVotes: number;
    runtime: number;
    poster_path: string;
    overview: string;
    genres: [];
  };
};
