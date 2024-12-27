import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import About from "./Section/About";
import Services from "./Section/Services";
import Facilities from "./Section/Facilities";
import Newspaper from "./Section/Newspaper";
import HomeFooter from "./HomeFooter";
import Experience from "./Section/Experience";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }
  componentDidMount() {
    // Lắng nghe sự kiện cuộn trên toàn bộ trang
    window.addEventListener("scroll", this.handleScroll);
    console.log("Scroll event listener added on window!");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("Scroll event listener removed");
  }

  handleScroll = () => {
    console.log("window.scrollY:", window.scrollY); // Log vị trí cuộn

    // Kiểm tra nếu cuộn quá 50px
    const isScrolled = window.scrollY > 0;
    console.log("Scrolled position", window.scrollY);
    this.setState({ isScrolled });
    // if (window.scrollY > 50) {
    //   this.setState({ isScrolled: true });
    // } else {
    //   this.setState({ isScrolled: false });
    // }
  };
  render() {
    const { isScrolled } = this.state;
    return (
      <div>
        <Specialty>
          <HomeHeader />
        </Specialty>
        <About />
        <Services />
        <Facilities />
        <Newspaper />
        <Experience />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
