import { useLabelsData } from "../helpers/useLabelsData";

export default function LabelList({ selected, toggles }) {
  const labelsQuery = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="">
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
                className={`label ${
                  selected.includes(label.id) ? "selected" : ""
                } ${label.color}`}
                onClick={() => toggles(label.id)}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
