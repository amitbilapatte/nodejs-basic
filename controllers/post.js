const Post = require("../models/post");

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: "JAI" }, { title: "SHREE" }, { title: "RAM" }],
  });
};

// exports.createPost = (req, res) => {
//   const post = new Post(req.body);
//   // console.log("Creating Post : ", req.body);
//   post.save((err, result) => {
//     if (err) {
//       return res.status();
//     }
//   });
// };

// exports.createPost = async (req, res) => {
//   try {
//     const post = new Post(req.body);
//     // console.log("Creating Post : ", req.body);
//     const result = await post.save();
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// post.save().then((result) => {
//   res.status(200).json({
//     post: result,
//   });
// });

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((result) => {
    res.status(200).json({ post: result });
  });
};
