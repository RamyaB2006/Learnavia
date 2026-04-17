// API Configuration
const isDev = import.meta.env.VITE_USE_DEV_API === 'true';

export const API_BASE_URL = isDev 
  ? import.meta.env.VITE_API_URL_DEV || 'http://localhost:5000'
  : import.meta.env.VITE_API_URL_PROD || 'https://learnavia-backend-git.vercel.app';

export const ML_SERVICE_URL = isDev
  ? import.meta.env.VITE_ML_URL_DEV || 'http://127.0.0.1:8000'
  : import.meta.env.VITE_ML_URL_PROD || 'https://your-ml-render-url.com';

// API Endpoints
export const API_ENDPOINTS = {
  // Student endpoints
  student: {
    register: `${API_BASE_URL}/student/register`,
    login: `${API_BASE_URL}/student/login`,
    getStudent: `${API_BASE_URL}/student/get-student`,
    getAllStudents: `${API_BASE_URL}/student/get-all-students`,
    addPortfolio: `${API_BASE_URL}/student/add-portfolio`,
    savePortfolioDetails: `${API_BASE_URL}/student/save-portfolio-details`,
  },

  // Activity endpoints
  activities: {
    add: `${API_BASE_URL}/activities/add`,
    getAll: `${API_BASE_URL}/activities/getAll`,
    remove: `${API_BASE_URL}/activities/remove`,
  },

  // Faculty endpoints
  faculty: {
    register: `${API_BASE_URL}/faculty/register`,
    login: `${API_BASE_URL}/faculty/login`,
    getAll: `${API_BASE_URL}/faculty/get-all`,
    changeStatus: `${API_BASE_URL}/faculty/change-status`,
    addFeedback: `${API_BASE_URL}/faculty/add-feedback`,
    getAllStudents: `${API_BASE_URL}/faculty/getAllStudents`,
  },

  // Admin endpoints
  admin: {
    login: `${API_BASE_URL}/admin/login`,
    getAllStudents: `${API_BASE_URL}/admin/getAllStudents`,
    getAllFaculty: `${API_BASE_URL}/admin/getAllFaculty`,
    deleteStudent: `${API_BASE_URL}/admin/delete-student`,
    deleteFaculty: `${API_BASE_URL}/admin/delete-faculty`,
  },

  // ML Service endpoints
  ml: {
    generatePortfolio: `${ML_SERVICE_URL}/generate_portfolio`,
    recommendations: `${ML_SERVICE_URL}/recommendations`,
  },
};
