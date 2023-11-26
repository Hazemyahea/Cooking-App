import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold my-8">About Page</h1>
      <p className="text-center text-lg">
        Hello, it's built with Next.js + Tailwind CSS +
        <a href="https://www.themealdb.com/">API</a>. It occasionally crashes,
        especially on the SingleFood page. It's a simple Next.js project for
        learning purposes. To contact me,
        <a
          href="https://twitter.com/HazemYdev"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          @HazemYdev
        </a>
      </p>
    </div>
  );
}
