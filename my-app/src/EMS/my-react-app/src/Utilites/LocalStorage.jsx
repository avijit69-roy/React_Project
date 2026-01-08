// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e1@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    'tasks': [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create UI for login page using Tailwind",
        taskDate: "2025-12-18",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Header Bug",
        taskDescription: "Resolve alignment issue in header",
        taskDate: "2025-12-15",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate login API",
        taskDate: "2025-12-14",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "e2@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    'tasks': [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard layout",
        taskDate: "2025-12-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Initialize Vite + React project",
        taskDate: "2025-12-10",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for login",
        taskDate: "2025-12-12",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "e3@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    'tasks': [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee CRUD",
        taskDescription: "Create employee add/edit form",
        taskDate: "2025-12-20",
        category: "CRUD"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design DB schema",
        taskDate: "2025-12-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deployment",
        taskDescription: "Deploy app to server",
        taskDate: "2025-12-13",
        category: "DevOps"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "e4@e.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 4
    },
    'tasks': [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDescription: "Build sidebar navigation",
        taskDate: "2025-12-21",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsiveness bugs",
        taskDate: "2025-12-16",
        category: "CSS"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDescription: "Improve page load speed",
        taskDate: "2025-12-14",
        category: "Optimization"
      }
    ]
  },
  {
    id: 5,
    firstName: "Suresh",
    email: "e5@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    'tasks': [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation",
        taskDate: "2025-12-22",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate code",
        taskDate: "2025-12-17",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Feedback",
        taskDescription: "Incorporate client feedback",
        taskDate: "2025-12-15",
        category: "Client"
      }
    ]
  }
];


const admin = [{
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}]


export const setLocalStorage = () => {

  // Storing data in localStorage
  // Converting JavaScript objects to JSON strings
  localStorage.setItem("employeesData", JSON.stringify(employees));
  localStorage.setItem("AdminData", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  // Retrieving data from localStorage
  const employeesData = localStorage.getItem("employeesData");
  const adminData = localStorage.getItem("AdminData");

  // Parsing the JSON strings back to JavaScript objects
  const employee = JSON.parse(employeesData);
  const admin = JSON.parse(adminData);
  return { employee, admin };

}