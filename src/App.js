import Navbar from "../src/Components/Navbar";
import Text from "./Components/text";
import data from "./data";
function App() {
  const result = data.map((item) => {
    return (
      // <Text
      //   image={item.image}
      //   title={item.title}
      //   googleUrl={item.googleUrl}
      //   location={item.location}
      //   startdate={item.startdate}
      //   enddate={item.enddate}
      //   description={item.description}
      // />
      <Text item={item} />
    );
  });
  return (
    <div>
      <Navbar />
      <section className="app-text">{result}</section>
    </div>
  );
}

export default App;
