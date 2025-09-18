import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header/Header";
import Cards from "../Components/Card/Card";

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInfo: [
        {
          id: 1,
          title: "آموزش جامع توسعه وردپرس",
          info: "آموزش وردپرس یکی از بهترین مسیرها برای ورود به دنیای طراحی سایت است، چرا که...",
          img: "./image1.webp",
        },
        {
          id: 2,
          title: "آموزش جامع لینوکس برای",
          info: "لینوکس یک سیستم‌عامل قدرتمند، امن است که در سرورها، توسعه نرم‌افزار، امنیت سایبری...",
          img: "./image2.webp",
        },
        {
          id: 3,
          title: "آموزش پروژه محور NestJS از صفر!",
          info: "NestJS یه فریم‌ورک توسعه سمت سرور وب با TypeScript برای ساخت برنامه‌های مبتنی بر...",
          img: "./image3.webp",
        },
        {
          id: 4,
          title: "آموزش ساخت ربات تلگرام با پایتون",
          info: "آیا به این فکر کرده‌اید که یک دستیار ربات مخصوص خودتان داشته باشید که کارها...",
          img: "./image4.webp",
        },
        {
          id: 4,
          title: "آموزش ساخت ربات تلگرام با پایتون",
          info: "آیا به این فکر کرده‌اید که یک دستیار ربات مخصوص خودتان داشته باشید که کارها...",
          img: "./image4.webp",
        },
        {
          id: 4,
          title: "آموزش ساخت ربات تلگرام با پایتون",
          info: "آیا به این فکر کرده‌اید که یک دستیار ربات مخصوص خودتان داشته باشید که کارها...",
          img: "./image4.webp",
        },
        {
          id: 4,
          title: "آموزش ساخت ربات تلگرام با پایتون",
          info: "آیا به این فکر کرده‌اید که یک دستیار ربات مخصوص خودتان داشته باشید که کارها...",
          img: "./image4.webp",
        },
        {
          id: 4,
          title: "آموزش ساخت ربات تلگرام با پایتون",
          info: "آیا به این فکر کرده‌اید که یک دستیار ربات مخصوص خودتان داشته باشید که کارها...",
          img: "./image4.webp",
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Header></Header>

        <Row>
        {this.state.cardsInfo.map(card=>(
            <Col xs={12} sm={6} md={6} xl={4} xxl={3}>
            <Cards key={card.id} {...card} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
