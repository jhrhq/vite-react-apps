const data = {
  categories: [
    {
      id: "8ca2e7a2-1b2a-4fc9-805c-cd06a9d33b97",
      name: "To Do",
    },
    {
      id: "e2b80a8a-c480-47ea-9e29-d486ba3346eb",
      name: "In Progress",
    },
    {
      id: "f579035f-e79d-4bc4-b35d-66223261c267",
      name: "Done",
    },
    {
      id: " ed101dd9-c6e3-4057-ac5c-d7549b32c716",
      name: "Revise",
    },
  ],

  tasks: [
    {
      id: crypto.randomUUID(),
      description: "Prepare proctor for client meeting",
      duedate: "2024-02-20",
      assignedto: "Alice Smith",
      designation: "Project Manager",
      category_id: "8ca2e7a2-1b2a-4fc9-805c-cd06a9d33b97",
      created_at: "2024-10-20T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
    },
    {
      id: crypto.randomUUID(),
      description: "Prepare proctor for client meeting",
      duedate: "2024-02-20",
      assignedto: "Bob Johnson",
      designation: "Business Analyst",
      category_id: "8ca2e7a2-1b2a-4fc9-805c-cd06a9d33b97",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
    },
    {
      id: crypto.randomUUID(),
      description: "Prepare proctor for client meeting",
      duedate: "2024-02-20",
      assignedto: "Carol Davis",
      designation: "Developer",
      category_id: "e2b80a8a-c480-47ea-9e29-d486ba3346eb",
      created_at: "2024-01-20T10:00:00Z",
      updated_at: "2024-01-20T10:00:00Z",
    },
    {
      id: crypto.randomUUID(),
      description: "Make Promotional Ads for Instagram fasto's",
      duedate: "2024-02-20",
      assignedto: "David Brown",
      designation: "Marketing Specialist",
      category_id: "f579035f-e79d-4bc4-b35d-66223261c267",
      created_at: "2024-01-25T10:00:00Z",
      updated_at: "2024-01-25T10:00:00Z",
    },
    {
      id: crypto.randomUUID(),
      description: "Revise Promotional Ads for Instagram fasto's",
      duedate: "2024-02-20",
      assignedto: "Eva Green",
      designation: "Content Writer",
      category_id: "ed101dd9-c6e3-4057-ac5c-d7549b32c716",
      created_at: "2024-01-28T10:00:00Z",
      updated_at: "2024-01-28T10:00:00Z",
    },
  ],
};

function getAllProjectTasks() {
  return data;
}

export { getAllProjectTasks };
