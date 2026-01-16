import { useState, useEffect } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}

interface UsePaginationResult {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  setCurrentPage: (page: number) => void;
  refreshPosts: () => void;
}

export function usePagination(postsPerPage: number = 12): UsePaginationResult {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
      
      const client = require("contentful").createClient({
        space: space,
        accessToken: accessToken,
      });

      const response = await client.getEntries({
        content_type: "blogPost",
        order: '-sys.createdAt',
      });

      const formattedPosts = response.items.map((post: any) => ({
        slug: post.fields.slug,
        title: post.fields.title,
        subtitle: post.fields.subtitle || '',
        description: post.fields.description || '',
        heroImage: post.fields.heroImage?.fields?.file?.url 
          ? "https:" + post.fields.heroImage.fields.file.url 
          : '/images/placeholder.jpg',
      }));

      setAllPosts(formattedPosts);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Error al cargar las publicaciones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    posts,
    currentPage,
    totalPages,
    loading,
    error,
    setCurrentPage: handlePageChange,
    refreshPosts: fetchPosts,
  };
}