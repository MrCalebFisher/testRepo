function runTest(testValue)
{
  if (testValue) {
    throw "Test Failed";
  }
}

runTest(false);
