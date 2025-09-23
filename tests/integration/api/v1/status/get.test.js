test('get to /api/v1/status should return 200', async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  
  const responseBody = await response.json()
  
  expect(responseBody.updated_at).toBeDefined();
  
  expect(responseBody.dependencies.database.version).toBeDefined();
  
  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  
  expect(responseBody.dependencies.database.used_connections).toBeDefined();

  expect(response.status).toBe(200);
})