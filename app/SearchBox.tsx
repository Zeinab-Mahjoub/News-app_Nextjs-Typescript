"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    // ignore the error below, as it is used like this in the doc itself.
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />
      <button
        disabled={!input}
        type="submit"
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
