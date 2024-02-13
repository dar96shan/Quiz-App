import quizLogo from "../assets/quiz-Logo.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={quizLogo} alt="Quiz logo image" />
        <h1>Welcome to KK Quiz</h1>
      </header>
    </>
  );
}
