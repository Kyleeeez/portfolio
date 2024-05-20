/* fake imports just for running eslint on a "real" React component */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import cx from 'classnames';
import { CalendarDayPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import getPhrase from '../utils/getPhrase';
import { BLOCKED_MODIFIER, DAY_SIZE } from '../../constants';

const Link = ({ children, href, target }) => (
  <a href={href} target={target}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default class CalendarDay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidUpdate(prevProps) {
    const { isFocused, tabIndex } = this.props;
    if (tabIndex === 0) {
      if (isFocused || tabIndex !== prevProps.tabIndex) {
        this.buttonRef.focus();
      }
    }
  }

  onDayClick(day, e) {
    const { onDayClick } = this.props;
    onDayClick(day, e);
  }

  onDayMouseEnter(day, e) {
    const { onDayMouseEnter } = this.props;
    onDayMouseEnter(day, e);
  }

  onDayMouseLeave(day, e) {
    const { onDayMouseLeave } = this.props;
    onDayMouseLeave(day, e);
  }

  render() {
    const {
      day,
      daySize,
      isOutsideDay,
      modifiers,
      renderDay,
      tabIndex,
      phrases: { chooseAvailableDate, dateIsUnavailable },
    } = this.props;

    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    if (!day) return <td />;

    const className = cx(
      'CalendarDay',
      {
        'CalendarDay--outside': isOutsideDay,
      },
      Array.from(modifiers, (mod) => `CalendarDay--${mod}`)
    );

    const formattedDate = `${day.format('dddd')}, ${day.format('LL')}`;

    let ariaLabel = getPhrase(chooseAvailableDate, {
      date: formattedDate,
    });

    if (BLOCKED_MODIFIER in modifiers && modifiers[BLOCKED_MODIFIER](day)) {
      ariaLabel = getPhrase(dateIsUnavailable, { date: formattedDate });
    }

    const daySizeStyles = {
      width: daySize,
      height: daySize - 1,
    };

    return (
      <>
        <a href="http://any/ref" target="_blank" rel="noreferrer">
          {/* should raise an error: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
          link
        </a>
        <Link href="http://any/ref" target="_blank" rel="noreferrer">
          {/* should raise an error: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md */}
          link
        </Link>
        <td className={className} style={daySizeStyles}>
          <button
            type="button"
            ref={(ref) => {
              this.buttonRef = ref;
            }}
            className="CalendarDay__button"
            aria-label={ariaLabel}
            onMouseEnter={(e) => {
              this.onDayMouseEnter(day, e);
            }}
            onMouseLeave={(e) => {
              this.onDayMouseLeave(day, e);
            }}
            onMouseUp={(e) => {
              e.currentTarget.blur();
            }}
            onClick={(e) => {
              this.onDayClick(day, e);
            }}
            tabIndex={tabIndex}
          >
            {renderDay ? renderDay(day) : day.format('D')}
          </button>
        </td>
      </>
    );
  }
}

CalendarDay.propTypes = {
  day: momentPropTypes.momentObj,
  daySize: PropTypes.number,
  isOutsideDay: PropTypes.bool,
  modifiers: PropTypes.instanceOf(Set),
  isFocused: PropTypes.bool,
  tabIndex: PropTypes.oneOf([0, -1]),
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  renderDay: PropTypes.func,

  // internationalization
  phrases: PropTypes.shape(getPhrasePropTypes(CalendarDayPhrases)),
};

CalendarDay.defaultProps = {
  day: moment(),
  daySize: DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick() {},
  onDayMouseEnter() {},
  onDayMouseLeave() {},
  renderDay: null,

  // internationalization
  phrases: CalendarDayPhrases,
};
