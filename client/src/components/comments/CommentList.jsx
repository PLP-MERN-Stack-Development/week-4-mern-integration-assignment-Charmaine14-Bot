export default function CommentList({ comments }) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment._id} className="bg-gray-100 p-4 rounded">
          <p className="font-bold">{comment.author.name}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
