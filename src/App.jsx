import { useState } from 'react';
import Layout from './components/Layout/Layout';
import PostsList from './components/PostsList/PostsList';
import Header from './components/Header/Header';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Layout>
      <Header onSearchChange={setSearchValue} />
      <div className="container">
        <PostsList searchValue={searchValue} />
      </div>
    </Layout>
  );
}
