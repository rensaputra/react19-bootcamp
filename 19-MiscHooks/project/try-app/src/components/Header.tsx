import Link from "next/link";
const Header = () => {
  return (
    <header>
      <h1>Try App</h1>
      <nav className="flex gap-2 border-b border-gray-300 pb-2">
        <Link href="/" className="text-blue-500">
          Home
        </Link>{" "}
        {"|"}
        <Link href="/useActionState" className="text-blue-500">
          Use Action State
        </Link>{" "}
        {"|"}
        <Link href="/memo" className="text-blue-500">
          Memo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
