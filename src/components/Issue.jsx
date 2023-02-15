import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import List from "./List";
import { issuelist } from "../Listdata";
import { useState } from "react";
console.log("object", issuelist);
const Issue = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [issuePerPage] = useState(5);

  const handlePageChange = (page) => {
    setPage(page);
    const indexOfLastPost = page * issuePerPage;
    const indexOfFirstPost = indexOfLastPost - issuePerPage;
    const currentissuList = issuelist.slice(indexOfFirstPost, indexOfLastPost);
    console.log("object", currentissuList);
    setData(currentissuList);
  };
  useEffect(() => {
    const currentissuList = issuelist.slice(0, 5);
    setData(0);
    setData(currentissuList);
  }, []);
  return (
    <Box>
      <Heading as="h3" size="xl" padding="8px">
        Issues{" "}
      </Heading>
      <Heading as="h4" size="md" padding="8px">
        Use the REST API to view and manage issues, including issue assignees,
        comments, labels, and milestones.
      </Heading>
      <List data={data} />
      <Box float={"right"}>
        <Button
          disabled={page == 1}
          margin={"5px"}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </Button>
        <Button onClick={() => handlePageChange(page + 1)} margin={"5px"}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Issue;
