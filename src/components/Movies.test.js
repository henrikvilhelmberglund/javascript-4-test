import { render, screen } from "@testing-library/react";
import Movies from "./movies";

describe("Movies component", () => {
  it("should have heading stating populära filmer", () => {
    // Arrange
    render(<Movies />);

    // Act
    const heading = screen.getByRole("heading", /populära filmer/i);

    // Assert
    expect(heading).toBeInTheDocument();
  });

  describe("should have a button for adding favorites", () => {
    it("says gör till favorit", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      expect(button).toBeInTheDocument();
    });

    it("has a red background color", () => {
      render(<Movies />);
      const button = screen.getByRole("button", { name: /gör till favorit/i });
      expect(button).toHaveStyle({ backgroundColor: "red" });
    });
  });
});

// kan också göra

// it("should have a button stating gör till favorit with red background color", () => {
//   render(<Movies />);
//   const button = screen.getByRole("button", { name: /gör till favorit/i });
//   expect(button).toBeInTheDocument();
//   expect(button).toHaveStyle({ backgroundColor: "red"})
// });
