import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
