import { useEffect, useState } from 'react';
import fetchMediumPosts from '../lib/medium';
import moment from 'moment';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string; // or Date if you prefer to convert it
}
const formatDate = (dateString: string): string => {
  const date = moment(dateString, 'ddd, DD MMM YYYY HH:mm:ss ZZ').format('MMM D, YYYY');
  return date;
};

const MediumPosts = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchMediumPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  return (
    <section
      id="writing"
      className="mb-16 pt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-40 lg:min-h-[30rem]"
      aria-label="Writing"
    >
      <div className="sticky top-0 left-0 p-4 w-screen bg-background/75 backdrop-blur z-50 lg:hidden">
        <h1 className="text-xl font-bold text-yellow-900">Writings</h1>
      </div>
      <div className="px-4">
        <ol className="group/list">
        {posts.map((post, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid items-center transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_0_1px_1px_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 text-xs font-semibold uppercase tracking-wide text-textPrimary sm:col-span-2"
                aria-label={`${formatDate(post.pubDate)}`}
              >
                {formatDate(post.pubDate)}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-textSecondary">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-textPrimary hover:text-yellow-900 focus-visible:text-yellow-900 group/link text-base"
                      href={post.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${post.title}, Accessibility at Medium (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {post.title} {" "}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
              </div>
            </div>
          </li>

        ))}
        </ol>
      </div>
    </section>
  );
};

export default MediumPosts;
