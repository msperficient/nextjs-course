import Head from 'next/head';
import { Fragment } from "react";
import FeaturePosts from "../components/home-page/feature-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from '../lib/post-util';

function HomePage(props) {
    return( 
        <Fragment>
            <Head>
                <title>Joe' Blog</title>
                <meta name='description' content="I post about proramming and development." />
            </Head>
            <Hero />
            <FeaturePosts posts={props.posts} />
        </Fragment>
    );
}
export function getStaticProps(){
    const featuredPosts = getFeaturedPosts(); 
    return {
        props:{
            posts:featuredPosts
        },        
    }
}
export default HomePage;