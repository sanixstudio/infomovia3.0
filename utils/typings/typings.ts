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
  queryName: string;
  fetchUrl: RequestInfo | URL;
};

export type CommonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
