'use client';

import Link from "next/link";
import { usePagination } from '../hooks/usePagination';
import Pagination from '../components/Common/Pagination';

export default function Home() {
  const { posts, currentPage, totalPages, loading, error, setCurrentPage } = usePagination(12);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>Error al cargar las publicaciones</p>
      </div>
    );
  }

  return (
    <>
      <section className={'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'}>
        {posts.map((post, index) => (
          <Link 
            key={post.slug}
            className={'rounded-md border transition p-5 hover:scale-105 prose hover:shadow-lg'} 
            href={`/mujeres/${post.slug}`}
          >
            <img 
              className="aspect-square object-cover w-full rounded" 
              alt={post.title} 
              src={post.heroImage} 
            />
            <h3 className="font-serif font-normal text-2xl">{post.title}</h3>
            {post.subtitle && <h4 className="line-clamp-3">{post.subtitle}</h4>}
            {post.description && <p className="line-clamp-4">{post.description}</p>}
          </Link>
        ))}
      </section>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )}
    </>
  );
}