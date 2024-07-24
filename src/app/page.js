const API_KEY = process.env.API_KEY;

import React from 'react';
import axios from 'axios';
import Results from './components/Results';
import { revalidatePath } from 'next/cache';

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`

  try {
    const res = await axios.get(url, { next: { revalidate: 10000 } });
    const results = res.data.results;
    // console.log(results)

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};

export default Home;
