import React from 'react';
import Link from 'next/link';

const PostDetail = ({ post }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4">Detalle del Post</h1>
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600">{post.body}</p>
        <div className="flex items-center justify-between mt-4">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">Regresar al Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default PostDetail;
