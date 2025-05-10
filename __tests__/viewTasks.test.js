const { viewSubmittedTasks } = require('../src/viewTasks');

describe('viewSubmittedTasks', () => {
  test('should return submitted tasks for a true studentID', () => {
    const result = viewSubmittedTasks('SIT707_9.1P');
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('taskName');
    expect(result[0]).toHaveProperty('submissionDate');
    expect(result[0]).toHaveProperty('feedbackStatus');
  });

  test('should return empty list for wrong studentID', () => {
    const result = viewSubmittedTasks('NOT FOUND');
    expect(result).toEqual([]);
  });
});
