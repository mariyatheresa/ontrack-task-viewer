function viewSubmittedTasks(studentId) {
    const fakeDB = {
      'SIT707_9.1P': [
        { taskName: 'Task 1', submissionDate: '2025-04-10', feedbackStatus: 'Reviewed' },
        { taskName: 'Task 2', submissionDate: '2025-04-15', feedbackStatus: 'Pending' }
      ]
    };
    return fakeDB[studentId] || [];
  }
  
  module.exports = { viewSubmittedTasks };
  