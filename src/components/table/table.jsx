import React from "react";

import "./table.styles.css";

import InfiniteLoader from 'react-infinite-loader';
import Spinner from "../spinner/spinner";
import TableRow from "../../table-row/table-row";

function Table({state, fetchMoreData}) {
    const { collection, isLoading } = state;
    
   

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Base Branch</th>
            <th scope="col">Author Branch</th>
            <th scope="col">Author</th>
            <th scope="col">Created On</th>
            <th scope="col">Reviewers</th>
            <th scope="col">Labels</th>
          </tr>
        </thead>
        <tbody>
          {collection.map(
              (data, ind) => (
                <TableRow data={data} ind={ind} />
              )
            )}
        <InfiniteLoader onVisited={fetchMoreData} />
        </tbody>
      </table>
        {isLoading && <Spinner />}
    </div>
  );
}

export default Table;
