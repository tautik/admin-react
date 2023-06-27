import { List } from "../components/table";
import { Chart } from "../components/chart";

const Single = () => {
  return (
    <div>
      <div className="p-8 flex gap-8">
        <div className="w-[40%] shadow-md p-8 relative">
          <div className="absolute top-0 right-0 p-2 text-xs text-purple-600 bg-purple-100 rounded-tr">
            Edit
          </div>
          <h1 className="text-lg font-bold mb-4">Information</h1>
          <div className="flex gap-8 items-center">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold text-gray-500">Name:</span>
                <span className="ml-2">Tautik</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-500">Email:</span>
                <span className="ml-2">janedoe@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-500">Phone:</span>
                <span className="ml-2">+1 2345 67 89</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-500">Address:</span>
                <span className="ml-2">Elton St. 234 Garden Yd. NewYork</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-500">Country:</span>
                <span className="ml-2">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[60%] bg-red-50">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className=" shadow-md p-8 mx-8 my-4">
        <h1 className="text-lg font-bold mb-4">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default Single;
