import React from 'react'

import logo from '../../icons/react.svg'

const SiteHeader = ({ handleFilter, count }) => {
  return (
    <section className="main hero ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={logo} />

          <h1 className="title">react.openlist.io</h1>

          <h2 className="subtitle">
            An open source list to help developers learn, explore and create
            React applications.
          </h2>
          {/* <div>
            <input
              id="search-action"
              className="input is-large"
              onChange={handleFilter}
              placeholder="Find (e.g Tutorial, Hooks, Redux)"
            />
          </div> */}
          <a className="button is-large add-action" href="#" target="_blank">
            <i class="fab fa-github" />
            Contribute Material
          </a>
          <p className="mt20">
            Currently listing {count} React learning materials...
          </p>
          <div className="badges">
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20GitHub%20action%20list%20from%20%40boyney123%20https%3A%2F%2Fgithub-actions.netlify.com"
              rel="nofollow"
              target="_blank"
            >
              <img
                className="badges__twitter"
                src="https://camo.githubusercontent.com/c4d1ba0479b8b6b97290be3e5af3effb94266475/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f75726c2f68747470732f6769746875622e636f6d2f6b656e7463646f6464732f72656163742d74657374696e672d6c6962726172792e7376673f7374796c653d736f6369616c"
              />
            </a>
            <a
              href="https://github.com/boyney123/react.openlist.io"
              target="_blank"
            >
              <img
                className="badges__github"
                src="https://img.shields.io/github/stars/boyney123/github-actions.svg?style=social"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteHeader
