import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: Root,
  // () => (
  //   <div className="space-x-4 fixed top-0 left-0 w-full h-16 bg-white bg-opacity-50 backdrop-blur-md flex items-center justify-center z-10">
  //     <div className="">
  //       <Link to="/" className="[&.active]:font-bold">
  //         Home
  //       </Link>{" "}
  //       <Link to="/roadmap" className="[&.active]:font-bold">
  //         Roadmap
  //       </Link>
  //     </div>
  //     <div className="">
  //       <Button>Sign in</Button>
  //       <Button>Sign up</Button>
  //     </div>
  //     <hr />
  //     <Outlet />
  //     <TanStackRouterDevtools />
  //   </div>
  // ),
});

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
