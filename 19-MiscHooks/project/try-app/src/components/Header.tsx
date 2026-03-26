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
          useActionState()
        </Link>{" "}
        {"|"}
        <Link href="/memo" className="text-blue-500">
          React.Memo
        </Link>
        {"|"}
        <Link href="/useCallback" className="text-blue-500">
          useCallback()
        </Link>
        {"|"}
        <Link href="/useMemo" className="text-blue-500">
          useMemo()
        </Link>
        {"|"}
        <Link href="/useOptimistic" className="text-blue-500">
          useOptimistic()
        </Link>
        {"|"}
        <Link href="/useFormStatus" className="text-blue-500">
          useFormStatus()
        </Link>
        {"|"}
        <Link href="/useDebugValue" className="text-blue-500">
          useDebugValue()
        </Link>
      </nav>
    </header>
  );
};

export default Header;
