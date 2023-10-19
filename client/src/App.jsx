// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);

  return (
    <>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <br />
      {currentPage}
    </>
  );
}

export default App;
