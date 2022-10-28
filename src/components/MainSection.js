import React from "react";
import Share from "../assets/share.png";
import ShareMobile from "../assets/share-mobile.png";
import Slack from "../assets/slack.svg";
import Github from "../assets/github.svg";
const LinkSection = () => {
  return (
    <section>
      <a href="https://twitter.com/taofeek_ob" id="btn_twitter">
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a href="https://books.zuri.team" id="books">
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=taofeek"
        id="book_python"
      >
        Python Books
      </a>
      <a href="https://background.zuri.team/" id="pitch">
        Background Check for Coders
      </a>
      <a href="https://books.zuri.team/design-rules" id="book_design">
        Design Books
      </a>
    </section>
  );
};

const Social = () => {
  return (
    <div className="social">
      <img src={Slack} alt="slack" />
      <img src={Github} alt="github" />
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="content">
      <main>
        <div className="profile">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1666899155015-d33935023d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="profile"
              id="profile__img"
            />
          </div>
          <div className="cta">
            <img src={Share} alt="Share-icon" />
            <img src={ShareMobile} alt="share-icon" />
          </div>

          <div className="profile-links">
            <span id="twitter">@taofeek_ob</span>
            <span id="slack">Taofeek</span>
          </div>
        </div>

        <LinkSection />
      </main>
      <Social />
    </div>
  );
};

export default MainSection;
