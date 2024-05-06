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

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    Property<Widget>
  >({
    property: "title",
  });
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    Property<Person>
  >({
    property: "firstName",
  });
  return (
    <>
      <SearchInput setSearchQuery={(query) => setSearchQuery(query)} />
      <h2>Widgets:</h2>
      <Sorters
        setProperty={(property) => setWidgetSortProperty({ property })}
        object={widgets[0]}
      />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ["title", "description"], searchQuery, false),
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
        .map((widget) => {
          return <h3>{widget.title}</h3>;
        })}
      <h2>People: </h2>

      <Sorters
        setProperty={(property) => setPeopleSortProperty({ property })}
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
        .sort((a, b) => genericSort(a, b, peopleSortProperty.property))
        .map((person) => {
          return (
            <h3>
              {person.firstName} {person.lastName}
            </h3>
          );
        })}
    </>
  );
}

export default App;
