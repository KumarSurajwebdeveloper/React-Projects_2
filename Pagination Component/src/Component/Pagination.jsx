import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagination.css';

const PaginationComponent = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 11; // Number of items to show per page
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]); // Re-run effect when currentPage changes

    const fetchData = async () => {
        try {
            // Simulated API delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Mock API URL (replace with your actual API endpoint)
            const apiUrl = `https://jsonplaceholder.typicode.com/albums?_page=${currentPage}&_limit=${itemsPerPage}`;

            const response = await axios.get(apiUrl);

            // Update items state with fetched data
            setItems(response.data);

            // Extract data and total count of items from response headers
            const totalCount = Number(response.headers['x-total-count']);
            setTotalPages(Math.ceil(totalCount / itemsPerPage));


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = (type) => {
        if (type === 'prev') {
            setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
        } else if (type === 'next') {
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
        }
    };

    return (
        <div>
            <h1>Pagination Component</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div className="btn">
                <button onClick={() => handleClick('prev')} disabled={currentPage === 1} >
                    Previous
                </button>
                <button onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            <p>
                Page {currentPage} of {totalPages}
            </p>
        </div>
    );
};

export default PaginationComponent;


/* The choice between setItems(response.data) and setItems(response) depends on the structure of the API response and how you want to update the state in your React component.

1. Using setItems(response.data)
If the axios response object (response) directly contains the data you want to set as the new state for items, then using setItems(response.data) is appropriate. This assumes that the API response's main data payload is accessed via response.data.

For example, if your API response looks like this:

json
Copy code
{
  "data": [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" },
    { "id": 3, "name": "Item 3" }
  ]
}
You would use setItems(response.data) to update the state with the array of items (data) returned by the API.

2. Using setItems(response)
If you want to store the entire axios response object (response) in the state for some reason (e.g., you need access to the response headers, status, etc.), then you can use setItems(response).

However, it's more common and practical to extract and store only the necessary data from the response (response.data) in the state. This keeps your state clean and focused on the relevant data without unnecessary information.

Choosing the Right Approach
In most cases, using setItems(response.data) is the preferred approach because it updates the state with the actual data fetched from the API endpoint. This approach keeps your state simple and aligned with the specific data you want to manage in your component.

Here's an example of using setItems(response.data) based on a typical API response structure:

javascript
Copy code
const fetchData = async () => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${itemsPerPage}`;
    const response = await axios.get(apiUrl);

    // Update items state with the array of items returned by the API
    setItems(response.data);

    // Extract total count of items from response headers and calculate total pages
    const totalCount = Number(response.headers['x-total-count']);
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    setTotalPages(totalPages);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
In this example, setItems(response.data) updates the items state with the array of items (data) returned by the API, while setTotalPages(totalPages) updates the totalPages state based on the total count of items.

Conclusion
Using setItems(response.data) is typically better and more straightforward for updating the state with fetched data. It helps keep your state focused on the relevant data and simplifies state management within your React component. However, the choice ultimately depends on your specific use case and the structure of the API response you are working with. Adjust accordingly based on your requirements and preferences.   */