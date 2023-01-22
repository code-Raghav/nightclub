import Link from "next/link";
export default function CustomLink(props) {
  return (
    <Link href="/Members" className={`${props.className}`}>
      {props.children}
    </Link>
  );
}
