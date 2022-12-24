import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [post, setPost] = useState();
  console.log(params);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.piyush}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return post ? (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={onBackToListClick}>
          Go to list
        </Button> */}
        <Link to="/">Go to list</Link>
      </CardActions>
    </Card>
  ) : null;
};

export default Detail;
