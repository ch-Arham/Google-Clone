import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import { useRouter } from 'next/router';
import SearchResultsDisplayed from "../components/SearchResultsDisplayed";

const search = ({ results }) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.searchedTerm} - Google Clone Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchHeader />
  
      <SearchResultsDisplayed results={results}/>
      

    </>
  );
};

export default search;



export async function getServerSideProps(context) {
    const useDummyData = false;

    // Pagination Starting Point
    const startIndex = context.query.start || '0';

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.searchedTerm}&start=${startIndex}`)
    .then(res=>res.json());

    // After the server has rendered --- pass the results to the client
    return {
      props: {
        results: data
      }
    }


}