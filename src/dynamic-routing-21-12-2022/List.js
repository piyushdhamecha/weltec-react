import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Detail from "./Detail";
import { Link } from "react-router-dom";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleBackToListClick = () => setPostId(undefined);

  if (postId > 0) {
    return (
      <Detail
        post={posts.find((post) => post.id === postId)}
        onBackToListClick={handleBackToListClick}
      />
    );
  }

  return posts.length ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Post id</TableCell>
            <TableCell>Post title</TableCell>
            <TableCell align="center">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell align="center">
                {/* <Button onClick={() => setPostId(post.id)}>View details</Button> */}
                <Link to={`/admin/${post.id}`}>View detail</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
};

export default List;
