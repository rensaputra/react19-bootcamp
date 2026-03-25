import Link from "next/link";
const Header = () => {
  return (
    <header>
      <h1>Try App</h1>
      <nav className="flex gap-2 text-blue-500 border-b border-gray-300 pb-2">
        <Link href="/">Home</Link>
        <Link href="/useActionState">Use Action State</Link>
      </nav>
    </header>
  );
};

export default Header;
