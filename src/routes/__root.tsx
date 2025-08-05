import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <header>
        <nav>
          <Link to=".">Where in the world?</Link>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  ),
});
