import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import Image from '../../media/img/sliderImage/1.jpg';

import "../../styles/post/post.css";

const Post = () => {
  return (
    <main className="post">
      <div className="btn_returnBack">
        <Link to="/news">
          <FontAwesomeIcon icon={faTimes}/>
        </Link>
      </div>
      <div className="post_information">
        <div className="post_information_header">
          <p>Published in March 03 2021</p>
          <h2>Title of the news</h2>
          <ul className="post_information_header_taglist">
            <li>
              <a href="" className="tag">
                tag
              </a>
            </li>
          </ul>
          <div className="post_information_header_image">
            <figure>
              <img src={Image} alt="image" />
              <figcaption>Just an images</figcaption>
            </figure>
          </div>
        </div>
        <div className="post_information_content">
          <h3>
            From now on, i will put below some lorem ipsum because i don't have
            much inspiration.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi.
          </p>
        </div>
        <div className="post_information_pagination">
          <Link to="/post/1" className="next">
            Next
          </Link>
          <Link to="/post/1" className="previous">
            Previous
          </Link>
        </div>
        <div className="post_information_see_more">
          <div className="top">
            <div className="top_text">
              <h3>About</h3>
              <Link to="/">
                <i className="fas fa-arrow-right"></i> See More
              </Link>
            </div>
            <hr />
          </div>
        </div>
        <div className="post_information_other_post">
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
      </div>
    </main>
  );
};

export default Post;
