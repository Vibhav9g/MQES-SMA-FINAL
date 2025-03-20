// Main JavaScript for School Management System

// Mock Data for Testing
const mockData = {
    students: [
        { id: 'GR001', name: 'Rahul Sharma', class: '10', section: 'A', fatherName: 'Rajesh Sharma', contact: '9876543210' },
        { id: 'GR002', name: 'Priya Patel', class: '9', section: 'B', fatherName: 'Mukesh Patel', contact: '9876543211' },
        { id: 'GR003', name: 'Amit Kumar', class: '8', section: 'A', fatherName: 'Suresh Kumar', contact: '9876543212' },
        { id: 'GR004', name: 'Sneha Gupta', class: '10', section: 'A', fatherName: 'Ramesh Gupta', contact: '9876543213' },
        { id: 'GR005', name: 'Vikram Singh', class: '7', section: 'C', fatherName: 'Harish Singh', contact: '9876543214' }
    ],
    teachers: [
        { id: 'T001', name: 'Anita Desai', subjects: 'Mathematics', classes: '9, 10', contact: '9876543220' },
        { id: 'T002', name: 'Rajiv Malhotra', subjects: 'Science', classes: '8, 9, 10', contact: '9876543221' },
        { id: 'T003', name: 'Sunita Sharma', subjects: 'English', classes: '6, 7, 8', contact: '9876543222' },
        { id: 'T004', name: 'Prakash Joshi', subjects: 'Social Studies', classes: '9, 10', contact: '9876543223' },
        { id: 'T005', name: 'Meena Kumari', subjects: 'Hindi', classes: '6, 7, 8, 9, 10', contact: '9876543224' }
    ],
    classes: [
        { name: '6', sections: ['A', 'B'], classTeacher: 'Meena Kumari', totalStudents: 60, totalBenches: 30 },
        { name: '7', sections: ['A', 'B', 'C'], classTeacher: 'Sunita Sharma', totalStudents: 90, totalBenches: 45 },
        { name: '8', sections: ['A', 'B'], classTeacher: 'Rajiv Malhotra', totalStudents: 70, totalBenches: 35 },
        { name: '9', sections: ['A', 'B'], classTeacher: 'Prakash Joshi', totalStudents: 65, totalBenches: 33 },
        { name: '10', sections: ['A', 'B'], classTeacher: 'Anita Desai', totalStudents: 60, totalBenches: 30 }
    ],
    fees: {
        totalCollection: 1250000,
        classWise: {
            '6': { total: 200000, installments: [
                { name: 'First Term', amount: 10000, dueDate: '2023-06-15' },
                { name: 'Second Term', amount: 10000, dueDate: '2023-09-15' },
                { name: 'Third Term', amount: 10000, dueDate: '2023-12-15' }
            ]},
            '7': { total: 225000, installments: [
                { name: 'First Term', amount: 10000, dueDate: '2023-06-15' },
                { name: 'Second Term', amount: 10000, dueDate: '2023-09-15' },
                { name: 'Third Term', amount: 10000, dueDate: '2023-12-15' }
            ]},
            '8': { total: 245000, installments: [
                { name: 'First Term', amount: 12000, dueDate: '2023-06-15' },
                { name: 'Second Term', amount: 12000, dueDate: '2023-09-15' },
                { name: 'Third Term', amount: 12000, dueDate: '2023-12-15' }
            ]},
            '9': { total: 260000, installments: [
                { name: 'First Term', amount: 15000, dueDate: '2023-06-15' },
                { name: 'Second Term', amount: 15000, dueDate: '2023-09-15' },
                { name: 'Third Term', amount: 15000, dueDate: '2023-12-15' }
            ]},
            '10': { total: 320000, installments: [
                { name: 'First Term', amount: 18000, dueDate: '2023-06-15' },
                { name: 'Second Term', amount: 18000, dueDate: '2023-09-15' },
                { name: 'Third Term', amount: 18000, dueDate: '2023-12-15' }
            ]}
        }
    },
    salary: {
        totalPayments: 750000,
        teachers: {
            'T001': { monthly: 45000, totalPaid: 180000 },
            'T002': { monthly: 42000, totalPaid: 168000 },
            'T003': { monthly: 40000, totalPaid: 160000 },
            'T004': { monthly: 38000, totalPaid: 152000 },
            'T005': { monthly: 35000, totalPaid: 140000 }
        }
    },
    attendance: {
        students: {
            '2023-05-01': {
                'GR001': true,
                'GR002': true,
                'GR003': false,
                'GR004': true,
                'GR005': true
            },
            '2023-05-02': {
                'GR001': true,
                'GR002': false,
                'GR003': true,
                'GR004': true,
                'GR005': true
            }
        },
        teachers: {
            '2023-05-01': {
                'T001': true,
                'T002': true,
                'T003': true,
                'T004': false,
                'T005': true
            },
            '2023-05-02': {
                'T001': true,
                'T002': true,
                'T003': true,
                'T004': true,
                'T005': false
            }
        }
    }
};

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const pages = document.querySelectorAll('.page');
const menuItems = document.querySelectorAll('.sidebar-menu li a');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// Dashboard Elements
const totalStudentsEl = document.getElementById('total-students');
const totalTeachersEl = document.getElementById('total-teachers');
const totalFeeEl = document.getElementById('total-fee');
const totalSalaryEl = document.getElementById('total-salary');

// Student Management Elements
const addStudentBtn = document.getElementById('add-student-btn');
const removeStudentBtn = document.getElementById('remove-student-btn');
const attendanceBtn = document.getElementById('attendance-btn');
const feeBtn = document.getElementById('fee-btn');
const studentTable = document.getElementById('student-table');
const studentSearch = document.getElementById('student-search');

// Teacher Management Elements
const addTeacherBtn = document.getElementById('add-teacher-btn');
const removeTeacherBtn = document.getElementById('remove-teacher-btn');
const teacherAttendanceBtn = document.getElementById('teacher-attendance-btn');
const salaryBtn = document.getElementById('salary-btn');
const teacherTable = document.getElementById('teacher-table');
const teacherSearch = document.getElementById('teacher-search');

// Class Management Elements
const classSelect = document.getElementById('class-select');
const classDetails = document.querySelector('.class-details');
const classTotalStudents = document.getElementById('class-total-students');
const classTotalBenches = document.getElementById('class-total-benches');
const classTeacher = document.getElementById('class-teacher');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// WhatsApp Section Elements
const whatsappNumber = document.getElementById('whatsapp-number');
const saveWhatsappNumber = document.getElementById('save-whatsapp-number');
const sendFeeReminders = document.getElementById('send-fee-reminders');
const notesClass = document.getElementById('notes-class');
const notesMessage = document.getElementById('notes-message');
const notesAttachment = document.getElementById('notes-attachment');
const sendNotes = document.getElementById('send-notes');

// Exam Management Elements
const examClass = document.getElementById('exam-class');
const examName = document.getElementById('exam-name');
const createExamTimetable = document.getElementById('create-exam-timetable');
const sendExamTimetable = document.getElementById('send-exam-timetable');
const sittingExam = document.getElementById('sitting-exam');
const sittingClass = document.getElementById('sitting-class');
const generateSitting = document.getElementById('generate-sitting');

// Leaving Certificate Elements
const lcStudent = document.getElementById('lc-student');
const generateLC = document.getElementById('generate-lc');
const printLC = document.getElementById('print-lc');

// Reports Elements
const reportClass = document.getElementById('report-class');
const generateClassReport = document.getElementById('generate-class-report');
const reportTeacher = document.getElementById('report-teacher');
const generateTeacherReport = document.getElementById('generate-teacher-report');
const feeReportType = document.getElementById('fee-report-type');
const generateFeeReport = document.getElementById('generate-fee-report');
const attendanceReportType = document.getElementById('attendance-report-type');
const attendanceClass = document.getElementById('attendance-class');
const attendanceStudent = document.getElementById('attendance-student');
const attendanceTeacher = document.getElementById('attendance-teacher');
const generateAttendanceReport = document.getElementById('generate-attendance-report');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Dashboard
    initializeDashboard();
    
    // Initialize Student Management
    initializeStudentManagement();
    
    // Initialize Teacher Management
    initializeTeacherManagement();
    
    // Initialize Class Management
    initializeClassManagement();
    
    // Initialize Event Listeners
    initializeEventListeners();
});

// Initialize Dashboard
function initializeDashboard() {
    // Set dashboard values from mock data
    totalStudentsEl.textContent = mockData.students.length;
    totalTeachersEl.textContent = mockData.teachers.length;
    totalFeeEl.textContent = '₹' + mockData.fees.totalCollection.toLocaleString();
    totalSalaryEl.textContent = '₹' + mockData.salary.totalPayments.toLocaleString();
    
    // Initialize Charts
    initializeCharts();
}

// Initialize Charts
function initializeCharts() {
    // Fee Collection Chart
    const feeChartCtx = document.getElementById('fee-chart').getContext('2d');
    const feeChart = new Chart(feeChartCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(mockData.fees.classWise),
            datasets: [{
                label: 'Fee Collection by Class',
                data: Object.values(mockData.fees.classWise).map(item => item.total),
                backgroundColor: 'rgba(52, 152, 219, 0.7)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Attendance Chart
    const attendanceChartCtx = document.getElementById('attendance-chart').getContext('2d');
    const attendanceChart = new Chart(attendanceChartCtx, {
        type: 'line',
        data: {
            labels: Object.keys(mockData.attendance.students),
            datasets: [{
                label: 'Student Attendance',
                data: Object.values(mockData.attendance.students).map(day => {
                    const present = Object.values(day).filter(status => status).length;
                    const total = Object.values(day).length;
                    return (present / total) * 100;
                }),
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 2,
                tension: 0.1
            }, {
                label: 'Teacher Attendance',
                data: Object.values(mockData.attendance.teachers).map(day => {
                    const present = Object.values(day).filter(status => status).length;
                    const total = Object.values(day).length;
                    return (present / total) * 100;
                }),
                backgroundColor: 'rgba(155, 89, 182, 0.2)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 2,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Initialize Student Management
function initializeStudentManagement() {
    // Populate student table
    populateStudentTable();
    
    // Add event listeners for student management buttons
    addStudentBtn.addEventListener('click', function() {
        openModal('add-student-modal');
    });
    
    removeStudentBtn.addEventListener('click', function() {
        alert('Select students to remove from the table');
    });
    attendanceBtn.addEventListener('click', function() {
        openModal('attendance-modal');
        document.getElementById('attendance-type').value = 'student';
        toggleAttendanceForm();
    });
    
    feeBtn.addEventListener('click', function() {
        openModal('fee-management-modal');
    });
    
    // Search functionality
    studentSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredStudents = mockData.students.filter(student => 
            student.id.toLowerCase().includes(searchTerm) ||
            student.name.toLowerCase().includes(searchTerm) ||
            student.class.toLowerCase().includes(searchTerm) ||
            student.section.toLowerCase().includes(searchTerm) ||
            student.fatherName.toLowerCase().includes(searchTerm)
        );
        
        populateStudentTable(filteredStudents);
    });
}

// Populate Student Table
function populateStudentTable(students = mockData.students) {
    const tbody = studentTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.section}</td>
            <td>${student.fatherName}</td>
            <td>${student.contact}</td>
            <td class="actions">
                <button class="btn btn-info btn-sm view-student" data-id="${student.id}"><i class="fas fa-eye"></i></button>
                <button class="btn btn-primary btn-sm edit-student" data-id="${student.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm delete-student" data-id="${student.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Add event listeners to action buttons
    document.querySelectorAll('.view-student').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            viewStudentDetails(studentId);
        });
    });
    
    document.querySelectorAll('.edit-student').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            editStudent(studentId);
        });
    });
    
    document.querySelectorAll('.delete-student').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            deleteStudent(studentId);
        });
    });
}

// Initialize Teacher Management
function initializeTeacherManagement() {
    // Populate teacher table
    populateTeacherTable();
    
    // Add event listeners for teacher management buttons
    addTeacherBtn.addEventListener('click', function() {
        openModal('add-teacher-modal');
    });
    
    removeTeacherBtn.addEventListener('click', function() {
        alert('Select teachers to remove from the table');
    });
    
    teacherAttendanceBtn.addEventListener('click', function() {
        openModal('attendance-modal');
        document.getElementById('attendance-type').value = 'teacher';
        toggleAttendanceForm();
    });
    
    salaryBtn.addEventListener('click', function() {
        alert('Salary management functionality will be implemented here');
    });
    
    // Search functionality
    teacherSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredTeachers = mockData.teachers.filter(teacher => 
            teacher.id.toLowerCase().includes(searchTerm) ||
            teacher.name.toLowerCase().includes(searchTerm) ||
            teacher.subjects.toLowerCase().includes(searchTerm) ||
            teacher.classes.toLowerCase().includes(searchTerm)
        );
        
        populateTeacherTable(filteredTeachers);
    });
}

// Populate Teacher Table
function populateTeacherTable(teachers = mockData.teachers) {
    const tbody = teacherTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    teachers.forEach(teacher => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${teacher.id}</td>
            <td>${teacher.name}</td>
            <td>${teacher.subjects}</td>
            <td>${teacher.classes}</td>
            <td>${teacher.contact}</td>
            <td class="actions">
                <button class="btn btn-info btn-sm view-teacher" data-id="${teacher.id}"><i class="fas fa-eye"></i></button>
                <button class="btn btn-primary btn-sm edit-teacher" data-id="${teacher.id}"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger btn-sm delete-teacher" data-id="${teacher.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Add event listeners to action buttons
    document.querySelectorAll('.view-teacher').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-id');
            viewTeacherDetails(teacherId);
        });
    });
    
    document.querySelectorAll('.edit-teacher').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-id');
            editTeacher(teacherId);
        });
    });
    
    document.querySelectorAll('.delete-teacher').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-id');
            deleteTeacher(teacherId);
        });
    });
}

// Initialize Class Management
function initializeClassManagement() {
    // Populate class select
    populateClassSelect();
    
    // Add event listener for class select
    classSelect.addEventListener('change', function() {
        const selectedClass = this.value;
        if (selectedClass) {
            showClassDetails(selectedClass);
        } else {
            classDetails.style.display = 'none';
        }
    });
    
    // Add event listeners for tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}

// Populate Class Select
function populateClassSelect() {
    classSelect.innerHTML = '<option value="">Select Class</option>';
    
    mockData.classes.forEach(classItem => {
        const option = document.createElement('option');
        option.value = classItem.name;
        option.textContent = `Class ${classItem.name}`;
        classSelect.appendChild(option);
    });
}

// Show Class Details
function showClassDetails(className) {
    const classData = mockData.classes.find(c => c.name === className);
    
    if (classData) {
        classTotalStudents.textContent = classData.totalStudents;
        classTotalBenches.textContent = classData.totalBenches;
        classTeacher.textContent = classData.classTeacher;
        
        // Populate students tab
        populateClassStudents(className);
        
        // Show class details
        classDetails.style.display = 'block';
    }
}

// Populate Class Students
function populateClassStudents(className) {
    const tbody = document.getElementById('class-student-table').querySelector('tbody');
    tbody.innerHTML = '';
    
    const classStudents = mockData.students.filter(student => student.class === className);
    
    classStudents.forEach((student, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.fatherName}</td>
            <td>${student.contact}</td>
            <td class="actions">
                <button class="btn btn-info btn-sm view-student" data-id="${student.id}"><i class="fas fa-eye"></i></button>
                <button class="btn btn-primary btn-sm edit-student" data-id="${student.id}"><i class="fas fa-edit"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Switch Tab
function switchTab(tabId) {
    // Remove active class from all tabs
    tabButtons.forEach(button => button.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Menu toggle
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Page navigation
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navigateToPage(pageId);
            
            // Update active menu item
            menuItems.forEach(menuItem => {
                menuItem.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Modal close buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
    
    // Add Student Form Submission
    document.getElementById('add-student-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addStudent();
    });
    
    // Add Teacher Form Submission
    document.getElementById('add-teacher-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addTeacher();
    });
    
    // Attendance Type Change
    document.getElementById('attendance-type').addEventListener('change', toggleAttendanceForm);
    
    // WhatsApp Number Save
    saveWhatsappNumber.addEventListener('click', function() {
        const number = whatsappNumber.value.trim();
        if (number) {
            alert(`WhatsApp number ${number} saved successfully!`);
        } else {
            alert('Please enter a valid WhatsApp number');
        }
    });
    
    // Send Fee Reminders
    sendFeeReminders.addEventListener('click', function() {
        alert('Fee reminders sent successfully!');
    });
    
    // Send Notes
    sendNotes.addEventListener('click', function() {
        const selectedClass = notesClass.value;
        const message = notesMessage.value.trim();
        
        if (!selectedClass) {
            alert('Please select a class');
            return;
        }
        
        if (!message) {
            alert('Please enter a message');
            return;
        }
        
        alert(`Notes sent to Class ${selectedClass} successfully!`);
    });
    
    // Create Exam Timetable
    createExamTimetable.addEventListener('click', function() {
        const selectedClass = examClass.value;
        const examNameValue = examName.value.trim();
        
        if (!selectedClass) {
            alert('Please select a class');
            return;
        }
        
        if (!examNameValue) {
            alert('Please enter exam name');
            return;
        }
        
        alert(`Exam timetable for ${examNameValue} created successfully!`);
    });
    
    // Generate Sitting Arrangement
    generateSitting.addEventListener('click', function() {
        const selectedExam = sittingExam.value;
        const selectedClass = sittingClass.value;
        
        if (!selectedExam) {
            alert('Please select an exam');
            return;
        }
        
        if (!selectedClass) {
            alert('Please select a class');
            return;
        }
        
        alert(`Sitting arrangement generated successfully!`);
    });
    
    // Leaving Certificate
    lcStudent.addEventListener('change', function() {
        const studentId = this.value;
        if (studentId) {
            document.querySelector('.student-details').style.display = 'block';
        } else {
            document.querySelector('.student-details').style.display = 'none';
        }
    });
    
    generateLC.addEventListener('click', function() {
        alert('Leaving Certificate generated successfully!');
    });
    
    printLC.addEventListener('click', function() {
        alert('Printing Leaving Certificate...');
    });
    
    // Reports
    attendanceReportType.addEventListener('change', function() {
        const reportType = this.value;
        document.querySelector('.attendance-class-select').style.display = 'none';
        document.querySelector('.attendance-student-select').style.display = 'none';
        document.querySelector('.attendance-teacher-select').style.display = 'none';
        
        if (reportType === 'class') {
            document.querySelector('.attendance-class-select').style.display = 'block';
        } else if (reportType === 'student') {
            document.querySelector('.attendance-student-select').style.display = 'block';
        } else if (reportType === 'teacher') {
            document.querySelector('.attendance-teacher-select').style.display = 'block';
        }
    });
    
    // Generate Reports
    generateClassReport.addEventListener('click', function() {
        const selectedClass = reportClass.value;
        if (!selectedClass) {
            alert('Please select a class');
            return;
        }
        
        alert(`Class report generated successfully!`);
        document.getElementById('class-report-container').style.display = 'block';
    });
    
    generateTeacherReport.addEventListener('click', function() {
        const selectedTeacher = reportTeacher.value;
        if (!selectedTeacher) {
            alert('Please select a teacher');
            return;
        }
        
        alert(`Teacher report generated successfully!`);
        document.getElementById('teacher-report-container').style.display = 'block';
    });
    
    generateFeeReport.addEventListener('click', function() {
        const reportType = feeReportType.value;
        alert(`Fee report (${reportType}) generated successfully!`);
        document.getElementById('fee-report-container').style.display = 'block';
    });
    
    generateAttendanceReport.addEventListener('click', function() {
        const reportType = attendanceReportType.value;
        alert(`Attendance report (${reportType}) generated successfully!`);
        document.getElementById('attendance-report-container').style.display = 'block';
    });
}

// Navigate to Page
function navigateToPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show selected page
    document.getElementById(pageId).style.display = 'block';
}

// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Toggle Attendance Form
function toggleAttendanceForm() {
    const attendanceType = document.getElementById('attendance-type').value;
    const studentAttendance = document.querySelector('.student-attendance');
    
    if (attendanceType === 'student') {
        studentAttendance.style.display = 'block';
    } else {
        studentAttendance.style.display = 'none';
    }
}

// View Student Details
function viewStudentDetails(studentId) {
    const student = mockData.students.find(s => s.id === studentId);
    if (student) {
        const detailsContainer = document.querySelector('.student-details-container');
        detailsContainer.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>GR No.:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Section:</strong> ${student.section}</p>
            <p><strong>Father's Name:</strong> ${student.fatherName}</p>
            <p><strong>Contact:</strong> ${student.contact}</p>
        `;
        
        openModal('student-details-modal');
    }
}

// Edit Student
function editStudent(studentId) {
    alert(`Edit student with ID: ${studentId}`);
    // Implementation will be added later
}

// Delete Student
function deleteStudent(studentId) {
    if (confirm(`Are you sure you want to delete student with ID: ${studentId}?`)) {
        // Remove student from mock data
        const index = mockData.students.findIndex(s => s.id === studentId);
        if (index !== -1) {
            mockData.students.splice(index, 1);
            populateStudentTable();
            alert('Student deleted successfully!');
        }
    }
}

// Add Student
function addStudent() {
    const name = document.getElementById('student-name').value.trim();
    const grNo = document.getElementById('student-gr').value.trim();
    const fatherName = document.getElementById('student-father').value.trim();
    const className = document.getElementById('student-class').value;
    const section = document.getElementById('student-section').value;
    const contact = document.getElementById('student-whatsapp').value.trim();
    
    if (!name || !grNo || !fatherName || !className || !contact) {
        alert('Please fill all required fields');
        return;
    }
    
    // Add student to mock data
    mockData.students.push({
        id: grNo,
        name: name,
        class: className,
        section: section,
        fatherName: fatherName,
        contact: contact
    });
    
    // Update student table
    populateStudentTable();
    
    // Close modal and reset form
    closeModal('add-student-modal');
    document.getElementById('add-student-form').reset();
    
    alert('Student added successfully!');
}

// View Teacher Details
function viewTeacherDetails(teacherId) {
    const teacher = mockData.teachers.find(t => t.id === teacherId);
    if (teacher) {
        alert(`Teacher Details:\nID: ${teacher.id}\nName: ${teacher.name}\nSubjects: ${teacher.subjects}\nClasses: ${teacher.classes}\nContact: ${teacher.contact}`);
    }
}

// Edit Teacher
function editTeacher(teacherId) {
    alert(`Edit teacher with ID: ${teacherId}`);
    // Implementation will be added later
}

// Delete Teacher
function deleteTeacher(teacherId) {
    if (confirm(`Are you sure you want to delete teacher with ID: ${teacherId}?`)) {
        // Remove teacher from mock data
        const index = mockData.teachers.findIndex(t => t.id === teacherId);
        if (index !== -1) {
            mockData.teachers.splice(index, 1);
            populateTeacherTable();
            alert('Teacher deleted successfully!');
        }
    }
}

// Add Teacher
function addTeacher() {
    const name = document.getElementById('teacher-name').value.trim();
    const id = document.getElementById('teacher-id').value.trim();
    const subjects = Array.from(document.getElementById('teacher-subjects').selectedOptions).map(option => option.value).join(', ');
    const classes = Array.from(document.getElementById('teacher-classes').selectedOptions).map(option => option.value).join(', ');
    const contact = document.getElementById('teacher-phone').value.trim();
    
    if (!name || !id || !subjects || !classes || !contact) {
        alert('Please fill all required fields');
        return;
    }
    
    // Add teacher to mock data
    mockData.teachers.push({
        id: id,
        name: name,
        subjects: subjects,
        classes: classes,
        contact: contact
    });
    
    // Update teacher table
    populateTeacherTable();
    
    // Close modal and reset form
    closeModal('add-teacher-modal');
    document.getElementById('add-teacher-form').reset();
    
    alert('Teacher added successfully!');
}

// Load Chart.js from CDN
function loadChartJS() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load Chart.js before initializing the application
loadChartJS().then(() => {
    // Initialize the application once Chart.js is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}).catch(error => {
    console.error('Failed to load Chart.js:', error);
    // Initialize the application without charts
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAppWithoutCharts);
    } else {
        initializeAppWithoutCharts();
    }
});

// Initialize App
function initializeApp() {
    initializeDashboard();
    initializeStudentManagement();
    initializeTeacherManagement();
    initializeClassManagement();
    initializeEventListeners();
}

// Initialize App Without Charts
function initializeAppWithoutCharts() {
    // Skip chart initialization
    totalStudentsEl.textContent = mockData.students.length;
    totalTeachersEl.textContent = mockData.teachers.length;
    totalFeeEl.textContent = '₹' + mockData.fees.totalCollection.toLocaleString();
    totalSalaryEl.textContent = '₹' + mockData.salary.totalPayments.toLocaleString();
    
    initializeStudentManagement();
    initializeTeacherManagement();
    initializeClassManagement();
    initializeEventListeners();
}