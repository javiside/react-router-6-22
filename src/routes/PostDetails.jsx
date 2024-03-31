import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

const PostDetails = () => {
  const { post } = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to="/" className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
        <Form method="delete" replace>
          <input name="id" defaultValue={post.id} hidden />
          <button type="submit">❌ Delete Post</button>
        </Form>
      </main>
    </Modal>
  );
};

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  return await response.json();
};

export const action = async ({ params }) => {
  console.log(params.id);
  await fetch(`http://localhost:8080/delete/${params.id}`, {
    method: "delete",
  });
  return redirect("/");
};
