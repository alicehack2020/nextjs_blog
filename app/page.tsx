import React from 'react'
import { client } from './lib/sanity';
import { Post } from './lib/interface';
import Link from 'next/link';

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

const page = async  () => {
  const data = (await getData()) as Post[];

  return (
    <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">All Posts</h1>
  
    <ul className="divide-y divide-gray-200">
      {data.map((post) => (
        <li key={post._id} className="py-4">
          <article className="shadow-sm">
            <div className="mb-2">
              <p className="text-gray-500">
                {new Date(post._createdAt).toISOString().split("T")[0]}
              </p>
            </div>
  
            <Link
              href={`/post/${post.slug.current}`}
              prefetch
              className="block space-y-2"
            >
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </div>
  
              <p className="text-gray-700">{post.overview}</p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  </div>
  
  )
}

export default page