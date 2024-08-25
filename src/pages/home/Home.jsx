import React from 'react';
import "./home.css";
import Navbar from '../../components/Navbar';
import NewPost from '../../components/NewPost';
import Claim from '../../components/Claim';
import Wishlist from '../../components/Wishlist';
import Gray from '../../components/Gray';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="home_container">
        <Navbar />
        <NewPost />
        <Claim />
        <Wishlist />
        <Gray />
        <Footer />
    </div>
  )
}

export default Home;