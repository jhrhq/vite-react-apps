import chartData from "../../assets/chartData.json?url";
import useReview from "../hooks/useReview";

const SimpleBarChart = () => {
  const [reviews] = useReview(chartData);

  const maxValue = Math.max(
    ...reviews.map((item) =>
      Math.max(item.investment, item.sell, item.revenue)
    ),
    1
  );

  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-6 text-center text-xl font-semibold">
        Investment / Sell / Revenue
      </h2>

      <div className="space-y-6">
        {reviews.map((item) => (
          <div key={item.month}>
            <p className="mb-2 font-medium">{item.month}</p>

            <div className="space-y-2">
              <div>
                <p className="mb-1 text-sm">Investment</p>
                <div className="h-5 rounded bg-gray-200">
                  <div
                    className="h-full rounded bg-blue-500"
                    style={{
                      width: `${(item.investment / maxValue) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm">Sell</p>
                <div className="h-5 rounded bg-gray-200">
                  <div
                    className="h-full rounded bg-green-500"
                    style={{
                      width: `${(item.sell / maxValue) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <p className="mb-1 text-sm">Revenue</p>
                <div className="h-5 rounded bg-gray-200">
                  <div
                    className="h-full rounded bg-yellow-500"
                    style={{
                      width: `${(item.revenue / maxValue) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleBarChart;