const API_KEY = process.env.API_KEY;

import React, { Suspense } from 'react'
import Results from './components/Results';
import Loading from './loading';

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10 } });
  const data = await res.json();
  //if response is not ok
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const results = data.results
  // console.log(results);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Results results={results} />
      </div>
    </Suspense>
  )
}

export default Home