import Script from "next/script";

const MainPage: React.FC = () => {
  return (
    <div>
      <Script
        src="http://localhost:3000/nagishli.js?v=2.3"
        defer
        onError={(e) => console.error("Error loading script:", e)}
        onLoad={() => console.log("Nagishli script loaded successfully")}
      ></Script>
    </div>
  );
};

export default MainPage;
