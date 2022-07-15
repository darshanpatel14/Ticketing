const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

LandingPage.getInitialProps = () => {
  console.log("i am on server");
  return { color: "red" };
};
