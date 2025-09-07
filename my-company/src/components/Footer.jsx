function Footer() {
  const footerStyle = {
    padding: "15px",
    backgroundColor: "#0077cc",
    color: "white",
    textAlign: "center",
    position: "relative",
    bottom: "0",
    width: "100%",
    marginTop: "40px",
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;