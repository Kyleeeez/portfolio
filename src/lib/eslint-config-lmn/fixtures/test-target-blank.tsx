/* fake imports just for running eslint on a "real" React component */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { ViewHotel } from '../../view/hotel/ViewHotel';

// should raise ERROR @typescript-eslint/no-unused-vars

export const Hotel: React.FC<{
  viewHotel: ViewHotel;
}> = () => {
  const dynamicLink = 'https://google.com';

  return (
    <>
      <a href="http://any/ref" target="_blank" rel="noreferrer">
        {/* should raise an error: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
        link
      </a>
      <a href={dynamicLink} target="_blank" rel="noreferrer">
        {/* should raise an error: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
        link
      </a>
      <a href="https://any/ref" target="_blank" rel="noopener noreferrer">
        {/* should raise an error: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
        link
      </a>
    </>
  );
};
