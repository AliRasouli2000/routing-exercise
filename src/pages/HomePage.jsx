import "./HomePage.css";
import NavigateBackButton from "../components/NavigateBackButton";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h2>Welcome to the Cosmic Encyclopedia</h2>
      <p>
        Discover the wonders of the universe through our extensive collection of
        articles, images, and interactive content about space, planets, stars,
        and more.
      </p>
      <NavigateBackButton />
    </div>
  );
}
