import React from 'react';
import Link from 'next/link';

const Post = ({ id, title, body }) => {
  return (
    <tr className="min-h-15 hover:bg-gray-100">
      <td id="ID" className="lg:w-30 sm:w-auto h-full" style={{ lineHeight: 'calc(100% - 2em)' }}><p className='text-center'>{id}</p></td>
      <td className="w-auto sm:w-1/3">{title}</td>
      <td className="w-auto sm:w-1/3 text-justify">{body}</td>
      <td id="Accion" className="flex items-center justify-center">
        <Link href={`/posts/${id}`} passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver Detalles</button>
        </Link>
      </td>
    </tr>
  );
};

export default Post;
