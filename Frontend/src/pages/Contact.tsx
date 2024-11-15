import { useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";

type Props = {}

interface ContactData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

function Contact({ }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");

  const contactData: ContactData[] = [
    { _id: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890", address: "123 Main St" },
    { _id: "2", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", address: "456 Oak St" },
    { _id: "3", name: "Sam Wilson", email: "sam@example.com", phone: "555-123-4567", address: "789 Pine St" },
    { _id: "4", name: "Lucy Brown", email: "lucy@example.com", phone: "555-987-6543", address: "101 Maple St" },

  ];

  const filteredContacts = contactData.filter((contact) => {
    const searchValueLower = searchValue.toLowerCase().trim();
    return (
      contact.name.toLowerCase().startsWith(searchValueLower) ||
      contact.email.toLowerCase().startsWith(searchValueLower) ||
      contact.phone.toLowerCase().startsWith(searchValueLower) ||
      contact.address.toLowerCase().startsWith(searchValueLower)
    );
  });

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
        A manual journal is a handwritten ledger entry for recording financial transactions, typically for adjustments not processed automatically
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
        <div className="overflow-x-auto mt-5 max-h-[25rem] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <table className="min-w-full bg-white">
            <thead className="text-[12px] text-center text-dropdownText">
              <tr style={{ backgroundColor: "#F0FDF0" }}>
                {tableHeaders.map((heading, index) => (
                  <th className="py-3 px-4 font-medium border-b text-[#495160]  text-xs border-[#EAECF0]" key={index}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-dropdownText text-center text-[13px]">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((item, index) => (
                  <tr key={item._id} className="text-[#4B5C79] text-sm">
                    <td className="py-3 px-4 border-y border-[#EAECF0]">{index + 1}</td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">{item.name}</td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">{item.phone}</td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">{item.address}</td>
                    <td className="py-3 px-4 border-y border-[#EAECF0]">{item.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-6 px-4 text-center">No contacts found !</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
