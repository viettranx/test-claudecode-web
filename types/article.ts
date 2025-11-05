export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  source: {
    name: string;
    logo: string;
  };
  publishedAt: string;
  tags: string[];
  readTime: number;
  upvotes: number;
  comments: number;
}

export interface Source {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}
