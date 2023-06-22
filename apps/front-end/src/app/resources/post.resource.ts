export const getPosts = async () => {
  const resp = await fetch('http://localhost:8080/wp-json/wp/v2/posts');
  return resp.json();
};
