import { Button } from "@home-inventory/components/ui/button";
import { useNavigate } from "react-router";

const RouteNotMatched = () => {
  // const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-1 ">
      <div className="flex flex-col items-center justify-center gap-3 text-center xl:gap-6">
        <h2 className="mb-2 text-xl font-bold sm:text-5xl xl:text-7xl">
          Uh oh...
        </h2>
        <p className="font-medium">Sorry, The url not found.</p>

        <p className="text-secondary text-lg font-medium">
          {/* {error.statusText || error.message} */}
        </p>
        <span className="flex gap-4">
          <Button
            onClick={() => navigate("")}
            variant={"default"}
            className="gap-1 transition-all hover:gap-2"
          >
            Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="btn bg-primary gap-2"
          >
            Go Back
          </Button>
        </span>
      </div>

      <div className="flex items-center justify-center">
        {/* <NotFound /> */}
      </div>
    </div>
  );
};

export default RouteNotMatched;
