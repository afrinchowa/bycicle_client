import { Layout, Menu, Button, Carousel, Card, Row, Col, Space } from "antd";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            BikeRider
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/product">Product Details</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/Contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/login">Login</Link>
            </Menu.Item>
       
          </Menu>
        </div>
      </Header>

      <Content style={{ padding: "20px" }}>
        <Carousel autoplay>
          <div>
            <img
              src="https://imgur.com/200ZtE1"
              alt="Bike 1"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
            <div className="overlay">
              <h1>Find The Perfect Bicycle</h1>
              <Button type="primary">Shop Now</Button>
            </div>
          </div>
          <div>
            <img
              src="./pics/feinschliff-5eio61-mru0-unsplash.jpg"
              alt="Bike 2"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
            <div className="overlay">
              <h1>Explore New Models</h1>
              <Button type="primary">Shop Now</Button>
            </div>
          </div>
        </Carousel>

        <div style={{ marginTop: "40px" }}>
          <h2>Featured Bicycles</h2>
          <Row gutter={16}>
            {[1, 2, 3, 4, 5, 6].map((bike) => (
              <Col span={8} key={bike}>
                <Card
                  hoverable
                  cover={<img alt="example" src={`./img/bike${bike}.jpg`} />}
                >
                  <Card.Meta
                    title={`Bicycle Model ${bike}`}
                    description="Brand, Price, Category"
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <Link to="/all-bicycles">
            <Button type="link">View All</Button>
          </Link>
        </div>

        <div
          style={{ marginTop: "40px", background: "#f5f5f5", padding: "20px" }}
        >
          <h2>Testimonials</h2>
          <p>"Best bicycles, great prices!" - Happy Customer</p>
          <p>"A wide range of models to choose from." - Satisfied Buyer</p>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "20px", margin: "0 10px" }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={{ fontSize: "20px", margin: "0 10px" }} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined style={{ fontSize: "20px", margin: "0 10px" }} />
          </a>
        </div>
        <p>© 2025 Totpor Bicycle Store</p>
      </Footer>
    </Layout>
  );
};

export default HomePage;
