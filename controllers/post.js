exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: "JAI" }, { title: "SHREE" }, { title: "RAM" }],
  });
};
