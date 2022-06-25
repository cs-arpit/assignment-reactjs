import React, { useEffect, useState } from "react";

import "./App.css";

import Table from "./components/table/table";




const api_info = {
  baseUrl: "https://api.github.com/repos",
  owner: "/neovim",
  repo: "/neovim",
};

function App() {
  const [state, setState] = useState({
    page: 1,
    collection: [],
    isLoading: false,
    isError: false,
  });


  useEffect(() => {
    const fetchData = async () => {
      // Api calling is gonna start
      setState({ ...state, isLoading: true });
      const { baseUrl, owner, repo } = api_info;
      const { page } = state;
      const url = `${baseUrl}${owner}${repo}/pulls?page=${page}`;
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setState({
          ...state,
          collection: [...state.collection, ...data],
          isError: false,
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, isError: true, isLoading: false });
      }
    };
    fetchData();
  }, [state.page]);

  const loadMoreData = () => {
    setState({...state, page: state.page + 1});
  }

  const gotoTopHandler = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className="App">
      <h1 className="title">Github API</h1>
      <Table state={state} fetchMoreData={loadMoreData} />
      <div className="goto-top" onClick={gotoTopHandler}>TOP</div>
    </div>
  );
}

export default App;
