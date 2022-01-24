import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

render(<App />);
test("Board Loaded", async () => {
  expect(screen.getByText(/Onboarding tracker/i)).toBeInTheDocument();
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  //Load user test
  await (waitFor(() => screen.getByText('Leanne Graham'),{timeout:10000}));
});

//TODO: We should add more tests for functions