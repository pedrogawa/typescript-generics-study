import { useState } from "react";
import SearchInput from "./components/SearchInput";
import people from "./mock-data/people";
import widgets from "./mock-data/widgets";
import genericSearch from "./utils/genericSearch";
import Widget from "./interfaces/Widget";
import Sorters from "./components/Sorters";
import WidgetRenderer from "./components/renderes/WidgetRenderer";
import PeopleRenderer from "./components/renderes/PeopleRendered";
import genericFilter from "./utils/genericFilter";
import Filters from "./components/Filters";
import Filter from "./interfaces/Filter";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPeople, setShowPeople] = useState(false);
  const [widgetFilterProperteis, setWidgetFilterProperties] = useState<
    Array<Filter<Widget>>
  >([]);
  const buttonText = showPeople ? "Show widgets!" : "Show people!";
  return (
    <div className="flex flex-col gap-2 p-2">
      <button
        className="max-w-72 middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => setShowPeople(!showPeople)}
      >
        {buttonText}
      </button>
      <SearchInput setSearchQuery={(query) => setSearchQuery(query)} />
      {!showPeople && (
        <div className="flex flex-col gap-4">
          <h2>Widgets:</h2>
          <Sorters initialSortProperty="title" data={widgets}>
            {(widget) => <WidgetRenderer {...widget} />}
          </Sorters>
          <Filters
            object={widgets[0]}
            properties={widgetFilterProperteis}
            onChangeFilter={(property) => {
              const matchingFilters = widgetFilterProperteis.some(
                (filterProperty) =>
                  filterProperty.property === property.property,
              );
              const fullMatch = widgetFilterProperteis.some(
                (filterProperty) =>
                  filterProperty.property === property.property &&
                  filterProperty.isTruthySelected === property.isTruthySelected,
              );

              if (fullMatch) {
                setWidgetFilterProperties(
                  widgetFilterProperteis.filter(
                    (widget) => widget.property !== property.property,
                  ),
                );
              } else if (matchingFilters) {
                setWidgetFilterProperties([
                  ...widgetFilterProperteis.filter(
                    (widget) => widget.property !== property.property,
                  ),
                  property,
                ]);
              } else {
                setWidgetFilterProperties([
                  ...widgetFilterProperteis,
                  property,
                ]);
              }
            }}
          />
          {widgets
            .filter((widget) =>
              genericSearch(
                widget,
                ["title", "description"],
                searchQuery,
                false,
              ),
            )
            .filter((widget) => genericFilter(widget, widgetFilterProperteis))
            .map((widget) => {
              return <WidgetRenderer {...widget} />;
            })}
        </div>
      )}
      {showPeople && (
        <div className="flex flex-col gap-4">
          <h2>People: </h2>
          <Sorters data={people} initialSortProperty="firstName">
            {(person) => <PeopleRenderer {...person} />}
          </Sorters>
          {people
            .filter((person) =>
              genericSearch(
                person,
                ["firstName", "lastName", "eyeColor"],
                searchQuery,
                false,
              ),
            )
            .map((person) => {
              return <PeopleRenderer {...person} />;
            })}
        </div>
      )}
    </div>
  );
}

export default App;
