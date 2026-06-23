import chartData from "../../assets/chartData.json?url";
import useReview from "../hooks/useReview";

const StackdChart = () => {
  const [reviews] = useReview(chartData);

  const maxTotal = Math.max(
    ...reviews.map(
      (item) => item.investment + item.sell + item.revenue
    ),
    1
  );

  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-6 text-center text-xl font-semibold">
        Stacked Overview
      </h2>

      <div className="space-y-4">
        {reviews.map((item) => {
          const investmentWidth =
            (item.investment / maxTotal) * 100;

          const sellWidth =
            (item.sell / maxTotal) * 100;

          const revenueWidth =
            (item.revenue / maxTotal) * 100;

          return (
            <div key={item.month}>
              <p className="mb-1 font-medium">{item.month}</p>

              <div className="flex h-8 overflow-hidden rounded bg-gray-200">
                <div
                  className="bg-blue-500"
                  style={{ width: `${investmentWidth}%` }}
                  title={`Investment: ${item.investment}`}
                />

                <div
                  className="bg-green-500"
                  style={{ width: `${sellWidth}%` }}
                  title={`Sell: ${item.sell}`}
                />

                <div
                  className="bg-yellow-500"
                  style={{ width: `${revenueWidth}%` }}
                  title={`Revenue: ${item.revenue}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackdChart;