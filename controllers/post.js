const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};
exports.getPosts = async (req, res) => {
  try {
    console.log(req.params.id);
    const postId = req.params.id; // Assuming the post ID is passed as a route parameter
    const post = await Post.findById(postId).select("_id title body");
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((result) => {
    res.json({ post: result }); //by default status is 200 for successful request. no need to mention it.
  });
};
