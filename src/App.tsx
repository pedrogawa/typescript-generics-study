import { useState } from "react";
import SearchInput from "./components/SearchInput";
import people from "./mock-data/people";
import widgets from "./mock-data/widgets";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";
import Property from "./interfaces/Property";
import Widget from "./interfaces/Widget";
import Person from "./interfaces/Person";
import Sorters from "./components/Sorters";
import WidgetRenderer from "./components/renderes/WidgetRenderer";
import PeopleRenderer from "./components/renderes/PeopleRendered";
import genericFilter from "./utils/genericFilter";
import Filters from "./components/Filters";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPeople, setShowPeople] = useState(false);
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    Property<Widget>
  >({
    property: "title",
    isDescending: true,
  });
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    Property<Person>
  >({
    property: "firstName",
    isDescending: true,
  });
  const [widgetFilterProperteis, setWidgetFilterProperties] = useState<
    Array<keyof Widget>
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
          <Sorters
            setProperty={(property) => setWidgetSortProperty(property)}
            object={widgets[0]}
          />
          <Filters
            object={widgets[0]}
            properties={widgetFilterProperteis}
            onChangeFilter={(property) => {
              widgetFilterProperteis.includes(property)
                ? setWidgetFilterProperties(
                    widgetFilterProperteis.filter(
                      (widget) => widget !== property,
                    ),
                  )
                : setWidgetFilterProperties([
                    ...widgetFilterProperteis,
                    property,
                  ]);

              console.log(widgetFilterProperteis);
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
            .sort((a, b) => genericSort(a, b, widgetSortProperty))
            .map((widget) => {
              return <WidgetRenderer {...widget} />;
            })}
        </div>
      )}
      {showPeople && (
        <div className="flex flex-col gap-4">
          <h2>People: </h2>
          <Sorters
            setProperty={(property) => setPeopleSortProperty(property)}
            object={people[0]}
          />
          {people
            .filter((person) =>
              genericSearch(
                person,
                ["firstName", "lastName", "eyeColor"],
                searchQuery,
                false,
              ),
            )
            .sort((a, b) => genericSort(a, b, peopleSortProperty))
            .map((person) => {
              return <PeopleRenderer {...person} />;
            })}
        </div>
      )}
    </div>
  );
}

export default App;
