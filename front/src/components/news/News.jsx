import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/news/news.css";

const News = () => {
  return (
    <main className="news">
      <div className="news_information">
        <div className="information_header">
          <h1>news</h1>
          <div className="information_get_touch">
            <h3>~ All the news of dev world's here</h3>
          </div>
        </div>
        <div className="news_information_main">
          <div className="news_information_posts">
            <Link to="/post/1" className="single_post">
              <h3>Title of the article</h3>
              <p>
                Some text for replace of of the crap that i see in internet, and
                that's crazy…...
              </p>
              <h4>03.12.2021</h4>
            </Link>
            <Link to="/post/1" className="single_post">
              <h3>Title of the article</h3>
              <p>
                Some text for replace of of the crap that i see in internet, and
                that's crazy…...
              </p>
              <h4>03.12.2021</h4>
            </Link>
            <Link to="/post/1" className="single_post">
              <h3>Title of the article</h3>
              <p>
                Some text for replace of of the crap that i see in internet, and
                that's crazy…...
              </p>
              <h4>03.12.2021</h4>
            </Link>
            <Link to="/post/1" className="single_post">
              <h3>Title of the article</h3>
              <p>
                Some text for replace of of the crap that i see in internet, and
                that's crazy…...
              </p>
              <h4>03.12.2021</h4>
            </Link>
          </div>
          <div className="news_information_pagination">
            <div className="news_information_pagination_previous">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <ul className="news_information_pagination_numbers">
              <li>
                <Link to="/" className="active">1</Link>
              </li>
              <li>
                <Link to="/">2</Link>
              </li>
              <li>
                <Link to="/">3</Link>
              </li>
              <li>
                <Link to="/">4</Link>
              </li>
              <li>
                <Link to="/">...</Link>
              </li>
            </ul>
            <div className="news_information_pagination_next">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;
