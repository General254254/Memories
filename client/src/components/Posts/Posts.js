import Post from './post/post.js';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
  return (
    <>
        <h2 className={classes.smMargin}>Posts</h2>  
        <Post />
        <Post />

    </>
  );
}

export default Posts;   