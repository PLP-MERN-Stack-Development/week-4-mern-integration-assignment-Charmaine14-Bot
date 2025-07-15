export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
};

export const notFound = (req, res) => {
  res.status(404).json({ message: "Not Found" });
};
