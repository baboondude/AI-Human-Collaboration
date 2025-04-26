import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
      <h1 className="text-4xl font-extrabold">404 – Page Not Found</h1>
      <Link to="/" className="text-indigo-600 underline">
        Take me home
      </Link>
    </div>
  );
} 