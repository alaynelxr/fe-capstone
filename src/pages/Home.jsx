import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Welcomebanner from "../components/Welcomebanner";
import FeaturedMoves from "../components/FeaturedMoves";
import BlogArticle from "../components/BlogArticle";
import { getAuth } from "firebase/auth";
import { BACKEND_URL } from "../constants";
import styled from "styled-components";
import { mobile } from "../responsive";
import { BottomNav } from "../components/Navbar";

const Container = styled.div`
  flex: 1;
  margin: 30px;
  height: 5vh;
  background-color: none;
`;

const Title = styled.h2`
  margin: 10px 10px 10px 50px;
  color: black;
  ${mobile({ margin: "10px 10px 10px 10px" })}
`;

const Home = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [featuredMoves, setFeaturedMoves] = useState([]);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/moves/featured`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setFeaturedMoves(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoggedIn && <Welcomebanner />}
      <Navbar />
      <Slider />
      <BlogArticle />
      <Container>
        <Title>Moves of the week</Title>
      </Container>
      <FeaturedMoves filteredMoves={featuredMoves} />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Home;
