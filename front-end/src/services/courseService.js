const API_BASE_URL = 'http://localhost:8080/api';

// Mock data for testing without backend
const mockCourses = [
    {
        id: 1,
        name: "Drug Prevention Basics",
        program: "Health Education",
        status: "Active",
        students: 45,
        createdDate: "2024-01-15",
        description: "Introduction to drug prevention strategies and awareness"
    },
    {
        id: 2,
        name: "Substance Abuse Awareness",
        program: "Public Health",
        status: "Active",
        students: 32,
        createdDate: "2024-01-20",
        description: "Understanding substance abuse and its effects"
    },
    {
        id: 3,
        name: "Mental Health Support",
        program: "Psychology",
        status: "Draft",
        students: 0,
        createdDate: "2024-02-01",
        description: "Supporting mental health in drug prevention"
    },
    {
        id: 4,
        name: "Community Outreach",
        program: "Social Work",
        status: "Active",
        students: 28,
        createdDate: "2024-01-10",
        description: "Community-based drug prevention programs"
    },
    {
        id: 5,
        name: "Youth Education Program",
        program: "Education",
        status: "Active",
        students: 56,
        createdDate: "2024-01-05",
        description: "Drug prevention education for young people"
    }
];

const getAuthToken = () => {
    return localStorage.getItem('token');
};

// Simulate API delay
const simulateApiDelay = (ms = 500) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const courseService = {
    getAllCourses: async () => {
        // Simulate API call with mock data
        await simulateApiDelay();
        
        // Check if user is authenticated (simulate)
        const token = getAuthToken();
        if (!token) {
            throw new Error('Authentication required');
        }
        
        return mockCourses;
    },

    getCourseById: async (id) => {
        await simulateApiDelay();
        
        const token = getAuthToken();
        if (!token) {
            throw new Error('Authentication required');
        }
        
        const course = mockCourses.find(c => c.id === parseInt(id));
        if (!course) {
            throw new Error('Course not found');
        }
        
        return course;
    },

    createCourse: async (courseData) => {
        await simulateApiDelay();
        
        const token = getAuthToken();
        if (!token) {
            throw new Error('Authentication required');
        }
        
        const newCourse = {
            id: mockCourses.length + 1,
            ...courseData,
            students: 0,
            createdDate: new Date().toISOString().split('T')[0],
            status: courseData.status || 'Draft'
        };
        
        mockCourses.push(newCourse);
        return newCourse;
    },

    updateCourse: async (id, courseData) => {
        await simulateApiDelay();
        
        const token = getAuthToken();
        if (!token) {
            throw new Error('Authentication required');
        }
        
        const index = mockCourses.findIndex(c => c.id === parseInt(id));
        if (index === -1) {
            throw new Error('Course not found');
        }
        
        mockCourses[index] = { ...mockCourses[index], ...courseData };
        return mockCourses[index];
    },

    deleteCourse: async (id) => {
        await simulateApiDelay();
        
        const token = getAuthToken();
        if (!token) {
            throw new Error('Authentication required');
        }
        
        const index = mockCourses.findIndex(c => c.id === parseInt(id));
        if (index === -1) {
            throw new Error('Course not found');
        }
        
        mockCourses.splice(index, 1);
        return { success: true, message: 'Course deleted successfully' };
    }
}; 