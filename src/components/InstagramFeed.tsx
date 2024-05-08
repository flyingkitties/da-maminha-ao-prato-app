import Image from 'next/image';
import Link from 'next/link';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}

export default async function InstagramFeed() {
  let instagramFeed = null;
  let last3Posts = null;
  let error = null;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`;
    const data = await fetch(url);

    if (!data.ok) {
      throw new Error('Failed to fetch Instagram feed');
    }
    instagramFeed = await data.json();
    last3Posts = instagramFeed.data
      .filter((post: InstagramPost) => post.media_type !== 'VIDEO')
      .slice(0, 8); // Filter out videos
    console.log('Instagram feed:', last3Posts);
  } catch (err: any) {
    console.error('Error fetching Instagram feed:', err.message);
    error = err.message;
  }

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}

      {instagramFeed && (
        <section className="flexCenter flex-col sectionContainer">
          <h2 className="titleFont title font-semibold my-5 md:my-10">
            O meu <span className="text-white bg-terciary px-1">Instagram</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10">
            {last3Posts.map((post: InstagramPost) => (
              <div
                key={post.id}
                className={`relative group w-full h-auto overflow-hidden`}
              >
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <Image
                    src={post.media_url}
                    alt={post.caption}
                    className="w-full h-auto object-cover"
                    width={300}
                    height={600}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full h-full">
                    <p className="text-white text-center text-xs truncate">
                      {post.caption}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
