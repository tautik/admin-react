import { Widget } from "../components/widget";
import { Featured } from "../components/feature";
import { Chart } from "../components/chart";
import { List } from "../components/table";

const Home = () => {
  return (
    <div className="text-3xl flex flex-col">
      <div className="flex justify-around">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="flex w-full">
        <Featured />
        <div className="w-full">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
      <List />
    </div>
  );
};

export default Home;
