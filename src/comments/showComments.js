import comments from "./comments.json";

export default function showComments() {
  const re = ".*Nilda.*";
  let filtered = comments.filter((c) => c.review.match(re));
  return filtered;
}
