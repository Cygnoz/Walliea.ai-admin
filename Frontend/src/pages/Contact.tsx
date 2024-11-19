import { useEffect, useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import useApi from "../hooks/useApi";
import { endponits } from "../services/apiEndpoints";
import Pagination from "../components/Pagination";

interface ContactData {
  _id: string;
  fullname: string;
  email: string;
  phone_no: string;
  company_name: string;
}

function Contact() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const { request: getAllContacts } = useApi("get");
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const maxVisiblePages = 5;

  const fetchAllContacts = async () => {
    try {
      const url = `${endponits.GET_ALL_CONTACTS}`;
      const { response, error } = await getAllContacts(url);
      if (!error && response) {
        // Reverse contacts here to ensure newest is first
        setContacts(response.data.reverse());
      } else {
        console.error("Error in API response:", error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) => {
    const searchValueLower = searchValue.toLowerCase().trim();
    return (
      contact.fullname.toLowerCase().includes(searchValueLower) ||
      contact.email.toLowerCase().includes(searchValueLower) ||
      contact.phone_no.toLowerCase().includes(searchValueLower) ||
      contact.company_name.toLowerCase().includes(searchValueLower)
    );
  });

  // Paginate filtered data
  const totalPages = Math.ceil(filteredContacts.length / rowsPerPage);
  const paginatedData = filteredContacts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Reset to first page when search value changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  const tableHeaders = [
    "Sl No",
    "Name",
    "Phone Number",
    "Company Name",
    "E-mail ID",
  ];

  return (
    <div className="w-full">
      <p className="text-[#303F58] text-xl font-bold">Contact</p>
      <p className="text-[#818182] text-sm">
        A manual journal is a handwritten ledger entry for recording financial
        transactions, typically for adjustments not processed automatically
      </p>

      <div className="mt-4 p-4 bg-white">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8F99A9]" />
          <input
            type="text"
            className="border border-[#E7E8EB] rounded-md text-[#8F99A9] h-[44px] w-full text-sm bg-[#8E8E4E0A] pl-10 focus:outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Table */}
        <div
          className="overflow-x-auto mt-5 max-h-[25rem] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <table className="min-w-full bg-white">
            <thead className="text-[12px] text-center text-dropdownText">
              <tr style={{ backgroundColor: "#F0FDF0" }}>
                {tableHeaders.map((heading, index) => (
                  <th
                    className="py-3 px-4 font-medium border-b text-[#495160] text-xs border-[#EAECF0]"
                    key={index}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-dropdownText text-center text-[13px]">
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr key={item._id} className="text-[#4B5C79] text-sm">
                    <td className="py-3 px-4 border-y border-[#EAECF0]">
                      {(currentPage - 1) * rowsPerPage + index + 1}
                    </td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">
                      {item.fullname}
                    </td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">
                      {item.phone_no}
                    </td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">
                      {item.company_name}
                    </td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">
                      {item.email}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-6 px-4 text-center">
                    No contacts found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <br />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          maxVisiblePages={maxVisiblePages}
        />
      </div>
    </div>
  );
}

export default Contact;
