import React from "react";

const Table = ({ data, query }) => {
  const highlightText = (text, query) => {
    if (!query.trim()) {
      return text;
    }
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr>
              <td dangerouslySetInnerHTML={{ __html: highlightText(item.first_name, query) }} />
            <td dangerouslySetInnerHTML={{ __html: highlightText(item.last_name, query) }} />
            <td dangerouslySetInnerHTML={{ __html: highlightText(item.email, query) }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
