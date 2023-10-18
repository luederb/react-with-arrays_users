import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <div className={tag === "admin" ? "tag tag--highlight" : "tag"}>{tag} </div>
  );
}
