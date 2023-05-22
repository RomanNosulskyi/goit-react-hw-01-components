import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            {isOnline ? (
              <span className={css.online}></span>
            ) : (
              <span className={css.offline}></span>
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export { FriendList };

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
  id: PropTypes.string,
};
