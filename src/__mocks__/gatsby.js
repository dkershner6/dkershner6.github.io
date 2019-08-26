const React = require('react'); // eslint-disable-line @typescript-eslint/no-var-requires
const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName, // eslint-disable-line @typescript-eslint/no-unused-vars
      activeStyle, // eslint-disable-line @typescript-eslint/no-unused-vars
      getProps, // eslint-disable-line @typescript-eslint/no-unused-vars
      innerRef, // eslint-disable-line @typescript-eslint/no-unused-vars
      partiallyActive, // eslint-disable-line @typescript-eslint/no-unused-vars
      ref, // eslint-disable-line @typescript-eslint/no-unused-vars
      replace, // eslint-disable-line @typescript-eslint/no-unused-vars
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
