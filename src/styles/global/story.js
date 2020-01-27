import React from 'react';
import { storiesOf } from '@storybook/react';
import Styleguide from 'Utilities/styleguide';

storiesOf('Global/Typography', module)
    .add('h1-h6', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                h1
            </Styleguide.Caption>
            <h1>Heading 1</h1>
            <Styleguide.Caption mt2 mb1>
                h2
            </Styleguide.Caption>
            <h2>Heading 2</h2>
            <Styleguide.Caption mt2 mb1>
                h3
            </Styleguide.Caption>
            <h3>Heading 3</h3>
            <Styleguide.Caption mt2 mb1>
                h4
            </Styleguide.Caption>
            <h4>Heading 4</h4>
            <Styleguide.Caption mt2 mb1>
                h5
            </Styleguide.Caption>
            <h5>Heading 5</h5>
            <Styleguide.Caption mt2 mb1>
                h6
            </Styleguide.Caption>
            <h6>Heading 6</h6>
        </Styleguide>
    ))
    .add('blockquote, cite, q', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                blockquote
            </Styleguide.Caption>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                <p>
                    Words can be like X-rays, if you use them properly – they’ll
                    go through anything. You read and you’re pierced.
                </p>
            </blockquote>
            <Styleguide.Caption mt2 mb1>
                cite
            </Styleguide.Caption>
            <cite>— Aldous Huxley, Brave New World</cite>
            <Styleguide.Caption mt2 mb1>
                q
            </Styleguide.Caption>
            <p>
                <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
                    I’m sorry, Dave. I’m afraid I can’t do that.
                </q>
            </p>
        </Styleguide>
    ))
    .add('dl, dd, dt', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                dl, dd, dt
            </Styleguide.Caption>
            <dl>
                <dt>HTML</dt>
                <dd>
                    HyperText Markup Language describes the structure of the
                    page and its contents.
                </dd>
                <dt>CSS</dt>
                <dd>
                    Cascading Style Sheets describes how a site looks and even
                    to some extent how it responds to certain events.
                </dd>
                <dt>JavaScript</dt>
                <dd>
                    JavaScript is the programming language used to define the
                    logic and function of a site beyond simple look and feel.
                    Any computation or “thinking” is done using JavaScript.
                </dd>
            </dl>
        </Styleguide>
    ))
    .add('hr', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                hr
            </Styleguide.Caption>
            <hr />
        </Styleguide>
    ))
    .add('ul, ol, li', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                ul, li
            </Styleguide.Caption>
            <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
            </ul>
            <Styleguide.Caption mt2 mb1>
                ol, li
            </Styleguide.Caption>
            <ol>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
            </ol>
        </Styleguide>
    ))
    .add('p', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                p
            </Styleguide.Caption>
            <p>
                Lorem ipsum dolor amet viral blue bottle master cleanse, four
                loko knausgaard twee la croix. Hammock green juice you probably
                haven’t heard of them banjo fixie. Offal raw denim squid flannel
                poke, kogi fam tofu actually. Offal selfies thundercats
                gochujang raclette cloud bread, raw denim locavore. Humblebrag
                90’s pabst keffiyeh narwhal tousled. Cliche aesthetic artisan
                tacos mlkshk, sustainable freegan mixtape tattooed whatever.
                Church-key iceland tousled gentrify crucifix la croix, venmo
                distillery.
            </p>
            <p>
                Man braid taiyaki vaporware, squid tilde hot chicken cronut
                hexagon next level photo booth fingerstache sustainable edison
                bulb cornhole tacos. Keytar stumptown roof party hashtag,
                lumbersexual yuccie hexagon whatever four dollar toast 8-bit
                shabby chic DIY photo booth. Portland tilde chartreuse mustache
                air plant chia. Single-origin coffee venmo pinterest hoodie tbh
                scenester. Chia skateboard green juice kickstarter, glossier
                cardigan food truck. Ugh kickstarter XOXO dreamcatcher celiac
                iPhone small batch post-ironic migas trust fund.
            </p>
        </Styleguide>
    ))
    .add('strong, em', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                strong
            </Styleguide.Caption>
            <p>
                <strong>Viral blue bottle master cleanse</strong>
            </p>
            <Styleguide.Caption mt2 mb1>
                em
            </Styleguide.Caption>
            <p>
                <em>Man braid taiyaki vaporware</em>
            </p>
        </Styleguide>
    ));

storiesOf('Global/Media', module)
    .add('img, figure, figcaption', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                img, figure, figcaption
            </Styleguide.Caption>
            <figure>
                <img src="https://source.unsplash.com/random" alt="Tree frog" />
                <figcaption>
                    Simple embedding for{' '}
                    <a href="https://unsplash.com">Unsplash</a> photos. For a
                    more advanced integration, see{' '}
                    <a href="https://unsplash.com/developers">Unsplash API</a>.
                </figcaption>
            </figure>
        </Styleguide>
    ))
    .add('picture, source', () => (
        <Styleguide>
            <Styleguide.Caption mt mb1>
                picture, source
            </Styleguide.Caption>
            <picture>
                <source
                    srcSet="https://source.unsplash.com/random/800x600"
                    media="(min-width: 800px)"
                />
                <source
                    srcSet="https://source.unsplash.com/random/600x400"
                    media="(min-width: 600px)"
                />
                <img src="https://source.unsplash.com/random/" />
            </picture>
        </Styleguide>
    ))
    .add('video, source', () => (
        <Styleguide>
            <Styleguide.Caption mt mb1>
                video, source
            </Styleguide.Caption>
            <video controls>
                <source
                    src="https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4d/Wikipedia_Edit_2014.webm/Wikipedia_Edit_2014.webm.480p.vp9.webm"
                    type="video/webm"
                />
                Sorry, your browser doesn’t support embedded videos.
            </video>
        </Styleguide>
    ));

storiesOf('Global/Interactive', module)
    .add('a', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                a
            </Styleguide.Caption>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
                HTML anchor element
            </a>
        </Styleguide>
    ))
    .add('button', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                button
            </Styleguide.Caption>
            <button>Button</button>
        </Styleguide>
    ));

storiesOf('Global/Table', module)
    .add('table', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                table
            </Styleguide.Caption>
            <table>
                <caption>List of vegetables and fruits in stock.</caption>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Asparagus</th>
                        <td>1 bunch</td>
                        <td>Fridge</td>
                    </tr>
                    <tr>
                        <th scope="row">Broccoli</th>
                        <td>2 bunches</td>
                        <td>Fridge</td>
                    </tr>
                    <tr>
                        <th scope="row">Cabbage</th>
                        <td>2 heads</td>
                        <td>Basket</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Total number</th>
                        <td colSpan="2">3</td>
                    </tr>
                </tfoot>
            </table>
        </Styleguide>
    ))
    .add('caption', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                caption
            </Styleguide.Caption>
            <table>
                <caption>List of vegetables and fruits in stock.</caption>
            </table>
        </Styleguide>
    ));

storiesOf('Global/Form', module)
    .add('form', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                form, label, input, textarea
            </Styleguide.Caption>
            <form>
                <div style={{ marginTop: '3.2rem' }}>
                    <label>Name:</label>
                    <input type="text" placeholder="e.g. Jake the Dog" />
                </div>
                <div style={{ marginTop: '3.2rem' }}>
                    <label>E-mail:</label>
                    <input
                        type="email"
                        placeholder="e.g. jake@adventuretime.com"
                    />
                </div>
                <div style={{ marginTop: '3.2rem' }}>
                    <label>Message:</label>
                    <textarea placeholder="What is your message?" />
                </div>
            </form>
        </Styleguide>
    ))
    .add('input', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                input
            </Styleguide.Caption>
            <React.Fragment>
                <form>
                    <label>Type: color</label>
                    <input type="color" />
                    <label>Type: date</label>
                    <input type="date" />
                    <label>Type: datetime</label>
                    <input type="datetime" />
                    <label>Type: datetime-local</label>
                    <input type="datetime-local" />
                    <label>Type: email</label>
                    <input type="email" />
                    <label>Type: month</label>
                    <input type="month" />
                    <label>Type: number</label>
                    <input type="number" />
                    <label>Type: password</label>
                    <input type="password" />
                    <label>Type: search</label>
                    <input type="search" />
                    <label>Type: tel</label>
                    <input type="tel" />
                    <label>Type: text</label>
                    <input type="text" />
                    <label>Type: time</label>
                    <input type="time" />
                    <label>Type: url</label>
                    <input type="url" />
                    <label>Type: week</label>
                    <input type="week" />
                </form>
                <form>
                    <input type="radio" id="radio" name="input" />
                    <label htmlFor="radio">Type: radio</label>
                </form>
                <form>
                    <input type="checkbox" id="checkbox" name="input" />
                    <label htmlFor="checkbox">Type: checkbox</label>
                </form>
            </React.Fragment>
        </Styleguide>
    ))
    .add('textarea', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                textarea
            </Styleguide.Caption>
            <form>
                <textarea />
            </form>
        </Styleguide>
    ))
    .add('select, option', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                textarea
            </Styleguide.Caption>
            <form>
                <select id="pet-select">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </form>
        </Styleguide>
    ))
    .add('fieldset, legend', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                fieldset, legend
            </Styleguide.Caption>
            <form>
                <fieldset>
                    <legend>Legend</legend>

                    <input type="radio" id="picard" name="captain" />
                    <label htmlFor="picard">Option 1</label>
                    <br />

                    <input type="radio" id="sisko" name="captain" />
                    <label htmlFor="sisko">Option 2</label>
                    <br />

                    <input type="radio" id="janeway" name="captain" />
                    <label htmlFor="janeway">Option 3</label>
                </fieldset>
            </form>
        </Styleguide>
    ));
