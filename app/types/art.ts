// types/art.ts
export interface Art {
  id: number;
  title: string;
  image_id: string | null;
  artist_title: string | null;
  date_display: string | null;
  quantity ?:number ;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  current_page: number;
  total_pages: number;
}
