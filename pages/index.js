import React from 'react';
import Post from '../components/Post';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg lg:w-9/12 m-2">
        <h1 className="text-4xl font-bold mb-4">Lista de Posts</h1>
        <Link href="/miDedicacion">
          <button className="fixed bottom-0 left-0 p-4 text-white bg-blue-500 rounded-tl-lg">
            Ver Mi Dedicación
          </button>
        </Link>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 font-bold uppercase border-b">ID</th>
                <th className="py-2 px-4 font-bold uppercase border-b">Título</th>
                <th className="py-2 px-4 font-bold uppercase border-b">Cuerpo</th>
                <th className="py-2 px-4 font-bold uppercase border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} body={post.body} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
