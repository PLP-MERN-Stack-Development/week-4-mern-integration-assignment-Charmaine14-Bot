import Comment from "../models/Comment";

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "author",
      "name"
    );
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createComment = async (req, res) => {
  const { text } = req.body;
  try {
    const comment = new Comment({
      text,
      author: req.user.id,
      post: req.params.postId,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    if (comment.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await comment.remove();
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
