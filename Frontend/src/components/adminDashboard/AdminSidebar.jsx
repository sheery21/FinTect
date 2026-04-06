// src/components/adminDashboard/AdminSidebar.jsx
const AdminSidebar = ({setActivePage }) => {
  return (
    <div className="w-64 bg-primary text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-4">
        <li className="hover:bg-secondary p-2 rounded cursor-pointer"
        onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </li>
        <li className="hover:bg-secondary p-2 rounded cursor-pointer"
        onClick={() => setActivePage("users")}
        >
          Manage Users
        </li>
        <li className="hover:bg-secondary p-2 rounded cursor-pointer"
        onClick={() => setActivePage("BankOfficer")}
        >
          Bank Officers
        </li>
        <li className="hover:bg-secondary p-2 rounded cursor-pointer"
        onClick={() => setActivePage("complaints")}
        >
          All Complaints
        </li>
        <li className="hover:bg-secondary p-2 rounded cursor-pointer">
          System Logs
        </li>
        <li className="hover:bg-secondary p-2 rounded cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
