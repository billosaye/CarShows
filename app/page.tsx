import CustomFilter from "./componets/CustomFilter";
import Hero from "./componets/Hero";
import SearchBar from "./componets/SearchBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-20 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          
            <SearchBar />
          </div>
          <div className="home__filter-container">
            <CustomFilter title="fuel"  />
            <CustomFilter title="year"  />

          </div>
        </div>
      
    </main>
  );
}
