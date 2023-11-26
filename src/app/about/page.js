export default function AboutPage() {
  return (
    <>
      <div className=" container mx-auto">
        <h1 className="text-4xl text-center font-bold my-8">About Page</h1>
        <p className="text-center text-lg">
          Hello 🤝 , it's built with next js + Talwind css +{" "}
          <a href="https://www.themealdb.com/">API</a> it's crached sometimes
          especially in SingleFood page <br />
          <br />
          it's a simple next js project for learning purpose To Contact with me
          <a
            href="https://twitter.com/HazemYdev"
            className="text-blue-500"
            target="_blank"
          >
            @HazemYdev
          </a>
        </p>
      </div>
    </>
  );
}
