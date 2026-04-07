import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../components/adminDashboard/AdminNavbar";
import AdminSidebar from "../../components/adminDashboard/AdminSidebar";
import AdminStatCard from "../../components/adminDashboard/AdminStatCard";
import {
  getAdminComplaint,
  getAllBankOfficers,
  getAllUsers,
} from "../../store/features/complaint/admin.thunks";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { complaints } = useSelector((state) => state.admin);
  const { allUser } = useSelector((state) => state.admin);
  const { allBankOfficer } = useSelector((state) => state.admin);

  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    dispatch(getAdminComplaint());
    dispatch(getAllUsers());
    dispatch(getAllBankOfficers());
  }, [dispatch]);
  console.log("complaints", complaints);
  console.log("allUser", allUser);
  console.log("allBankOfficer", allBankOfficer);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar setActivePage={setActivePage} />

      <div className="flex-1">
        <AdminNavbar />

        {activePage === "dashboard" && (
          <>
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              <AdminStatCard title="Total Users" value="2,450" />
              <AdminStatCard title="Bank Officers" value="42" />
              <AdminStatCard title="Total Complaints" value="98,230" />
              <AdminStatCard title="System Alerts" value="5" />
            </div>
          </>
        )}

        {activePage === "complaints" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints?.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                {/* Complaint Type */}
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.complaintType}
                </h3>

                {/* Category */}
                <p className="text-sm text-gray-500 mb-1">
                  Category: {item.category}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>

                {/* User */}
                <p className="text-sm text-gray-500 mb-1">
                  User: {item.createdBy?.name}
                </p>

                {/* Priority */}
                <p className="text-sm mb-1">
                  Priority:
                  <span className="ml-2 px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs">
                    {item.priority}
                  </span>
                </p>

                {/* Status */}
                <p className="text-sm mb-3">
                  Status:
                  <span className="ml-2 px-2 py-1 rounded bg-green-100 text-green-700 text-xs">
                    {item.status}
                  </span>
                </p>

                {/* Date */}
                <p className="text-xs text-gray-400 mb-3">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <button className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-secondary">
                    View
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:opacity-90">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activePage === "users" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allUser?.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-primary mb-2">
                  {user.name}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  Email: {user.email}
                </p>

                <p className="text-sm text-gray-500 mb-1">Role: {user.role}</p>

                <p className="text-xs text-gray-400 mb-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>

                <div className="flex justify-between">
                  <button className="bg-primary text-white px-3 py-1 rounded text-sm">
                    View
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activePage === "bankOfficers" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBankOfficer?.map((officer) => (
              <div
                key={officer._id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-primary mb-2">
                  {officer.name}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  Email: {officer.email}
                </p>

                {/* Bank Name (populate se aa raha hai) */}
                <p className="text-sm text-gray-500 mb-1">
                  Bank: {officer.bank}
                </p>

                <p className="text-sm text-gray-500 mb-1">
                  Role: {officer.role}
                </p>

                <p className="text-xs text-gray-400 mb-3">
                  {new Date(officer.createdAt).toLocaleDateString()}
                </p>

                <div className="flex justify-between">
                  <button className="bg-primary text-white px-3 py-1 rounded text-sm">
                    View
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activePage === "dashboard" && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Recent Activities
              </h3>
              <ul className="space-y-3 text-sm">
                <li>✔ New user registered</li>
                <li>✔ Bank Officer approved</li>
                <li>⚠ System warning detected</li>
                <li>✔ Transaction completed</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Admin Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-2 rounded hover:bg-secondary">
                  Add Bank Officer
                </button>

                <button className="w-full bg-primary text-white py-2 rounded hover:bg-secondary">
                  Manage Users
                </button>

                <button className="w-full bg-red-500 text-white py-2 rounded hover:opacity-90">
                  System Maintenance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
