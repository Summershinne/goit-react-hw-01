import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"
    
export default function FriendList({ friends }) {
    return (
    <ul className={css.listContainer}>
      {friends.map(friend => (
        <li key={friend.id} className={css.listItem}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}