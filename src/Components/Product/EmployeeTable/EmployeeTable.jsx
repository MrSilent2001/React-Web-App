import { useState, useEffect } from "react";
import TableWithPagination from "../../Table/TableWithPagination";
import { EmployeeColumns } from "../../Table/Columns";
import DefaultButton from "../../../Components/Button/DefaultButton";
import SearchBar from "../../Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { getAllEmployees } from "@/apis/Apis";

export const EmployeeTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);
  const navigate = useNavigate();

  // Fetch employees data
  useEffect(() => {
    getAllEmployees()
        .then((data) => {
          setEmployees(data || []);
          setFilteredData(data || []);
          console.log("Fetched Employees:", data);
        })
        .catch((error) => {
          console.error("Error fetching employees:", error);
        });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedSuggestion("");
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchQuery(suggestion);
  };

  // Handle search click
  const handleSearchClick = () => {
    setSearchInitiated(true);

    if (selectedSuggestion) {
      const [id] = selectedSuggestion.split(" ");
      const filtered = employees.filter(
          (employee) => employee.employeeId.toString() === id
      );
      setFilteredData(filtered);
    } else if (searchQuery) {
      const filtered = employees.filter((employee) =>
          `${employee.employeeId} ${employee.name}`
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(employees);
    }
  };

  // Clear the search query and reset the table
  const handleClear = () => {
    setSearchQuery("");
    setSelectedSuggestion("");
    setSearchInitiated(false);
    setFilteredData(employees);
  };

  // Handle adding a new employee
  const handleAddEmployee = () => {
    navigate("/add-new-employee");
  };

  // Handle row click and navigate to single employee page
  const handleRowClick = (row) => {
    console.log(`Navigating to employee with ID: ${row.employeeId}`);
    navigate(`/employee/${row.employeeId}`);
  };

  return (
      <>
        <div className="flex justify-between mb-2">
          <h3 className="flex items-center text-xl font-semibold font-inter">
            Employee List
          </h3>
          <DefaultButton
              handleClick={handleAddEmployee}
              btnLabel="New"
              className="w-24 text-purple-500 from-white to-white hover:from-purple-50 hover:to-purple-50"
              Icon={<GoPlus />}
          />
        </div>

        <div className="flex justify-between mb-2">
          <div className="flex gap-1 mb-4">
            <SearchBar
                id="branch"
                width="w-[400px]"
                value={searchQuery}
                placeholder="Search by Employee ID or Name"
                onChange={handleSearchChange}
                suggestions={employees.map(
                    (employee) => `${employee.employeeId} ${employee.name}`
                )}
                onSuggestionSelect={handleSuggestionSelect}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <DefaultButton
                handleClick={handleClear}
                btnLabel="Clear"
                className="w-24 text-red-500 from-white to-white hover:from-red-200 hover:to-red-200"
            />
            <DefaultButton
                handleClick={handleSearchClick}
                btnLabel="Search"
                className="w-24"
            />
          </div>
        </div>

        <TableWithPagination
            columns={EmployeeColumns}
            data={searchInitiated ? filteredData : employees}
            itemsPerPage={10}
            getRowId={(row) => row.employeeId}
            onRowClick={handleRowClick}
        />
      </>
  );
};
