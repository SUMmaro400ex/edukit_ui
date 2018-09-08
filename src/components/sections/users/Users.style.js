export const styles = {
  wrapper: {
    width: "100%",
    display: "grid",
    gridTemplateRows: "80px 1fr"
  },
  title: {
    color: "#455A64",
    flex: 1
  },
  heading: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    background: "white",
    borderBottom: "1px solid #455A64",
    flexDirection: "row-reverse",
    justifyContent: "flex-end"
  },
  search: {
    marginLeft: "1rem",
    marginTop: 13,
    marginRight: 50
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 300px"
  },
  userStats: {
    background: "white"
  },
  userCards: {
    overflow: "scroll"
  }
};
