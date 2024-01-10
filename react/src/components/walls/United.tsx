import { RouteCard } from "./RouteCard";

const Route = (name, grade, author) => ({
  name, grade, author
});

const routes = [
  Route("Drabina", "4", "Ada"),
  Route("Krawądy", "6c", "Maria"),
  Route("Na rozgrzewkę", "5b", "Tosia"),
  Route("Ale to łatwe jest", "7a", "Misza")
];

export function United() {
  return (
    <>
      <div className="flex justify-center">
        <div className={"container"}>
          <header className={"bg-base-200 sticky top-0 z-10"}>
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>United Climbing</h1>
            <p style={{ fontSize: "12px" }}>Update at <strong>03.01.2024</strong></p>
            <div className="divider"></div>
          </header>

          <main>
            {routes.map(({ name, grade, author }, index) =>
              <RouteCard id={index} name={name} grade={grade} author={author} />
            )}
          </main>
        </div>
      </div>

    </>
  );
}
