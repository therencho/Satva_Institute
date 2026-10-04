import React from "react";
import Card from "./Card";
import data from './data';

const index = () => {
  return (
    <section className="blog" id="blog">
      <p className="section-subtitle">Our Blog</p>

      <h2 className="section-title">Latest Blog & News</h2>

      <div className="blog-grid">
        {data.map((value) => {
          return <Card key={value.id} id={value.id} image={value.image} intro_paragraph={value.intro_paragraph} title={value.blog_title} cal_img={value.cal_img}  date={value.date} comment_img={value.comment_img} comment={value.comment} content={value.content}/>
        })}
      </div>
    </section>
  );
};

export default index;
